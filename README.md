Sure, here's the updated description including Redux in the technologies used:

---

## Mady Store - Next.js E-Commerce Store with Firebase Authentication and Stripe Integration

### Overview

This project is a fully functional e-commerce platform built using Next.js, designed to provide a seamless and secure online shopping experience. The application leverages Firebase for user authentication and Stripe for payment processing, ensuring that users can safely and easily purchase a variety of products. The integration of a store API allows for dynamic and up-to-date product listings, enhancing the user experience.

### Key Features

1. **User Authentication with Firebase**:
    - **Secure Login/Signup**: Users can create accounts and log in using Firebase Authentication, ensuring secure and reliable authentication.
    - **Password Management**: Includes features for password reset and account recovery to enhance user convenience.

2. **Product Catalog**:
    - **Dynamic Product Listings**: Products are fetched from a store API, ensuring the catalog is always up-to-date with the latest offerings.
    - **Detailed Product Pages**: Each product has a detailed page with descriptions, images, pricing, and availability information.

3. **Shopping Cart and Checkout**:
    - **Add to Cart**: Users can add multiple items to their shopping cart, with the ability to adjust quantities or remove items.
    - **Seamless Checkout Process**: The checkout process is streamlined and user-friendly, guiding users through the final purchase steps.

4. **Payment Processing with Stripe**:
    - **Secure Payments**: Stripe integration ensures that all payment transactions are secure and compliant with the latest industry standards.
    - **Multiple Payment Options**: Users can pay using various methods supported by Stripe, including credit cards, Apple Pay, and Google Pay.

5. **Order Management**:
    - **Order Confirmation**: Users receive order confirmations via email upon successful purchase.
    - **Order History**: Users can view their past orders and track the status of current orders.

### Technologies Used

- **Next.js**: A React-based framework for building fast, server-rendered web applications with optimized performance and SEO.
- **Firebase Authentication**: Provides robust and secure authentication mechanisms, including email/password and OAuth providers.
- **Stripe**: A leading payment gateway that offers secure and reliable payment processing services.
- **Redux**: A predictable state container for JavaScript apps, helping to manage and centralize the application state.
- **Store API**: A custom API for fetching product data, ensuring the product catalog is dynamic and current.

### Installation and Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/ashug09/ecommerce_website.git
    cd ecommerce_website
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:
    - Create a `.env.local` file in the root of your project.
    - Add your Firebase and Stripe credentials, along with any other necessary environment variables.

4. **Run the Development Server**:
    ```bash
    npm run dev
    ```

5. **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

### Conclusion

This Next.js e-commerce store is a robust and scalable solution for online retail, combining secure user authentication, efficient payment processing, and dynamic product management. Whether you are looking to launch a new online store or enhance an existing one, this project provides a solid foundation for building a high-quality e-commerce platform.

---
