import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ProdutoEntity {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  created_at: string;

  @Expose()
  updated_at: string;

  @Expose()
  deleted_at: string;
}
