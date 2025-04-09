# Task Management Backend API

## Overview
This project is a backend-only API for managing tasks, built using Node.js, Express, and MongoDB. The focus is on creating RESTful APIs, deploying the service, and documenting the API endpoints. No frontend or UI development is required. The API provides user authentication (JWT-based) and CRUD operations for tasks, ensuring that only authenticated users can manage their tasks.

## GitHub Repository
- **Repository**: [https://github.com/sakshammishra5/cactro_test_9April](https://github.com/sakshammishra5/cactro_test_9April)
- **Details**: A clean, well-organized repository with a clear commit history.

## README.md Content

### Project Overview
This is a task management backend API that allows users to sign up, log in, and manage their tasks (create, read, update, delete). The API is secured with JWT authentication, and all task-related endpoints are protected to ensure only authenticated users can access them.

### Steps to Set Up and Run the Project Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sakshammishra5/cactro_test_9April.git
   cd cactro_test_9April

2.**Install Dependencies**:
   npm install

3.Set Up Environment Variables:
Create a .env file in the root directory.
Add the following variables:
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

4.Run the Application:
The server will start on http://localhost:5000 (or the port specified in .env).

5.Test the API:
Use a tool like Postman to test the endpoints (details below).

Details of the Deployed API (Base URL)
Live Base URL: https://cactro-test-9april.onrender.com
Provide a Postman Collection Link
A Postman collection is not hosted publicly yet. However, you can import the following example requests into Postman:
Signup: POST https://cactro-test-9april.onrender.com/signup
Login: POST https://cactro-test-9april.onrender.com/login
Add Task: POST https://cactro-test-9april.onrender.com/addtask
Get Tasks: GET https://cactro-test-9april.onrender.com/gettasks
Update Task: PUT https://cactro-test-9april.onrender.com/updatetask/:id
Delete Task: DELETE https://cactro-test-9april.onrender.com/deletetask/:id
Include All API Endpoints with Example Requests and Responses
Below are the API endpoints with example requests and responses. The collection to read or list all tasks (e.g., /gettasks) should include a sample authorization header to check.

1.Signup a User
Method: POST
URL: /signup
Request Body:

{
  "username": "testuser",
  "password": "password123"
}

Response (200):
{
  "msg": "User registered successfully"
}

Response (400): If username or password is missing.

2.Login a User
Method: POST
URL: /login
Request Body:
{
  "username": "testuser",
  "password": "password123"
}

Response (200):
{
  "token": "your_jwt_token_here"
}
Response (400): If credentials are incorrect.

3.Add a Task
Method: POST
URL: /addtask
Headers: Authorization: Bearer <your_jwt_token>
Request Body:
{
  "title": "Complete project",
  "description": "Finish the task management API"
}

Response (201)
{
  "_id": "task_id",
  "title": "Complete project",
  "description": "Finish the task management API",
  "status": "pending",
  "user": "user_id",
  "createdAt": "2025-04-09T10:00:00Z",
  "updatedAt": "2025-04-09T10:00:00Z"
}
Response (401): If not authorized.

4.Get All Tasks
Method: GET
URL: /gettasks
Headers: Authorization: Bearer <your_jwt_token>
Response (200):

[
  {
    "_id": "task_id",
    "title": "Complete project",
    "description": "Finish the task management API",
    "status": "pending",
    "user": "user_id",
    "createdAt": "2025-04-09T10:00:00Z",
    "updatedAt": "2025-04-09T10:00:00Z"
  }
]

5.Response (401): If not authorized.
Update a Task
Method: PUT
URL: /updatetask/:id
Headers: Authorization: Bearer <your_jwt_token>
Request Body

{
  "status": "in-progress"
}
Response (200):

{
  "_id": "task_id",
  "title": "Complete project",
  "description": "Finish the task management API",
  "status": "in-progress",
  "user": "user_id",
  "createdAt": "2025-04-09T10:00:00Z",
  "updatedAt": "2025-04-09T10:00:00Z"
}
Response (404): If task not found.
Response (401): If not authorized.

Delete a Task
Method: DELETE
URL: /deletetask/:id
Headers: Authorization: Bearer <your_jwt_token>
Response (200):

{
  "msg": "Task removed"
}

Response (404): If task not found.
Response (401): If not authorized.

Deployment Details
Platform: Deployed on Render.
Process: The application is containerized and deployed using Render's automatic deployment feature linked to the GitHub repository.
IP Whitelisting: Ensure your MongoDB Atlas cluster's IP whitelist includes Render's outbound IPs (refer to Render Outbound IPs and update accordingly).

Deployed URL
Live URL: https://cactro-test-9april.onrender.com
Access the API endpoints by appending the respective routes (e.g., /signup, /login, /addtask, etc.) to the base URL.

Additional Notes
Ensure the Authorization header with a valid JWT token is included for protected endpoints (/addtask, /gettasks, /updatetask/:id, /deletetask/:id).
For local development, set up the .env file with your MongoDB URI and JWT secret.
For production, monitor Render logs for any connection issues and update the MongoDB Atlas IP whitelist as needed.