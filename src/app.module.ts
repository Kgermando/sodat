import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { EnvironnementModule } from './environnement/environnement.module';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { AdministrationModule } from './administration/administration.module';
import { OperationModule } from './operation/operation.module';
import { SocialModule } from './social/social.module';

import { ConfigModule } from '@nestjs/config';
import { typeOrmConfigAsync } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    EnvironnementModule,
    UserModule,
    CommonModule,
    RoleModule,
    PermissionModule,
    AuthModule,
    AdministrationModule,
    OperationModule,
    SocialModule,
    ConfigModule.forRoot({ isGlobal: true }),
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
