import { PartialType } from '@nestjs/mapped-types';
import { BookDTO } from './create-book.dto';

export class UpdateBookDto extends PartialType(BookDTO) { }
