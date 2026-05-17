 # Smart Leads Dashboard

A full-stack Lead Management Dashboard built using Next.js, Express.js, MongoDB, and TypeScript.

---

# Live Demo

## Frontend
https://your-frontend-url.onrender.com

## Backend API
https://smart-leads-dashboard-lb0c.onrender.com

---

# Features

## Authentication
- User Login
- JWT Authentication
- Protected Dashboard
- Logout Functionality

## Lead Management
- Create Leads
- Fetch Leads
- Delete Leads
- Search Leads
- Filter by Status
- Filter by Source
- Pagination
- CSV Export

## Dashboard Features
- Responsive UI
- Loading States
- Debounced Search
- Real-time API Integration

---

# Tech Stack

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Deployment
- Render
- GitHub

---

# Folder Structure

```bash
smart-leads-dashboard/
│
├── frontend/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.ts
│
└── README.md
```

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/Abhichidrala/smart-leads-dashboard.git
```

---

## Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

---

# Environment Variables

Create `.env` file inside backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# Run Locally

## Start Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```txt
http://localhost:3000
```

---

# API Endpoints

## Authentication Routes

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

# Lead Routes

### Get Leads

```http
GET /api/leads
```

### Create Lead

```http
POST /api/leads
```

### Get Lead By ID

```http
GET /api/leads/:id
```

### Update Lead

```http
PUT /api/leads/:id
```

### Delete Lead

```http
DELETE /api/leads/:id
```

---

# Implemented Features

- Authentication System
- MongoDB Integration
- Lead CRUD APIs
- Dashboard UI
- Search & Filters
- Pagination
- CSV Export
- Debounced Search
- Loading States
- Protected Routes
- API Integration
- Deployment Setup

---

# Future Improvements

- Edit Lead Feature
- Role-Based Access
- Toast Notifications
- Analytics Dashboard
- Dark Mode
- Better Error Handling

---

# Author

Abhilash
