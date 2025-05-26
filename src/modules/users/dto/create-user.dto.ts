import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserRole } from 'src/common/enums/user-roles.enum';

export class CreateUserDto {
  @ApiProperty({
    description: 'Ism familiya',
    example: 'Nomalumbek Nomaqulov',
  })
  @IsString({ message: 'Ism familiya yozuvda kiritish talab qilinadi' })
  @IsNotEmpty({ message: 'Ism familiya kiritish shart!' })
  @MaxLength(40)
  fullName: string;

  @ApiProperty({
    description: 'Elektron pochta',
    example: 'nomaqulov@gmail.com',
  })
  @IsString({ message: 'email yozuvda kiritish talab qilinadi' })
  @IsNotEmpty({ message: 'email kiritish shart!' })
  @MaxLength(40)
  email: string;

  @ApiProperty({
    description: 'Telefon raqam',
    example: '+998912007788',
  })
  @IsString({ message: 'telefon nomerni yozuvda kiritish talab qilinadi' })
  @IsNotEmpty({ message: 'telefon nomerni kiritish shart!' })
  @MaxLength(20)
  phone: string;

  @ApiProperty({
    description: `Mahfiy so'z`,
    example: 'nomaqul',
  })
  @IsString({ message: `mahfiy so'zni yozuvda kiritish talab qilinadi` })
  @IsNotEmpty({ message: `mahfiy so'zni kiritish shart!` })
  @MaxLength(20)
  password: string;

  @ApiProperty({
    enum: UserRole,
    description: 'lavozim',
    example: UserRole.STUDENT,
  })
  @IsEnum(UserRole, {
    message:
      "lavozim faqat belgilangan (student,teacher,admin) qiymatlaridan biri bo'lishi kerak",
  })
  @IsNotEmpty({ message: `lavozim kiritish shart!` })
  role: UserRole;
}
