import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  private SALT_ROUND = 11;
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const existedEmail = await this.userService.findByCondition({
      email: signUpDto.email,
    });
    if (existedEmail) {
      return 'Email Existed';
    }

    const hashedPassword = await bcrypt.hash(
      signUpDto.password,
      this.SALT_ROUND,
    );

    const newUser = await this.userService.create({
      ...signUpDto,
      password: hashedPassword,
    });

    return this.userService.findOne(newUser._id);
  }

  async signIn(signIn: SignInDto): Promise<{
    token: string;
    _id: string;
    name: string;
    email: string;
    role: string;
    isActive: boolean;
  }> {
    const { email, password } = signIn;

    const user = await this.userService.findByCondition({
      email: email,
    });

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id, role: user.role });

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: token,
      isActive: user.isActive,
    };
  }
}
