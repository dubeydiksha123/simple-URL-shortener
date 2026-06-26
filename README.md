# Task 1: Simple URL Shortener

A simple and efficient URL Shortener web application built using Node.js, Express.js, and MongoDB. This application allows users to input a long URL and generates a unique, shortened code. When a user visits the shortened URL, they are automatically redirected to the original long URL.

## 🚀 Features

- **Generate Short URL:** Accepts a long URL via an API endpoint and returns a unique short code.
- **Database Storage:** Safely maps and stores the relationship between the short code and the original long URL in a MongoDB database.
- **Redirection Route:** Automatically redirects users from the short URL to the original destination.
- **Data Persistence:** Keeps track of all shortened links using MongoDB Atlas / Local Server.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Tools:** MongoDB Compass (for database visualization)

## 📋 API Endpoints

### 1. Create Short URL
- **Endpoint:** `POST /api/shorten` (or your specific route)
- **Description:** Takes a long URL and generates a short code.
- **Request Body:**
  ```json
  {
    "longUrl": "https://example.com"
  }
  ```

### 2. Redirect to Original URL
- **Endpoint:** `GET /:shortCode`
- **Description:** Redirects the user to the corresponding original long URL.

## 💻 How to Run This Project Locally

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-folder-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGO_URI=mongodb://localhost:27017/urlshortener
   PORT=3000
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   The server will start running on `http://localhost:3000`.
