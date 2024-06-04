# 🍔 Food Delivery App

## Description

Food Delivery App is a modern web application designed to facilitate food delivery services. With an intuitive and user-friendly interface, users can easily browse restaurants, place orders, make payments, and track their deliveries in real-time. Leveraging the MERN stack (MongoDB, Express.js, React, and Node.js), Food Delivery App offers robust performance and scalability for managing food orders efficiently. The project integrates Stripe for secure online payments and provides a comprehensive admin dashboard for managing orders, restaurants, and menus.

## Live Demo
- https://mypetpuja.netlify.app/

## Features

- 🍕 **Restaurant Listings**: Users can browse, search, and view restaurant listings.
- 🛒 **Order Placement**: Users can add items to their cart and place orders seamlessly.
- 🚚 **Real-time Tracking**: Track order status and delivery in real-time on a live map.
- 💳 **Online Payments**: Secure online payments using Stripe integration.
- 👤 **User Authentication**: Register, log in, and manage user accounts securely.
- 📋 **Admin Dashboard**: Comprehensive admin dashboard for managing orders, restaurants, and menus.
- 🍽️ **Menu Management**: Admins can add, update, and delete food items from restaurant menus.
- 📦 **Order Management**: Admins can view, update, and fulfill incoming orders efficiently.

## Technologies Used

- **Frontend**: React, CSS (or any styling framework used)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Integration**: Stripe
- **UI Framework**: Bootstrap (or any other UI framework used)

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- 🟢 Node.js
- 🍃 MongoDB
- 📦 npm (Node Package Manager) or yarn

### Instructions

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Prathamtamboli2309/FoodDeliApp
    cd food-delivery-app
    ```

2. **Install backend dependencies:**

    ```sh
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**

    ```sh
    cd frontend
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

5. **Run the application:**

    Open two terminal windows or tabs:

    - In the first terminal, start the backend server:

      ```sh
      cd backend
      npm run dev
      ```

    - In the second terminal, start the frontend development server:

      ```sh
      cd frontend
      npm start
      ```

    The application should now be running, with the backend server on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## Usage

1. **🔐 Register/Login**: Create an account or log in with existing credentials.
2. **🍽️ Browse Restaurants**: Explore restaurants and view their menus.
3. **🛒 Place Orders**: Add items to your cart and proceed to checkout.
4. **💳 Make Payments**: Enter payment details securely using Stripe.
5. **🚚 Track Deliveries**: Track the status of your orders in real-time on the live map.


## ScreenShots
![Screenshot (57)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/8c372cd1-cc9b-4afc-97c0-2147ee3f339a)
![Screenshot (58)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/a340455a-2920-42bb-b4c1-f714657cd95a)
![Screenshot (59)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/39050394-da24-4f8a-9889-857928c46392)
![Screenshot (60)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/9781a85c-696a-45ca-a8a8-104457b47735)
![Screenshot (61)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/9bb92aa9-b452-4154-845c-f908cb8a94ae)
![Screenshot (62)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/c77c7f5e-1601-40e9-8d8e-c44a1717b549)
![Screenshot (63)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/2cba211c-5cc4-4c40-8bef-011a2aa319bd)
![Screenshot (64)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/32c78b86-8ecc-4c15-80b7-c8dd84c33c13)
![Screenshot (65)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/ab03bb59-9ec7-4bef-94ce-ed93715cd7a5)
![Screenshot (66)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/87453862-11ed-4c5a-ab63-99973f500eb0)
![Screenshot (67)](https://github.com/Prathamtamboli2309/RealEState/assets/142076673/feee749d-31df-4b44-8d58-dd888fcc875e)


## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## Acknowledgments

- 🙏 Thanks to the developers of Stripe for their excellent payment processing API.
- 🙏 Special thanks to the contributors of the MERN stack components.
- 🙏 Thanks to Bootstrap for providing a responsive and customizable UI framework.
