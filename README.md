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
  <img src="https://img.shields.io/badge/Status-V2.0%20In%20Progress-111111?style=for-the-badge">
</p>

---

## ◼︎ About

**CYBERLAB** is an interactive cybersecurity learning platform built around practical missions.

Users investigate evidence, answer cybersecurity questions, use hints, and receive XP based on their performance.

The project is developed progressively. Each version introduces a new layer of technology and functionality for a specific learning purpose.

---

# ✦ V2.0 — PHP Backend Foundation

V2.0 introduces the first **Backend layer** to CYBERLAB.

In V1, answer validation happened entirely inside the user's browser:

```text
Browser
   ↓
JavaScript
   ↓
Check Answer
```

In V2.0, the answer is sent to a PHP backend:

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
JSON Response
   ↓
JavaScript
   ↓
Update UI
```

The main goal of V2.0 is to understand practical **Client → Server communication**.

---

# 🔄 V1 → V2.0

## V1 — Browser-Based Validation

```text
User
 │
 ▼
Input Answer
 │
 ▼
JavaScript
 │
 ▼
Correct Answer
 │
 ▼
Validation
 │
 ▼
Result
```

The correct answer was stored directly in JavaScript.

Example:

```javascript
const correctAnswer = "45.23.XX.XX";
```

This meant that the answer existed in the browser.

---

## V2.0 — Server-Side Answer Validation

The correct answer was moved to PHP:

```php
$correctAnswer = "45.23.XX.XX";
```

The browser no longer contains the answer inside the JavaScript validation logic.

The new flow is:

```text
                    CYBERLAB V2.0

┌──────────────┐
│    Browser   │
│              │
│  User Answer │
└──────┬───────┘
       │
       │ POST
       ▼
┌──────────────┐
│    PHP       │
│              │
│ submit.php   │
└──────┬───────┘
       │
       │ Validate
       ▼
┌──────────────┐
│ JSON Response│
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ JavaScript   │
│              │
│ Update UI    │
└──────────────┘
```

This is the main architectural change introduced in V2.0.

---

# ⚙️ PHP Backend

V2.0 introduces:

```text
php/
└── submit.php
```

The PHP script is responsible for checking the submitted answer.

Conceptually:

```php
$correctAnswer = "45.23.XX.XX";
```

The submitted answer is received through:

```php
$_POST["answer"]
```

The backend then determines whether the answer is correct.

---

# 🌐 Client → Server Communication

V2.0 introduces practical communication between the frontend and backend.

JavaScript sends a request:

```javascript
fetch("php/submit.php", {
    method: "POST"
});
```

The flow is:

```text
JavaScript
     │
     │ HTTP Request
     ▼
  PHP Backend
     │
     │ Process Request
     ▼
  PHP Response
     │
     ▼
 JavaScript
```

This is the foundation for future server-based functionality.

---

# 📡 HTTP POST

The mission answer is sent using the HTTP `POST` method.

Conceptually:

```text
POST
 │
 └── answer = userAnswer
```

PHP receives the value through:

```php
$_POST["answer"]
```

The simplified communication becomes:

```text
JavaScript
    │
    │ POST
    │ answer=userAnswer
    ▼
PHP
    │
    │ $_POST["answer"]
    ▼
Validation
```

This introduces practical HTTP concepts into the project.

---

# 📦 JSON Responses

V2.0 also introduces **JSON** as the communication format between PHP and JavaScript.

PHP can return a successful result such as:

```php
echo json_encode([
    "correct" => true,
    "message" => "CORRECT"
]);
```

Or an incorrect result:

```php
echo json_encode([
    "correct" => false,
    "message" => "WRONG"
]);
```

JavaScript receives the response with:

```javascript
const data = await response.json();
```

The communication becomes:

```text
PHP
 │
 │ JSON
 ▼
JavaScript
 │
 ▼
data.correct
data.message
```

---

# 🔒 Basic Server-Side Validation

One of the important changes in V2.0 is that PHP now makes the answer validation decision.

```text
User Answer
     ↓
