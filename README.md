# Learning Management System (LMS) - Django & React

A full-stack Learning Management System built using **Django** for the backend and **React** for the frontend. 
This project allows instructors to create courses, manage content, and track student progress, while students can browse, enroll, and engage in courses.


## 🚀 Features

### Instructor Side:
- Instructor registration and authentication
- Create and manage courses
- Upload course videos and materials
- Track enrolled students

### Student Side:
- Student registration and login
- Browse and search available courses
- Enroll in courses
- Watch lessons and track progress
- Payment Integration
  
- email integration

### Admin Side:
- Django admin panel access
- Manage users and courses

## 🛠️ Tech Stack

**Frontend:**
- React
- React Router
- Axios
- Bootstrap / Tailwind CSS (depends on implementation)

**Backend:**
- Django
- Django REST Framework (DRF)
- PostgreSQL / SQLite (configurable)
- JWT Authentication

## 📂 Project Structure

lms-project/
│
├── backend/ # Django backend
│ ├── api/ # DRF APIs
│ ├── users/ # User auth and roles
│ └── media/ # Uploaded media content
│
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Route pages
│ │ └── services/ # API service handlers
│
└── README.md

bash
Copy
Edit

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Hemil08/Learning-Management-System
cd lms-project
2. Backend Setup (Django)
bash
Copy
Edit
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
3. Frontend Setup (React)
bash
Copy
Edit
cd ../frontend
npm install
npm start
Ensure backend is running on http://localhost:8000 and frontend on http://localhost:3000.

🔐 Authentication
JWT tokens are used for API authentication.

Stored in local storage and attached via Axios interceptors.


📸 Screenshots

-> Registration page
![image](https://github.com/user-attachments/assets/fc1eb683-f55f-456b-981f-636de1ae4999)



📌 Future Improvements
🧪 Testing
Django: python manage.py test

React: You can integrate Jest and React Testing Library for component testing.

Instructor analytics dashboard

Quiz and assessment module
