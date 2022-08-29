import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { SeriesModule } from './series/series.module';
import { GamesModule } from './games/games.module';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), BooksModule, SeriesModule, GamesModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
