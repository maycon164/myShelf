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
    'Moba'
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

class Note {
    title: string
    text: string
    date: string
}

export {
    Filter,
    Payload,
    Genre,
    Note,
    storage
}

function v4() {
    throw new Error("Function not implemented.")
}
