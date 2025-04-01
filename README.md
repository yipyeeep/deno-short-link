# 🦕 Deno Link Shortener  

*A zero-dependency, realtime URL shortener built with Deno & TypeScript*  

[![Deno](https://img.shields.io/badge/Deno-464647?style=for-the-badge&logo=deno&logoColor=white)](https://deno.land)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)  
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)  

**🚀 Live Demo**: [https://deno-short-link.deno.dev](https://deno-short-link.deno.dev)  
**📦 Repository**: [github.com/yipyeeep/deno-short-link](https://github.com/yipyeeep/deno-short-link)  

---

## 📌 Overview  

A minimalist, dependency-free URL shortener built with:  
✔ **100% Deno** (no Node.js/npm)  
✔ **Pure TypeScript** (strict mode)  
✔ **Web Platform APIs** (no frameworks)  

Developed as part of [Fireship's Deno Course](https://fireship.io/courses/deno/) between **March 2-13, 2025**  

---

## ✨ Features  

- **Zero Dependencies**  
  Uses only Deno's built-in modules  
- **Realtime Link Creation**  
  Generate short URLs instantly  
- **Deno KV Storage**  
  Built-in key-value database  
- **TypeScript Patterns**  
  Generics, discriminated unions, and strict typing  

---

## 🛠️ Tech Stack  

| Component       | Technology              |
|----------------|-------------------------|
| Backend        | Deno HTTP Server        |
| Database       | Deno KV (built-in)      |
| Frontend       | DOM APIs + CSS          |
| Deployment     | Deno Deploy             |

---

## ⚡ Quick Start  

1. **Install Deno**:  
   ```sh
   curl -fsSL https://deno.land/x/install/install.sh | sh
   ```

2. **Run Locally**:  
   ```sh
   deno run --allow-net --allow-read --allow-write src/main.ts
   ```

3. **Access App**:  
   Visit `http://localhost:8000`  

---

## 📂 Project Structure  

```
deno-short-link/
├── src/
│   ├── main.ts        # Server entry point
│   ├── types/         # TypeScript interfaces
│   ├── utils/         # Shortening logic
│   └── static/        # Frontend assets
├── README.md          # This file
└── deno.json          # Deno config
```

---

## 📚 Development Notes  

**Why No Dependencies?**  
- Master core Web Platform APIs  
- Understand Deno's built-in capabilities  
- Avoid dependency bloat  

**Key Learnings**:  
✔ Deno's native HTTP server  
✔ TypeScript advanced patterns  
✔ Deno KV for persistence  

---

## 🕰️ Project Timeline  

| Date        | Milestone                |
|-------------|--------------------------|
| Mar 2, 2025 | Project started          |
| Mar 10, 2025| Core functionality ready |
| Mar 13, 2025| Deployed to Deno Deploy  |

---

## 📜 License  

MIT © 2025 - [yipyeeep](https://github.com/yipyeeep)  

---

*"No npm, no problem."* 🦕💨