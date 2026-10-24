# CYBERLAB — Interactive Cybersecurity Lab

**Investigate. Analyze. Solve. Learn cybersecurity through practice.**

CYBERLAB is a web-based cybersecurity learning project built around interactive security missions. Users can investigate suspicious activity, analyze evidence, submit answers, and receive scores.

The project combines frontend development, backend programming, database integration, and session-based authentication to create a practical cybersecurity learning experience.

## Overview

CYBERLAB currently features an interactive **Suspicious Login** mission in which users analyze login records to identify suspicious activity. Mission answers are validated by a PHP backend against data stored in MySQL.

The project was developed incrementally to practice web development, authentication, database operations, and basic security principles through a working application.

## Features

### Authentication
- User registration and login.
- Password hashing and verification.
- Session-based authentication.
- Logout functionality.
- Protected mission access for authenticated users.

### Interactive Cybersecurity Mission
- Scenario-based security challenge.
- Login-log evidence analysis.
- Interactive hints.
- Server-side answer validation.
- Score feedback after successful completion.

### Database Integration
- MySQL database for user accounts, missions, and questions.
- Prepared statements for database queries.
- Persistent mission progress associated with each user.
- Mission scores stored in the `user_progress` table.
- A unique constraint on each user–mission pair to prevent duplicate progress records.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | User interactions and asynchronous requests |
| PHP 8.x | Authentication and backend processing |
| MySQL | User, mission, question, and progress data |
| Apache / XAMPP | Local development environment |
| Git and GitHub | Version control and source hosting |

## Project Structure

```text
CyberLab/
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── login.js
│   ├── mission.js
│   └── register.js
├── php/
│   ├── config.php
│   ├── auth.php
│   ├── login.php
│   ├── logout.php
│   ├── register.php
│   └── submit.php
├── database/
│   └── cyberlab.sql
├── index.html
├── missions.html
├── mission.html
├── login.html
├── register.html
└── README.md
```

## Getting Started

### Prerequisites

- [XAMPP](https://www.apachefriends.org/) with Apache, PHP, and MySQL/MariaDB.
- A modern web browser.
- Git, if you want to clone the repository.

### 1. Clone the Repository

```bash
git clone https://github.com/localbtstudio-tech/CyberLab.git
```

Place the project folder inside your XAMPP `htdocs` directory.

Example:

```text
C:\xampp82\htdocs\CyberLab
```

### 2. Start Apache and MySQL

Open the XAMPP Control Panel and start **Apache** and **MySQL**.

### 3. Create the Database

Open phpMyAdmin:

<http://localhost/phpmyadmin>

Create a database named:

```text
cyberlab
```

Import `database/cyberlab.sql` to create the required tables and initial mission data.

**Database backup:** Make sure this SQL file is the latest export and includes the `user_progress` table and the required mission data before using it for a fresh installation.

### 4. Configure the Database Connection

Open:

```text
php/config.php
```

Configure the database host, database name, username, and password to match your local MySQL setup.

Do not commit real database credentials to a public repository.

### 5. Launch CYBERLAB

Open the application through Apache:

<http://localhost/CyberLab/index.html>

Register an account, log in, navigate to the missions page, and try the Suspicious Login challenge.

**Important:** Open the project through `localhost`, not directly using a `file:///` URL, because the PHP backend requires a web server.

## Current Mission

### Mission 01 — Suspicious Login

| Attribute | Value |
|---|---|
| Category | Log Analysis |
| Difficulty | Easy |
| Base score | 100 XP |

**Scenario:** A company detects unusual login activity on one of its internal systems. Users investigate the provided login records and identify the suspicious IP address.

The submitted answer is checked by the PHP backend against the correct answer stored in MySQL.

## Project Status

**Core functionality implemented and tested locally.**

The current version includes registration, login, logout, protected mission access, answer validation, and persistent mission-score records.

The project has been tested locally for its main authentication and mission workflows. The README and database backup should remain synchronized with the latest version of the source code.

## Known Limitations

- The current application contains one interactive mission.
- Hint usage and score penalties are not yet fully enforced and calculated by the server.
- Persistent progress records are available, but a dedicated progress dashboard has not been implemented.
- The project has been tested in a local XAMPP environment; deployment to a production server has not been established.

## Security Notes

CYBERLAB is an educational project intended for local development and learning.

- Passwords should be stored as password hashes, never as plaintext.
- Database queries that accept user input should use prepared statements.
- Authentication and authorization must be checked on the server, not only in JavaScript.
- Production deployment requires additional security configuration, including secure session cookies, HTTPS, and appropriate error handling.

## Author

**Hamza Weslati**

IT Student | Web Development | Cybersecurity Learner

GitHub: [@localbtstudio-tech](https://github.com/localbtstudio-tech)

---

*CYBERLAB — Learn cybersecurity by investigating real-world-inspired security scenarios.*
