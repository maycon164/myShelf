import { Genre, NoteDTO } from "src/types"

export class SeriesDTO {
    title: string
    genre: string
    seasons: number
    episodios?: EpisodioDTO[]
    image?: string
    indication?: string[]
    links?: string[]
    notes?: NoteDTO[]

    static toSave(serie: SeriesDTO) {
        return {
            ...serie,
            notes: JSON.stringify(serie.notes)
        }
    }
}


export class EpisodioDTO {
    title: string
    numOfEp: number
    serieID?: number
    notes: NoteDTO[]
    watched?: string

    static toSave(episodio: EpisodioDTO) {
        return {
            ...episodio,
            notes: JSON.stringify(episodio.notes)
        }
    }
}