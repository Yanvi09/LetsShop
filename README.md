🛍️ LetShop – MERN E-commerce Platform

A React-based e-commerce web application focused on clean UI structure, predictable state management, and real-world user flows such as authentication, product browsing, and cart handling.

 🎯 Focus Areas

- Modular React component architecture for scalability  
- Clear state flow using React hooks  
- API-driven UI with proper loading and error states  
- Separation of concerns between UI, logic, and data handling  
- Clean, readable code suitable for production environments  


🚀 Features

- User Authentication – Secure signup/login with JWT
- Product Catalog – Browse products with category and search support
- Shopping Cart – Add/remove items with live cart updates
- Order Management – Place orders and view purchase history
- Responsive UI – Clean React frontend with Tailwind CSS for seamless UX

🛠️ Tech Stack

Frontend: React.js, React Router, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Auth: JWT Authentication

Version Control & Hosting: GitHub (future: deployment planned)

## Maintenance

This repository is maintained for learning and portfolio purposes.


📂 Project Structure
```
letshop/
├── client/         # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Home, Cart, Login, etc.
│   │   └── App.js
├── server/         # Node.js + Express backend
│   ├── models/     # MongoDB schemas (User, Product, Order)
│   ├── routes/     # REST API endpoints
│   ├── controllers/ # Business logic
│   └── server.js
└── README.md
```
⚡ Installation & Setup

1>Clone the repo

git clone https://github.com/Yanvi09/LetsShop.git
cd LetShop


2>Install dependencies

cd client && npm install
cd ../server && npm install


3>Setup environment variables
Create .env inside server/

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000


4>Run the app

->Start backend

cd server && npm run dev


->Start frontend

cd client && npm start


Open http://localhost:3000

🎯 Roadmap

✅ Core shopping flow (auth, catalog, cart, orders)

🔄 Admin dashboard (add/remove products, manage orders)

🔄 Deployment (planned: Render/Netlify combo)

🔄 Payment Gateway integration (Stripe/PayPal)

👨‍💻 Author

Anvi Yadav  
Final-year Computer Science student focused on building clean, maintainable React applications and understanding real-world frontend architecture.
Linkedln:  www.linkedin.com/in/anvi-yadav    
