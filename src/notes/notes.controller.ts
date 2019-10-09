import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Note } from './interfaces/note.interface';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}
    @Get()
    findAll(): Promise<Note[]> {
        return this.notesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Note> {
        return this.notesService.findOne(id);
    }

    @Post()
    create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
        return this.notesService.create(createNoteDto);
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return 'Delete ' + id;
    }

    @Put(':id')
    update(@Body() updateNoteDto: CreateNoteDto, @Param('id') id): string {
        return 'Update id: ' + id + '; New title: ' + updateNoteDto.title;
    }
}
