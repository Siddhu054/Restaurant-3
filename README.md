# Restaurant Management System

A comprehensive restaurant management system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that helps restaurant owners manage their operations efficiently.

## Features

### 1. Dashboard

- Real-time revenue tracking
- Order status monitoring
- Daily, weekly, and monthly statistics
- Visual data representation with charts

### 2. Order Management

- Real-time order tracking with status updates
- Timer functionality for order processing
- Chef assignment system
- Order status workflow (Processing → Done → Served)
- Support for different order types (Dine-in, Takeaway)
- Swipe gestures for quick actions

### 3. Table Management

- Dynamic table creation and management
- Table status tracking (Available, Occupied)
- Table assignment for dine-in orders
- Real-time table status updates

### 4. Menu Management

- CRUD operations for menu items
- Category-based organization
- Price management
- Item availability control

### 5. Chef Management

- Chef profile management
- Order assignment system
- Performance tracking
- Real-time order status updates

## Tech Stack

### Frontend

- React.js
- Redux for state management
- Axios for API calls
- CSS3 for styling
- Chart.js for data visualization

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Socket.io for real-time updates

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Siddhu054/Restaurant-3.git
cd Restaurant-3
```

2. Install dependencies for both frontend and backend:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:

```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm start
```

## API Endpoints

### Authentication

- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Orders

- GET `/api/orders` - Get all orders
- POST `/api/orders` - Create new order
- PUT `/api/orders/:id` - Update order status
- PUT `/api/orders/:id/assign-chef` - Assign chef to order

### Tables

- GET `/api/tables` - Get all tables
- POST `/api/tables` - Create new table
- PUT `/api/tables/:id` - Update table status

### Menu

- GET `/api/menu` - Get all menu items
- POST `/api/menu` - Add new menu item
- PUT `/api/menu/:id` - Update menu item
- DELETE `/api/menu/:id` - Delete menu item

### Chefs

- GET `/api/chefs` - Get all chefs
- POST `/api/chefs` - Add new chef
- PUT `/api/chefs/:id` - Update chef details

## Features in Detail

### Order Management

- Real-time order tracking with automatic timer
- Status updates (Processing → Done → Served)
- Chef assignment system
- Support for different order types
- Swipe gestures for quick actions
- Order history tracking

### Table Management

- Dynamic table creation
- Real-time status updates
- Table assignment for dine-in orders
- Table history tracking

### Dashboard

- Real-time revenue tracking
- Order status monitoring
- Visual data representation
- Daily, weekly, and monthly statistics

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Siddhu054 - [GitHub Profile](https://github.com/Siddhu054)

Project Link: [https://github.com/Siddhu054/Restaurant-3](https://github.com/Siddhu054/Restaurant-3)
