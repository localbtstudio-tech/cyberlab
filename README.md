# 🛡️ CYBERLAB

<p align="center">
  <strong>Interactive Cybersecurity Missions</strong><br>
  Investigate evidence. Analyze incidents. Solve cybersecurity challenges.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-V1.0-111111?style=for-the-badge">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Status-V1%20Complete-111111?style=for-the-badge">
</p>

---

## ◼︎ About

**CYBERLAB** is an interactive cybersecurity learning platform built around practical missions.

Instead of simply reading cybersecurity theory, users investigate evidence, answer questions, use hints, and receive XP based on their performance.

The project is being developed progressively, with each version introducing new technologies and cybersecurity concepts for a specific reason.

### Current V1 Focus

```text
Mission
   ↓
Scenario
   ↓
Evidence
   ↓
Question
   ↓
Answer
   ↓
Validation
   ↓
Score / XP
```

V1 is a **frontend-based interactive prototype** built with HTML, CSS, and JavaScript.

There is currently no database, authentication system, or server-side answer validation.

---

# ✦ V1.0 Features

## 🧭 Multi-Page Navigation

CYBERLAB currently contains three main pages:

```text
index.html
     │
     ▼
missions.html
     │
     ▼
mission.html
```

### Pages

| Page            | Purpose                         |
| --------------- | ------------------------------- |
| `index.html`    | CYBERLAB homepage               |
| `missions.html` | Mission selection               |
| `mission.html`  | Mission details and interaction |

---

## 🧪 Interactive Missions

The Missions page provides cybersecurity challenges with:

* Mission number
* Category
* Description
* Difficulty
* XP reward
* Start Mission button

Current missions include:

```text
MISSION 01
LOG ANALYSIS
Suspicious Login
EASY — 100 XP

MISSION 02
THREAT DETECTION
Hidden IOC
MEDIUM — 250 XP

MISSION 03
INCIDENT RESPONSE
Compromised Server
HARD — 500 XP
```

---

# 🧠 Mission 01 — Suspicious Login

The first interactive mission focuses on **log analysis**.

### Scenario

A company detects unusual login activity on an internal system.

The user must inspect the login records and identify the suspicious IP address.

### Evidence

```text
192.168.1.10 - admin - 10:32
192.168.1.11 - user  - 10:35
192.168.1.11 - user  - 10:35
45.23.XX.XX  - admin - 03:41
45.23.XX.XX  - admin - 03:42
```

### Question

```text
Which IP address is suspicious?
```

The user enters an answer and JavaScript validates it.

---

# ⚙️ JavaScript Mission System

V1 introduces the first real interaction layer.

The mission JavaScript handles:

```text
User Input
     ↓
Answer Validation
     ↓
Correct / Wrong
     ↓
XP Calculation
     ↓
Mission Completion
```

### Empty Answer

```text
⚠️ PLEASE ENTER AN ANSWER.
```

The mission does not process an empty input.

### Wrong Answer

```text
❌ WRONG ANSWER. TRY AGAIN.
```

The user can continue investigating and try again.

### Correct Answer

```text
✅ CORRECT! MISSION COMPLETED.
```

The mission becomes completed and the final XP is displayed.

---

# 🎯 Answer Validation

The answer is normalized before comparison.

The JavaScript uses:

```javascript
.trim()
.toLowerCase()
```

This means answers such as:

```text
45.23.XX.XX
45.23.xx.xx
  45.23.XX.XX
```

are treated as the same answer.

Conceptually:

```text
User Input
    ↓
.trim()
    ↓
Remove unnecessary spaces
    ↓
.toLowerCase()
    ↓
Normalize capitalization
    ↓
Compare with correct answer
```

---

# 🏆 XP & Hint Penalty System

The mission uses a simple XP system.

### Base Score

```text
100 XP
```

Each hint applies a penalty.

```text
No Hint
100 XP

1 Hint
75 XP

2 Hints
50 XP
```

The calculation follows:

