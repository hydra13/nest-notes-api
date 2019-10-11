<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
  
  <p align="center">This is a simple project for testing <a href="https://nestjs.com/" target="blank">Nest</a> (Node.js framework).</p>

How to test the project:
---
- Clone: 
```
git clone https://github.com/hydra13/nest-notes-api.git
```
- Install depedences:
```
cd nest-notes-api
npm i
```
- Start service:
```
npm start
```

API
---
1) Get all notes:
> GET /notes 

2) Get note by ID
> GET /notes/:id 

3) Create new note:
> POST /notes 
> {
>  title: :title,
>  text: :text
>}

4) Update note by ID:
>PUT /notes/:id
>{
>  title: :title,
>  text: :text
>}

5) Delete note by ID:
>DELETE /notes/:id`;
