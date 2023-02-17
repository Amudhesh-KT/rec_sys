# Importing necessary libraries

#AMudhesh test for git

import uvicorn

from fastapi import FastAPI,File,UploadFile,Form
import pickle
import pandas as pd
import base64
# from fastapi import jsonify

from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Request,Response
from fastapi.encoders import jsonable_encoder

import json

# from hashing import Hash
# from jwttoken import create_access_token
# from oauth import get_current_user
# from fastapi.security import OAuth2PasswordRequestForm
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



@app.get('/')
async def index():
    return {'message':'hello, world'}

@app.get('/welcome')
async def welcome():
    return {'message':'Welcome, Mate!'}

@app.get('/rec')
async def recom():
    # pivot_df_1 = pd.read_csv('pivot_df (1).csv')
    # preds_df_1 = pd.read_csv('preds_df (1).csv')

    def recommend_items_user(userID):
        pivot_df =pivot_df_1
        preds_df = preds_df_1 
        num_recommendations = 5
        # index starts at 0  
        user_idx = userID-1 
        # Get and sort the user's ratings
        sorted_user_ratings = pivot_df.iloc[user_idx].sort_values(ascending=False)
        print("Im sorted user ratings \n")
        print("HELLO TEST GIT SYNC")
        print(sorted_user_ratings.head(5))
        # sorted_user_ratings.to_json('demo.json')
        #sorted_user_ratings
        sorted_user_predictions = preds_df.iloc[user_idx].sort_values(ascending=False)
        # sorted_user_predictions.to_json('demo2.json')

        print("\n")
        print("Im sorted user predictions \n")
        print(sorted_user_predictions.head(5))
        #sorted_user_predictions
        temp = pd.concat([sorted_user_ratings, sorted_user_predictions], axis=1)
        # temp.to_json('demo',orient='records')
        print("\n")
        print("Im temp \n")
        print(temp.head(5))
        temp.index.name = 'Recommended Items'
        temp.columns = ['user_ratings', 'user_predictions']
        print("\n")
        print('\n')
        print("temp of user ratings")
        print("\n")
        print('\n')
        print(temp.user_ratings)
        print(temp.info())
        print("Im temp after assigning cols \n")
        # temp.user_ratings = temp.user_ratings.astype(float)
        print(temp.head(5))
        # temp.to_csv('demo')
        temp = temp.loc[temp.user_ratings == 0]  
        print("\n")
        print("after filtering user ratings as 0 \n")
        print(temp.head(5))
        temp = temp.sort_values('user_predictions', ascending=False)
        print("\n")
        print("Im temp after sorting \n")
        print(temp.head(5))
        print('\nBelow are the recommended items for user(user_id = {}):\n'.format(userID))
        
        # print(temp.head(num_recommendations))

        rec_df = temp.head(num_recommendations)
        rec_df.reset_index(inplace=True)
        rec_list = rec_df.values.tolist()
        print(rec_list)

        print("\n line break")

        
        rec_proudcts=[]
        for i in range(5):
            rec_proudcts.append(rec_list[i][0])
            # print(rec_list[i][0])
        # print(rec_proudcts)
        print("\n")

        # return temp.head(num_recommendations)  
        return rec_proudcts

     
    rec = recommend_items_user(5)
    print("\n List of recommended products inside the function \n")
    print(rec)



    # rec.reset_index(inplace=True)
    # print(type(rec))
    
    # rec_list = rec.values.tolist()
    # print("\n")
    # print(rec_list)


    # print("\n List of recommended products \n")
    # rec_proudcts=[]
    # for i in range(5):
    #     rec_proudcts.append(rec_list[i][0])
       
    # print(rec_proudcts)
    # print("\n")

    return {"message":"Go back and see to your recommendations"}

