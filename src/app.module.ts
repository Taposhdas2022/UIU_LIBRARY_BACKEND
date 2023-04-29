import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [StudentModule, AdminModule, BookModule],
  controllers: [AppController, StudentController],
  providers: [AppService],
})
export class AppModule {}
