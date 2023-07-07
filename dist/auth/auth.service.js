"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.SALT_ROUND = 11;
    }
    async signUp(signUpDto) {
        const existedEmail = await this.userService.findByCondition({
            email: signUpDto.email,
        });
        if (existedEmail) {
            return 'Email Existed';
        }
        const hashedPassword = await bcrypt.hash(signUpDto.password, this.SALT_ROUND);
        const newUser = await this.userService.create({
            ...signUpDto,
            password: hashedPassword,
        });
        return this.userService.findOne(newUser._id);
    }
    async signIn(signIn) {
        const { email, password } = signIn;
        const user = await this.userService.findByCondition({
            email: email,
        });
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!user || !isPasswordMatched) {
            throw new common_1.UnauthorizedException('Invalid email or password');
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
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map