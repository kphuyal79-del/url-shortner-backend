#  URL Shortener Backend with Authentication

A production-ready backend built with **Node.js, Express, MongoDB**
featuring authentication and URL shortening.



##  Features

-    User Authentication (Register, Login, Logout)
-    Email Verification (Nodemailer)
-    JWT Authentication (Access + Refresh Tokens)
-    Refresh Token System
-    URL Shortener
-    Get User-specific URLs
-    Protected Routes with Middleware


##  Project Structure

    url-shortener-backend/
    ├── config/db.js
    ├── controllers/
    │   ├── auth.controller.js
    │   └── urlController.js
    ├── middleware/auth.middleware.js
    ├── model/
    │   ├── User.js
    │   └── Url.js
    ├── routes/
    │   ├── user.js
    │   └── url.js
    ├── utils/sendEmail.js
    ├── .env
    ├── server.js
    └── package.json


##  Environment Variables

Create a `.env` file:

    PORT=5000
    MONGO_URI=your_mongodb_uri

    JWT_SECRET=your_access_secret
    JWT_REFRESH_SECRET=your_refresh_secret

    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_gmail_app_password

    BASE_URL=http://localhost:5000



##  Installation
    git clone https://github.com/kphuyal79-del/url-shortner-backend
    cd url-shortner-backend
    npm install
    npm start

Server runs on:

    http://localhost:5000


##  Authentication Routes

### Register

    POST /api/users/register
    JSON
    {
      "name":"example name",
      "email":"example@gmail.com",
      "passowrd":"1232321"
    }

### Verify Email

    GET /api/users/verify/:token

### Login

    POST /api/users/login

     JSON
    {
      "email":"example@gmail.com",
      "passowrd":"1232321"
    }

Response:

    {
      "accessToken": "...",
      "refreshToken": "..."
    }


### Refresh Token

    POST /api/users/refresh-token

Body:

    {
      "refreshToken": "your_refresh_token"
    }



### Logout

    POST /api/users/logout

Header:

    Authorization: Bearer ACCESS_TOKEN



### Profile

    GET /api/users/profile



##  URL Routes

### Create Short URL

    POST /shortern

Header:

    Authorization: Bearer ACCESS_TOKEN

Body:

    {
      "url": "https://example.com"
    }



### Get My URLs

    GET /my-urls



### Redirect

    GET /:shortId



##  Auth Flow

1.  Register user
2.  Verify email
3.  Login → receive tokens
4.  Access protected routes using access token
5.  Refresh token when expired
6.  Logout clears refresh token



##  Security

-   Password hashed using bcrypt
-   Email verification required
-   JWT authentication
-   Refresh token stored in DB
-   Protected routes via middleware


## 🧪 Testing

Use: - Postman - Thunder Client



##  Tech Stack

-   Node.js
-   Express.js
-   MongoDB (Mongoose)
-   JWT
-   Nodemailer
-   bcryptjs



##  Author

Krishna Phuyal\
GitHub: https://github.com/kphuyal79-del


##  Future Improvements

-   Rate limiting
-   Analytics (click tracking)
-   Custom short URLs
-   Frontend integration