# Ottermap Task - Frontend Developer Internship Assignment

## 🚀 Project Overview
This is a React application built as part of the **Ottermap Frontend Developer Internship Selection Process**. The project includes a **search page** and a **map page** where users can enter their name and mobile number, which is stored and displayed on the map page. The map integrates **OpenLayers** for polygon drawing, editing, and deleting.

---

## 📌 Features
### **1️⃣ Home Page (/)**
- A form with:
  - **Name Input** (Required)
  - **Mobile Number Input** (10-digit validation)
  - **Submit Button**
- Stores the **name** in `localStorage`.
- Navigates to the **Map Page** upon submission.

### **2️⃣ Map Page (/map)**
- Displays the **entered name** in the center header.
- Integrates **OpenLayers** for map functionality.
- Allows users to **draw, edit, and delete polygons** on the map.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Routing:** React Router
- **Map Library:** OpenLayers
- **State Management:** React useState & localStorage
- **Version Control:** Git & GitHub

---

## 🛠️ Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbhishekGoswam1/Ottermap-Task.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Ottermap-Task
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```

---

## 📂 Folder Structure
```
Ottermap-Task/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── InputField.jsx
│   │   ├── Maps.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MapPage.jsx
│   ├── App.jsx
│   ├── index.jsx
│   ├── styles.css
├── package.json
├── README.md
```

---

## 🎯 To-Do & Future Enhancements
- Improve UI with better styling & animations.
- Implement user authentication.
- Allow saving and loading drawn polygons.
- Integrate location search functionality.

---

## 📜 License
This project is for **evaluation purposes only** and is not intended for commercial use.

---

## 👨‍💻 Author
**Abhishek Goswami**  
LinkedIn: [Abhishek Goswami](https://www.linkedin.com/in/abhishek-goswamii)  
GitHub: [Abhishek Goswami](https://github.com/AbhishekGoswam1)

---