Browser
     ↓
POST Request
     ↓
PHP
     ↓
Correct / Wrong
     ↓
JSON
     ↓
Browser
```

This is an important improvement over V1 because the validation logic is no longer entirely dependent on the browser.

### Current Limitation

V2.0 is still a learning-stage backend.

The **final XP calculation is currently handled by JavaScript**.

Therefore:

```text
Answer Validation
        ↓
      PHP ✅

Final XP Calculation
        ↓
   JavaScript ⚠️
```

A fully server-controlled scoring system will come later.

---

# 🧪 Mission Interaction

The existing V1 mission system remains available in V2.0.

### Empty Answer

```text
⚠️ PLEASE ENTER AN ANSWER.
```

### Wrong Answer

```text
❌ WRONG ANSWER. TRY AGAIN.
```

### Correct Answer

```text
✅ CORRECT! MISSION COMPLETED.
```

The frontend continues to manage the visual state of the mission.

---

# 💡 Hint System

The V1 hint system remains part of the current project.

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

Maximum available hints:

```text
2
```

The hint system also affects the XP calculation.

---

# 🏆 XP System

The current mission has a base reward of:

```text
100 XP
```

The current frontend scoring system is:

| Hints Used |     XP |
| ---------: | -----: |
|          0 | 100 XP |
|          1 |  75 XP |
|          2 |  50 XP |

Conceptually:

```text
Final Score =
Mission Score - (Hints Used × Hint Penalty)
```

### Current Architecture

```text
PHP
 │
 └── Validates Answer

JavaScript
 │
 └── Calculates Final XP
```

Moving score calculation to the backend is a future improvement.

---

# 📄 Current Pages

```text
index.html
missions.html
mission.html
```

### Navigation

```text
HOME
  ↓
MISSIONS
  ↓
START MISSION
  ↓
MISSION DETAILS
```

---

# 🧪 Current Missions

### Mission 01

```text
LOG ANALYSIS
Suspicious Login
EASY
100 XP
```

Investigate unusual login activity and identify the suspicious IP address.

### Mission 02

```text
THREAT DETECTION
Hidden IOC
MEDIUM
250 XP
```

Examine system evidence and discover the Indicator of Compromise.

### Mission 03

```text
INCIDENT RESPONSE
Compromised Server
HARD
500 XP
```

Analyze multiple pieces of evidence and reconstruct a server compromise.

---

# 🎨 Design

CYBERLAB keeps the original dark cybersecurity-inspired interface.

The current design uses:

* Dark background
* High-contrast typography
* Minimal borders
* Mission cards
* Monospace log evidence
* Difficulty indicators
* Interactive buttons
* Responsive layouts

---

# 📱 Responsive Design

Mission cards adapt to smaller screens.

Desktop:

```text
┌────────┐ ┌────────┐ ┌────────┐
│   01   │ │   02   │ │   03   │
└────────┘ └────────┘ └────────┘
```

Mobile:

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

The evidence/log container also supports horizontal scrolling.

---

# 🛠️ Technologies

## Current

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| HTML5      | Page structure                  |
| CSS3       | Layout and interface            |
| JavaScript | Frontend interaction            |
| PHP        | Backend answer validation       |
| HTTP POST  | Client → Server communication   |
| JSON       | Server → Client response format |

## Not Implemented Yet

| Technology             | Status |
| ---------------------- | ------ |
| MySQL                  | ⬜      |
| Database               | ⬜      |
| Authentication         | ⬜      |
| Register / Login       | ⬜      |
| Sessions               | ⬜      |
| User Dashboard         | ⬜      |
| Persistent XP          | ⬜      |
| Persistent Progress    | ⬜      |
| Python Security Engine | ⬜      |

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

# 🧩 V2.0 Architecture

```text
                 CYBERLAB V2.0
                       │
        ┌──────────────┴──────────────┐
        │                             │
     FRONTEND                       BACKEND
        │                             │
 HTML + CSS + JS                    PHP
        │                             │
        │          HTTP              │
        └────────── POST ────────────►│
                                      │
                                Validate Answer
                                      │
                                      ▼
                                    JSON
                                      │
                                      ▼
                                  JavaScript
                                      │
                                      ▼
                                  Update UI
