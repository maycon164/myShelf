import { Body, Controller, Post } from "@nestjs/common";
import { Payload } from "src/types";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { };

    @Post('/login')
    login(@Body() creadentials: Payload) {
        const result = this.authService.verify(creadentials);
        return result;
    }
}