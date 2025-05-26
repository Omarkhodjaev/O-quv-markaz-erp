import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ExamsModule } from './modules/exams/exams.module';
import { ExamsResultsModule } from './modules/exams-results/exams-results.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ReportsModule } from './modules/reports/reports.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    //env config
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    //database config
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [],
      autoLoadModels: true,
      synchronize: true,
    }),

    //Modullar
    UsersModule,
    AuthModule,
    CoursesModule,
    CoursesModule,
    EnrollmentsModule,
    AttendanceModule,
    PaymentsModule,
    ExamsModule,
    ExamsResultsModule,
    NotificationsModule,
    ReportsModule,
  ],
})
export class AppModule {}