@app.post("/login")
async def login(request:Request):

    collection = db["UserData"]

    data=await request.json()
    user_name =data["username"]
    pass_word = data["password"]
    print(user_name)
    print(pass_word)
    user = collection.find_one({"username":user_name})
    # print(user['username'])
    # print(user['password'])
    # print("Im printing userid")
    print(user['id'])

    if (user['password'] == pass_word):
            flag = True
            user_id = user['id']
            print("login success")
        
    def recommend_items_user(userID):
        pivot_df =pivot_df_1
        preds_df = preds_df_1 
        num_recommendations = 5
        # index starts at 0  
        user_idx = userID-1 
        # Get and sort the user's ratings
        sorted_user_ratings = pivot_df.iloc[user_idx].sort_values(ascending=False)
        # print("Im sorted user ratings \n")
        # print(sorted_user_ratings.head(5))
        # sorted_user_ratings.to_json('demo.json')
        #sorted_user_ratings
        sorted_user_predictions = preds_df.iloc[user_idx].sort_values(ascending=False)
        # sorted_user_predictions.to_json('demo2.json')

        # print("\n")
        # print("Im sorted user predictions \n")
        # print(sorted_user_predictions.head(5))
        #sorted_user_predictions
        temp = pd.concat([sorted_user_ratings, sorted_user_predictions], axis=1)
        # temp.to_json('demo',orient='records')
        # print("\n")
        # print("Im temp \n")
        # print(temp.head(5))
        temp.index.name = 'Recommended Items'
        temp.columns = ['user_ratings', 'user_predictions']
        # print("\n")
        # print('\n')
        # print("temp of user ratings")
        # print("\n")
        # print('\n')
        # print(temp.user_ratings)
        # print(temp.info())
        # print("Im temp after assigning cols \n")
        # temp.user_ratings = temp.user_ratings.astype(float)
        # print(temp.head(5))
        # temp.to_csv('demo')
        temp = temp.loc[temp.user_ratings == 0]  
        # print("\n")
        # print("after filtering user ratings as 0 \n")
        # print(temp.head(5))
        temp = temp.sort_values('user_predictions', ascending=False)
        # print("\n")
        # print("Im temp after sorting \n")
        # print(temp.head(5))
        # print('\nBelow are the recommended items for user(user_id = {}):\n'.format(userID))
        
        # print(temp.head(num_recommendations))

        rec_df = temp.head(num_recommendations)
        rec_df.reset_index(inplace=True)
        rec_list = rec_df.values.tolist()
        print(rec_list)

        # print("\n line break")

        
        rec_proudcts=[]
        for i in range(5):
            rec_proudcts.append(rec_list[i][0])
            # print(rec_list[i][0])
        # print(rec_proudcts)
        # print("\n")

        # return temp.head(num_recommendations)  
        return rec_proudcts
    
    rec = recommend_items_user(user['id'])
    # print("\n List of recommended products inside the function \n")
    # print(rec)

    db["RecList"].insert_one({
        "User_ID": user['id'],
        "rec_list": rec                                 
    })
    # resp = jsonify("user inputs added succesfully")
    # resp.status_code = 200

    # print(resp.status_code)

    # return resp

    return {"username": user_name, "password": pass_word, "UserID": user['id'] }

@app.post('/register')
async def create_user(request: Request):
	# hashed_pass = Hash.bcrypt(request.password)
	user_object = await request.json()
    # print(request.json())
	# user_object["password"] = request.password
    # user_object["userid"] =  db["UserData"].count_documents({}) + 1
    
	user_id = db["UserData"].insert_one(
        {
        "id": db["UserData"].count_documents({}) + 1,
        "email_id":user_object["email_id"],
        "username": user_object["username"],
        "password": user_object["password"],
        # "confirmpassword":user_object["confirmpassword"]
        }
        )
	print(user_object['email_id'])
	return {"res":"created"}




""" ********************************* GET REQUEST ****************
userId = req**************************************** """
@app.get('/reclist/')
async def Recommmendation_list(userId:int):
    # userId = request.path_params.get('userId')
    
    record = db["RecList"].find_one({"User_ID":userId })
    
    json_list = jsonable_encoder(record['rec_list'])
    
    
    # loop for product iteration 
    a = []
    for i in json_list:
        details = db["Product1"].find_one({"Product_ID":i})
        a.append({
            "product_id":details["Product_ID"],
            "product_name":details["Product_name"],
            "product_img": details["str_base64"],
            "Product_price": details["Product_description"],
            "Product_description": (details["Product_price"].strip())
        })


        
    
    # return {"rec_list":json_list,"userid": userId} 
    # print(a)

    
    return a

@app.get('/pop_list')
async def pop_model():
    pop_list_df = df.groupby('productId').agg({'userId': 'count'}).reset_index()
    pop_list_df.rename(columns = {'userId': 'score'},inplace=True)
    # print(pop_list_df.head(5))

    
    pop_final_df = pop_list_df.sort_values(['score', 'productId'], ascending = [0,1]).head(5)
    # print(type(pop_final_df))
    # print(pop_final_df.head(5))

    
    pop_final_df.reset_index(inplace=True)
    pop_final_list = pop_final_df.values.tolist()
    print(pop_final_list)

    pop_rec_product_list = []
    for i in range(5):
        pop_rec_product_list.append(pop_final_list[i][1])                   

    print(pop_rec_product_list)



    return pop_rec_product_list




""" ********************************* GET REQUEST ******************************************************** """



# posting images in mongo db

@app.post("/readimg") 
def imageReader(product_id: str,imgfile:UploadFile=File()):
    # product_id = product_id
    filename = imgfile.filename
    # print(filename) 
    imgbytes = base64.b64encode(imgfile.file.read()) 
    imgstr = str(imgbytes,"utf-8") 

    Product_Img = db["ProductImg"].insert_one(
        {
        
        "str_base64":imgstr,
        "Product_ID": product_id,
        
         
        }
        )
	

    print(imgstr)
    print(filename)
    return "hello"


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)