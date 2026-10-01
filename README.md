# 🔐 CYBERLAB

### Interactive Cybersecurity Learning Platform

CYBERLAB is an interactive cybersecurity learning platform built around practical investigation missions.

The project is designed as a learning environment where cybersecurity concepts are implemented through **Frontend, Backend, Databases, and Security practices**.

---

## 🚀 V2.1 — Database

V2.1 introduces **MariaDB** and connects the PHP backend to a real database.

### Added

* 🗄️ MariaDB database with XAMPP
* 📋 `missions` table
* ❓ `questions` table
* 🔗 Relationship between missions and questions
* 🔐 Prepared Statements
* 🧮 Server-side score calculation
* 💾 Database SQL backup
* 🔌 PHP ↔ MariaDB connection

---

## 🧩 Mission System

Each mission is stored in the database with information such as:

```text
Mission
├── ID
├── Title
├── Category
├── Difficulty
├── Points
└── Hint Penalty
```

Questions are connected to missions through `mission_id`.

```text
Mission
   ↓
Question
   ↓
Correct Answer
   ↓
PHP Validation
   ↓
Final Score
```

---

## 🔐 Security

CYBERLAB uses **Prepared Statements** for database queries instead of directly inserting user input into SQL statements.

The backend uses:

```text
prepare()
bind_param()
execute()
```

This provides a safer foundation for future database features.

---

## 🧮 Server-Side Score

Score calculation was moved from JavaScript to PHP.

```text
points
   +
hint_penalty
   +
hints_used
        ↓
      PHP
        ↓
   Final Score
```

Example:

```text
100 XP → No hints
 75 XP → 1 hint
 50 XP → 2 hints
```

The server now controls the final result instead of relying entirely on the client.

---

## 🛠️ Technologies

| Layer           | Technologies            |
| --------------- | ----------------------- |
| Frontend        | HTML · CSS · JavaScript |
| Backend         | PHP 8.2                 |
| Database        | MariaDB                 |
| Server          | Apache · XAMPP          |
| Database Tool   | phpMyAdmin              |
| Communication   | Fetch API · POST · JSON |
| Security        | Prepared Statements     |
| Version Control | Git · GitHub            |

---

## 📁 Project Structure

```text
CYBERLAB/
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

## 🏗️ Architecture

```text
Browser
   │
   ▼
JavaScript
   │
   │ fetch() / POST
   ▼
PHP
   │
   ▼
MariaDB
   │
   ├── missions
   └── questions
   │
   ▼
PHP Validation
   │
   ▼
JSON Response
   │
   ▼
JavaScript
   │
   ▼
Final Score
```

---

## ▶️ Run Locally

CYBERLAB currently runs through **XAMPP**.

Place the project inside:

```text
C:\xampp82\htdocs\CyberLab
```

Start:

```text
Apache
MariaDB
```

Then open:

```text
http://localhost/CyberLab/
```

Import the database using:

```text
phpMyAdmin
→ Import
→ database/cyberlab.sql
```

---

## 📊 Current Status

```text
CYBERLAB V2.1
│
├── Frontend              ✅
├── JavaScript            ✅
├── PHP Backend           ✅
├── Fetch / POST / JSON   ✅
├── MariaDB               ✅
├── Missions Database     ✅
├── Questions Database    ✅
├── Prepared Statements   ✅
├── Server-side Score     ✅
└── User System           ⬜
```

---

## 🛣️ Roadmap

```text
V1.0  → Interactive Missions              ✅
V2.0  → PHP Backend Foundation            ✅
V2.1  → MariaDB Database                  ✅
V2.2  → Users + Register                  🚧
V2.3  → Login + Sessions                  ⬜
V2.4  → Progress + XP                     ⬜
V2.5  → User Dashboard                    ⬜
```

---

## 🎯 Project Goal

CYBERLAB is being developed as a practical learning project to combine:

**Software Development + Web Development + Databases + Cybersecurity**

The goal is to progressively transform a simple interactive mission into a complete cybersecurity learning platform.

---

## 👤 Author

**Hamza Weslati**

IT Student · Software Development · Cybersecurity Learner

[GitHub](https://github.com/localbtstudio-tech)