```text
Final Score =
Mission Score - (Hints Used × Hint Penalty)
```

The score cannot become negative.

Conceptually:

```text
100 XP
   │
   ├── 0 hints → 100 XP
   │
   ├── 1 hint  → 75 XP
   │
   └── 2 hints → 50 XP
```

---

# 💡 Hint System

V1 also includes a controlled hint system.

```text
SHOW HINT
    ↓
HINT #1
    ↓
SHOW HINT
    ↓
HINT #2
    ↓
NO MORE HINTS
```

The user cannot continue requesting hints after the available hints have been consumed.

Using hints affects the final XP.

This introduces an early version of **risk/reward mechanics** into the platform.

---

# 🔒 Mission Completion State

After successfully completing the mission:

```text
Submit Button → DISABLED
Answer Input   → DISABLED
Hints          → DISABLED
```

This prevents the completed mission from being submitted or manipulated again during the current session.

The state becomes:

```text
ACTIVE
  ↓
ANSWER SUBMITTED
  ↓
CORRECT
  ↓
COMPLETED
  ↓
INPUT LOCKED
```

---

# 🎨 Design

CYBERLAB follows a minimal cybersecurity-inspired interface.

### Visual Direction

```text
Dark Background
       +
Minimal Typography
       +
Sharp Borders
       +
High Contrast
       +
Clean Layout
       =
CYBERLAB
```

The interface uses:

* Dark backgrounds
* High-contrast text
* Minimal borders
* Monospace logs
* Responsive layouts
* Mission cards
* Clear difficulty indicators
* Interactive buttons and inputs

---

# 📱 Responsive Design

CYBERLAB V1 is designed to work across desktop and smaller screens.

The mission grid changes from:

```text
┌────────┐ ┌────────┐ ┌────────┐
│   01   │ │   02   │ │   03   │
└────────┘ └────────┘ └────────┘
```

to:

```text
┌──────────────┐
│      01      │
└──────────────┘

┌──────────────┐
│      02      │
└──────────────┘

┌──────────────┐
│      03      │
└──────────────┘
```

The evidence/log area also supports horizontal scrolling when necessary.

---

# 🛠️ Technologies

### Current

| Technology | Purpose                            |
| ---------- | ---------------------------------- |
| HTML5      | Page structure                     |
| CSS3       | Layout and visual design           |
| JavaScript | Mission interaction and validation |

### Planned

| Technology | Planned Purpose                |
| ---------- | ------------------------------ |
| PHP        | Server-side application logic  |
| MySQL      | Persistent data storage        |
| Python     | Security analysis engine       |
| Node.js    | Future real-time functionality |

> Technologies will be introduced when the project has a real requirement for them.

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
│   └── mission.js
│
└── README.md
```

The JavaScript layer is separated from the HTML to keep the project organized and easier to maintain.

---

# 🧩 Current Architecture

```text
                  CYBERLAB V1
                       │
          ┌────────────┴────────────┐
          │                         │
       HTML5                      CSS3
          │                         │
          └────────────┬────────────┘
                       │
                  JavaScript
                       │
          ┌────────────┼────────────┐
          │            │            │
       Answers       Hints        XP
          │            │            │
          └────────────┼────────────┘
                       │
                Mission Complete
```

---

# 🔄 V1 Mission Flow

```text
HOME
 │
 ▼
MISSIONS
 │
 ▼
START MISSION
 │
 ▼
SCENARIO
 │
 ▼
EVIDENCE
 │
 ▼
QUESTION
 │
 ▼
ENTER ANSWER
 │
 ├── Empty ──────► Warning
 │
 ├── Wrong ──────► Try Again
 │
 └── Correct ────► XP Calculation
                       │
                       ▼
                 MISSION COMPLETE
