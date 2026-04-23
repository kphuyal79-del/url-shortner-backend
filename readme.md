# URL Shortener Backend

A simple backend service that converts long URLs into short, shareable links. Designed to be lightweight and easy to integrate with any frontend or client.

---

## Features

- Convert long URLs into short links  
- RESTful API structure  
- Scalable and simple architecture  
- Environment-based configuration  

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB (Atlas)  

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/kphuyal79-del/url-shortener-backend.git
cd url-shortener-backend
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
URL=http://localhost:5000
```

- `MONGO_URI`: MongoDB connection string  
- `PORT`: Port where the server will run  
- `URL`: Base URL of the backend  

---

## Running the Server

```bash
node server.js
```

The server will run at:

```
http://localhost:5000
```

---

## API Testing

You can test the API using Postman or any HTTP client.

---

## Basic Workflow

1. Send a POST request with a long URL  
  - request body {"originalUrl":"Your long URL"}
2. The server generates a short URL  
3. Accessing the short URL redirects to the original link  

---

## Project Structure

```
url-shortener-backend/
│── models/
│── routes/
│── controllers/
│── config/
│── server.js
│── .env
```

---

## Future Improvements

- User authentication  
- Click tracking and analytics  
- Custom short URLs  
- Rate limiting and security improvements  
