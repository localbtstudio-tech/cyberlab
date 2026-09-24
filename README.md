# 🧪 CYBERLAB

<p align="center">
  <strong>Interactive cybersecurity missions for curious minds.</strong>
</p>

<p align="center">
  <strong>HTML · CSS · JavaScript · PHP · Cybersecurity</strong>
</p>

<p align="center">

![HTML5](https://img.shields.io/badge/HTML5-Structure-orange?logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Design-blue?logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-yellow?logo=javascript\&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-Backend-purple?logo=php\&logoColor=white)
![Version](https://img.shields.io/badge/Version-V1-green)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)

</p>

---

## ◼︎ Project Overview

**CYBERLAB** is an interactive cybersecurity learning platform designed around **Missions, Evidence, Questions, Tools and Progress**.

The project is being developed progressively, starting with a lightweight frontend foundation and evolving toward a more complete cybersecurity learning environment.

The core idea is simple:

> **Learn cybersecurity by investigating problems, analyzing evidence and solving missions.**

The architecture and roadmap are intentionally flexible and may change as the project develops.

---

# ✦ Current Version — V1

V1 focuses on building the foundation of the CyberLab platform.

```text
CYBERLAB V1
│
├── Home
├── Missions
├── Mission Details
└── About
```

### Current Technologies

```text
HTML
CSS
JavaScript
PHP
```

The current foundation does **not** require:

```text
MySQL
Login System
Node.js
Python Backend
Frameworks
```

These technologies may be introduced later when the project actually requires them.

---

# 🏠 Home

The homepage introduces the CyberLab experience.

```text
┌──────────────────────────────────────────────┐
│ CYBERLAB        HOME  MISSIONS  ABOUT       │
├──────────────────────────────────────────────┤
│                                              │
│                 CYBERLAB                     │
│                                              │
│      Cybersecurity puzzles for smart minds   │
│                                              │
│             [ ENTER THE LAB ]                │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│  MISSIONS       TOOLS        LEARN           │
│  Solve...       Analyze...   Understand...   │
│                                              │
└──────────────────────────────────────────────┘
```

The current implementation contains:

* CyberLab branding
* Main navigation
* Hero section
* Call-to-action button
* Missions introduction
* Tools introduction
* Learning introduction

---

# 🧩 Missions

The main concept behind CyberLab is the **Mission**.

A mission presents a cybersecurity scenario that requires the user to investigate evidence and answer questions.

Example:

```text
MISSION 01
Suspicious Login

Difficulty: Easy
Category: Log Analysis

[ START MISSION ]
```

Another mission could be:

```text
MISSION 02
Hidden IOC

Difficulty: Medium
Category: Threat Detection

[ START MISSION ]
```

And later:

```text
MISSION 03
Compromised Server

Difficulty: Hard
Category: Incident Response

[ START MISSION ]
```

---

# 🔎 Mission Structure

The intended V1 mission flow is:

```text
Mission
   │
   ▼
Scenario
   │
   ▼
Evidence
   │
   ▼
Investigation
   │
   ▼
Question
   │
   ▼
Answer
   │
   ▼
Score
```

Example:

```text
MISSION 01 — Suspicious Login

Scenario:
A company noticed unusual login activity.

Evidence:

[ access.log ]

192.168.1.10 - admin - 10:32
192.168.1.11 - user  - 10:35
45.23.XX.XX  - admin - 03:41
45.23.XX.XX  - admin - 03:42

Question:

Which IP is suspicious?

[____________]

[ SUBMIT ]
```

The goal is to make the user **investigate the evidence**, rather than simply read cybersecurity information.

---

# 🧠 Learning Philosophy

CyberLab is designed around:

```text
LEARN
  │
  ▼
UNDERSTAND
  │
  ▼
INVESTIGATE
  │
  ▼
SOLVE
  │
  ▼
LEARN FROM THE RESULT
```

Instead of creating a traditional educational website, the project aims to connect cybersecurity concepts with practical investigation.

---

# 🟢 V1.1 — Interaction

The next planned iteration can introduce JavaScript-powered interaction.

Possible features:

```text
Mission Selection
Answer Validation
Score
Hints
Show / Hide Evidence
Session Progress
Dynamic UI
```

Example:

```text
Correct! +100 XP
```

Or:

```text
Wrong answer.

Hint:
Look at the login time.
```

PHP may also begin handling simple server-side operations.

```text
JavaScript
    │
    ▼
Submit Answer
    │
    ▼
PHP
    │
    ▼
Validate Answer
    │
    ▼
Return Result
```

No database is required at this stage.

---

# 🟡 V2 — Real Platform

A future V2 may introduce a real backend and persistent user data.

Possible technologies:

```text
HTML
CSS
JavaScript
PHP
MySQL
```

Possible database structure:

```text
users
missions
questions
answers
progress
scores
```

Example:

```text
users
----------------
id
username
email
password
created_at
```

```text
missions
----------------
id
title
description
difficulty
category
points
```

```text
progress
----------------
id
user_id
mission_id
score
completed
completed_at
```

---

# 🔐 V2.1 — Authentication

A future authentication system may introduce:

```text
Register
Login
Logout
Dashboard
```

The dashboard could display:

```text
Welcome, User

Missions completed
████████░░ 80%

XP
1250

Completed
12 / 20

Current level
Cyber Analyst
```

Potential security concepts practiced:

* Password hashing
* Sessions
* Authentication
* Authorization
* Input validation
* SQL Injection prevention
* CSRF basics
* Secure PHP practices

These features are **planned concepts**, not part of the current V1 implementation.

---

# 📚 V3 — Learning System

A future Learning section could connect theory with practical missions.

```text
LEARN
   │
   ▼
CONCEPT
   │
   ▼
EXAMPLE
   │
   ▼
LAB
   │
   ▼
MISSION
```

Possible categories:

```text
Networking
Linux
Web Security
Cryptography
Authentication
OSINT
Log Analysis
Incident Response
Threat Intelligence
```

Example:

```text
SQL Injection
      │
      ▼
    Learn
      │
      ▼
Interactive Example
      │
      ▼
   Mini Lab
      │
      ▼
   Mission
```

---

# 🐍 V4 — Python Security Engine

Python may eventually become the project's **Security Engine**.

The purpose would be to use Python where it provides a genuine security-analysis capability, rather than adding it simply because the project is cybersecurity-related.

```text
                  CYBERLAB
                     │
          ┌──────────┴──────────┐
          │                     │
        PHP                   Python
          │                     │
      Web App             Security Engine
          │                     │
          └──────────┬──────────┘
                     │
                  Results
```

Possible Python capabilities:

### Log Analysis

```text
access.log
    │
    ▼
 Python
    │
    ▼
Suspicious IP Detection
    │
    ▼
 Findings
```

### IOC Detection

```text
IP
Hash
Domain
URL
 │
 ▼
Python
 │
 ▼
IOC Analysis
```

### File Hashing

```text
File
 │
 ▼
SHA-256
 │
 ▼
Hash Analysis
```

### Threat Intelligence

```text
IP
 │
 ▼
Threat Intelligence API
 │
 ▼
Reputation
 │
 ▼
CyberLab
```

---

# 🛠️ V5 — Security Tools

A future **TOOLS** section could provide practical security utilities.

```text
┌─────────────────────────────┐
│ SECURITY TOOLS              │
├─────────────────────────────┤
│                             │
│ IP Analyzer                 │
│ Hash Analyzer               │
│ Log Analyzer                │
│ Password Strength Checker   │
│ Encoding / Decoding         │
│ IOC Checker                 │
│                             │
└─────────────────────────────┘
```

Simple utilities may be implemented using JavaScript or PHP, while more advanced security-analysis tools could use the Python Security Engine.

---

# 🔴 V6 — Advanced Missions

Future missions may become more similar to small **CTF-style investigations**.

Example:

```text
MISSION — COMPROMISED SERVER
```

The user could receive:

```text
access.log
auth.log
system.log
network.txt
```

The investigation could require identifying:

```text
1. Initial Attack
2. Suspicious IP
3. Compromised Account
4. Persistence Mechanism
5. Attack Timeline
```

The mission would then produce:

```text
FINAL ANSWER
     │
     ▼
Validation
     │
     ▼
Score
     │
     ▼
Explanation
```

---

# 🏆 V7 — Progress & Gamification

Once users and scores exist, CyberLab could introduce a progression system.

Possible features:

```text
XP
Levels
Achievements
Badges
Completed Missions
Leaderboard
```

Example:

```text
LEADERBOARD

#   USER          XP

01  CyberFox      4820
02  RootHunter    4510
03  ByteGhost     4210
04  ...
```

The exact design and mechanics may change during development.

---

# 🚀 V8+ — Advanced CyberLab

The long-term direction may include advanced cybersecurity labs.

Possible areas:

```text
Web Security
Network Security
Digital Forensics
Threat Intelligence
Incident Response
Cryptography
Malware Analysis
Secure Coding
```

Possible difficulty levels:

```text
Easy
Medium
Hard
Expert
```

Possible mission architecture:

```text
Scenario
    │
    ▼
Evidence
    │
    ▼
Investigation
    │
    ▼
Hints
    │
    ▼
Questions
    │
    ▼
Automated Validation
    │
    ▼
Score
    │
    ▼
Explanation
```

---

# 🧰 Technology Strategy

CyberLab will not use every technology simply for the sake of using it.

Each technology should have a real purpose.

| Technology   | Intended Role                  |
| ------------ | ------------------------------ |
| HTML         | Structure                      |
| CSS          | UI / Design                    |
| JavaScript   | Interaction                    |
| PHP          | Backend                        |
| MySQL        | Persistent Data                |
| Python       | Security Engine                |
| Git / GitHub | Version Control                |
| Linux        | Security Labs                  |
| APIs         | Threat Intelligence            |
| Node.js      | Real-time features if required |
| C            | Secure Coding / Low-level Labs |
| C#           | Windows / Security Labs later  |

The stack is **not fixed** and may evolve as the project grows.

---

# 🗺️ Development Roadmap

```text
V1
 │
 ├── Website Foundation
 │
 ▼
V1.1
 │
 ├── JavaScript Interaction
 ├── Answer Validation
 ├── Score
 └── Hints
 │
 ▼
V2
 │
 ├── PHP Backend
 ├── MySQL
 └── User System
 │
 ▼
V2.1
 │
 ├── Authentication
 └── Dashboard
 │
 ▼
V3
 │
 └── Learning System
 │
 ▼
V4
 │
 └── Python Security Engine
 │
 ▼
V5
 │
 └── Security Tools
 │
 ▼
V6
 │
 └── Advanced Missions
 │
 ▼
V7
 │
 └── Gamification
 │
 ▼
V8+
 │
 └── Advanced CyberLab
```

> **Roadmap Status:** This roadmap is a development blueprint, not a fixed specification. Features, technologies and version boundaries may change as CyberLab evolves.

---

# 📁 Current Project Structure

The current V1 foundation is intentionally simple:

```text
CYBERLAB/
│
├── index.html
│
├── css/
│   └── style.css
│
└── README.md
```

As development progresses, the structure will expand with JavaScript, PHP, missions, backend components and other resources when they are actually needed.

---

# 🎯 Current Goal

The immediate goal is **not** to build the entire platform at once.

The current development target is:

```text
HOME
  │
  ▼
MISSIONS
  │
  ▼
MISSION DETAILS
  │
  ▼
EVIDENCE
  │
  ▼
QUESTION
  │
  ▼
ANSWER
  │
  ▼
SCORE
```

Each version should introduce a **real new capability**.

```text
V1  → Website Foundation
V2  → Web Application
V3  → Learning Platform
V4  → Security Engine
V5  → Security Tools
V6  → Advanced Cyber Labs
V7  → Gamification
V8+ → Advanced Cybersecurity Platform
```

---

# 🧠 Why I Built This

CyberLab is a long-term project designed to combine several areas I am learning:

```text
Web Development
       │
       ├── HTML
       ├── CSS
       ├── JavaScript
       └── PHP
       │
       ▼
Backend Development
       │
       ├── MySQL
       └── Authentication
       │
       ▼
Python
       │
       ▼
Security Automation
       │
       ▼
Cybersecurity
```

The objective is to build each part when there is a **real reason for it**, rather than forcing technologies into the project.

---

# 🛠️ Current Technologies

### V1

* HTML5
* CSS3
* JavaScript — planned for interaction
* PHP — planned for simple backend functionality

### Future

* MySQL
* Python
* Linux
* Security APIs
* Node.js when required
* Additional technologies depending on project needs

---

# 👨‍💻 Author

**Hamza Weslati**

IT Student · Web Developer · Software Development

<p align="left">

<a href="https://github.com/localbtstudio-tech">
<img src="https://img.shields.io/badge/GitHub-localbtstudio--tech-black?logo=github">
</a>

<a href="https://www.linkedin.com/in/hamza-weslati-9a99a8419/">
<img src="https://img.shields.io/badge/LinkedIn-Hamza%20Weslati-blue?logo=linkedin">
</a>

</p>

---

<p align="center">
  <strong>CYBERLAB</strong><br>
  Learn · Investigate · Solve · Improve
</p>
