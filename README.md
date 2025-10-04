# Universal Image Scaler

A fast, browser-based image scaler that allows users to **upload any image**, scale it up or down while preserving quality, and download the processed image. Built with **FastAPI** for the backend and **React + Vite + TailwindCSS** for the frontend.

Inital 
<img width="3439" height="1264" alt="image" src="https://github.com/user-attachments/assets/350d8104-fee7-4bbe-9a5d-2d6da1849dfc" />

After Scaling up by 1.5X

<img width="3434" height="1264" alt="image" src="https://github.com/user-attachments/assets/e9eb552a-ab0d-49db-a92b-cbebe063a838" />

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

```
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
```


## ⚡ Instructions to Setup

### 1️⃣ Backend

```bash
cd backend
python -m venv venv
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
