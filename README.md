````markdown
# 🧪 CYBERLAB

> Interactive cybersecurity lab for solving challenges, analyzing evidence, and learning security concepts.

---

## 🚀 Version 2.3 — Authentication

V2.3 adds user authentication and PHP sessions.

### Added

- User Registration
- User Login
- Password hashing with `password_hash()`
- Password verification with `password_verify()`
- PHP Sessions
- Session ID regeneration
- Protected authentication flow
- JSON-based responses
- MySQL/MariaDB integration

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
````

### Authentication Flow

```text
Register
   ↓
users table
   ↓
Login
   ↓
password_verify()
   ↓
Session
   ↓
Authenticated User
```

---

## 🛠️ Technologies

* HTML
* CSS
* JavaScript
* PHP 8.2
* MariaDB
* XAMPP
* Git / GitHub

---

## 📁 Project Structure

```text
CyberLab/
│
├── index.html
├── missions.html
├── mission.html
├── register.html
├── login.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   └── register.js
│   └── login.js
│
├── php/
│   ├── config.php
│   ├── submit.php
│   ├── register.php
│   └── login.php
│
└── database/
    └── cyberlab.sql
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
V2.2  → User Registration                   ✅
V2.3  → Login + Sessions                    ✅
```

---

## 🗺️ Roadmap

```text
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

````

### Git

بما أنك عدّلت عدة ملفات في هذه النسخة، استخدم:

```bash
git status
````

ثم:

```bash
git add .
```

ثم الـcommit message الذي أنصح به:

```bash
git commit -m "Add login and session authentication"
```

ثم:

```bash
git push
```

في GitHub سيكون التاريخ واضحًا:

```text
V1
 ↓
V2.0 PHP Backend
 ↓
V2.1 Database
 ↓
V2.2 Registration
 ↓
V2.3 Login + Sessions
```
