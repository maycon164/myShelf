import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Filter } from 'src/types';
import { ChapterDTO, CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {

  constructor(private readonly prisma: PrismaService) { }

  async create(book: CreateBookDto) {
    const bookCreated = await this.prisma.book.create({
      data: CreateBookDto.toSave(book)
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

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
