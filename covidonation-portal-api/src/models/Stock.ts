import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Product from './Product';
import User from './User';

@Entity('stock')
class Stock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  checkin_date: Date;

  @Column()
  checkout_date: Date;

  @Column()
  quantity: number;

  @OneToOne(() => Product, (product) => product.stock)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Stock;
