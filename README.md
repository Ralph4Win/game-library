# Game Library

This is a simple Game Library web application built as part of the module **Prototyping WIN (2025-FS)** at ZHAW. The app was implemented using modern web technologies such as **SvelteKit**, **Svelte 5 (Runes Mode)**, **MongoDB** and **Bootstrap 5**. The goal of the project was to demonstrate the ability to build a dynamic, interactive prototype with a backend and frontend, including CRUD functionality and responsive UI.

## Purpose

I created this page to share insights into my gaming experiences and to keep track of the games I’ve played, enjoyed, and plan to explore in the future. It serves as a personal space to reflect on my gaming journey and as a wishlist for titles I’m excited to dive into.

## Features

- Landing page with logo and project description
- List of all games in a clean, sortable table layout
- Add new games with:
  - Title (required)
  - Genre(s) (multi-genre capable)
  - Platform (required)
  - Rating (slider with live value display)
  - Played (checkbox)
  - Comments
  - Image URL
- View game details on a dedicated game detail page
- Edit games (with live rating slider update)
- Delete games (with confirmation dialog)
- Platforms management:
  - List all platforms
  - Add new platforms
  - Delete platforms
- Search games by title
- Filter games by:
  - Genre (multi-genre supported)
  - Played status
  - Platform
- Sort games by clicking on table headers (Title, Genre, Platform, Rating, Played)
- Responsive layout
- Dark theme (custom styling)

## Technologies Used

- Svelte 5 (Runes Mode)
- SvelteKit ^2.x
- MongoDB Node Driver ^6.x
- Vite ^5.x
- Bootstrap 5
- JavaScript (ES6+)
- HTML / CSS

## Project Setup

### 1. Clone repository and install dependencies


git clone <your-repository-url>
cd game-library
npm install


2. Environment Variables
Create a .env file in the root directory and configure your MongoDB connection string:

DB_URI=your-mongodb-connection-string
Example:

DB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority

3. Run in Development Mode

npm run dev
Then open in your browser:

http://localhost:5173

4. Build for Production

npm run build

5. Preview Production Build

npm run preview


Deployment
The project is prepared for deployment with Vercel:

1. Push your project to GitHub.
2. Connect the GitHub repo in vercel.com.
3. Set the environment variable DB_URI in the Vercel project settings.
4. Trigger a deploy. The project will be live on your Vercel domain.


Folder Structure
/src/routes/games — all pages and logic related to games (listing, adding, editing, viewing)

/src/routes/platforms — all pages and logic related to platforms

/static/images/logo.jpg — project logo used on landing page

/documentation — project documentation (to be added for submission)


Notes and Custom Features Added Beyond Basics
In addition to the base Movie Watchlist sample project, I have extended the functionality with:

Full platforms management

Multi-genre support (games can have multiple genres, filtering works correctly)

Sortable table columns

Filter toggle (Show/Hide filters)

Search + filter + sort combined

Responsive dark theme layout

Rating slider with live display in both Add and Edit forms

Game detail page styled with image and game info

Confirmation dialogs on deleting games

Landing page with logo and project description

Clean user experience following UI design guidelines (from module)

Manual testing and small usability refinements

Known Limitations
No authentication (could be added as a future improvement)

No image upload, only URL input for images

How To Test
Add new games and platforms → check that they appear correctly

Edit existing games → check that updates are saved

Delete games and platforms → test confirmation dialogs

Use search, filters and sorting → validate UI responsiveness

Responsive check on desktop and mobile



