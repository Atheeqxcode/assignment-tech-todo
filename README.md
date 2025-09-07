# To-Do Manager

## Tech Stack
- **Frontend:** React, Material-UI, Vite
- **Backend:** Node.js, Express, MongoDB, Mongoose, Zod
- **Styling:** Custom CSS, Material-UI Theme (Salmon)
- **Icons:** Unicode emoji

## How to Run

### Backend
1. Go to the `server` directory:
   ```sh
   cd server
   npm install
   node src/server.js
   ```
   - Ensure MongoDB is running locally (`mongod`).
   - Configure `.env` with:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/todo_manager
     ```

### Frontend
1. Go to the `client` directory:
   ```sh
   cd client
   npm install
   npm run dev
   ```
2. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Features
- Add, edit, delete, and complete tasks
- Responsive, modern salmon-themed UI
- 3x3 grid view for tasks
- Toast notifications for all actions
- History page for completed notes
- Navbar and footer always visible
- All actions update instantly in the UI

---
Made with ❤️ By Atheeq.
