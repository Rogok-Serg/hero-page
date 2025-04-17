# 🕸️ Spider-Man Hero Page

Адаптивна hero-сторінка, натхненна стилістикою Spider-Man: No Way Home. Проєкт створено з фокусом на сучасний дизайн, анімації, mobile-first підхід і оптимізацію для різних екранів.

![Hero Screenshot](./assets/preview.webp) <!-- Видали, якщо не маєш зображення -->

## 🚀 Технології

- ⚡ [Vite](https://vitejs.dev/) — сучасний збирач фронтенду
- 🎨 [Tailwind CSS v3.4.17](https://tailwindcss.com/) — утилітарний CSS-фреймворк
- 🌐 Vanilla JavaScript — основна логіка та ініціалізація
- 🔠 Google Fonts: `Bebas Neue` (заголовки), `Inter` (основний текст)
- ✨ CSS-анімації: fadeIn, slideUp, transition
- 📱 Адаптивність з mobile-first підходом
- 🧱 Простий, зручний файловий поділ із Vite

## 📂 Структура проєкту

📦 your-project/ ├── assets/ │ ├── background_spiderman.webp │ ├── logo-spider.svg │ └── text_spider-man.webp ├── index.html ├── tailwind.config.js ├── vite.config.js ├── package.json ├── src/ │ ├── style.css │ └── main.js └── README.md

## 🎯 Особливості реалізації

- **Адаптивність:**

  - Mobile-first верстка з використанням Tailwind breakpoints (`sm:`, `md:`, `lg:`)
  - Навігаційне меню приховується на мобільних через media query
  - Відступи (`padding-left`/`right`) задаються через `px-4 sm:px-6 md:px-8`

- **Анімації:**

  - `fadeIn` для зображень
  - `slideUp` для тексту
  - Плавні переходи при hover
  - Всі ефекти описані у CSS (`@keyframes`)

- **Шрифти:**
  - `Bebas Neue` — використовується для заголовків
  - `Inter` — основний текст
  - Підключення здійснено через `<link>` у `<head>` та класи `font-bebas`, `font-inter`

## 🛠️ Установка та запуск

1. **Клонувати репозиторій:**
   ```bash
   git clone https://github.com/your-username/spiderman-hero-page.git
   cd spiderman-hero-page
   npm install
   npm run dev
   npm run build
   ```
