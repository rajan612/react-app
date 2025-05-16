from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector
import os

app = FastAPI()

class SurveyResponse(BaseModel):
    response: dict

def get_db_connection():
    return mysql.connector.connect(
        host=os.getenv("MYSQL_HOST", "mysql"),
        user=os.getenv("MYSQL_USER", "root"),
        password=os.getenv("MYSQL_PASSWORD", "password"),
        database=os.getenv("MYSQL_DATABASE", "surveydb")
    )

@app.post("/responses")
def save_response(survey_response: SurveyResponse):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO responses (response) VALUES (%s)", (str(survey_response.response),))
    conn.commit()
    cursor.close()
    conn.close()
    return {"status": "success"}

@app.get("/responses")
def get_responses():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM responses ORDER BY submitted_at DESC")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    return {"responses": rows}
