import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { randomUUID } from 'crypto';
import { diskStorage } from 'multer';
import { BooksService } from './books.service';
import { ChapterDTO, CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

const storage = {
  storage: diskStorage({
    destination: './uploads',

    filename: (req, file, cb) => {
      const randomName = randomUUID + file.filename;
      cb(null, randomName);
    }

  })
}
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file', storage))
  addBook(@Body() createBookDto: CreateBookDto, @UploadedFile() file: Express.Multer.File) {
    return this.booksService.create(createBookDto);
  }

  @Post(":id")
  addChapter(@Body() chapter: ChapterDTO, @Param('id') id: number) {
    return this.booksService.addChapter(id, chapter);
  }

  @Get()
  findAll(@Query('genre') genre: string, @Query('search') search: string) {
    console.log(genre, search);
    return this.booksService.findAll({ genre, search });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
