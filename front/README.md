# Личное электронное Резюме

Здесь можно посмотреть саму версию проекта:

http://89.125.25.205:3001/

---

# 🚀 Используемый стек

## Frontend
- Next.js
- TypeScript
- Shadcn UI (для оповещений)

## Backend
- Node.js
- Express
- Open AI
- Nodemailer

---

# 📩 Форма обратной связи

Контакты (форма) реализованы через стандартную форму и работают с API бекенда.

Дополнительно:
- Добавлены валидаторы на невалидные данные
- К комментариям подключен Open AI:
    - исправляет орфографические ошибки
    - делает текст более вежливым

---

# ⚙️ Настройка проекта

## Frontend

Необходимо создать файл:

```bash
/front/.env
```

И добавить переменные:

```env
NEXT_PUBLIC_BACKEND_API=http://localhost:4005
```

---

## Backend

Необходимо создать файл:

```bash
/backend/.env
```

И добавить переменные:

```env
OPENROUTER_API_KEY=

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=
SMTP_PASS=

OWNER_EMAIL=
```

Необходимо указать:
- свои ключи
- почту для отправки
- почту для получения копии сообщений

---

# 🖥️ Запуск проекта

## Frontend

```bash
cd front
npm install
npm run dev
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

---

# 🐳 Docker

В проект добавлен Docker.

Для запуска достаточно выполнить:

```bash
docker compose up -d --build
```

И предварительно установить необходимые переменные окружения.

---

