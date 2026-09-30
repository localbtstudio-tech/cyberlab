# 🛡️ CYBERLAB

<p align="center">
  <strong>Interactive Cybersecurity Missions</strong><br>
  Investigate evidence. Analyze incidents. Solve cybersecurity challenges.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-V2.0-111111?style=for-the-badge">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white">
</p>

---

## ◼︎ About

**CYBERLAB** is an interactive cybersecurity learning platform built around practical investigation missions.

Users analyze evidence, answer questions, use hints, and earn XP based on their performance.

The project is developed progressively, introducing new technologies only when they have a practical purpose.

---

# ✦ V2.0 — PHP Backend Foundation

V2.0 introduces the first **Backend layer** to CYBERLAB.

### V1

```text
Browser
   ↓
JavaScript
   ↓
Answer Validation
```

### V2.0

```text
Browser
   ↓
JavaScript
   ↓
fetch()
   ↓
PHP
   ↓
Validate Answer
   ↓
JSON
   ↓
JavaScript
```

The main goal of V2.0 is learning practical **Client → Server communication**.

---

# ⚙️ V2.0 Features

* PHP backend with `submit.php`
* JavaScript `fetch()`
* HTTP `POST` requests
* PHP `$_POST`
* JSON responses
* Server-side answer validation
* Frontend mission interaction
* Hint system
* XP calculation
* Responsive design

### Answer Flow

```text
User Answer
     ↓
fetch()
     ↓
POST / php/submit.php
     ↓
PHP Validation
     ↓
JSON Response
     ↓
Update UI
```

The correct answer is now stored in PHP instead of being exposed in the JavaScript validation logic.

---

# 🧪 Mission System

Current missions:

| #  | Category          | Mission            | Difficulty |  XP |
| -- | ----------------- | ------------------ | ---------- | --: |
| 01 | Log Analysis      | Suspicious Login   | Easy       | 100 |
| 02 | Threat Detection  | Hidden IOC         | Medium     | 250 |
| 03 | Incident Response | Compromised Server | Hard       | 500 |

### Mission Flow

```text
MISSION
   ↓
SCENARIO
   ↓
EVIDENCE
   ↓
QUESTION
   ↓
ANSWER
   ↓
VALIDATION
   ↓
XP
   ↓
COMPLETED
```

---

# 💡 Hint & XP System

The mission supports up to **2 hints**.

```text
0 Hints → 100 XP
1 Hint  →  75 XP
2 Hints →  50 XP
```

After successful completion:

```text
Submit → Disabled
Input  → Disabled
Hints  → Disabled
```

---

# 🛠️ Technologies

| Technology | Purpose                       |
| ---------- | ----------------------------- |
| HTML5      | Structure                     |
| CSS3       | UI & Responsive Design        |
| JavaScript | Frontend interaction          |
| PHP        | Server-side validation        |
| HTTP POST  | Client → Server communication |
| JSON       | Server → Client responses     |

### Not implemented yet

```text
MySQL
Database
Register / Login
Sessions
User Dashboard
Persistent XP
Persistent Progress
```

---

# 📂 Project Structure

```text
CYBERLAB/
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
│   └── submit.php
│
└── README.md
```

---

# 🧩 Architecture

```text
                 CYBERLAB V2.0

┌──────────────┐
│   Browser    │
│ HTML/CSS/JS  │
└──────┬───────┘
       │
       │ POST
       ▼
┌──────────────┐
│     PHP      │
│ submit.php   │
└──────┬───────┘
       │
       │ JSON
       ▼
┌──────────────┐
│ JavaScript   │
│  Update UI   │
└──────────────┘
```

---

# 🚀 Run Locally

V2.0 requires a PHP-enabled server.

With **XAMPP**, place the project inside:

```text
xampp/
└── htdocs/
    └── CyberLab/
```

Start **Apache**, then open the project through the local server.

```text
http://localhost/CyberLab/
```

> Opening `index.html` directly with `file://` will not provide the PHP backend required by V2.0.

---

# 📊 Current Status

```text
V1.0
├── HTML                ✅
├── CSS                 ✅
├── Responsive          ✅
├── JavaScript          ✅
├── Missions            ✅
├── Evidence            ✅
├── Answers             ✅
├── Hints               ✅
└── XP                  ✅

V2.0
├── PHP                 ✅
├── fetch()             ✅
├── POST                ✅
├── JSON                ✅
└── Server Validation   ✅

V2.1
└── MySQL               ⬜
```

**Current Version: V2.0 — PHP Backend Foundation**

---

# 🗺️ Roadmap

```text
V1.0
Interactive Frontend
      │
      ▼
V2.0  ← CURRENT
PHP Backend
POST + fetch() + JSON
      │
      ▼
V2.1
MySQL + Database
      │
      ▼
V2.2
Authentication
Register / Login / Sessions
      │
      ▼
V2.3
User Dashboard
XP + Mission Progress
      │
      ▼
V3
Learning System
      │
      ▼
V4
Python Security Engine
      │
      ▼
V5+
Advanced Security Tools & Missions
```

---

# 🧠 Why CYBERLAB?

CYBERLAB is a long-term learning project combining:

```text
Web Development
       +
Backend Development
       +
Secure Coding
       +
Cybersecurity
```

The goal is to gradually transform a simple frontend prototype into a complete cybersecurity learning platform.

---

# 👨‍💻 Author

<p align="center">
  <strong>Hamza Weslati</strong><br>
  IT Student · Web Developer · Software Development
</p>

<p align="center">
  <a href="https://github.com/localbtstudio-tech">GitHub</a>
  •
  <a href="https://www.linkedin.com/in/hamza-weslati-9a99a8419/">LinkedIn</a>
  •
  <a href="https://localbtstudio-tech.github.io/Portfolio/">Portfolio</a>
</p>

---

<p align="center">
  <strong>CYBERLAB V2.0</strong><br>
  Learn. Investigate. Build.
</p>
