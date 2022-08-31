import { diskStorage } from "multer"
import { v4 as uuidv4 } from "uuid";

class Payload {
    email: string
    password: string
}

interface Filter {
    search?: string
    genre?: string
}

enum Genre {
    'Action',
    'Fantasy',
    'History',
    'Drama',
    'Science-Fiction',
    'Romance',
    'Moba',
    'Survival-Horror'
}

const storage = {
    storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const randomName = uuidv4() + file.originalname;
            cb(null, randomName);
        }
    })
}

class NoteDTO {
    title: string
    text: string
    date: string
}

export {
    Filter,
    Payload,
    Genre,
    NoteDTO,
    storage
}

function v4() {
    throw new Error("Function not implemented.")
}
