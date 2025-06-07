# Learning Management System (LMS) - Django & React & SQL (PostgreSQL) & AWS

A full-stack Learning Management System built using **Django** for the backend and **React** for the frontend. 
This project allows instructors to create courses, manage content, and track student progress, while students can browse, enroll, and engage in courses.

## Deployment

Frontend :- https://gleaming-arithmetic-7ca593.netlify.app/

backend :- https://mycode-lms-api.up.railway.app/

Admin Panel :- https://mycode-lms-api.up.railway.app/admin

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

##Updated Requirements
🔹 User Roles and Permissions
1.Admin

Manage all users (students, instructors)

Approve or reject courses

Access platform-wide analytics

2. Instructor

Register and log in securely

Create, update, and delete courses

Upload video content and course materials

Monitor enrolled students

View course analytics (views, enrollments)

3. Student

Register and log in securely

Browse and search for available courses

Enroll in free or paid courses

Stream video lessons

Track course progress

Add reviews or comments (if implemented)

🔹 Functional Requirements

1. Authentication & Authorization

JWT-based login and registration

Role-based access control (RBAC)

2. Course Management

Create, edit, and delete courses (instructors)

List courses publicly for browsing (students)

3. Video Upload and Streaming

Upload videos via instructor dashboard

Video streaming for students with secure access

4. Enrollment System

Allow students to enroll in courses

Prevent duplicate enrollments

5. Dashboard Features

Separate dashboards for instructors and students

Overview of courses, progress, and stats

6. API Integration

Backend exposed via Django REST Framework

Frontend consumes APIs using Axios

🔹 Non-Functional Requirements
Responsive Design

Accessible on desktop, tablet, and mobile

Scalability

Modular backend (Django apps)

Component-based frontend (React)

Security

Token-based authentication (JWT)

API route protection

Performance

Optimized frontend rendering with React

Lazy loading of components where possible

Maintainability

Clean project structure with version control (Git)

Clear API contracts and code comments

📸 Screenshots

-> Registration page
![image](https://github.com/user-attachments/assets/fc1eb683-f55f-456b-981f-636de1ae4999)

->Login Page
![image](https://github.com/user-attachments/assets/a8e28123-314b-4026-911e-2650e3ba0eb6)

->Logout Page
![image](https://github.com/user-attachments/assets/ef0bd7d3-3924-48f1-89ad-215f0c429775)

-> Forgot Password Page
![image](https://github.com/user-attachments/assets/796edd6e-74f4-4a1f-b6af-6ca34aed7603)

-> Reset Password Email 
![image](https://github.com/user-attachments/assets/b146900d-811b-4827-b2d5-7301c43d7ea7)

-> Create New Password Page
![image](https://github.com/user-attachments/assets/0539a6a0-19d8-441c-a414-e626445bad79)


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

📌 Future Improvements
🧪 Testing
Django: python manage.py test

React: You can integrate Jest and React Testing Library for component testing.

Instructor analytics dashboard

Quiz and assessment module
