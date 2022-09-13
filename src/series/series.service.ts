import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EpisodioDTO, SeriesDTO } from './dto/serieDTO';

@Injectable()
export class SeriesService {

  constructor(private readonly prisma: PrismaService) { }

  async create(serieDTO: SeriesDTO) {
    const createdSerie = await this.prisma.series.create({
      data: SeriesDTO.toSave(serieDTO)
    })

    return createdSerie;
  }

  async addEpisodio(serieID: number, episodio: EpisodioDTO) {

    episodio.serieID = serieID;

    const addedEpisodio = await this.prisma.episodio.create({
      data: EpisodioDTO.toSave(episodio)
    })

    return addedEpisodio;
  }

  async findAll() {
    const series = await this.prisma.series.findMany({});
    return series;
  }

  async findOne(id: number) {
    const serie = await this.prisma.series.findFirst({ where: { id: id } });
    return serie;
  }

  update(id: number, serieDTO: SeriesDTO) {
    return `This action updates a #${id} series`;
  }

  remove(id: number) {
    return `This action removes a #${id} series`;
  }
}
