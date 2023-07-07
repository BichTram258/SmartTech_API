import { SignUpDto } from 'src/auth/dto/sign-up.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<SignUpDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    role?: string;
    isActive?: boolean;
}
export {};
