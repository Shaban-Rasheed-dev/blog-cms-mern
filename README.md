# Blog CMS with AI Summarization

A full-stack Content Management System (CMS) blog application built with **Node.js, Express.js, EJS, and MongoDB** (MVC architecture). Features an AI-powered post summarization system integrated with **Ollama Cloud**, along with a complete admin dashboard for managing blog content.

## Features

- 📝 Create, edit, delete, and publish blog posts
- 🤖 AI-powered post summarization using Ollama Cloud API
- 🔐 Admin authentication (JWT/Session-based login)
- 📊 Admin dashboard with post statistics and charts
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
- **AI Integration:** Ollama Cloud API
- **Architecture:** MVC (Model-View-Controller)

## Screenshots

> Add screenshots here after taking them

![Dashboard](./screenshots/dashboard.png)
![All Posts](./screenshots/allposts.png)
![Add Post](./screenshots/addpost.png)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Ollama Cloud API key

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
