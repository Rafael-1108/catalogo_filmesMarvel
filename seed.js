import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.filmes.createMany({
    data: [
        {
        nome: "Homem de Ferro",
        anoLancamento: 2008,
        foto: "https://upload.wikimedia.org/wikipedia/pt/6/60/Homem-de-Ferro-2008.jpg",
        sinopse: "Tony Stark, um bilionário e gênio da tecnologia, cria uma armadura poderosa para escapar de cativeiro e decide se tornar o herói Homem de Ferro."
      },
      {
        nome: "O Incrível Hulk",
        anoLancamento: 2008,
        foto: "https://upload.wikimedia.org/wikipedia/pt/8/87/O_Incr%C3%ADvel_Hulk.jpg",
        sinopse: "Bruce Banner tenta encontrar uma cura para sua condição enquanto é caçado pelo exército e enfrenta o monstro Hulk."
      },
      {
        nome: "Homem de Ferro 2",
        anoLancamento: 2010,
        foto: "https://upload.wikimedia.org/wikipedia/pt/f/f0/Homem_de_Ferro_2.jpg",
        sinopse: "Tony Stark enfrenta problemas com a saúde e novos inimigos, enquanto o governo quer seu traje de alta tecnologia."
      },
      {
        nome: "Thor",
        anoLancamento: 2011,
        foto: "https://upload.wikimedia.org/wikipedia/pt/7/7b/Thor-Poster.jpg",
        sinopse: "O deus Thor é banido de Asgard para a Terra e aprende o valor da humildade enquanto enfrenta ameaças para salvar seu mundo."
      },
      {
        nome: "Capitão América: O Primeiro Vingador",
        anoLancamento: 2011,
        foto: "https://upload.wikimedia.org/wikipedia/pt/f/fc/Captain_America_The_First_Avenger_poster.jpg",
        sinopse: "Steve Rogers é transformado em um super soldado durante a Segunda Guerra Mundial e luta contra a ameaça da Hydra."
      },
      {
        nome: "Os Vingadores",
        anoLancamento: 2012,
        foto: "https://upload.wikimedia.org/wikipedia/pt/f/f9/The_Avengers_poster.jpg",
        sinopse: "Heróis como Homem de Ferro, Thor, Hulk, Capitão América e Viúva Negra se unem para impedir uma invasão alienígena na Terra."
      },
      {
        nome: "Homem de Ferro 3",
        anoLancamento: 2013,
        foto: "https://upload.wikimedia.org/wikipedia/pt/d/d1/Iron_Man_3_poster.jpg",
        sinopse: "Tony Stark enfrenta um inimigo perigoso conhecido como Mandarim, que ameaça sua vida e seu legado."
      },
      {
        nome: "Thor: O Mundo Sombrio",
        anoLancamento: 2013,
        foto: "https://upload.wikimedia.org/wikipedia/pt/1/12/Thor_-_O_Mundo_Sombrio.jpg",
        sinopse: "Thor deve salvar o universo da ameaça dos Elfos Negros e proteger a vida na Terra e em Asgard."
      },
      {
        nome: "Capitão América: O Soldado Invernal",
        anoLancamento: 2014,
        foto: "https://upload.wikimedia.org/wikipedia/pt/c/c9/Captain_America_The_Winter_Soldier_poster.jpg",
        sinopse: "Steve Rogers enfrenta uma conspiração dentro da S.H.I.E.L.D. e o retorno do Soldado Invernal, seu antigo amigo transformado em assassino."
      },
      {
        nome: "Guardiões da Galáxia",
        anoLancamento: 2014,
        foto: "https://upload.wikimedia.org/wikipedia/pt/f/f5/Guardians_of_the_Galaxy_poster.jpg",
        sinopse: "Um grupo de desajustados intergalácticos une forças para proteger um orbe poderoso e salvar a galáxia."
      },
      {
        nome: "Vingadores: Era de Ultron",
        anoLancamento: 2015,
        foto: "https://upload.wikimedia.org/wikipedia/pt/e/ed/Avengers_Age_of_Ultron_poster.jpg",
        sinopse: "Os Vingadores enfrentam Ultron, uma inteligência artificial criada por Tony Stark que ameaça destruir a humanidade."
      },
      {
        nome: "Homem-Formiga",
        anoLancamento: 2015,
        foto: "https://upload.wikimedia.org/wikipedia/pt/e/e6/Ant-Man_poster.jpg",
        sinopse: "Scott Lang recebe um traje que permite encolher de tamanho e deve ajudar a impedir que a tecnologia caia em mãos erradas."
      },
      {
        nome: "Capitão América: Guerra Civil",
        anoLancamento: 2016,
        foto: "https://upload.wikimedia.org/wikipedia/pt/9/90/Captain_America_Civil_War_poster.jpg",
        sinopse: "Conflito entre os Vingadores se intensifica quando o governo tenta regular os heróis, dividindo o grupo em duas facções."
      },
      {
        nome: "Doutor Estranho",
        anoLancamento: 2016,
        foto: "https://upload.wikimedia.org/wikipedia/pt/3/31/Doctor_Strange_poster.jpg",
        sinopse: "Um neurocirurgião aprende as artes místicas para proteger o mundo de ameaças sobrenaturais após um acidente devastador."
      },
      {
        nome: "Guardiões da Galáxia Vol. 2",
        anoLancamento: 2017,
        foto: "https://upload.wikimedia.org/wikipedia/pt/1/17/Guardians_of_the_Galaxy_Vol_2_poster.jpg",
        sinopse: "Os Guardiões enfrentam desafios familiares e novas ameaças enquanto tentam manter a galáxia segura."
      },
      {
        nome: "Homem-Aranha: De Volta ao Lar",
        anoLancamento: 2017,
        foto: "https://upload.wikimedia.org/wikipedia/pt/a/a0/Spider-Man_Homecoming_poster.jpg",
        sinopse: "Peter Parker tenta equilibrar a vida de adolescente com as responsabilidades de ser o Homem-Aranha e enfrenta o Abutre."
      },
      {
        nome: "Thor: Ragnarok",
        anoLancamento: 2017,
        foto: "https://upload.wikimedia.org/wikipedia/pt/7/7e/Thor_Ragnarok_poster.jpg",
        sinopse: "Thor deve impedir o apocalipse em Asgard, conhecido como Ragnarok, com a ajuda de velhos e novos aliados."
      },
      {
        nome: "Pantera Negra",
        anoLancamento: 2018,
        foto: "https://upload.wikimedia.org/wikipedia/pt/9/9f/Black_Panther_poster.jpg",
        sinopse: "T'Challa retorna a Wakanda para assumir o trono e enfrenta ameaças internas e externas que colocam seu reino em risco."
      },
      {
        nome: "Vingadores: Guerra Infinita",
        anoLancamento: 2018,
        foto: "https://upload.wikimedia.org/wikipedia/pt/e/e0/Avengers_Infinity_War_poster.jpg",
        sinopse: "Os Vingadores e seus aliados enfrentam Thanos, que busca as Joias do Infinito para dominar o universo."
      },
      {
        nome: "Homem-Formiga e a Vespa",
        anoLancamento: 2018,
        foto: "https://upload.wikimedia.org/wikipedia/pt/c/c8/Ant-Man_and_the_Wasp_poster.jpg",
        sinopse: "Scott Lang une forças com Hope Van Dyne para uma missão que envolve o mundo quântico e resgates perigosos."
      },
      {
        nome: "Capitã Marvel",
        anoLancamento: 2019,
        foto: "https://upload.wikimedia.org/wikipedia/pt/1/11/Captain_Marvel_poster.jpg",
        sinopse: "Carol Danvers descobre seus poderes e seu passado enquanto a galáxia enfrenta uma guerra entre raças alienígenas."
      },
      {
        nome: "Vingadores: Ultimato",
        anoLancamento: 2019,
        foto: "https://upload.wikimedia.org/wikipedia/pt/0/00/Avengers_Endgame_poster.jpg",
        sinopse: "Os Vingadores restantes tentam reverter o estalo de Thanos e restaurar o universo."
      },
      {
        nome: "Homem-Aranha: Longe de Casa",
        anoLancamento: 2019,
        foto: "https://upload.wikimedia.org/wikipedia/pt/2/20/Spider-Man_Far_from_Home_poster.jpg",
        sinopse: "Peter Parker lida com as consequências de Ultimato enquanto enfrenta novos vilões durante uma viagem pela Europa."
      },
      {
        nome: "Viúva Negra",
        anoLancamento: 2021,
        foto: "https://upload.wikimedia.org/wikipedia/pt/3/3d/Black_Widow_poster.jpg",
        sinopse: "Natasha Romanoff enfrenta seu passado e uma conspiração perigosa ligada à sua história como espiã."
      },
      {
        nome: "Shang-Chi e a Lenda dos Dez Anéis",
        anoLancamento: 2021,
        foto: "https://upload.wikimedia.org/wikipedia/pt/e/e4/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpg",
        sinopse: "Shang-Chi deve confrontar seu passado e a organização dos Dez Anéis, dominando as artes marciais."
      },
      {
        nome: "Eternos",
        anoLancamento: 2021,
        foto: "https://upload.wikimedia.org/wikipedia/pt/0/0d/Eternals_poster.jpg",
        sinopse: "Uma raça antiga de seres imortais se reúne para proteger a humanidade de uma ameaça secreta."
      },
      {
        nome: "Homem-Aranha: Sem Volta para Casa",
        anoLancamento: 2021,
        foto: "https://upload.wikimedia.org/wikipedia/pt/7/7a/Spider-Man_No_Way_Home_poster.jpg",
        sinopse: "Peter Parker lida com as consequências de sua identidade revelada e enfrenta vilões de múltiplas realidades."
      },
      {
        nome: "Doutor Estranho no Multiverso da Loucura",
        anoLancamento: 2022,
        foto: "https://upload.wikimedia.org/wikipedia/pt/6/69/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
        sinopse: "Stephen Strange explora o multiverso para combater uma nova ameaça que coloca em risco todas as realidades."
      },
      {
        nome: "Thor: Amor e Trovão",
        anoLancamento: 2022,
        foto: "https://upload.wikimedia.org/wikipedia/pt/7/7a/Thor_Love_and_Thunder_poster.jpg",
        sinopse: "Thor enfrenta um novo inimigo enquanto tenta encontrar a paz e reencontra velhos amigos."
      },
      {
        nome: "Pantera Negra: Wakanda Para Sempre",
        anoLancamento: 2022,
        foto: "https://upload.wikimedia.org/wikipedia/pt/5/5c/Black_Panther_Wakanda_Forever_poster.jpg",
        sinopse: "Wakanda enfrenta novas ameaças após a perda do rei T’Challa e luta para proteger seu legado."
      }
    ]
  })
}

main()
  .then(() => {
    console.log("🌱 Seed executado com todos os filmes da Marvel")
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
