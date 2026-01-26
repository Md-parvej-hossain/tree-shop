# 🌱 PlantNet – Tree & Plant Shop Web Application

<p align="center">
  <img 
    src="https://github.com/Md-parvej-hossain/Warm-Food-Appreciation-/blob/main/woarm%20Food.png?raw=true" 
    alt="PlantNet Banner" 
    width="800"
  />
</p>

## 📌 Overview

**PlantNet** is a full-stack tree and plant selling web application where users can explore a wide variety of plants, place orders, make secure payments, and manage their profiles.  
The platform supports **role-based access control**, a **secure REST API**, and a **modern responsive UI** built with **React** and **Tailwind CSS**.

🔗 **Live Website:**  
👉 https://treeshop-52192.web.app

---

## 📖 Introduction

PlantNet is designed for **plant lovers**, **online nurseries**, and **eco-friendly businesses**.  
Customers can browse plants by category, add items to their cart, complete payments, and track orders.  
Admins and sellers can manage products, users, and orders from a powerful dashboard.

---

## 📑 Table of Contents

- Overview
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

## ✨ Features

### 👤 User Features
- User registration & login (Firebase Authentication)
- Protected routes
- Browse plants by category
- Add to cart & place orders
- Secure online payment
- Order history
- Fully responsive UI (Mobile, Tablet, Desktop)

### 🛠️ Admin & Seller Features
- Admin dashboard
- Add, update, and delete plants
- Manage users & seller requests
- View all orders and payments
- Sales & analytics overview

### 🔐 Security Features
- Firebase Authentication
- JWT-based authorization
- Role-based route protection (Admin / Seller / User)
- Secure payment gateway integration

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router DOM
- Tailwind CSS
- DaisyUI
- Axios
- TanStack Query
- HTML5 & CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)

### Authentication & Payment
- Firebase Authentication
- JWT Token Verification
- Payment Gateway (Stripe / SSLCommerz / Others)

### Validation & Tools
- Zod / Joi
- dotenv
- CORS
- bcrypt
- nodemon

---

## 📂 Project Structure

```bash
├── client/
│   ├── src/
│   │   ├── routes/          # Private, Admin & Seller routes
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── hooks/           # Custom React hooks
│   │   ├── api/             # API helpers
│   │   ├── firebase/        # Firebase configuration
│   │   ├── layouts/         # Layout components
│   │   └── providers/       # Auth & Role providers
│   ├── public/
│   ├── vite.config.js
│   └── package.json
│
├── server/
│   ├── routes/              # API routes
│   ├── controllers/         # Business logic
│   ├── models/              # Mongoose models
│   ├── middleware/          # Auth & role middleware
│   ├── config/              # Database config
│   ├── server.js
│   └── package.json
│
└── README.md
