# 📘 MapReduce Assignment 2

This project demonstrates the core concepts of the **MapReduce** programming model using **HTML**, **JavaScript**, and **Tailwind CSS**, with two separate interfaces:

### 🔹 Text Input Version  
### 🔹 File Upload Version  

Both versions apply **MapReduce Word Count** on two different data inputs.

Live Demo:  
👉 **http://rabiulawalshuvo.me/MapReduce-Assignment-2/**

---

## 📁 Project Overview

This project contains **two fully functional web applications**:

---

### ✅ **1. index.html – Text Input MapReduce**
Users can manually enter two blocks of text.  
The application then performs:

- **Map:** extract words  
- **Reduce:** count word frequency  

All processing happens **client-side** with JavaScript.

---

### ✅ **2. index.html – File Upload MapReduce**
Users upload **two `.txt` files**.  
JavaScript reads the content using the File API, combines both files, and performs MapReduce on the merged text.

The app is fully responsive and optimized for mobile.

---

## 🧠 How MapReduce Works Here

### 🔹 **MAP Phase**
Split the text into words and assign an initial count:

```js
const words = text.toLowerCase().match(/\b[a-z0-9]+\b/g) || [];
```

---

### 🔹 **REDUCE Phase**
Aggregate duplicate words:

```js
words.forEach(word => {
    counters[word] = (counters[word] || 0) + 1;
});
```

---

## 📁 Project Structure

```
MapReduce-Assignment-2/
│
├── index.html           # Text input version
├── file-upload/
│   └── index.html      # File upload version
└── README.md            # Documentation file
```

---

## 🧩 Key Code Snippets

### ✨ **MapReduce Logic**

```js
function mapReduce(text) {
    const words = text.toLowerCase().match(/\b[a-z0-9]+\b/g) || [];
    const counters = {};

    words.forEach(word => {
        counters[word] = (counters[word] || 0) + 1;
    });

    return counters;
}
```

---

## 📱 Mobile Responsive Design

This project uses **TailwindCSS** to ensure a smooth experience across:

- Phones  
- Tablets  
- Desktops  

Example styling:

```html
<div class="max-w-3xl mx-auto p-4 space-y-6">
```

---

## 🚀 How to Run the Project

### Option A – Open Directly (index.html works offline)
Just open `index.html` in any browser.

### Option B – Use Live Server (recommended for file uploads)
File uploads require a server due to browser security.

Run using VS Code:

```
Right-click → Open with Live Server
```


## 🌟 Future Improvements

- Add bar chart visualization of word frequencies  
- Add stopwords filtering  
- Add drag-and-drop upload UI  
- Allow exporting results as `.txt`  

---

## 👨‍💻 Author

**MD Rabiul Awal Shuvo**  
Full-Stack Developer & Data Science Enthusiast  

🔗 Portfolio: http://rabiulawalshuvo.me  
🔗 GitHub: https://github.com/DS-Popeye  

---

