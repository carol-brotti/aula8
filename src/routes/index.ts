import {Router} from 'express'
import {Request, Response} from 'express'
import * as produtoController from '../controllers/produtoController'

const router = Router()

router.get('/', (req:Request, res:Response) => {
    res.send('/')
}) 

router.get('/produtos', produtoController.index)
//visualiza página de cadastro
router.get('/cadastro', produtoController.visualizaPaginaCadastro)
// rota para cadastrar os produtos
router.post('/cadastro', produtoController.cadastroProduto)
//cahar edita produto
router.get('/editar/:id', produtoController.editaProduto)
// chamando atualizaProduto
router.post('/editar/:id', produtoController.atualizaProduto)

router.get('/excluir/:id', produtoController.deletaProtudo)
export default router