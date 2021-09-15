<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center"><strong>S P A C I N G  O U T</strong></h1>

  <p align="center">
  “<strong><em>Spaced repetition</em></strong> is a method of reviewing material at systematic intervals. ... Rather than learning information in a short time period, which can lead to quick forgetting, spaced repetition focuses on <strong><em>long-term retention</em></strong> of new information.”
  <br>
  <br>
  <strong>S P A C I N G  O U T</strong> is an app that makes the power of spaced repetition accessible to students of all types and skill levels through an easy, intuitive UI. The user creates notes that can be turned into flashcards that are used in spaced repetition study. The app then automatically schedules study sessions based on a goal date. 
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ul>
    <li><a href="#mvp-minimum-viable-product">MVP</a></li>
    <li><a href="#stretch-goals">Stretch Goals</a></li>
    <li><a href="#milestones">Milestones</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#github-cheat-sheet">Github Cheat Sheet</a></li>
    <li><a href="#resources">Resources</a></li>
  </ul>
</details>



<!-- ABOUT THE PROJECT -->
## MVP (Minimum Viable Product)
- Note creation UI and storage
- Flashcard creation
- Spaced repetition algorithm
- Include formatting tools for flashcards/notes (highlighting, bullet points, etc.)

## Stretch Goals
- User accounts
- Parse and create flashcards from notes

## Milestones
- Frontend
  - Create note lists/organization UI
  - Create single note UI
  - Create flashcard UI
  - Include formatting tools for above (highlighting, bullet points, etc.)
  - Maybe markdown?
- Backend
  - Setup and create database
  - Store notes and flashcards
  - With tags or groups
  - Implement spaced repetition algorithm 


## Tech Stack
- Frontend
  - [React](https://reactjs.org/)
  - [Vue](https://vuejs.org/)
- Backend
  - [Express](https://expressjs.com/)
  - [Apollo](https://www.apollographql.com/)
- Database
  - [MongoDB](https://www.mongodb.com/)
  - [Firebase](https://firebase.google.com/)
- Libraries
  - [Supermemo](https://github.com/maxvien/supermemo#readme)    

## Dependencies
- Node.js
- MongoDB (if chosen)
- VS Code
- Git Bash

## Github Cheat Sheet
(Thanks Emily ^-^)

General Use

| Command | Description |
| ------ | ------ |
| cd "SpacingOut" | Change directories over to our repository |
| git branch | Lists branches for you |
| git branch "branch name" | Makes new branch |
| git checkout "branch name" | Switch to branch |
| git checkout -b "branch name" | Same as 2 previous commands together |
| git add . | Finds all changed files |
| git commit -m "Testing123" | Commit with message |
| git push origin "branch" | Push to branch |
| git pull origin "branch" | Pull updates from a specific branch |

## Resources
- For all
  - [Angular vs Vue vs React](https://www.codeinwp.com/blog/angular-vs-vue-vs-react/)
  - [JavaScript for beginners](https://learnjavascript.online/)
- Frontend
  - [React tutorial](https://reactjs.org/tutorial/tutorial.html)
  - [Vue tutorial](https://www.tutorialspoint.com/vuejs/index.htm)
  - [Next.js tutorial](https://welearncode.com/beginners-guide-nextjs/)
- Backend
  - [Express tutorial w/ Mongo](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
  - [Express w Firebase](https://indepth.dev/posts/1084/building-an-api-with-firebase)
  - [React Express Firebase tutorial](https://javascript.plainenglish.io/lets-create-react-app-with-firebase-auth-express-backend-and-mongodb-database-805c83e4dadd)
  - [Firebase setup](https://firebase.google.com/docs/web/setup)
- Integration
  - [Next.js and Mongo (no express)](https://developer.mongodb.com/how-to/nextjs-building-modern-applications/)
  - [MERN stack tutorial](https://www.youtube.com/watch?v=7CqJlxBYj-M)
  - [MEVN stack tutorial](https://www.youtube.com/watch?v=vr6O-IYebXA)


