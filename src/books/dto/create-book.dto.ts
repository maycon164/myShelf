import { Genre } from "src/types"

export class BookDTO {
    title: string
    author: string
    genre: Genre
    year: string
    description: string
    startReading?: string
    endOfReading?: string
    numberOfChapters?: number
    price: number
    opinion?: string
    whyRead: string
    links?: string[]
    image?: string
    indication?: string[]

    static toSave(dto?: BookDTO) {
        const obj: any = { ...dto }
        //obj.yearOfPublication = new Date(obj.year).getTime()
        obj.yearOfPublication = dto.year
        delete obj.year
        return obj
    }
}

export class ChapterDTO {
    title: string
    description: string
}
