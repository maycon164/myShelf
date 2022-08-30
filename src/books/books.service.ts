import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
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

  async findAll() {

    const books = await this.prisma.book.findMany();
    if (books.length == 0) { message: 'aqui ainda nao tem nada preguicoso' }
    return books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
