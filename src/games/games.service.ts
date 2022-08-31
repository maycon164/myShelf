import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GameDTO } from './dto/gameDTO';

@Injectable()
export class GamesService {

  constructor(private readonly prisma: PrismaService) { }

  async insertGame(game: GameDTO) {

    const gameInserted = await this.prisma.games.create({
      data: game
    });

    return gameInserted;
  }

  async findAll() {
    const games = await this.prisma.games.findMany();
    return games;
  }

  async findOne(id: number) {
    const game = await this.prisma.games.findFirst({
      where: { id: id }
    })
    return game;
  }

  async update(gameId: number, game: GameDTO) {
    const gameUpdated = await this.prisma.games.update({
      where: { id: gameId },
      data: game
    })
    return gameUpdated;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
