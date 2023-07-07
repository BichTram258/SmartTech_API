import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<import("../users/entities/user.entity").User | "Email Existed">;
    signIn(signInDto: SignInDto): Promise<{
        token: string;
        _id: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
    }>;
}
