export class CreateBookDto {
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

    static toSave(dto?: CreateBookDto) {
        const obj: any = { ...dto }
        //obj.yearOfPublication = new Date(obj.year).getTime()
        obj.yearOfPublication = dto.year
        delete obj.year
        return obj
    }
}

enum Genre {
    'Action',
    'Fantasy',
    'History',
    'Drama',
    'Science-Fiction',
    'Romance'
}

