import { Genre, Note } from "src/types"

export class GameDTO {
    title: string
    genre: string
    description: string
    platform: string
    whyToPlay: string
    medias?: string[]
    indication?: string[]
    links?: string[]
    //notes?: Note[]
    notes: string[]
    static toSave(game: GameDTO) {
        return { ...game }
    }
}

