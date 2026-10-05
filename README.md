# 🧪 CYBERLAB

> Interactive cybersecurity lab for solving challenges, analyzing evidence, and learning security concepts.

---

## 🚀 Version 2.1 — Database

V2.1 introduces MariaDB database integration and connects the PHP backend to persistent mission data.

### Added

* MariaDB database
* `missions` table
* `questions` table
* Mission/question relationship
* Prepared Statements
* Server-side score calculation
* PHP ↔ MariaDB integration
* Database SQL backup

---

## 🏗️ Architecture

```text
Browser
   │
   ├── HTML / CSS
   └── JavaScript
          │
          ▼
        PHP
          │
          ▼
       MariaDB
          │
     ┌────┴────┐
     ▼         ▼
 missions   questions
```

### Mission Flow

```text
Mission
   ↓
Question
   ↓
mission_id
   ↓
PHP
   ↓
Database
   ↓
Correct Answer
   ↓
Score
```

---

## 🔐 Database Security

Database queries use **Prepared Statements** instead of directly building SQL queries with user input.

```text
prepare()
   ↓
bind_param()
   ↓
execute()
```

The backend also handles the final score calculation using database values.

---

## 🛠️ Technologies

* HTML
* CSS
* JavaScript
* PHP 8.2
* MariaDB
* XAMPP
* phpMyAdmin
* Git / GitHub

---

## 📁 Project Structure

```text
CyberLab/
│
├── index.html
├── missions.html
├── mission.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── php/
│   ├── config.php
│   └── submit.php
│
├── database/
│   └── cyberlab.sql
│
└── README.md
```

---

## ⚙️ Setup

1. Install XAMPP.
2. Start Apache and MariaDB.
3. Place CyberLab inside:

```text
C:\xampp82\htdocs\CyberLab
```

4. Import:

```text
database/cyberlab.sql
```

into phpMyAdmin.

5. Open:

```text
http://localhost/CyberLab/
```

---

## 📌 Current Status

```text
V1.0  → Interactive Mission Foundation      ✅
V2.0  → PHP Backend                         ✅
V2.1  → Database Integration                ✅
V2.2  → User Registration                   ⬜
V2.3  → Login + Sessions                    ⬜
```

---

## 🗺️ Roadmap

```text
V2.2 → User Registration
V2.3 → Login + Sessions
V2.4 → Logout + Protected Pages
V2.5 → User Progress
V2.6 → Persistent XP
V2.7 → User Dashboard
V3.0 → Learning System
V4.0 → Python Security Engine
V5.0 → Security Tools
```

---

## 👤 Author

**Hamza Weslati**

GitHub: `localbtstudio-tech`
