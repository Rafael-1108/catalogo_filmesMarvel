import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;

export const findAll = async () => {
    return prisma.filmes.findMany({
        orderBy: { id: 'asc' }
    });
};

export const findById = async (id) => {
    return prisma.filmes.findUnique({
        where: { id: Number(id) }
    });
};

export const findByName = async (nome) => {
    return prisma.filmes.findMany({
        where: {
            nome: {
                contains: nome,
                mode: 'insensitive'
            }
        }
    });
};