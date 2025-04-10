
# Task Management Backend API

  

## Overview

  

This project is a backend-only API for managing tasks, built using
Node.js, Express, and MongoDB. The focus is on creating RESTful APIs,
deploying the service, and documenting the API endpoints. No frontend or UI development is required. The API provides user authentication
(JWT-based) and CRUD operations for tasks, ensuring that only
authenticated users can manage their tasks.

## GitHub Repository
-  **Repository**:
<https://github.com/sakshammishra5/cactro_test_9April>


 

### ***Project Overview***

This is a task management backend API that allows users to sign up, log
in, and manage their tasks (create, read, update, delete). The API is
secured with JWT authentication, and all task-related endpoints are
protected to ensure only authenticated users can access them.

 ### Steps to Set Up and Run the Project Locally

  1.  **Clone the Repository**: 

    

      git clone https://github.com/sakshammishra5/cactro_test_9April.git

 - **Install Dependencies**: 

    npm install

 - **Set Up Environment Variables:**
  Create a .env file in the root directory. Add the following variables:
  ```shell
  MONGODB_URI=your_mongodb_atlas_connection_string
  JWT_SECRET=your_jwt_secret_key 
  PORT=5000
```

 - **Run the Application:** 
 The server will start on http://localhost:5000
(or the port specified in .env).

 - **Test the API**: 
 Use a tool like Postman to test the endpoints (details below).

***Details of the Deployed API (Base URL) Live Base URL:***
https://cactro-test-9april.onrender.com Provide a Postman Collection
Link [Postman collection Link](https://cnc-team-9361.postman.co/workspace/CNC-team-Workspace~a43f9e30-871d-4f2f-8ddf-9b000ee7c824/collection/42672201-cfee7220-ea54-493a-bbbd-ede1b126adb8?action=share&creator=42672201&active-environment=36377152-4c1145ba-1e8d-406a-bf5e-90b1f3a7cae3). However, you can
import the following example requests into Postman: 

|  Task | Type_of_Req  | URL  |
| ------------ | ------------ | ------------ |
| Signup  | POST  |  https://cactro-test-9april.onrender.com/signup  |
| Login  | POST   | https://cactro-test-9april.onrender.com/login   |
|  Add Task |  POST |  https://cactro-test-9april.onrender.com/addtask  |
|  Get Tasks |GET    |  https://cactro-test-9april.onrender.com/gettasks  |
|   Update Task| PUT  |https://cactro-test-9april.onrender.com/updatetask/:id    |
| Delete Task  | DELETE   |  https://cactro-test-9april.onrender.com/deletetask/:id |



All API Endpoints with Example Requests and Responses 
Below are the API endpoints with example requests and responses. The collection to read or list all tasks (e.g., /gettasks) should include a sample authorization header to check.

***1.Signup a User Method:*** POST URL: /signup Request Body:

```shell
 { 
 "username": "testuser", 
 "password": "password123" 
 }

Response (200): { "msg": "User registered successfully" }
Response (400): If username or password is missing.

```
  

**2.Login a User Method**: POST URL: /login Request Body: 

```shell
{ 
"username":"testuser",
 "password": "password123"
  }
Response (200): { "token": "your_jwt_token_here" } 
Response (400): If credentials are incorrect.
```

  

**3.Add a Task Method**: POST URL: /addtask 
Headers: Authorization: Bearer
`<your_jwt_token>`{=html} Request Body:
```shell
 { 
 "title": "Complete project",
"description": "Finish the task management API" 
}

 Response (201) :-
 { 
 "_id": "task_id",
  "title": "Complete project",
"description": "Finish the task management API", 
"status": "pending",
"user": "user_id", 
"createdAt": "2025-04-09T10:00:00Z", 
"updatedAt":
"2025-04-09T10:00:00Z"
 }
  Response (401): -If not authorized.
```

  

**4.Get All Tasks Method**: GET URL: /gettasks 
Headers: Authorization:Bearer `<your_jwt_token>`{=html} 
```shell
Response (200):
\[ 
{ 
    "\_id": "task_id", 
    "title": "Complete project",
    "description":"Finish the task management API",
    "status": "pending", 
    "user":"user_id", 
    "createdAt": "2025-04-09T10:00:00Z",
    "updatedAt":"2025-04-09T10:00:00Z" 
   }\
   ]

```
  
Response (401): If not authorized.

 **5.Update a Task Method**: PUT URL:/updatetask/:id
  Headers: Authorization: Bearer `<your_jwt_token>`{=html}
Request Body
```shell
{ "status": "in-progress" } Response (200):

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
```

  
**6.Delete a Task Method**: DELETE URL: /deletetask/:id 
Headers:Authorization: Bearer `<your_jwt_token>`{=html} 
```shell
Response (200):{ "msg": "Task removed" }
Response (404): If task not found. 
Response (401): If not authorized.
```

  
**Deployment Details Platform:** 
Deployed on Render. Process: The application is containerized and deployed using Render's automatic deployment feature linked to the GitHub repository. IP Whitelisting: Ensure your MongoDB Atlas cluster's IP whitelist includes Render's outbound IPs (refer to Render Outbound IPs and update accordingly).Deployed URL Live URL: https://cactro-test-9april.onrender.com Access the API endpoints by appending the respective routes (e.g., /signup,/login, /addtask, etc.) to the base URL.
Additional Notes Ensure the Authorization header with a valid JWT token is included for protected endpoints (/addtask, /gettasks,
/updatetask/:id, /deletetask/:id). For local development, set up the
.env file with your MongoDB URI and JWT secret. For production, monitor Render logs for any connection issues and update the MongoDB Atlas IP whitelist as needed.