import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

export type ProdutoDocument = Produto & Document;

@Schema()
export class Produto {
  @Expose()
  id: string;

  @Expose()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsNotEmpty()
  description: string;

  @Expose()
  created_at: string;

  @Expose()
  updated_at: string;

  @Expose()
  deleted_at: string;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);
