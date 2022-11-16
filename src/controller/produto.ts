import { Request, Response } from "express";
import { Produto } from "../entity/produto";
import  AppDataSource from "../data-source";
import { produtoRepository } from "../repository/produtoRepository";
import { request } from "http";

export class ProdutoController {    
        async listar(req: Request, res: Response){
            try {
                const listaProdutos = await produtoRepository.find()
                console.log('Cheguei na lista de produtos')
                
                return res.status(200).json(listaProdutos)
                
            } catch (error) {
                console.log(error)
                return res.status(500).json({message: 'Internal Server Error'})  
            }            
    }

    async inserir(req: Request, res: Response){
        const {nome, preco} = req.body
        try {
            const newProduto = produtoRepository.create({nome, preco})
            await produtoRepository.save(newProduto)

            return res.status(201).json(newProduto)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }

    async buscarPorId(req: Request, res: Response){
        const id = req.params.id
        try {
            const produto = await produtoRepository.findOneBy({id: Number(id)})
            if (!produto) {
                return res.status(404).json({message: 'Produto não encontrado'})                
            }

            await produtoRepository.save(produto)
            console.log('Produto encontrado');
            
            return res.status(201).json(produto)

            
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Internal Server Error'})            
        }
    }
}