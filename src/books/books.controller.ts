import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
import { BooksService } from './books.service';
import { ChapterDTO, BookDTO } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

const storage = {
  storage: diskStorage({
    destination: './uploads',

    filename: (req, file, cb) => {
      const randomName = uuidv4() + file.originalname;
      cb(null, randomName);
    }

  })
}
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file', storage))
  addBook(
    @Body() createBookDto: BookDTO,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.booksService.create(createBookDto);
  }

  @Post(":id")
  addChapter(
    @Body() chapter: ChapterDTO,
    @Param('id') id: number
  ) {
    return this.booksService.addChapter(id, chapter);
  }

  @Get()
  findAll(
    @Query('genre') genre: string,
    @Query('search') search: string
  ) {
    console.log(genre, search);
    return this.booksService.findAll({ genre, search });
  }

  @Get(':id')
  findOne(
    @Param('id') id: string
  ) {
    return this.booksService.findOne(+id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('file', storage))
  updateBook(
    @Param('id') id: string,
    @Body() book: BookDTO,
    @UploadedFile() file: Express.Multer.File
  ) {
    let image = `http://localhost:3000/${file.filename}`

    if (file) {
      book.image = image;
    }

    return this.booksService.update(+id, book);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string
  ) {
    return this.booksService.remove(+id);
  }
}
