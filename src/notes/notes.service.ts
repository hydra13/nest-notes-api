import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Note } from './interfaces/note.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NotesService {
    constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

    async findAll(): Promise<Note[]> {
        return await this.noteModel.find();
    }
    async findOne(id: string): Promise<Note> {
        return await this.noteModel.findOne({ _id: id });
    }
    async create(note: Note): Promise<Note> {
        const newNote = new this.noteModel({
            ...note, 
            updated: new Date().getTime()
        });
        return await newNote.save();
    }
}
