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
bash
├── client/ (41800 tokens)
    ├── src/ (39500 tokens)
    │   ├── routes/ (1100 tokens)
    │   │   ├── AdminRoute.jsx
    │   │   ├── SellerRoutes.jsx
    │   │   ├── PrivateRoutes.jsx (200 tokens)
    │   │   └── Routes.jsx (900 tokens)
    │   ├── assets/ (2300 tokens)
    │   │   ├── images/ (600 tokens)
    │   │   │   ├── login.jpg
    │   │   │   ├── logo.png
    │   │   │   ├── plant1.png
    │   │   │   ├── plant2.png
    │   │   │   ├── plant3.jpg
    │   │   │   └── register.jpg
    │   │   ├── aboutImage/ (800 tokens)
    │   │   │   ├── img1.jpg
    │   │   │   ├── img2.jpg
    │   │   │   ├── img3.jpg
    │   │   │   ├── img4.jpg
    │   │   │   ├── topImg.jpg
    │   │   │   ├── consterOne.jpg
    │   │   │   ├── continerTwo.jpg
    │   │   │   └── continerThree.jpg
    │   │   └── react.svg (900 tokens)
    │   ├── App.jsx
    │   ├── components/ (19000 tokens)
    │   │   ├── Shared/ (2600 tokens)
    │   │   │   ├── Navbar/ (900 tokens)
    │   │   │   │   ├── navbar.css
    │   │   │   │   └── Profail.jsx (800 tokens)
    │   │   │   ├── button/ (900 tokens)
    │   │   │   │   ├── Button.jsx
    │   │   │   │   ├── ScrollToTopButton.jsx (300 tokens)
    │   │   │   │   └── button.css (500 tokens)
    │   │   │   ├── EmptyState/ (300 tokens)
    │   │   │   │   └── EmptyState.jsx (300 tokens)
    │   │   │   └── Footer/ (500 tokens)
    │   │   │   │   └── Footer.jsx (500 tokens)
    │   │   ├── Dashbord/ (1100 tokens)
    │   │   │   ├── Nabver/ (200 tokens)
    │   │   │   │   └── Nabver.jsx (200 tokens)
    │   │   │   ├── ProfileMenu/ (200 tokens)
    │   │   │   │   └── ProfileMenu.jsx (200 tokens)
    │   │   │   └── sidebar/ (700 tokens)
    │   │   │   │   └── Sidebar.jsx (700 tokens)
    │   │   ├── Home/ (8500 tokens)
    │   │   │   ├── Article/ (600 tokens)
    │   │   │   │   ├── Articles.jsx (200 tokens)
    │   │   │   │   └── ArticleCard.jsx (400 tokens)
    │   │   │   ├── BestProduct/ (1100 tokens)
    │   │   │   │   ├── BestProducts.jsx (300 tokens)
    │   │   │   │   └── BestProductCard.jsx (800 tokens)
    │   │   │   ├── Trending/ (1100 tokens)
    │   │   │   │   ├── Trending.jsx (300 tokens)
    │   │   │   │   └── TrendingCard.jsx (800 tokens)
    │   │   │   ├── TopRatedProducts/ (1100 tokens)
    │   │   │   │   ├── TopRatedProducts.jsx (300 tokens)
    │   │   │   │   └── TopRatedProductsCard.jsx (800 tokens)
    │   │   │   ├── CategorySlider.jsx (300 tokens)
    │   │   │   ├── Catefory/ (1300 tokens)
    │   │   │   │   ├── Catagory.jsx (400 tokens)
    │   │   │   │   └── CategoryCard.jsx (900 tokens)
    │   │   │   ├── HeroSlider.jsx (600 tokens)
    │   │   │   ├── plants/ (1500 tokens)
    │   │   │   │   ├── Plants.jsx (600 tokens)
    │   │   │   │   └── PlantCard.jsx (900 tokens)
    │   │   │   └── CartSidebar/ (900 tokens)
    │   │   │   │   └── CartSidebar.jsx (900 tokens)
    │   │   ├── From/ (2100 tokens)
    │   │   │   ├── checkoutForm.css (200 tokens)
    │   │   │   ├── BecomeASellerModal.jsx (900 tokens)
    │   │   │   └── CheckoutFeom.jsx (1000 tokens)
    │   │   ├── Tables/ (3600 tokens)
    │   │   │   ├── ActiveSellerTable.jsx (600 tokens)
    │   │   │   ├── AllPlantsTable.jsx (700 tokens)
    │   │   │   ├── UsersTable.jsx (1100 tokens)
    │   │   │   └── RequestedSellerTable.jsx (1200 tokens)
    │   │   └── Model/ (1100 tokens)
    │   │   │   └── PlantCardModel/ (1100 tokens)
    │   │   │       └── PurchaseModal.jsx (1100 tokens)
    │   ├── pages/ (11200 tokens)
    │   │   ├── PlantPackages/ (100 tokens)
    │   │   │   └── PlantPackages.jsx
    │   │   ├── Dashboard/ (4000 tokens)
    │   │   │   ├── ActiveSeller/ (100 tokens)
    │   │   │   │   └── ActiveSeller.jsx
    │   │   │   ├── PandingSaller/ (100 tokens)
    │   │   │   │   └── PandingSeller.jsx
    │   │   │   ├── StatCard.jsx
    │   │   │   ├── Analytics.jsx (200 tokens)
    │   │   │   ├── Overview/ (200 tokens)
    │   │   │   │   └── Overview.jsx (200 tokens)
    │   │   │   ├── OrderPieChart.jsx (200 tokens)
    │   │   │   ├── RevenueLineChart.jsx (200 tokens)
    │   │   │   ├── AdminStatistics.jsx (400 tokens)
    │   │   │   ├── user/ (400 tokens)
    │   │   │   │   └── Users.jsx (400 tokens)
    │   │   │   ├── Allplant/ (400 tokens)
    │   │   │   │   └── AllPlant.jsx (400 tokens)
    │   │   │   ├── SellerStatistic.jsx (800 tokens)
    │   │   │   └── CustomerStatistics.jsx (900 tokens)
    │   │   ├── Home/ (700 tokens)
    │   │   │   └── Home.jsx (700 tokens)
    │   │   ├── ShopAllProducts/ (1500 tokens)
    │   │   │   ├── Shop.jsx (700 tokens)
    │   │   │   └── ShopCard.jsx (800 tokens)
    │   │   ├── Blogs/ (700 tokens)
    │   │   │   └── Blog.jsx (700 tokens)
    │   │   ├── ContactUs/ (900 tokens)
    │   │   │   └── ContactUs.jsx (900 tokens)
    │   │   ├── AboutUs/ (1000 tokens)
    │   │   │   └── AboutUs.jsx (1000 tokens)
    │   │   ├── AddToCard/ (1100 tokens)
    │   │   │   └── AddToCard.jsx (1100 tokens)
    │   │   └── Login/ (1200 tokens)
    │   │   │   └── Login.jsx (1200 tokens)
    │   ├── index.css
    │   ├── hooks/ (2800 tokens)
    │   │   ├── useAuth.jsx
    │   │   ├── useAxiosPublic.jsx
    │   │   ├── useSingaleDataApi.jsx (200 tokens)
    │   │   ├── useRole.jsx (200 tokens)
    │   │   ├── useUpdateUserRole.jsx (200 tokens)
    │   │   ├── useGetApi.jsx (200 tokens)
    │   │   ├── useDeleatApi.jsx (300 tokens)
    │   │   ├── useAxiosSecure.jsx (300 tokens)
    │   │   ├── usePostApi.jsx (300 tokens)
    │   │   ├── useUpdateApi.jsx (300 tokens)
    │   │   ├── usePatchStatus.jsx (300 tokens)
    │   │   └── usePatchApi.jsx (300 tokens)
    │   ├── api/ (900 tokens)
    │   │   ├── paginationApi/ (100 tokens)
    │   │   │   └── getApi.jsx
    │   │   ├── uplodeImageImgeBB/ (100 tokens)
    │   │   │   └── uploadImage.js
    │   │   └── data/ (700 tokens)
    │   │   │   ├── userReviowData.js (300 tokens)
    │   │   │   └── category.js (400 tokens)
    │   ├── firebase/ (100 tokens)
    │   │   └── firebase.config.js
    │   ├── layouts/ (400 tokens)
    │   │   ├── MainLayout.jsx (200 tokens)
    │   │   └── DashboardLayout.jsx (200 tokens)
    │   ├── providers/ (1000 tokens)
    │   │   ├── AdminRouts.jsx (200 tokens)
    │   │   ├── SellerRoutes.jsx (200 tokens)
    │   │   └── AuthProvider.jsx (600 tokens)
    │   ├── ThemeProvider/ (200 tokens)
    │   │   └── ThemeProvider.jsx (200 tokens)
    │   └── main.jsx (300 tokens)
    ├── .firebaserc
    ├── public/ (400 tokens)
    │   ├── logo.png
    │   └── vite.svg (300 tokens)
    ├── vite.config.js
    ├── tailwind.config.js
    ├── firebase.json
    ├── .gitignore
    ├── index.html
    ├── eslint.config.js (200 tokens)
    ├── README.md (300 tokens)
    ├── package.json (300 tokens)
    └── .firebase/ (500 tokens)
    │   └── hosting.ZGlzdA.cache (500 tokens)
