# CYBERLAB — Interactive Cybersecurity Lab

**Learn cybersecurity by investigating, analyzing evidence, and solving interactive security missions.**

CYBERLAB is a web-based cybersecurity learning project designed to make security concepts more practical through interactive challenges. Users can explore missions, investigate suspicious activity, submit answers, and receive scores.

The project is being developed incrementally, starting with user authentication and database-connected missions, with plans to introduce more advanced security exercises and tools.

## Features

### Authentication
- User registration and login.
- Password hashing and verification using PHP.
- Session-based authentication.
- Logout functionality.
- Protected mission access.

### Interactive Missions
- Cybersecurity scenarios and evidence.
- Log-analysis challenge: **Suspicious Login**.
- Interactive hints.
- Server-side answer verification using PHP and MySQL.
- Score feedback after a correct answer.

### Backend and Database
- MySQL database integration.
- Prepared statements for database queries.
- Server-side validation of mission submissions.
- Mission questions and scoring data retrieved from the database.

## Technologies

- **HTML5** — Page structure
- **CSS3** — Styling and responsive layouts
- **JavaScript** — Interactive behavior and HTTP requests
- **PHP 8** — Authentication and backend logic
- **MySQL** — User accounts, missions, and questions
- **XAMPP** — Local Apache and MySQL development environment
- **Git & GitHub** — Version control and source hosting

## Project Structure

```text
CyberLab/
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── mission.js
├── php/
│   ├── config.php
│   ├── auth.php
│   ├── login.php
│   ├── logout.php
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

### Requirements

- [XAMPP](https://www.apachefriends.org/)
- PHP 8.x
- MySQL or MariaDB
- A modern web browser
- Git (optional, for cloning the repository)

### 1. Clone the Repository

```bash
git clone https://github.com/localbtstudio-tech/CyberLab.git
```

Place the project inside your XAMPP `htdocs` directory. For example:

```text
C:\xampp82\htdocs\CyberLab
```

### 2. Start XAMPP

Open the XAMPP Control Panel and start:

- Apache
- MySQL

### 3. Create the Database

Open phpMyAdmin:

[http://localhost/phpmyadmin](http://localhost/phpmyadmin)

Create a database named:

```text
cyberlab
```

Import the SQL backup from `database/cyberlab.sql` if it contains the current database schema.

If your local schema has newer changes than the backup, update the backup before relying on it for a fresh installation.

### 4. Configure the Database Connection

Open:

```text
php/config.php
```

Configure the MySQL host, database name, username, and password for your local environment. Do not publish real database credentials.

### 5. Launch CYBERLAB

Open the project through Apache:

[http://localhost/CyberLab/index.html](http://localhost/CyberLab/index.html)

Register an account, log in, and visit the Missions page to try the Suspicious Login challenge.

**Important:** Do not open the project using `file:///`. PHP features require the project to run through a web server.

## Current Mission

### Mission 01 — Suspicious Login

**Category:** Log Analysis  
**Difficulty:** Easy  
**Base Score:** 100 XP

A company detects unusual login activity on an internal system. The user investigates the supplied login records and identifies the suspicious IP address.

The answer is checked by the PHP backend against the question stored in MySQL.

## Development Roadmap

- [x] Build the initial pages and navigation.
- [x] Implement user registration and login.
- [x] Add session-based authentication.
- [x] Protect mission access.
- [x] Connect mission answer submission to PHP and MySQL.
- [x] Return server-validated answer results and scores.
- [ ] Persist completed missions and scores in the database.
- [ ] Build a user progress dashboard.
- [ ] Track hint usage and calculate penalties on the server.
- [ ] Add more interactive cybersecurity missions.
- [ ] Introduce Python-powered security analysis tools.
- [ ] Expand the lab with more advanced challenges.

## Project Status

**Actively in development.**

CYBERLAB currently provides the foundation for an interactive cybersecurity lab, including authentication and a database-connected mission. Persistent user progress, score history, and additional security tools remain planned development work.

## Author

**Hamza Weslati**

IT/DSI Student | Web Development | Cybersecurity

- GitHub: [@localbtstudio-tech](https://github.com/localbtstudio-tech)
