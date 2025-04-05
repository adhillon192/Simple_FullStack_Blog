# 📝 Web2 Blog Manager

A simple full-stack blog management system built with **HTML/CSS/JS (Bulma)** on the frontend, **Express.js** on the backend, and **PostgreSQL** as the database, running inside Docker.

Users can:
- ✅ Add blog posts
- 📄 View them on a public blog page
- 🛠️ Manage, edit, and delete posts on an admin dashboard

---

## 📁 Project Structure

```plaintext
web2-blog-app/
├── backend/               # Express.js backend
│   ├── server.js
│   ├── db.js
│   └── package.json
├── frontend/              # Frontend HTML, JS and CSS
│   ├── addpost.html
│   ├── blog.html
│   ├── managepost.html
│   ├── addpost.js
│   ├── index.js
│   └── managepost.js
├── Dockerfile             # Docker config for backend
├── docker-compose.yml     # Runs backend + PostgreSQL
└── README.md
```
## 🚀 Features (Developer Perspective)

### 🔧 Backend (Express.js + PostgreSQL)

- Implements a full RESTful API:
  - `POST /api/posts`: Add a new blog post
  - `GET /api/posts`: Retrieve all blog posts
  - `PUT /api/posts/:id`: Update an existing post by ID
  - `DELETE /api/posts/:id`: Delete a post by ID
- Uses `pg` (node-postgres) to interface with PostgreSQL
- Input validation and error handling for each route
- Modular structure (`server.js`, `db.js`)
- Dockerized backend with Dockerfile and exposed port

### 🎨 Frontend (HTML + Vanilla JS + Bulma CSS)

- `addpost.html`: Form for adding new posts with success notification and "Clear" button
- `blog.html`: Displays all blog posts or shows a "No posts yet" message
- `managepost.html`: Admin panel to list, edit, and delete blog posts
- Uses `fetch()` API to connect to backend endpoints
- Dynamically renders HTML based on API responses
- Clean UI styling with [Bulma](https://bulma.io/)

### 🐳 Docker + PostgreSQL Integration

- `docker-compose.yml` to spin up both the backend and database
- PostgreSQL container initialized with:
  - Database: `blogdb`
  - User: `postgres`
  - Password: `password`
- Backend connects via Docker service name (`db`)
- Uses volume to persist PostgreSQL data

---

## 🐳 Getting Started with Docker

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/web2-blog-app.git
cd web2-blog-app
```
### 2. Start with Docker Compose
```bash
docker-compose up --build
```
This will:

   - Start the Express backend on http://localhost:3000

   - Start the PostgreSQL database container
### 3. Create the posts Table
-Once the database is running, open a new terminal and run:
```bash
docker exec -it <db_container_id> psql -U postgres -d blogdb
```
```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL
);
```
## 💻 Local Development (Without Docker)

-You can run the backend manually without Docker:
```bash
cd backend
npm install
npm start
```
Make sure you have PostgreSQL running locally with the same credentials.

## 📬 API Endpoints

The backend provides a simple RESTful API for managing blog posts:

| Method   | Endpoint           | Description               |
|----------|--------------------|---------------------------|
| `POST`   | `/api/posts`       | Add a new blog post       |
| `GET`    | `/api/posts`       | Fetch all blog posts      |
| `PUT`    | `/api/posts/:id`   | Update a post by ID       |
| `DELETE` | `/api/posts/:id`   | Delete a post by ID       |

Each endpoint expects and returns JSON. Example structure for creating or updating a post:

```json
{
  "title": "My Blog Title",
  "content": "This is the blog content."
}
```
## 🧪 How to Test the App

### ✅ Add a Post
- Open `frontend/addpost.html` in your browser
- Fill in the title and content fields
- Click the **"Add Post"** button
- A green **"Added Successfully"** message should appear
- Use the **"Clear"** button to reset the form

### 📄 View Posts
- Open `frontend/blog.html`
- You should see all the blog posts listed
- If no posts exist, a **"No posts yet"** message will appear

### 🛠️ Manage Posts
- Open `frontend/managepost.html`
- Each post should have **Edit** and **Delete** buttons
- Click **Edit** to open a pre-filled update form, make changes, and click **"Update Post"**
- Click **Delete** to remove the post (you'll be prompted to confirm)

### 🧾 Verify Database
- Use `psql` inside the Docker container or connect externally
- Check that the `posts` table is being modified with your changes
  
## 📌 Technologies Used

### 🖼️ Frontend
- **HTML5** – Semantic structure for markup
- **Bulma CSS** – Lightweight, responsive styling framework
- **Vanilla JavaScript** – DOM manipulation and `fetch()` for API integration

### ⚙️ Backend
- **Node.js + Express.js** – Web server and API routing
- **pg** – PostgreSQL client library for Node.js

### 🐘 Database & Containerization
- **PostgreSQL** – Relational database for storing blog posts
- **Docker** – Containerizes the backend and database for easy deployment
- **Docker Compose** – Manages multi-container setup (backend + DB)

## 🧠 Author

Made with ❤️ by Amardeep Singh Dhillon and Helga  
**COMP 3512 – Web Development II**  
**Mount Royal University, 2025**

