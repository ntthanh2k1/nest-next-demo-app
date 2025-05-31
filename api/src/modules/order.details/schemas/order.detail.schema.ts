import { MenuItemOption } from '@/modules/menu.item.options/schemas/menu.item.option.schema';
import { MenuItem } from '@/modules/menu.items/schemas/menu.item.schema';
import { Menu } from '@/modules/menus/schemas/menu.schema';
import { Order } from '@/modules/orders/schemas/order.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrderDetailDocument = HydratedDocument<OrderDetail>;

@Schema({ timestamps: true })
export class OrderDetail {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Order.name,
  })
  orderId: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Menu.name,
  })
  menuId: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: MenuItem.name,
  })
  menuItemId: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: MenuItemOption.name,
  })
  menuItemOptionId: mongoose.Schema.Types.ObjectId;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);