```

---

# 📊 V1 Status

```text
╔════════════════════════════════════╗
║          CYBERLAB V1.0             ║
╠════════════════════════════════════╣
║ HTML                  ✅            ║
║ CSS                   ✅            ║
║ Responsive Design     ✅            ║
║ Navigation            ✅            ║
║ Missions              ✅            ║
║ Scenario              ✅            ║
║ Evidence              ✅            ║
║ Answer Input          ✅            ║
║ Answer Validation     ✅            ║
║ Score / XP            ✅            ║
║ Hint System           ✅            ║
║ Hint Penalty          ✅            ║
║ Completion State      ✅            ║
║ JavaScript            ✅            ║
╠════════════════════════════════════╣
║ STATUS: V1 COMPLETE                ║
╚════════════════════════════════════╝
```

---

# 🚀 Roadmap

CYBERLAB will evolve from a frontend prototype into a complete cybersecurity learning platform.

```text
V1
HTML + CSS + JavaScript
Interactive Missions
        │
        ▼
V1.1
More Dynamic Mission Features
        │
        ▼
V2
PHP + MySQL
Real Web Application
        │
        ▼
V2.1
Authentication
Register / Login / Sessions
        │
        ▼
V3
Learning System
Concepts + Labs + Missions
        │
        ▼
V4
Python Security Engine
Log Analysis + IOC Detection
        │
        ▼
V5
Security Tools
IP / Hash / Log / IOC Analysis
        │
        ▼
V6
Advanced Cyber Missions
CTF-style Investigation
        │
        ▼
V7
Gamification
XP + Levels + Achievements
        │
        ▼
V8+
Advanced Cybersecurity Labs
```

---

# 🔐 Future Security Concepts

As CYBERLAB becomes a real web application, the project will also become a practical environment for learning secure development.

Planned concepts include:

```text
Password Hashing
Sessions
Authentication
Authorization
Input Validation
SQL Injection Prevention
CSRF Protection
Secure PHP
Database Security
```

These concepts are **not implemented in V1**.

---

# 🧠 Why I Built CYBERLAB

CYBERLAB is designed as a long-term learning project.

The goal is not simply to create another portfolio website.

The project provides a practical environment for learning:

* Web Development
* JavaScript
* Backend Development
* Databases
* Secure Coding
* Cybersecurity
* Log Analysis
* Incident Response
* Threat Intelligence

Each version introduces new concepts gradually instead of adding technologies without a practical reason.

---

# 📈 Version History

## V1.0 — Interactive Missions

### Added

* Multi-page navigation
* Home page
* Missions page
* Mission details
* Scenario section
* Evidence section
* Answer system
* JavaScript validation
* Empty-answer handling
* Wrong-answer handling
* Correct-answer handling
* XP calculation
* Hint system
* Hint penalties
* Mission completion state
* Responsive design

### Result

CYBERLAB V1 is now a functional **frontend cybersecurity mission prototype**.

---

# ⚡ Run Locally

Clone the repository:

```bash
git clone https://github.com/localbtstudio-tech/CYBERLAB.git
```

Enter the project:

```bash
cd CYBERLAB
```

Then open:

```text
index.html
```

in your browser.

No backend or database is required for V1.

---

# 📌 V1 Scope

V1 intentionally remains simple.

### Included

```text
HTML
CSS
JavaScript
Static Mission Data
Frontend Interaction
```

### Not Included Yet

```text
PHP
MySQL
User Accounts
Login / Register
Database
Persistent Progress
Server-side Validation
Python Security Engine
```

These belong to future versions.

---

# 👨‍💻 Author

<p align="center">
  <strong>Hamza Weslati</strong><br>
  IT Student · Web Developer · Software Development
</p>

<p align="center">
  <a href="https://github.com/localbtstudio-tech">
    GitHub
  </a>
  •
  <a href="https://www.linkedin.com/in/hamza-weslati-9a99a8419/">
    LinkedIn
  </a>
  •
  <a href="https://localbtstudio-tech.github.io/Portfolio/">
    Portfolio
  </a>
</p>

---

<p align="center">
  <strong>CYBERLAB V1.0</strong><br>
  Learn. Investigate. Solve.
</p>