```

---

# 🧠 What V2.0 Teaches

V2.0 is intentionally small.

The objective is not to build the complete platform yet.

The objective is to understand:

```text
Client
  ↓
Request
  ↓
HTTP
  ↓
POST
  ↓
Server
  ↓
PHP
  ↓
Validation
  ↓
JSON Response
  ↓
Client
```

This establishes the foundation required for future backend development.

---

# 🚧 What V2.0 Does NOT Have

V2.0 is **not yet a full database-backed application**.

There is currently no:

```text
❌ MySQL
❌ Database
❌ User Accounts
❌ Register
❌ Login
❌ Logout
❌ Sessions
❌ User Dashboard
❌ Persistent XP
❌ Persistent Mission Progress
```

These features belong to later versions.

---

# 🚀 Roadmap

```text
V1.0
HTML + CSS + JavaScript
Interactive Missions
        │
        ▼
V2.0  ← CURRENT
PHP Backend Foundation
POST + fetch() + JSON
Server-side Answer Validation
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
Concepts + Examples + Labs
        │
        ▼
V4
Python Security Engine
        │
        ▼
V5
Security Tools
        │
        ▼
V6
Advanced Cyber Missions
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

# 📈 Version History

## V1.0 — Interactive Frontend

Implemented:

* HTML structure
* CSS design
* Responsive layouts
* Multi-page navigation
* Missions
* Evidence
* Answer interface
* JavaScript validation
* Hint system
* XP system
* Mission completion state

---

## V2.0 — PHP Backend Foundation

### Added

* PHP backend
* `php/submit.php`
* Client → Server communication
* JavaScript `fetch()`
* HTTP `POST`
* PHP `$_POST`
* JSON responses
* `response.json()`
* Basic server-side answer validation
* Correct-answer storage on the server

### Architecture Change

```text
V1

Browser
   ↓
JavaScript
   ↓
Validation


V2.0

Browser
   ↓
JavaScript
   ↓
fetch()
   ↓
PHP
   ↓
Validation
   ↓
JSON
   ↓
JavaScript
```

### Important

V2.0 does **not** include MySQL or authentication.

Those are planned for later versions.

---

# 📌 Current Status

```text
╔════════════════════════════════════╗
║          CYBERLAB V2.0             ║
╠════════════════════════════════════╣
║ HTML                  ✅            ║
║ CSS                   ✅            ║
║ Responsive Design     ✅            ║
║ JavaScript            ✅            ║
║ Missions              ✅            ║
║ Evidence              ✅            ║
║ Answer Interaction    ✅            ║
║ Hint System           ✅            ║
║ XP System             ✅            ║
║ PHP Backend           ✅            ║
║ fetch()               ✅            ║
║ HTTP POST             ✅            ║
║ JSON                  ✅            ║
║ Server Validation     ✅            ║
╠════════════════════════════════════╣
║ MySQL                 ⬜            ║
║ Authentication        ⬜            ║
║ Sessions              ⬜            ║
║ User System           ⬜            ║
╚════════════════════════════════════╝
```

**Current Version: V2.0 — PHP Backend Foundation**

---

# ⚡ Run Locally

CYBERLAB V2.0 requires a PHP-enabled local server because `submit.php` must be executed by PHP.

With XAMPP, place the project inside:

```text
xampp/
└── htdocs/
    └── CyberLab/
```

Start:

```text
Apache
```

Then access CYBERLAB through the local server rather than opening `index.html` directly.

The V2.0 architecture requires:

```text
Browser
   ↓
Apache
   ↓
PHP
```

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
  <strong>CYBERLAB V2.0</strong><br>
  Learn. Investigate. Build.
</p>
