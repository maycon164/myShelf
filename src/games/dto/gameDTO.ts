import { Genre, NoteDTO } from "src/types"

export class GameDTO {
    title: string
    genre: string
    description: string
    platform: string
    whyToPlay: string
    medias?: string[]
    indication?: string[]
    links?: string[]
    notes: NoteDTO[]

    static toSave(game: GameDTO) {
        return {
            ...game,
            notes: JSON.stringify(game.notes)
        }
    }
}

