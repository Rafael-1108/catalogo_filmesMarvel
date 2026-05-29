import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.filmes.createMany({
    data: [
        {
        nome: "Homem de Ferro",
        anoLancamento: 2008,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGj39wWHYgIMQzlEJ6Uu3xbW9RTb0sh1X9ew&s",
        sinopse: "Tony Stark, um bilionário e gênio da tecnologia, cria uma armadura poderosa para escapar de cativeiro e decide se tornar o herói Homem de Ferro."
      },
      {
        nome: "O Incrível Hulk",
        anoLancamento: 2008,
        foto: "https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg",
        sinopse: "Bruce Banner tenta encontrar uma cura para sua condição enquanto é caçado pelo exército e enfrenta o monstro Hulk."
      },
      {
        nome: "Homem de Ferro 2",
        anoLancamento: 2010,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNP0IhEZOj0gqPzeTr2EPHdP4bTPwjDSH_A&s",
        sinopse: "Tony Stark enfrenta problemas com a saúde e novos inimigos, enquanto o governo quer seu traje de alta tecnologia."
      },
      {
        nome: "Thor",
        anoLancamento: 2011,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEQ7a4nlV2vZIRBvR9U4EkdB26gNEVGS7nA&s",
        sinopse: "O deus Thor é banido de Asgard para a Terra e aprende o valor da humildade enquanto enfrenta ameaças para salvar seu mundo."
      },
      {
        nome: "Capitão América: O Primeiro Vingador",
        anoLancamento: 2011,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDf6dBFkkv4uW7Lb2LdGzn_07AenHPcUNzXA&s",
        sinopse: "Steve Rogers é transformado em um super soldado durante a Segunda Guerra Mundial e luta contra a ameaça da Hydra."
      },
      {
        nome: "Os Vingadores",
        anoLancamento: 2012,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYlKyMh3Bn3SAzx_PmS8FHqIPYiC-A245mbA&s",
        sinopse: "Heróis como Homem de Ferro, Thor, Hulk, Capitão América e Viúva Negra se unem para impedir uma invasão alienígena na Terra."
      },
      {
        nome: "Homem de Ferro 3",
        anoLancamento: 2013,
        foto: "https://upload.wikimedia.org/wikipedia/pt/1/19/Iron_Man_3_poster.jpg",
        sinopse: "Tony Stark enfrenta um inimigo perigoso conhecido como Mandarim, que ameaça sua vida e seu legado."
      },
      {
        nome: "Thor: O Mundo Sombrio",
        anoLancamento: 2013,
        foto: "https://br.web.img2.acsta.net/pictures/210/240/21024039_20130801212713895.jpg",
        sinopse: "Thor deve salvar o universo da ameaça dos Elfos Negros e proteger a vida na Terra e em Asgard."
      },
      {
        nome: "Capitão América: O Soldado Invernal",
        anoLancamento: 2014,
        foto: "https://br.web.img3.acsta.net/pictures/14/02/03/20/36/257136.jpg",
        sinopse: "Steve Rogers enfrenta uma conspiração dentro da S.H.I.E.L.D. e o retorno do Soldado Invernal, seu antigo amigo transformado em assassino."
      },
      {
        nome: "Guardiões da Galáxia",
        anoLancamento: 2014,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXncSSpsw8t1CkVSMFGoatXOtK79EVlMxTig&s",
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
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfnlJB_GLOy-2V2_rLP9PagBcJh8CVM3rhg&s",
        sinopse: "Scott Lang recebe um traje que permite encolher de tamanho e deve ajudar a impedir que a tecnologia caia em mãos erradas."
      },
      {
        nome: "Capitão América: Guerra Civil",
        anoLancamento: 2016,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpmC3xzwtqCqsGlRADbeBxhFVz0Fch52htA&s",
        sinopse: "Conflito entre os Vingadores se intensifica quando o governo tenta regular os heróis, dividindo o grupo em duas facções."
      },
      {
        nome: "Doutor Estranho",
        anoLancamento: 2016,
        foto: "https://m.media-amazon.com/images/S/pv-target-images/43f3cd574328c1b0d01a0b9cef7f4129d853a0abbff48af706f07440602d6daa.jpg",
        sinopse: "Um neurocirurgião aprende as artes místicas para proteger o mundo de ameaças sobrenaturais após um acidente devastador."
      },
      {
        nome: "Guardiões da Galáxia Vol. 2",
        anoLancamento: 2017,
        foto: "https://br.web.img3.acsta.net/pictures/17/03/03/19/15/268212.jpg",
        sinopse: "Os Guardiões enfrentam desafios familiares e novas ameaças enquanto tentam manter a galáxia segura."
      },
      {
        nome: "Homem-Aranha: De Volta ao Lar",
        anoLancamento: 2017,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpeG8QMUmcQexuqwgnhho--WOyi9z56wlGg&s",
        sinopse: "Peter Parker tenta equilibrar a vida de adolescente com as responsabilidades de ser o Homem-Aranha e enfrenta o Abutre."
      },
      {
        nome: "Thor: Ragnarok",
        anoLancamento: 2017,
        foto: "https://m.media-amazon.com/images/I/91+NY2WOP8L._AC_UF1000,1000_QL80_.jpg",
        sinopse: "Thor deve impedir o apocalipse em Asgard, conhecido como Ragnarok, com a ajuda de velhos e novos aliados."
      },
      {
        nome: "Pantera Negra",
        anoLancamento: 2018,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpFP0CwyQcqMJlf0bfsNTV2M8mZoInaa6_w&s",
        sinopse: "T'Challa retorna a Wakanda para assumir o trono e enfrenta ameaças internas e externas que colocam seu reino em risco."
      },
      {
        nome: "Vingadores: Guerra Infinita",
        anoLancamento: 2018,
        foto: "https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg",
        sinopse: "Os Vingadores e seus aliados enfrentam Thanos, que busca as Joias do Infinito para dominar o universo."
      },
      {
        nome: "Homem-Formiga e a Vespa",
        anoLancamento: 2018,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXS7QlGwQrob5V_xHHjiea8zRKy18cjX8fg&s",
        sinopse: "Scott Lang une forças com Hope Van Dyne para uma missão que envolve o mundo quântico e resgates perigosos."
      },
      {
        nome: "Capitã Marvel",
        anoLancamento: 2019,
        foto: "https://conteudo.imguol.com.br/c/entretenimento/5d/2018/12/03/brie-larson-em-poster-de-capita-marvel-1543880541940_v2_450x600.png",
        sinopse: "Carol Danvers descobre seus poderes e seu passado enquanto a galáxia enfrenta uma guerra entre raças alienígenas."
      },
      {
        nome: "Vingadores: Ultimato",
        anoLancamento: 2019,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_er2nCIQqEvdF71ZuQPnk0KNlUvF3fxPicA&s",
        sinopse: "Os Vingadores restantes tentam reverter o estalo de Thanos e restaurar o universo."
      },
      {
        nome: "Homem-Aranha: Longe de Casa",
        anoLancamento: 2019,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniVKGEh13TMIC3_DdWY4Uik0LvdjDpLcKfQ&s",
        sinopse: "Peter Parker lida com as consequências de Ultimato enquanto enfrenta novos vilões durante uma viagem pela Europa."
      },
      {
        nome: "Viúva Negra",
        anoLancamento: 2021,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4LcloJMGZStdkZIZ8J8uoOnnj1ExT4m88A&s",
        sinopse: "Natasha Romanoff enfrenta seu passado e uma conspiração perigosa ligada à sua história como espiã."
      },
      {
        nome: "Shang-Chi e a Lenda dos Dez Anéis",
        anoLancamento: 2021,
        foto: "https://lumiere-a.akamaihd.net/v1/images/poster_semd_c4c0dfaa.png",
        sinopse: "Shang-Chi deve confrontar seu passado e a organização dos Dez Anéis, dominando as artes marciais."
      },
      {
        nome: "Eternos",
        anoLancamento: 2021,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7I3QWF3Jc1hefyjfu1qk3qM-UjzhqRlRjQ&s",
        sinopse: "Uma raça antiga de seres imortais se reúne para proteger a humanidade de uma ameaça secreta."
      },
      {
        nome: "Homem-Aranha: Sem Volta para Casa",
        anoLancamento: 2021,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLLEjAg5EGX8bom-cezu7EGGAYlWWCe3KhQ&s",
        sinopse: "Peter Parker lida com as consequências de sua identidade revelada e enfrenta vilões de múltiplas realidades."
      },
      {
        nome: "Doutor Estranho no Multiverso da Loucura",
        anoLancamento: 2022,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNGf5g0Bp7LykJqIC4KJu2X9JSxg2cTr-ag&s",
        sinopse: "Stephen Strange explora o multiverso para combater uma nova ameaça que coloca em risco todas as realidades."
      },
      {
        nome: "Thor: Amor e Trovão",
        anoLancamento: 2022,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALA2c9_QsbGVbF4YbcUMSli2uEPVuHOD2Kw&s",
        sinopse: "Thor enfrenta um novo inimigo enquanto tenta encontrar a paz e reencontra velhos amigos."
      },
      {
        nome: "Pantera Negra: Wakanda Para Sempre",
        anoLancamento: 2022,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzG3Q4wUCE0Z29xSPUsK1nf5I8CntWsseJqg&s",
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
