# Blog CMS with AI Summarization

A full-stack Content Management System (CMS) blog application built with **Node.js, Express.js, EJS, and MongoDB** (MVC architecture). Features an AI-powered post summarization system integrated with **Ollama Cloud**, along with a complete admin dashboard for managing blog content.

## Features

- 📝 Create, edit, delete, and publish blog posts
- 🤖 AI-powered post summarization using Ollama (local LLM - llama3.2)
- 🔐 Admin authentication with Register/Login (JWT/Session-based)
- 🔒 Protected routes for admin panel
- 📊 Admin dashboard with post statistics
- 🔍 Search functionality for posts
- 📄 Pagination for post listings
- 🖼️ Image upload support for posts
- ✍️ Rich text editor for content creation
- 📱 Responsive design

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **View Engine:** EJS
- **Authentication:** JWT / Session-based
- **AI Integration:** Ollama local setup
- **Architecture:** MVC (Model-View-Controller)

## AI Integration (Ollama)

This project uses **Ollama** (running locally) for AI-powered post summarization, using the `llama3.2:latest` model.

### Installing Ollama Locally

1. Download and install Ollama from [ollama.com/download](https://ollama.com/download) (available for Windows, Mac, and Linux)

2. After installation, pull the required model:
```bash
   ollama pull llama3.2:latest
```

3. Run Ollama (it usually starts automatically as a background service, but you can also start it manually):
```bash
   ollama serve
```

4. Verify it's running by visiting `http://localhost:11434` in your browser — you should see "Ollama is running"

5. Make sure your `.env` file points to the local Ollama endpoint (check `.env.example` for the exact variable name)

### Notes
- Ollama must be running locally for the AI summarization feature to work
- The first request to the model may take longer as it loads into memory
- Minimum 8GB RAM recommended for running `llama3.2` smoothly

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Ollama local setup

### Installation

1. Clone the repository

```bash
   git clone https://github.com/Shaban-Rasheed-dev/blog-cms-mern.git
   cd blog-cms-mern
```

2. Install dependencies

```bash
   npm install
```

3. Create a `.env` file in the root directory (copy from `.env.example`) and add your own values:
