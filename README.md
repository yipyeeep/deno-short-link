# 🔗 Deno Link Shortener  

*A zero-dependency, realtime URL shortener built with Deno & TypeScript*  

![Deno](https://img.shields.io/badge/Deno-464647?style=for-the-badge&logo=deno&logoColor=white)  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)  
![Web Platform APIs](https://img.shields.io/badge/Web_APIs-FF3E00?style=for-the-badge)  

**🚀 Live Demo:** [https://shortlink.deno.dev](https://shortlink.deno.dev)  

---

## 📝 Overview  

This project is a **complete web app** built with Deno, designed to:  
✅ Master **TypeScript** and **Web Platform APIs** without third-party dependencies  
✅ Create **realtime, shareable short links** (like Bit.ly)  
✅ Learn **advanced Deno patterns** from [Fireship's Deno Course](https://fireship.io/courses/deno/)  

Developed between **March 2–13, 2025**, this project was coded first and documented later to focus on core concepts.  

---

## ✨ Features  

- **Zero Dependencies**  
  Pure Deno + TypeScript + Web APIs.  
- **Realtime Link Shortening**  
  Create and share short URLs instantly.  
- **Minimalist Architecture**  
  No frameworks—just modern web standards.  
- **TypeScript-Centric**  
  Advanced patterns like discriminated unions and generics.  

---

## 🛠️ Tech Stack  

- **Backend**: Deno (`http/server`, `oak`-free routing)  
- **Frontend**: HTML5 + DOM APIs (no React/Vue)  
- **Database**: Deno KV (built-in key-value store)  
- **TypeScript**: Strict mode + advanced types  

---

## ⚡ Quick Start  

1. **Install Deno**:  
   ```sh
   curl -fsSL https://deno.land/x/install/install.sh | sh
   ```

2. **Run the App**:  
   ```sh
   deno run --allow-net --allow-read --allow-write src/app.ts
   ```

3. **Open in Browser**:  
   Visit `http://localhost:8000`  

---

## 📂 Project Structure  

```  
src/  
├── app.ts          # Entry point (server + routing)  
├── lib/  
│   ├── types.ts    # TypeScript interfaces  
│   └── utils.ts    # URL shortening logic  
├── static/         # HTML/CSS/JS  
└── README.md       # You are here  
```  

---

## 📚 Learnings  

🔥 **Key Takeaways**:  
- Deno’s native HTTP server  
- TypeScript generics for API routes  
- Deno KV for persistence  
- How to avoid `node_modules` forever  

---

## 📅 Retrospective  

**Mar 2–13, 2025**:  
- Built the core in 10 days  
- Deployed to Deno Deploy  
- Documented post-completion  

---

## 🙌 Credits  

- Instructor: [Fireship](https://fireship.io)  
- Inspired by: Bit.ly  
- Motivation: Mastering the **Web Platform**  

--- 

**🔐 License**: MIT  
**🐛 Issues**: PRs welcome!  

--- 

*"No dependencies, no distractions—just Deno."* 🦕