import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Payload } from "src/types";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { };

    async verify(user: Payload) {
        const { email } = user;
        const userDb = await this.prisma.user.findUnique({
            where: { email }
        })

        if (userDb) {
            return { message: 'you are now logged in (in the future)' };
        } else {
            return { message: 'you do not have permission yet' };
        }
    }
}