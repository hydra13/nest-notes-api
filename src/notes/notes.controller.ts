import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('notes')
export class NotesController {
    @Get()
    findAll(): string {
        return 'Get all notes';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return 'Get record by id: ' + id;
    }

    @Post()
    create(@Body() createNoteDto: CreateNoteDto): string {
        return 'Create post with title: ' + createNoteDto.title;
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
