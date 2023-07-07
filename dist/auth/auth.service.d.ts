import { SignUpDto } from './dto/sign-up.dto';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    private SALT_ROUND;
    constructor(userService: UsersService, jwtService: JwtService);
    signUp(signUpDto: SignUpDto): Promise<import("../users/entities/user.entity").User | "Email Existed">;
    signIn(signIn: SignInDto): Promise<{
        token: string;
        _id: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
    }>;
}
