import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { ProdutoEntity } from './entities/produto.entity';
import { Produto } from './schemas/produtos-schema';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectModel(Produto.name) private produtoModel: Model<ProdutoEntity>,
    @InjectConnection() private connection: Connection,
  ) {}

  async findAll(): Promise<ProdutoEntity[]> {
    return this.produtoModel.find().exec();
  }

  async findOne(id: string): Promise<ProdutoEntity> {
    const produto = this.produtoModel
      .findById(id)
      .exec()
      .catch(() => {
        throw new NotFoundException('Produto not found');
      });

    return produto;
  }

  async create(createProduto: Produto): Promise<ProdutoEntity> {
    const createdProduto = new this.produtoModel(createProduto);

    createdProduto.save().catch(() => {
      throw new NotFoundException('Erro ao cadastrar produto');
    });

    return createdProduto;
  }

  async update(id: string, updateProduto: Produto): Promise<ProdutoEntity> {
    return this.produtoModel
      .findByIdAndUpdate(id, updateProduto)
      .exec()
      .catch(() => {
        throw new NotFoundException('Erro ao Editar produto');
      });
  }

  async remove(id: string) {
    const produto = this.produtoModel
      .deleteOne({ _id: id })
      .exec()
      .catch(() => {
        throw new NotFoundException('Erro ao excluir produto');
      });

    return produto;
  }
}
