class Payload {
    email: string
    password: string
}

interface Filter {
    search?: string
    genre?: string
}

export {
    Filter,
    Payload
}