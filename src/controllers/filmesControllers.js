import * as FilmesModels from '../models/filmesModels.js'

export const listarTodos = async (req, res) => {
    try {
        const filmes = await FilmesModels.findAll();

        if (!filmes || filmes.length === 0)  {
            return res.status(404).json ({
                total: filmes.length,
                mensagem: 'Não há filmes na lista.',
                filmes
            })
        }

        res.status(200).json ({
            total: filmes.length,
            messagem: 'Listar filmes.',
            filmes
        })

    } catch (error) {
        res.status(500).json ({
        erro: 'Erro interno de servidor.',
        detalhes: error.message,
        status: 500
        })
    }
}

export const listarUm = async (req,res) => {
    try {
        const id = req.params.id;
        const filme = await FilmesModels.findById(id);

        if (!filme) {
            return res.status(404).json({
                erro: 'Filme não encontrado!',
                message: 'Verifique se o id do filme existe',
                id: id
            })
        }

        res.status(200).json({
            message: 'Filme encontrado',
            filme
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar filme por id',
            detalhes: error.message
        })
    }
}
