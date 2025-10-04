# Universal Image Scaler

A fast, browser-based image scaler that allows users to **upload any image**, scale it up or down while preserving quality, and download the processed image. Built with **FastAPI** for the backend and **React + Vite + TailwindCSS** for the frontend.

---

## 🛠️ Features

- Upload JPG, PNG, or other common image formats
- Scale images from **0.1x to 5x**
- High-quality resizing using **Pillow (Python)**
- Real-time processing with a **loading indicator**
- Download the processed image safely
- Fully responsive UI

---

## 📂 Project Structure

image-scaler/
├── backend/
│ ├── main.py
│ ├── utils.py
│ └── requirements.txt
└── frontend/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
├── App.jsx
├── main.jsx
└── index.css


## ⚡ Getting Started

### 1️⃣ Backend

```bash
cd backend
python -m venv venv        # create virtual environment
# Activate it:
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload


### 2️⃣ Frontend
cd ../frontend
npm install
npm run dev