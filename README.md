🌱 PlantNet – Tree & Plant Shop Web Application
📌 Overview

PlantNet is a full-stack tree and plant selling web application where users can browse plants, place orders, make secure payments, and manage their profiles.
The application includes Firebase Authentication, role-based access, a secure backend API, and a modern responsive UI built with React and Tailwind CSS.

<p align="center">
  <img 
    src="https://github.com/Md-parvej-hossain/Warm-Food-Appreciation-/blob/main/woarm%20Food.png?raw=true" 
    alt="Warm Food Banner" 
    width="800"
  />
</p>

---

📖 Introduction

PlantNet is designed for plant lovers and online nursery businesses.
Users can explore different plant categories, add products to the cart, complete payments, and track orders.
Admins can manage products, users, and orders from a dashboard.

🔗 **Live Website:**  
https://treeshop-52192.web.app

---

## 📑 Table of Contents
- Introduction
- Features
- Tech Stack
- Project Structure
- Installation
- Environment Variables
- Usage
- Authentication & Security
- API Overview
- Dependencies
- Future Improvements
- Contributors
- License

---

✨ Features
User Features

User registration & login (Firebase Authentication)

Protected routes

Browse plants by category

Add to cart & place orders

Secure online payment

Order history

Responsive UI (Mobile, Tablet, Desktop)

Admin Features

Admin dashboard

Add, update, delete plants

Manage users

View all orders & payments

Security

Firebase Authentication

JWT authorization

Role-based route protection

Secure payment gateway

---


🛠️ Tech Stack
Frontend

React

React Router DOM

HTML5

CSS3

Tailwind CSS

DaisyUI

Axios

TanStack Query

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

Authentication & Payment

Firebase Authentication

JWT Token Verification

Payment Gateway (Stripe / SSLCommerz / Others)

Validation & Tools

Zod / Joi (Schema Validation)

dotenv

CORS

bcrypt

nodemon

---

## 📂 Project Structure

```bash
warm-food/
├── server/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── users.controller.js
│   │   ├── foods.controller.js
│   │   └── payment.controller.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── users.routes.js
│   │   ├── foods.routes.js
│   │   └── payment.routes.js
│   ├── middlewares/
│   │   ├── verifyToken.js
│   │   ├── verifyAdmin.js
│   │   └── verifyRider.js
│   ├── models/
│   │   └── dbCollectionModel.js
│   ├── views/
│   │   └── index.html
│   ├── vercel.json
│   ├── package.json
│   └── .gitignore
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── routes/
│   │   ├── layouts/
│   │   ├── providers/
│   │   ├── firebase/
│   │   ├── utils/
│   │   └── main.jsx
│   ├── public/
│   ├── firebase.json
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
│
└── README.md
