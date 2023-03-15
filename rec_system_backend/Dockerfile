FROM python:3.10.8

RUN pip install --upgrade pip

RUN apt-get update -qq

WORKDIR /app

ENV FLASK_APP=app.py 

ENV FLASK_ENV=development

COPY ./requirements.txt .

COPY ./tokenizers /root/nltk_data/tokenizers

COPY ./corpora /root/nltk_data/corpora

RUN pip install -r requirements.txt

EXPOSE 8500

COPY . .

CMD ["uvicorn", "app:app", "--host", "0.0.0.0","--port","8500"]

