import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeriesService } from './series.service';
import { EpisodioDTO, SeriesDTO } from './dto/serieDTO';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) { }

  @Post()
  create(
    @Body() createSeriesDto: SeriesDTO
  ) {
    return this.seriesService.create(createSeriesDto);
  }

  @Post('/:id')
  addEpisodio(
    @Body() episodio: EpisodioDTO,
    @Param('id') serieId: number
  ) {
    return this.seriesService.addEpisodio(+serieId, episodio);
  }

  @Get()
  findAll() {
    return this.seriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeriesDto: SeriesDTO) {
    return this.seriesService.update(+id, updateSeriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriesService.remove(+id);
  }
}
