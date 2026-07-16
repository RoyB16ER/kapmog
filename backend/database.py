import sqlite3

DB_FILE = "movies.db"

def init_db():
    # Establishes a connection to the SQLite database file
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # Create a table for local movie data overrides/additions
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS local_movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT UNIQUE NOT NULL,
            smoking_status TEXT NOT NULL -- 'smoking', 'no smoking', or 'unknown'
        )
    ''')
    
    # Hardcoded list of movies
    seed_data = [
        ("pulp fiction", "smoking"),
        ("black panther", "no smoking"),
        ("inception", "unknown")
    ]
    
    for title, status in seed_data:
        try:
            cursor.execute(
                "INSERT INTO local_movies (title, smoking_status) VALUES (?, ?)", 
                (title, status)
            )
        except sqlite3.IntegrityError:
            # Prevents crashes if the movie already exists in the DB
            pass
            
    conn.commit()
    conn.close()

if __name__ == "__main__":
    init_db()
    print("SQLite Database initialized and seeded!")