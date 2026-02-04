# 🚀 Smart Digital Queue Tracker

## 📌 Project Overview
The **Smart Digital Queue Tracker** is a full-stack web application designed to manage queues intelligently using **priority-based scheduling and time-slot allocation**. Unlike traditional queue systems, this project reduces waiting time and overcrowding by assigning users a digital slot and serving them based on priority levels.

This system is suitable for **hospitals, banks, government offices, colleges, and service centers**.

---

## 🌟 Key Features
- ✅ Digital queue registration
- ⏳ Automatic time-slot allocation
- 🚑 Priority-based queue handling (Emergency, Senior, Normal)
- 🔄 Real-time queue updates
- 🧑‍💼 Admin-controlled serving system
- 💾 Persistent data storage using MongoDB

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Tools
- VS Code
- GitHub

---

## 📂 Project Structure
Smart-Digital-Queue-Tracker/
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── backend/
│ ├── server.js
│ ├── models/
│ │ └── SlotQueue.js
│ └── routes/
│ └── queueRoutes.js
│
├── package.json
├── .gitignore
└── README.md


---

## ⚙️ How It Works
1. User enters name and selects priority
2. System assigns a digital token and time slot
3. Queue is sorted based on priority and token
4. Admin serves users one by one
5. Queue updates in real time

---

## ▶️ How to Run the Project

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Steps
```bash
# Install dependencies
npm install

# Start backend server
npm start


Open frontend/index.html in a browser

Make sure MongoDB is running on 127.0.0.1:27017

🧪 Sample Use Case

Emergency patients are served first

Senior citizens are prioritized over normal users

Users know their expected slot time in advance

🎯 Advantages

Reduces physical crowding

Saves time for users

Improves service efficiency

Scalable and user-friendly

Real-world applicable system

🚀 Future Enhancements

SMS / Email notifications

AI-based waiting time prediction

Admin authentication

Analytics dashboard

Cloud deployment

👩‍💻 Author

Ancy Antony A L
B.Tech – Artificial Intelligence and Data Science
St. Joseph’s College of Engineering

📜 License

This project is licensed under the MIT License.

⭐ If you found this project useful, give it a star!
