import { Controller, Get, Post, Body, Param, Delete, Query, UseInterceptors, UploadedFile, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/types';
import { BooksService } from './books.service';
import { ChapterDTO, BookDTO } from './dto/create-book.dto';
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

  @Post("/:bookId/chapter")
  addChapter(
    @Body() chapter: ChapterDTO,
    @Param('bookId') id: number
  ) {
    return this.booksService.addChapter(id, chapter);
  }

  @Put("/:bookId/chapter/:chapterId")
  async editChpater(
    @Param('bookId') bookId: number,
    @Param('chapterId') chapterId: number,
    @Body() chapter: ChapterDTO,
  ) {
    const editedChapter = await this.booksService.editChapter(+bookId, +chapterId, chapter);
    return editedChapter;
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
