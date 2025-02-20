import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // Why forRootAsync?
    // Supports environment variables (ConfigService loads values from .env).
    // Allows dynamic configuration (useful for different environments: Dev, Test, Production).
    // Prevents hardcoded values (more secure and flexible).
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      // useFactory is a function that generates the database config dynamically.
      // Instead of hardcoding database connection details, it fetches them dynamically using ConfigService (which reads from your .env file).
      useFactory: (configService: ConfigService) => {
        console.log('Connecting to Database:', {
          host: configService.get('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          database: configService.get('DB_NAME'),
        }); // Debugging Log

        // The function retrieves values from the ConfigService and then returns an object that contains the database configuration.
        // return sends the config object to TypeORM so it can connect to PostgreSQL.
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          autoLoadEntities: true,
          synchronize: true, // TypeORM automatically creates the table when the app starts (if it doesn't exist).
          logging: false, // Enables SQL query logging
        };
      },
      inject: [ConfigService],
    }),
    CategoryModule,
  ],
})
export class AppModule {}
