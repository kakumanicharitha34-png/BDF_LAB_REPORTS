# Lab 1 – Node.js and Express.js Fundamentals

## Student Details
- **Name:** Charitha
- **Course:** Backend Development Fundamentals
- **Section:** Year II Term II

## 1. Objective
To understand Node.js and Express.js fundamentals by creating a basic HTTP server and an Express server, implementing GET routes, and handling invalid routes using a 404 status code.

## 2. Technologies Used
- Node.js
- Express.js
- JavaScript
- npm (Node Package Manager)
- Visual Studio Code

## 3. Project Setup

Create a project folder and initialize Node.js:

```bash
npm init -y
```

Install Express.js:

```bash
npm install express
```

## 4. Basic HTTP Server

The `basic-server.js` file uses Node.js's built-in HTTP module to create a server.

**Run the file:**

```bash
node basic-server.js
```

Open the following URL in your browser:

```text
http://localhost:3001/
```

**Expected Output:**

```text
Hello
```

*Note: Port 3001 is used for the basic server so it can run alongside the Express server on port 3000.*

## 5. Express Server

The `server.js` file uses Express.js to create a web server with the following routes:

| HTTP Method | Route | Status Code | Description |
|---|---|---|---|
| GET | `/` | 200 | Displays welcome message |
| GET | `/about` | 200 | Displays student details in JSON |
| GET | `/time` | 200 | Displays current date and time |
| GET | `/student` | 404 | Displays page not found |

**Run the Express server:**

```bash
node server.js
```

Open:

```text
http://localhost:3000/
```

## 6. Testing

The routes were tested using a web browser and PowerShell.

Example commands:

```bash
curl.exe -i http://localhost:3000/
curl.exe -i http://localhost:3000/about
curl.exe -i http://localhost:3000/time
curl.exe -i http://localhost:3000/student
```

**Expected Results:**
- `/` – 200 OK
- `/about` – 200 OK
- `/time` – 200 OK
- `/student` – 404 Not Found

## 7. Learning Outcomes
- Understood the basics of Node.js.
- Learned how to initialize a Node.js project using npm.
- Installed and used the Express.js framework.
- Created a basic HTTP server.
- Implemented GET routes.
- Learned how to send text and JSON responses.
- Understood HTTP status codes and 404 error handling.

## 8. Conclusion

This lab helped me understand the fundamentals of backend development using Node.js and Express.js. I successfully created HTTP and Express servers, implemented different GET routes, tested the responses, and handled invalid routes using a 404 status code.