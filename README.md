# Express RBAC with JWT Authentication

This project demonstrates how to implement **Role-Based Access Control (RBAC)** and **JWT Authentication** in an Express.js application. It includes roles such as **Admin**, **Editor**, and **Viewer**, each with different levels of access to resources. The project uses **JWT** for secure authentication, and **RBAC** to control access based on user roles.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing the Application with Postman](#testing-the-application-with-postman)
- [Scripts in package.json](#scripts-in-packagejson)
- [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (Recommended LTS version)
- **Yarn** (Package Manager)

You can install these by following the links below:

- [Install Node.js](https://nodejs.org/)
- [Install Yarn](https://yarnpkg.com/)

## Installation

To get started, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/programmerShinobi/express-rbac-jwt-auth.git
    ```

2. Navigate into the project directory:

    ```bash
    cd express-rbac-jwt-auth
    ```

3. Install the project dependencies:

    ```bash
    yarn install
    ```

## Running the Application

To start the application in development mode, use:

```bash
yarn dev
```

This will run the application on `http://localhost:5000` using **nodemon**, which will automatically restart the server on file changes.

For production mode, use:

```bash
yarn start
```

This runs the app without automatic restarts (uses **node** instead of **nodemon**).

## API Endpoints

Here’s a list of available API endpoints and their expected behavior:

### Authentication Routes

- **POST** `/auth/register`  
  Register a new user (Admin, Editor, or Viewer).
  
- **POST** `/auth/login`  
  Login to get a JWT token.

### Resource Routes

- **GET** `/resource`  
  Get all resources (accessible by **Admin**, **Editor**, **Viewer**).
  
- **POST** `/resource`  
  Create a new resource (accessible by **Admin** and **Editor**).
  
- **PUT** `/resource/:id`  
  Update a resource (accessible by **Admin** and **Editor**).

- **DELETE** `/resource/:id`  
  Delete a resource (accessible by **Admin**).

---

## **Testing with Postman**

### **1. Login and Get JWT Token**

To log in and obtain a JWT token:

- **Method**: `POST`
- **URL**: `/auth/login`
- **Body** (JSON):
    ```json
    {
      "username": "admin",
      "password": "adminpassword"
    }
    ```

**Expected Response**:
```json
{
  "token": "your_jwt_token_here"
}
```

### **2. Accessing Protected Routes**

Once you have the JWT token, you can access protected routes by including it in the `Authorization` header.

For example, to **GET all resources**:

- **Method**: `GET`
- **URL**: `/resource/`
- **Headers**:
  - `Authorization: Bearer your_jwt_token_here`

**Expected Response**:
```json
{
  "message": "Resource available",
  "resources": [
    { "id": 1, "name": "Resource 1" },
    { "id": 2, "name": "Resource 2" }
  ]
}
```

To **create a new resource**:

- **Method**: `POST`
- **URL**: `/resource/`
- **Headers**:
  - `Authorization: Bearer your_jwt_token_here`
- **Body** (form-data):
  - `name: New Resource`

**Expected Response**:
```json
{
  "message": "Resource created",
  "resource": { "id": 3, "name": "New Resource" }
}
```

To **update a resource**:

- **Method**: `PUT`
- **URL**: `/resource/1`
- **Headers**:
  - `Authorization: Bearer your_jwt_token_here`
- **Body** (form-data):
  - `name: Updated Resource`

**Expected Response**:
```json
{
  "message": "Resource updated",
  "resource": { "id": 1, "name": "Updated Resource" }
}
```

To **delete a resource**:

- **Method**: `DELETE`
- **URL**: `/resource/1`
- **Headers**:
  - `Authorization: Bearer your_jwt_token_here`

**Expected Response**:
```json
{
  "message": "Resource deleted"
}
```

---

## **Roles and Permissions**

- **Admin**: Full access to all routes (Get, Post, Put, Delete).
- **Editor**: Can access Get, Post, and Put routes, but not Delete.
- **Viewer**: Can only access the Get route.

---

## **Running the Application**

To start the application, run:

```bash
yarn dev
```

This will start the server with `nodemon` for automatic restarts during development.

---

## Conclusion

This project demonstrates how to implement **Role-Based Access Control (RBAC)** and **JWT Authentication** in an Express.js application. The **RBAC** system provides different levels of access to resources, and **JWT** ensures secure authentication.

---