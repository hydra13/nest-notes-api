import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): string {
    return `
    Welcome to my simple notes project!
    
    API:
    1) Get all notes:
    GET /notes 

    2) Get note by ID
    GET /notes/:id 
    
    3) Create new note:
    POST /notes 
    {
      title: :title,
      text: :text
    }
    
    4) Update note by ID:
    PUT /notes/:id
    {
      title: :title,
      text: :text
    }
    
    5) Delete note by ID:
    DELETE /notes/:id`;
  }
}
