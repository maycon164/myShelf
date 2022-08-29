import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { SeriesModule } from './series/series.module';
import { GamesModule } from './games/games.module';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), BooksModule, SeriesModule, GamesModule, MoviesModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
