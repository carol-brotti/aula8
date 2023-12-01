import { Request, Response } from 'express'
import { request } from 'http'
import { where } from 'sequelize'
import { Produto } from '../models/Produto'

export const index = async (req: Request, res: Response) => {
    let products = await Produto.findAll()
    res.render('pages/produto', { products })
}

export const visualizaPaginaCadastro = (req: Request, res: Response) => {
    res.render("pages/cadastrar")
}

export const cadastroProduto = async (req: Request, res: Response) => {
    let { nome, preco } = req.body

    if (nome && preco)
        await Produto.create({
            nome,
            preco
        })
    res.redirect('/produtos')
}

export const editaProduto = async (req: Request, res: Response) => {

    let {id} = req.params

    let produto = await Produto.findByPk(id)

    res.render('pages/editar', {
        id,
        produto
    })

}


export const atualizaProduto = async (req: Request, res: Response) => {


    let id = req.params
    let { nome, preco } = req.body

    await Produto.update({
        nome,
        preco
    }, {
        where: {
            id: id
        }
    })

}
export const deletaProtudo = async(req:Request, res:Response) => {

    let {id} = req.params

    await Produto.destroy({
        where:{
            id:id
        }
    })
    res.redirect('/produtos')
}