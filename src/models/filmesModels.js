import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
//Crio a variavel findAll e já exporto
export const findAll = async () => {
    //SELECT * FROM filmes findMany
    return await prisma.filmes.findMany({
        orderBy: { id: 'asc' }
    })
}

// Crio a variável findById e já exporto
export const findById = async (id) => {
    //SELECT * FROM filmes WHERE id = x; 
    return await prisma.filmes.findUnique({
        where: { id: Number(id) }
    });
}