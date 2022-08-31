import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NoteDTO } from 'src/types';
import { Utils } from 'src/utils';
import { GameDTO } from './dto/gameDTO';

@Injectable()
export class GamesService {

  constructor(private readonly prisma: PrismaService) { }

  async insertGame(game: GameDTO) {

    const gameInserted = await this.prisma.games.create({
      data: GameDTO.toSave(game)
    });

    return gameInserted;
  }

  async findAll() {
    const games = await this.prisma.games.findMany();
    return games;
  }

  async findOne(id: number) {
    console.log(id);
    const game = await this.prisma.games.findFirst({
      where: { id: id }
    })
    return game;
  }

  async update(gameId: number, game: GameDTO) {
    const gameUpdated = await this.prisma.games.update({
      where: { id: gameId },
      data: GameDTO.toSave(game)
    })
    return gameUpdated;
  }

  async addNote(gameId: number, note: NoteDTO) {
    note.date = Utils.getDate();

    const game = await this.prisma.games.findFirst({
      where: { id: gameId }
    })

    const noteAdded = await this.prisma.games.update({
      where: {
        id: game.id
      },
      data: {
        notes: {
          set: [...game.notes, JSON.stringify(note)]
        }
      }
    })

    return noteAdded;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