├── server/ (7300 tokens)
    ├── .gitignore
    ├── server.js
    ├── routes/ (1100 tokens)
    │   ├── authRouts.js
    │   ├── addToCartRoutes.js
    │   ├── paymentRoutes.js (200 tokens)
    │   ├── sellerRequestRoutes.js (200 tokens)
    │   ├── userRoutes.js (200 tokens)
    │   └── plantRoutes.js (300 tokens)
    ├── vercel.json
    ├── config/ (100 tokens)
    │   └── db.js
    ├── middleware/ (600 tokens)
    │   ├── verifyRider.js (200 tokens)
    │   ├── verifyToken.js (200 tokens)
    │   └── verifyAdnim.js (200 tokens)
    ├── models/ (1200 tokens)
    │   ├── Users.js (200 tokens)
    │   ├── Payment.js (200 tokens)
    │   ├── SellerRequest.js (200 tokens)
    │   ├── AddtoCart.js (200 tokens)
    │   └── Plantes.js (400 tokens)
    ├── package.json (200 tokens)
    ├── controllers/ (3600 tokens)
    │   ├── authController.js (300 tokens)
    │   ├── addToCartController.js (300 tokens)
    │   ├── sellerRequestController.js (500 tokens)
    │   ├── paymentController.js (700 tokens)
    │   ├── usersController.js (800 tokens)
    │   └── plantesController.js (1000 tokens)
    └── app.js (300 tokens)
└── README.md (900 tokens)
