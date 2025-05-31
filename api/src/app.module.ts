import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';
import { MenusModule } from './modules/menus/menus.module';
import { MenuItemsModule } from './modules/menu.items/menu.items.module';
import { MenuItemOptionsModule } from './modules/menu.item.options/menu.item.options.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderDetailsModule } from './modules/order.details/order.details.module';
import { LikesModule } from './modules/likes/likes.module';
import { ReviewsModule } from './modules/reviews/reviews.module';

@Module({
  imports: [
    // https://docs.nestjs.com/techniques/configuration#disable-env-variables-loading
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // https://docs.nestjs.com/techniques/mongodb#async-configuration
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),

    UsersModule,
    RestaurantsModule,
    MenusModule,
    MenuItemsModule,
    MenuItemOptionsModule,
    OrdersModule,
    OrderDetailsModule,
    LikesModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
