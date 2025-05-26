import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PaymentsModule } from './payments/payments.module';
import { ExamsModule } from './exams/exams.module';
import { ExamsResultsModule } from './exams-results/exams-results.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
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
