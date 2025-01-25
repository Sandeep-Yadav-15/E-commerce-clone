# E-commerce Clone

## Description
The E-commerce Clone is a fully responsive and dynamic e-commerce platform. It allows users to explore products by category and price range, search for specific items, and view product details. Key features include user authentication, a shopping cart, and a contact form.

## Features
- **Product Search:** Search for products by name using a dynamic search bar.
- **Category and Price Filters:** Filter products by category (Electronics, Fashion, Home) and price range (Low, Medium, High).
- **Product Details:** View detailed information about each product.
- **Authentication:** Sign up and log in securely using Firebase authentication.
- **Shopping Cart:** Add items to the cart and manage them.
- **Contact Us:** Users can send inquiries via a contact form.

## Setup Instructions

### Prerequisites
- **Node.js** (version 14+)
- **npm** (Node Package Manager)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Sandeep-Yadav-15/E-commerce-clone.git
    ```
2. Navigate to the project folder:
    ```bash
    cd ecommerce-clone
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Running Locally
1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## Deployment

### Deploying to Netlify
1. Build the project:
    ```bash
    npm run build
    ```
2. Drag and drop the `build` folder to the Netlify dashboard or use the Netlify CLI.



## Environment Variables
To enable Firebase authentication, configure your environment variables. Create a `.env` file in the project root and add the following:
```env
 apiKey: "AIzaSyCMxHIvztKSXkAUAMWTmcGIpss3sPof5AM",
  authDomain: "ecommerce-clone-b5c95.firebaseapp.com",
  projectId: "ecommerce-clone-b5c95",
  storageBucket: "ecommerce-clone-b5c95.firebasestorage.app",
  messagingSenderId: "419161581957",
  appId: "1:419161581957:web:72fd73afce56db85677cec",
  measurementId: "G-WPXWNJ9X8L"
```

## Built With
- **React:** Front-end library for building user interfaces.
- **Firebase:** Used for authentication and real-time database integration.
- **CSS:** For styling the application.

## Live Demo
The application is live at: [E-commerce Clone](https://ecommerce-clone-shop.netlify.app/)
