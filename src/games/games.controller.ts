import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { GamesService } from './games.service';
import { GameDTO } from './dto/gameDTO';
import { NoteDTO, storage } from 'src/types';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) { }

  @Post()
  create(
    @Body() createGameDto: GameDTO
  ) {
    return this.gamesService.insertGame(createGameDto);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: number
  ) {
    return this.gamesService.findOne(+id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('file', storage))
  update(
    @Param('id') id: string,
    @Body() game: GameDTO,
    @UploadedFile() file: Express.Multer.File
  ) {

    if (file) {
      let mediaUrl = `http://localhost:3000/${file.filename}`;
      game.medias = [mediaUrl];
    }

    return this.gamesService.update(+id, game);
  }

  @Post(':id/notes')
  async addNote(
    @Param('id') gameId: number,
    @Body() note: NoteDTO
  ) {
    return await this.gamesService.addNote(+gameId, note);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(+id);
  }
}
