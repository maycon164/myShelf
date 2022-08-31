import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Filter } from 'src/types';
import { ChapterDTO, BookDTO } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  constructor(private readonly prisma: PrismaService) { }

  async create(book: BookDTO) {
    const bookCreated = await this.prisma.book.create({
      data: BookDTO.toSave(book)
    });

    return bookCreated;
  }

  async addChapter(bookId: number, chapter: ChapterDTO) {
    console.log(bookId);
    const chapterAdded = await this.prisma.chapter.create({
      data: {
        ...chapter,
        bookId: +bookId
      }
    });

    return chapterAdded;
  }

  async findAll(filter: Filter) {
    const { search, genre } = filter;

    const books = await this.prisma.book.findMany({
      where: {
        title: {
          equals: search
        },
        genre: {
          equals: genre
        }
      }
    });

    if (books.length == 0) { message: 'aqui ainda nao tem nada preguicoso' }

    return books;

  }

  async findOne(bookId: number) {
    const book = await this.prisma.book.findFirst({
      where: { id: bookId },
      include: {
        chapters: true
      }
    })
    return book;
  }

  async update(bookId: number, book: BookDTO) {
    let bookUpdated = await this.prisma.book.update({
      where: { id: bookId },
      data: BookDTO.toSave(book)
    })
    return bookUpdated;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
