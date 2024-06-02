# 🍔 Food Delivery App

## Description

Food Delivery App is a modern web application designed to facilitate food delivery services. With an intuitive and user-friendly interface, users can easily browse restaurants, place orders, make payments, and track their deliveries in real-time. Leveraging the MERN stack (MongoDB, Express.js, React, and Node.js), Food Delivery App offers robust performance and scalability for managing food orders efficiently. The project integrates Stripe for secure online payments and provides a comprehensive admin dashboard for managing orders, restaurants, and menus.

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

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## Acknowledgments

- 🙏 Thanks to the developers of Stripe for their excellent payment processing API.
- 🙏 Special thanks to the contributors of the MERN stack components.
- 🙏 Thanks to Bootstrap for providing a responsive and customizable UI framework.
