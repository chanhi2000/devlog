import * as sqlite3 from "sqlite3"

const db = new sqlite3.Database('/db.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS yt_channels (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      channel_id TEXT NOT NULL,
      name TEXT NOT NULL,
      url_profile TEXT,
      url_banner TEXT
    )`, errCallback(err));
    db.run(`CREATE TABLE IF NOT EXISTS yt_vids (
      id TEXT NOT NULL,
      title TEXT,
      date_published TEXT NOT NULL,
    )`, errCallback(err));
  }
})

const errCallback = (err = {message: ''}) => {
  console.error('Error creating table:', err.message);
};

export default db