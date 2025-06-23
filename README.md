#  Automotive Dealership Website

This is built for the Automotive Website Development Challenge. The goal was to implement a full-stack car dealership site with user login, vehicle browsing, and an inquiry system — based on a Figma design reference.

---

##  Tech Stack

### Frontend:
- **React.js** (using Create React App)
- **CSS** (Vanilla CSS used instead of Tailwind due to setup issues)
- Axios for API calls
- React Router for routing

### Backend:
- **Node.js** + **Express**
- **MongoDB** (via Mongoose)
- JWT Authentication (Login & Register)
- REST API for vehicle data and inquiries

---

## Features Implemented

###  **User Authentication**
- User **Register** with hashed password using bcrypt
- **Login** with JWT token returned from server
- Auth routes tested and functional

###  **Vehicle Browsing**
- Responsive homepage with **Hero**, **Brands**, and **Best Deals**
- Static vehicle list rendered (can easily be extended with MongoDB)

###  **Inquiry System**
- Fully working **Contact Us** form
- Sends data to backend and saves to MongoDB

###  Data Validation & Error Handling
- Both backend and frontend handle invalid or missing inputs
- Frontend gives clear feedback on errors (login, contact, etc.)



##  Project Structure
automotive-website/
├── client/ # React frontend
│ ├── pages/ # Register, Login, Contact
│ ├── components/ # Hero, Deals, Brands, Navbar, Footer
├── server/ # Express backend
│ ├── routes/ # auth.js, inquiry.js, vehicles.js
│ ├── models/ # User.js, Inquiry.js, Vehicle.js
│ └── server.js # Backend entry point


---

##  How to Run Locally

### 1. Clone the Repo
```bash
git clone https://github.com/sshresth52/automotive-website.git
cd automotive-website

Backend setup
cd server
npm install
# Create a .env file:
# MONGO_URI=<your_mongodb_uri>
# JWT_SECRET=myverysecretkey
node server.js


frontend setup
cd client
npm install
npm start


Conclusion
This project was built from scratch in about 4 hours, under time constraints and with full backend + frontend setup. It covers all core challenge requirements:

✅ Authentication
✅ Inquiry system
✅ Vehicle browsing
✅ Responsive UI
✅ Clean folder structure
✅ MongoDB integration

