
import uvicorn

from fastapi import FastAPI,File,UploadFile,Form
import pickle
import pandas as pd
import base64

from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Request,Response
from fastapi.encoders import jsonable_encoder

import json


from pymongo import MongoClient
import urllib

# connection string for mongoDB

mongodb_uri = 'mongodb+srv://Amudhesh_KT:' + \
    urllib.parse.quote('Amudhesh@78') + \
            '@recommendationsystem.bst8vqw.mongodb.net/test'
port = 8000
client = MongoClient(mongodb_uri, port)
db = client["RecommendationSystem"]


# Initializing the fast API server

app = FastAPI()

origins = ["http://localhost.tiangolo.com",
"https://localhost.tiangolo.com",
"http://localhost",
"http://localhost:8000",
"http://localhost:3000",]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)

pivot_df_1 = pd.read_csv('pivot_df.csv')
preds_df_1 = pd.read_csv('preds_df.csv')

df = pd.read_csv('electronics_trim.csv')


#defining the model inputs

class User(BaseModel):
    username: str
    company: str
    password: str
    email: str
    userID: str
    category:str
    productid:str

@app.on_event("startup")
async def startup_event():
    # You can also print a message to confirm that the function has been called
    print("Application startup complete!")

    app.state.pop_resp = await pop_model();

    
@app.get('/')
async def index():
    return {'message':'hello, world'}

@app.get('/welcome')
async def welcome():
    return {'message':'Welcome, Mate!'}


@app.get('/login')
async def login(username:str,password:str):

    collection = db["UserData"]
    user = collection.find_one({"username":username})
    print(user['username'])
    print(user['password'])
    print(user['id'])

    def recommend_items_user(userID):
        pivot_df =pivot_df_1
        preds_df = preds_df_1 
        num_recommendations = 5
        # index starts at 0  
        user_idx = userID-1 
        # Get and sort the user's ratings
        sorted_user_ratings = pivot_df.iloc[user_idx].sort_values(ascending=False)
        sorted_user_predictions = preds_df.iloc[user_idx].sort_values(ascending=False)

        temp = pd.concat([sorted_user_ratings, sorted_user_predictions], axis=1)

        temp.index.name = 'Recommended Items'
        temp.columns = ['user_ratings', 'user_predictions']

        temp = temp.loc[temp.user_ratings == 0]  

        temp = temp.sort_values('user_predictions', ascending=False)

        rec_df = temp.head(num_recommendations)
        rec_df.reset_index(inplace=True)
        rec_list = rec_df.values.tolist()
               
        rec_proudcts=[]
        for i in range(5):
            rec_proudcts.append(rec_list[i][0])

        # print(rec_proudcts)
        return rec_proudcts

    if (user['password'] == password):
            
            # user_id = user['id']
            print("login success")
            rec = recommend_items_user(user['id'])

            db["RecList"].insert_one({
            "User_ID": user['id'],
            "rec_list": rec                                 
            })       
    
    else:
            return {"res": "fail"} 

    return {"username": username, "password": password, "id": user['id'], "res":"pass"}
     

@app.post('/register')
async def create_user(request: Request):

	user_object = await request.json()
    
	user_id = db["UserData"].insert_one(
        {
        "id": db["UserData"].count_documents({}) + 1,
        "email_id":user_object["email_id"],
        "username": user_object["username"],
        "password": user_object["password"],
        
        }
        )
	print(user_object['email_id'])
	return {"res":"created"}




""" ********************************* GET REQUEST ****************
userId = req**************************************** """
@app.get('/reclist')
async def Recommmendation_list(userId:int):
    # userId = request.path_params.get('userId')
    
    print("im inside reclist")
    record = db["RecList"].find_one({"User_ID":userId })
 
    json_list = jsonable_encoder(record['rec_list'])
    
    # loop for product iteration 
    a = []
    for i in json_list:
        details = db["ProductData"].find_one({"Product_ID":i})
        a.append({
            "product_id":details["Product_ID"],
            "product_name":details["Product_name"],
            "product_img": details["str_base64"],
            "Product_price": details["Product_price"],
            "Product_description": details["Product_description"].strip(),
            "Product_category": details["Product_Category"],
            "Product_ratings": details["Rating"]
        })


        
    
    # return {"rec_list":json_list,"userid": userId} 
    # print(a)

    
    return a

#endpoint for popular product recommendation
@app.get('/pop_list')
async def pop_model():
    pop_list_df = df.groupby('productId').agg({'userId': 'count'}).reset_index()
    pop_list_df.rename(columns = {'userId': 'score'},inplace=True)

    pop_final_df = pop_list_df.sort_values(['score', 'productId'], ascending = [0,1]).head(5)

    pop_final_df.reset_index(inplace=True)
    pop_final_list = pop_final_df.values.tolist()
    # print(pop_final_list)

    pop_rec_product_list = []
    for i in range(5):
        pop_rec_product_list.append(pop_final_list[i][1])
                       

    # print(pop_rec_product_list)

    #loop for product iteration 
    poplist = []
    for i in pop_rec_product_list:
        details = db["ProductData"].find_one({"Product_ID":i})
        
        poplist.append({
            "product_id":details["Product_ID"],
            "product_name":details["Product_name"],
            "product_img": details["str_base64"],
            "Product_price": details["Product_price"],
            "Product_description": details["Product_description"].strip(),
            "Product_category": details["Product_Category"],
            "Product_ratings": details["Rating"]
        })


    
    return poplist


@app.get('/product_list')
async def product_list(category:str):

    print(category)
    
    a=[]
    for x in db['ProductData'].find({"Product_Category":category}):
                a.append({
            "product_id":x["Product_ID"],
            "product_name":x["Product_name"],
            "product_img": x["str_base64"],
            "product_price": x["Product_price"],
            "Product_description": x["Product_description"].strip(),
            "Product_category": x["Product_Category"],
            "Product_ratings": x["Rating"]
        })
    
    

    return a


#get request for product
@app.get('/productview')
async def product_view(productid:str):
    a=[]
    for x in db['ProductData'].find({"Product_ID":productid}):
                a.append({
            "product_id":x["Product_ID"],
            "product_name":x["Product_name"],
            "product_img": x["str_base64"],
            "product_price": x["Product_price"],
            "Product_description": x["Product_description"].strip(),
            "Product_category": x["Product_Category"],
            "Product_ratings": x["Rating"]
        })
                
    print(a)


    return a

# testing endpoint
@app.get('/pop_resp')
async def pop_response():
    
    return app.state.pop_resp


""" ********************************* GET REQUEST ******************************************************** """

# posting images in mongo db

# @app.post("/readimg") 
# def imageReader(product_id: str,imgfile:UploadFile=File()):
#     # product_id = product_id
#     filename = imgfile.filename
#     # print(filename) 
#     imgbytes = base64.b64encode(imgfile.file.read()) 
#     imgstr = str(imgbytes,"utf-8") 

#     Product_Img = db["ProductImg"].insert_one(
#         {
        
#         "str_base64":imgstr,
#         "Product_ID": product_id,
        
         
#         }
#         )
	

#     print(imgstr)
#     print(filename)
#     return "hello"


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)