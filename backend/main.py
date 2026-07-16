from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

# Allow my GitHub Pages URL to make requests to this API
origins = [
    "http://localhost:5173",
    "https://royb16er.github.io",
]

# Enable CORS for web development
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_FILE = "movies.db"

@app.get("/api/movies/status")
def get_smoking_status(title: str):
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # Perform a case-insensitive check against your SQLite database
    cursor.execute(
        "SELECT smoking_status FROM local_movies WHERE LOWER(title) = LOWER(?)", 
        (title,)
    )
    result = cursor.fetchone()
    conn.close()
    
    if result:
        return {"title": title, "smoking_status": result[0]}
    
    # Fallback to "unknown" if the movie isn't in your SQLite file
    return {"title": title, "smoking_status": "unknown"}

if __name__ == "__main__":
    import uvicorn
    # Start the web server
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)