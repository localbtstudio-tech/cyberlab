# 🧪 CYBERLAB

<p align="center">
  <strong>Interactive cybersecurity missions for curious minds.</strong>
</p>

<p align="center">
  <strong>HTML · CSS · Cybersecurity · Mission-Based Learning</strong>
</p>

<p align="center">

![HTML5](https://img.shields.io/badge/HTML5-Structure-orange?logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Design-blue?logo=css3\&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)
![Version](https://img.shields.io/badge/Version-V1-blue)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)

</p>

---

## ◼︎ Project Overview

**CYBERLAB** is a cybersecurity learning platform built around interactive **Missions, Evidence and Investigation**.

Instead of simply presenting cybersecurity information, the project is designed to let users investigate simulated security incidents and solve challenges based on the evidence provided.

The current version focuses on building the **frontend foundation** of the platform.

```text
CYBERLAB
│
├── HOME
│
├── MISSIONS
│
└── MISSION
     │
     ├── Scenario
     ├── Evidence
     └── Question
```

The project is being developed progressively, with future versions planned to introduce JavaScript interaction, PHP, databases, authentication and eventually Python-based security tools.

---

# ✦ Current Version — V1

The current V1 contains the first functional structure of CyberLab:

```text
V1
│
├── Home Page
├── Missions Page
├── Mission Details
├── Cybersecurity Scenario
├── Evidence / Logs
├── Question Interface
└── Responsive Layout
```

---

# 🏠 Home Page

The homepage introduces the CyberLab experience.

```text
┌──────────────────────────────────────────────┐
│ CYBERLAB        HOME  MISSIONS  ABOUT       │
├──────────────────────────────────────────────┤
│                                              │
│            CYBERSECURITY LAB                 │
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

### Current sections

* CyberLab branding
* Navigation
* Hero section
* `ENTER THE LAB` CTA
* Missions introduction
* Tools introduction
* Learning introduction

The **ENTER THE LAB** button currently leads to the Missions page.

---

# 🧩 Missions

The Missions page presents available cybersecurity challenges.

Current missions:

```text
MISSION 01
Suspicious Login
LOG ANALYSIS
EASY
100 XP
```

```text
MISSION 02
Hidden IOC
THREAT DETECTION
MEDIUM
250 XP
```

```text
MISSION 03
Compromised Server
INCIDENT RESPONSE
HARD
500 XP
```

Each mission card contains:

```text
Mission Number
      │
      ▼
Category
      │
      ▼
Title
      │
      ▼
Description
      │
      ▼
Difficulty + XP
      │
      ▼
START MISSION
```

---

# 🔎 Mission Details

The first implemented mission is:

```text
MISSION 01
SUSPICIOUS LOGIN
```

Category:

```text
LOG ANALYSIS
```

Difficulty:

```text
EASY
```

Reward:

```text
100 XP
```

---

# 🧠 Mission Flow

The current mission follows the first version of the CyberLab investigation concept:

```text
MISSION
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
ANSWER
```

The user first reads the scenario, examines the provided evidence and then attempts to identify the suspicious IP address.

---

# 📖 Scenario

The current mission presents a simulated security incident:

```text
A company detected unusual login activity
on one of its internal systems.

Investigate the login records and identify
the suspicious IP address.
```

The purpose is to introduce the user to basic **Log Analysis** and suspicious login detection.

---

# 📄 Evidence

The mission provides simulated login records:

```text
192.168.1.10 - admin - 10:32
192.168.1.11 - user  - 10:35
192.168.1.11 - user  - 10:35
45.23.XX.XX  - admin - 03:41
45.23.XX.XX  - admin - 03:42
```

The evidence is displayed inside a dedicated log interface:

```text
┌──────────────────────────────────────────────┐
│ 192.168.1.10 - admin - 10:32                │
│ 192.168.1.11 - user  - 10:35                │
│ 192.168.1.11 - user  - 10:35                │
│ 45.23.XX.XX  - admin - 03:41                │
│ 45.23.XX.XX  - admin - 03:42                │
└──────────────────────────────────────────────┘
```

This creates the foundation for future evidence types such as:

```text
Access Logs
Authentication Logs
System Logs
Network Data
File Hashes
IOC Data
```

---

# ❓ Question

The current mission asks:

```text
Which IP address is suspicious?
```

The user can enter an answer through the input field:

```text
┌──────────────────────────────────────┐
│ Enter your answer                    │
└──────────────────────────────────────┘

[ SUBMIT ANSWER ]
```

### Current limitation

The answer field and submit button are currently **frontend only**.

There is no JavaScript validation or PHP backend yet.

The next development stage will connect the interface to actual answer validation.

---

# 🎨 Design

CyberLab currently follows a minimal dark interface.

```text
Background
#0a0a0a

Cards
#111

Borders
#222

Primary Text
#ffffff

Secondary Text
#888
```

The design focuses on:

* Minimal UI
* Dark cybersecurity aesthetic
* Strong typography
* Large headings
* Simple navigation
* Clear mission hierarchy
* Evidence readability
* Responsive layouts

---

# 📱 Responsive Design

The interface includes responsive breakpoints for smaller screens.

Desktop:

```text
┌───────────────┬───────────────┬───────────────┐
│   MISSION 01  │   MISSION 02  │   MISSION 03  │
└───────────────┴───────────────┴───────────────┘
```

Mobile:

```text
┌───────────────────────┐
│       MISSION 01      │
├───────────────────────┤
│       MISSION 02      │
├───────────────────────┤
│       MISSION 03      │
└───────────────────────┘
```

The Missions layout switches from horizontal cards to a vertical layout on smaller screens.

---

# 🗂️ Current Project Structure

```text
CYBERLAB/
│
├── index.html
│
├── missions.html
│
├── mission.html
│
├── css/
│   └── style.css
│
└── README.md
```

### Files

| File            | Purpose                              |
| --------------- | ------------------------------------ |
| `index.html`    | CyberLab homepage                    |
| `missions.html` | Mission listing                      |
| `mission.html`  | Mission 01 details                   |
| `css/style.css` | Global styling and responsive layout |
| `README.md`     | Project documentation                |

---

# 🧱 Current Architecture

```text
                    CYBERLAB
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
        HOME        MISSIONS      MISSION
                                   │
                          ┌────────┼────────┐
                          │        │        │
                          ▼        ▼        ▼
                       SCENARIO  EVIDENCE QUESTION
```

---

# 🧰 Technologies

### Current

* **HTML5** — Page structure
* **CSS3** — Styling and responsive layout

### Planned

* **JavaScript** — Mission interaction and answer validation
* **PHP** — Server-side logic
* **MySQL** — User and mission data
* **Python** — Security analysis engine

The technology stack is intentionally introduced progressively.

---

# 🗺️ Development Roadmap

```text
V1 — FOUNDATION
│
├── Home                         ✅
├── Missions                     ✅
├── Mission Details              ✅
├── Scenario                     ✅
├── Evidence                     ✅
├── Question UI                  ✅
└── Responsive Design            ✅
│
▼
V1.1 — INTERACTION
│
├── JavaScript
├── Answer Validation
├── Score
├── Hints
├── Dynamic Evidence
└── Session Progress
│
▼
V2 — REAL PLATFORM
│
├── PHP Backend
├── MySQL
├── Users
├── Missions
└── Progress
│
▼
V2.1 — AUTHENTICATION
│
├── Register
├── Login
├── Logout
└── Dashboard
│
▼
V3 — LEARNING SYSTEM
│
└── Concepts → Labs → Missions
│
▼
V4 — PYTHON SECURITY ENGINE
│
├── Log Analysis
├── IOC Detection
├── File Hashing
└── Threat Intelligence
│
▼
V5 — SECURITY TOOLS
│
├── IP Analyzer
├── Hash Analyzer
├── Log Analyzer
├── IOC Checker
└── Encoding / Decoding
│
▼
V6+ — ADVANCED CYBER LABS
│
├── Incident Response
├── Digital Forensics
├── Threat Intelligence
├── Advanced Missions
└── Gamification
```

> **Roadmap note:** Future versions are a development blueprint and may change as the project evolves.

---

# 🎯 Current Development Goal

The immediate goal is to transform the current static mission into an interactive investigation.

```text
CURRENT
│
├── Scenario
├── Evidence
└── Question UI
      │
      ▼
NEXT
│
├── Answer Validation
├── Correct / Wrong Feedback
├── Hints
└── Score
      │
      ▼
LATER
│
├── PHP
├── Database
├── User Accounts
└── Persistent Progress
```

The focus is on adding **real functionality one step at a time**.

---

# 🧠 Why I Built This

CyberLab is a long-term project combining my interests in **Web Development and Cybersecurity**.

The project is designed to grow alongside the technologies I am learning.

```text
HTML
 │
 ▼
CSS
 │
 ▼
JavaScript
 │
 ▼
PHP
 │
 ▼
MySQL
 │
 ▼
Python
 │
 ▼
Cybersecurity Automation
```

The goal is not to add technologies unnecessarily.

Each technology will be introduced when it solves an actual problem in the platform.

---

# 🔐 Cybersecurity Direction

The long-term objective is to make CyberLab more than a traditional website.

The platform is intended to eventually combine:

```text
        CYBERLAB
           │
   ┌───────┼────────┐
   │       │        │
 LEARN   MISSIONS  TOOLS
   │       │        │
   └───────┼────────┘
           │
      SECURITY ENGINE
           │
         Python
           │
   ┌───────┼────────┐
   │       │        │
 Logs     IOC    Threat Intel
```

This would allow users to learn a concept, investigate evidence, use security tools and solve increasingly difficult cybersecurity missions.

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
