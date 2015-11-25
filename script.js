/**
 * Created by Caio on 03/09/2015.
 */
var selected = {};
var selected_curse = {};
var curses = [
    {
        titulo:"Certificações Ambientais e Sustentabilidade na Construção Civil",
        descricao: "Este minicurso tem como objetivo apresentar aos participantes o panorama atual no que tange a sustentabilidade em edificações e os indicadores que hoje regulamentam a prática de projeto e produção de construções sustentáveis no cenário nacional e mundial. A Sustentabilidade vem sendo discutida há pelo menos três décadas e neste contexto a Indústria da Construção Civil vem incorporando aspectos que possibilitam a produção de edificações mais responsáveis do ponto de vista ambiental, social, econômico e político. Certificações como o LEED, AQUA, SELO PROCEL entre outros foram bem aceitos pelo mercado imobiliário e estão sendo incorporados no processo de projeto e produção de edifícios; ao mesmo tempo em que a ABNT lançou e regulamentou a NBR15575 que estabelece critérios e requisitos para o desempenho de edificações. Diante do exposto, pretende-se ao final do curso realizar um exercício de certificação em uma edificação para melhor compreensão dos conceitos apresentados."
    },
    {
        titulo:"Irrigação paisagística",
        descricao: "O minicurso irá abordar as diversas técnicas para a irrigação de jardins e gramados. Serão estudados os tipos de aspersores e gotejadores, válvulas controladoras de fluxo e painéis de automação. Além disso, serão demonstrados e realizados os cálculos para setorização das áreas e dimensionamento hidráulico do sistema."
    },
    {
        titulo:"Risco em obras",
        descricao: "Apresentar os conceitos e metodologias preventivas de acordo com a NR-18 que devem ser praticadas em obras de construção civil para evitar acidentes de trabalho."
    },
    {
        titulo:"Dimensionamento geotécnico e estrutural de fundações diretas",
        descricao: "A proposta do minicurso DIMENSIONAMENTO GEOTÉCNICO E ESTRUTURAL DE FUNDAÇÕES DIRETAS é apresentar os conceitos básicos de pressão admissível dos solos e recalques que seria o dimensionamento geotécnico, e numa segunda etapa apresentar o dimensionamento estrutural passando alguns exemplos práticos de projetos."
    },
    {
        titulo:"Ferramentas estatísticas com o uso de planilhas eletrônicas",
        descricao: "Na época em eu vivemos, cresce a necessidade de avaliar e reconhecer se uma evidência estatística apoia uma conclusão apresentada. Além disso, o uso da estatística incentiva a reagir de modo inteligente às informações que lê ou escuta, passando a refletir, analisar e questionar as informações encontradas. O uso de estatísticas é necessário à análise resultados visados pelos pesquisadores, incluindo estudantes. As planilhas eletrônicas, como o Microsoft Excel, possuem ferramentas especiais para análise dos dados simples e coletados, por meio da estatística descritiva."
    },
    {
        titulo:"Pontes",
        descricao: "Consiste em um apanhado geral dos principais tópicos a serem tratados sobre pontes e estimular os alunos a usar o Ftool para brincar um pouco com os sistemas estruturais e as linhas de influência. Esse software será abordado porque os softwares de dimensionamento possuem um grau de complexidade que não dá pra serem abordados em pouco tempo."
    },
    {
        titulo:"EPANET como ferramenta para simulação de redes de distribuição de água.",
        descricao: "Execução de simulações estáticas e dinâmicas do comportamento hidráulico da água em redes de distribuição pressurizada através de programa computacional como ferramenta de apoio."
    },
    {
        titulo:"Análise de Valor Agregado para Gerenciamento de Projetos.",
        descricao: "A Gestão de Valor Agregado (GVA) é considerada como um dos melhores métodos para analisar a evolução dos custos e prazos de um projeto devido à sua eficiência. Ela integra o escopo, o cronograma e os recursos para então medir o desempenho e o progresso do que foi planejado."
    },
    {
        titulo:"Introdução a Normas Regulamentadoras do MTE",
        descricao: "O minicurso tratará sobre a importância da aplicação das normas regulamentadoras do ministério do trabalho e emprego no ambiente de trabalho, afim de evitar possíveis acidentes de trabalho, danos materiais e multas."
    },
    {
        titulo: "Dimensionamento de pavimento rígido",
        descricao: "Apresentação sobre pavimento rígido, histórico, características e vantagens. Passaremos para o dimensionamento pelo Método - PCA/84, e metodologia de calculo e por fim, será apresentado um software livre desenvolvido no IME para facilitar a definição das espessuras pelo método PCA/84. "
    },
    {
        titulo: "O que fazer para licenciar uma obra ou empreendimento?",
        descricao: "O mini-curso terá como objetivo expor os fundamentos da avaliação de impactos ambientais e apresentar seus objetivos e métodos; introduzir o conceito de processo de avaliação de impactos ambientais e a terminologia correlata; discutir a origem, a difusão e a evolução de impacto ambiental; apresentar o quadro legal e institucional brasileiro para avaliação de impactos e licenciamento ambiental; possibilitar uma compreensão das etapas de planejamento e execução de um estudo ambiental e aplicar conceitos teóricos, os quais servirão como base para as mais variadas aplicações no ramo da engenharia ambiental."
    },
    {
        titulo: "Robótica de baixo custo utilizando material reciclado",
        descricao: " Este minicurso trará um breve histórico sobre a robótica, apresentando os principais conceitos relacionados a essa tecnologia. Algumas das inovações nas áreas médica, militar, científica e educacional serão demonstradas de forma que os participantes tenham uma noção da evolução e aplicabilidade da robótica. Em um segundo momento, um protótipo de robô construído utilizando lixo tecnológico será montado pelos participantes com peças como tampas de garrafa PET, CDs e arame."
    },
    {
        titulo: "Modelagem de projetos em 3D",
        descricao: "Os desenhos em 3D possibilitam uma interpretação e visualização dos sólidos a partir de três dimensões e podem ser executados a partir da evolução dos desenhos em 2D. Com a utilização do AutoCAD - software do tipo CAD — computer aided design ou desenho auxiliado por computador, o desenvolvimento e a elaboração de desenho técnico e de projetos na área da arquitetura e das engenharias faz uso de uma importante ferramenta de visualização do produto final, auxiliando em importantes tomadas de decisão quanto à forma, materiais utilizados e estética do mesmo. O objetivo do minicurso é apresentar os principais comandos para modelagem de um projeto em 3D, de modo que a partir destes seja possível a criação de produtos diversos."
    },
    {
        titulo:"Projeto & Desenvolvimento – Produtos Sustentáveis",
        descricao: "O minicurso se estruturará em : Introdução, Definição, Noções do Sistema Lean ( Toyota ) de desenvolvimento de novos produtos para utilização em empresas brasileiras, Produto Sustentável e Oficina Prática."
    },
    {
        titulo: "Modelagem Matemática",
        descricao: " O minicurso Modelagem Matemática tem o objetivo de proporcionar ao aluno o entedimento do processo de criação de modelos matemáticos para a engenharia. Serão estudadas as etapas de estruturação de um modelo e suas implicações técnicas e políticas. Análises de casos com o uso de Excel complementam os estudos."
    },
    {
        titulo: "Dimensionamento de elementos especiais: Piscinas",
        descricao: "Resumo: Um reservatório é um recipiente capaz de armazenar grãos e líquidos. Entre os líquidos, o mais comum é a água, sendo potável ou servida, além de  bebidas e hidrocarbonetos, entre outros. Por outro lado, do ponto de vista da hidráulica este elemento estrutural pode ser usado para garantir a adução com vazão constante. Ademais, sua classificação é dada de acordo com a localização do terreno, podendo ser: enterrado, semi-enterrado, apoiado e stand pipe. Neste contexto, o mini curso abordará os reservatórios enterrados."
    },
    {
        titulo: "Mapeamento geotécnico com sondagens e suas aplicações em obras de fundações",
        descricao: "O Minicurso abordará a implantação de banco de dados geológico - geotécnicos a partir de sondagens à percussão e sua aplicação em atividades de planejamento, cálculo e execução de obras de fundações. Serão abordadas noções de realização e interpretação de sondagens à percussão com SPT, seu uso no Mapeamento Geotécnico e como os diferentes tipos de perfis geotécnicos direcionam a escolha do tipo de fundação. Como exemplo, serão demonstrados casos de obras envolvendo a ferramenta."
    },
    {
        titulo: "'Lean Manufacturing' – Manufatura Enxuta",
        descricao: "Como trabalhar no sentido de reduzir estoques, evitar desperdícios, e ganhar, descobrindo o que agrega e não agrega valor à produção."
    },
    {
        titulo: "Projeto Luminotécnico pelo método dos Lúmens e pelo Software DIALux",
        descricao: "O projeto luminotécnico e a verificação de iluminação em ambientes sofreram mudanças com a criação NBR ISSO 8995-1. O minicurso tem o objetivo de detalhar essas mudanças, e realizar o projeto à partir do Método dos Lúmens, e pelo software Dialux."
    },
    {
        titulo: "Processos de separação por membranas",
        descricao: "Os processos de separação por membranas têm encontrado um rápido desenvolvimento, principalmente devido ao fato da maioria das separações ocorrerem sem mudança de fase, sendo energeticamente vantajosos, e apresentarem um produto final de alta qualidade. Uma membrana é um filme que separa duas fases atuando como uma barreira seletiva entre as fases e com capacidade de transportar determinados componentes. No minicurso, serão abordados os processos que utilizam o gradiente de pressão como força motriz para promover a separação: microfiltração, ultrafiltração, nanofiltração e osmose inversa. Público-alvo: Acadêmicos e profissionais de engenharia."
    }

];
var lista = [
    {
        nome: "Dr. Fernando Sá Cavalcanti",
        curso: 0,
        image: "images/Perfil_Fernando_Cavalcanti.jpg",
        bio: "Possui Graduação em Arquitetura e Urbanismo pela Universidade Federal de Alagoas (2007), Mestrado em Construção Civil pela Universidade Federal de São Carlos (2010), Doutorado em Arquitetura e Urbanismo pela Universidade de São Paulo (2013) e Curso Técnico em Edificações pelo Centro Federal de Educação Tecnológica de Alagoas (2000). Atualmente é Professor Adjunto da Universidade Federal de Alagoas na área de Linguagem e Representação e desenvolve pesquisa com ênfase em Projeto e Tecnologia de Arquitetura e Urbanismo e Conforto Ambiental, atuando principalmente nos seguintes temas: Projeto Arquitetônico, Ventilação Natural, Desempenho Térmico de Edificações, Arquitetura Bioclimática e Simulação Computacional."
    },
    {
        nome: "Dr. Allan Cunha de Barros",
        curso: 1,
        image: "images/alancunha.jpg",
        bio: "Possui graduação em Engenharia Agronômica pela Universidade Federal de Sergipe (2006) e mestrado e doutorado em Irrigação e Drenagem pela ESALQ-USP ( 2011). Atualmente é professor da Universidade Federal de Alagoas (UFAL). Tem experiência na área de Engenharia Agrícola, com ênfase em Irrigação e Drenagem, atuando principalmente nos seguintes temas: qualidade da irrigação, entupimento de emissores, manejo da irrigação, TDR, simulação de crescimento de culturas."
    },
    {
        nome: "Msc. Tania Voronkoff",
        image: "images/Perfil_Tania_Voronkoff.jpg",
        curso: 13,
        bio: "Possui graduação em Engenharia Civil pela Universidade Federal de Alagoas - UFAL (1984), pós-graduação Latu Sensu em Formação para Docência do Ensino Superior pela Fundação Educacional Jayme de Altavila - FEJAL (2001) e mestrado em Engenharia de Produção, na área de Gestão da Produção do NEP - Nucleo de Engenharia de Produção, da Universidade Federal da Paraiba - UFPB (2009). Lecionou nos Cursos de Engenharia Civil e Engenharia de Produção da Universidade Federal de Alagoas - Campus Sertão, as disciplinas: Engenharia de Produto I, Engenharia de Produto II, Engenharia de Metodos, Gestão de Residuos Solidos e Processos Produtivos. Atualmente é professora do Curso de Engenharia de Pesca da Unidade Penedo - Campus Arapiraca da Universidade Federal de Alagoas onde coordena o Curso de Engenharia de Produção."
    },
    {
        nome: "Msc. Christiano Varady",
        image: "images/Perfil_Cristiano_Varady.jpg",
        bio: "Engenheiro Civil formado pela Universidade Federal de Alagoas. Atualmente, e mestrando em Estruturas pela Universidade Federal de Alagoas e Especialista em Gerenciamento de Projetos pela Fundação Getulio Vargas. Possui interesse nas áreas de Gerenciamento de Projetos, Computação Grafica e Correlação de Imagens Digitais."
    },
    {
        nome: "Msc. Karlisson Andre",
        curso: 15,
        image: "images/karlisonandre.png",
        bio: "Possui graduação em Eng. Civil pela Universidade Federal de Alagoas (2007) e mestrado em Engenharia Civil pela Universidade Federal de Alagoas (2011). Tem experiência na área de Engenharia Civil, com ênfase em Engenharia Civil, atuando principalmente nos seguintes temas: resíduo de construção e demolição, agregado, argamassa, reciclagem e concreto."
    },
    {
        nome: "Dr. Rafaela Faciola",
        curso: 2,
        image: "images/rafaelafaciola.png",
        bio: " Formada em Engenharia Civil pela Faculdade Ideal - FACI (2006). Mestre em Geotecnia pela Universidade de São Paulo - Escola de Engenharia de São Carlos (2009). Doutora em Geotecnia pela Universidade de São Paulo - Escola de Engenharia de São Carlos (2014). Professora Adjunta na Universidade Federal de Alagoas - UFAL, Campus do Sertão, no curso de Engenharia Civil, atuando nas áreas de mecanica dos solos e fundações. Atua na área da Geotecnia Ambiental, com temas relacionados disposição de residuos solidos, aterros sanitarios e solos expansivos."
    },
    {
        nome: "Dr. Juliane Marques",
        curso: 3,
        image: "images/Juliane_Marques_QEXTC1O.jpg",
        bio: "Possui graduação em Engenharia Civil pela Universidade Federal de Alagoas, mestrado em Engenharia Civil - USP - Escola de Engenharia de São Carlos e doutorado em Engenharia Civil pela Escola Politecnica da Universidade de São Paulo. Atualmente é professora adjunto A da Universidade Federal de Alagoas - UFAL, e responsavel tecnico da AGM Geotecnica Ltda. Tem experiência na área de Engenharia Civil, com ênfase em Engenharia de Solos / Geotecnia, atuando principalmente nos seguintes temas: fundações profundas e fundações superficiais, estacas moldadas in loco com bulbos, estacas escavadas a seco com aneis, provas de carga, reforco de fundações, instrumentação em profundidade e pratica de fundações."
    },
    {
        nome: "Msc. Alexandre Nascimento de Lima",
        curso: 4,
        image: "images/Alexandre_Lima_3muXQPc_OkXylbk.jpg",
        bio: "Possui graduação em Engenharia Civil pela Universidade Federal de Alagoas e Mestrado em Engenharia Civil área Estruturas. Atualmente é Professor Assistente na área de Materiais da Universidade Federal de Alagoas, no Campus do Sertão. Tem experiência na área de Engenharia Civil, com ênfase em Materiais e Componentes de Construção e estruturas de concreto armado. Atualmente é Coordenador do Curso de Engenharia de Produção do Campus do Sertão."
    },
    {
        nome: "Msc. Viviane Regina Costa",
        curso: 12,
        image: "images/Viviane_Costa.jpg",
        bio: "Graduada em Arquitetura e Urbanismo pela Universidade Federal de Alagoas (2006). Mestra em Arquitetura e Urbanismo pelo programa de Pós-Graduação em Dinâmicas do Espaço Habitado da Faculdade de Arquitetura e Urbanismo da Universidade Federal de Alagoas (2008). Doutoranda em Arquitetura e Urbanismo no Programa Dinâmicas do Espaço Habitado da Faculdade de Arquitetura e Urbanismo da Universidade Federal de Alagoas. Professora do Eixo de Tecnologia da Universidade Federal de Alagoas do Campus do Sertão. Pesquisadora do Grupo de Pesquisa Morfologia dos Espacos de Uso Público. Tem experiência na área de Arquitetura e Urbanismo, atuando principalmente nos seguintes temas: sistemas de espaços livres; espaços urbanos de uso público; apropriação dos espaços, intervenção urbana, centralidades urbanas e áreas de atividades multiplas."
    },
    {
        nome: "Dr. Aline Ramos",
        curso: 5,
        image: "images/Aline_Ramos_nM5yXAJ.jpg",
        bio: "Possui graduação em Engenharia Civil pela Universidade Federal de Alagoas (1987), mestrado em Engenharia Civil (Engenharia de Estruturas) pela Universidade de São Paulo (1992) e doutorado em Engenharia Civil (Engenharia de Estruturas) pela Universidade de São Paulo (2002). Atualmente é professor associado da Universidade Federal de Alagoas, e desenvolve pesquisas nas linhas: mecânica das estruturas, estruturas de concreto (moldado no local e pré-moldado), coordenação modular e habitação de interesse social. Participou da fundação da Associação Rede Metrologica de Alagoas-RMAL, atuou como Diretora Técnica e atualmente exerce o cargo de Presidente da mesma. Exerce ainda o cargo de Presidente do Instituto de Desenvolvimento Cientifico e Tecnologico de Alagoas-ICTAL, orgão responsável pela gestão do Parque Tecnológico de Alagoas."
    },
    {
        nome: "Dr. Antonio Netto",
        curso: 6,
        image: "images/Antonio_Netto_mNyh1HC.jpg",
        bio: "Possui graduação em Engenharia Civil pela Universidade Federal de Alagoas (UFAL) e Pos-graduação (Mestrado e Doutorado) pela Escola de Engenharia de São Carlos - EESC da Universidade de São Paulo - USP. Tem experiência na área de Engenharia Ambiental, com ênfase em tratamento de aguas residuarias, atuando principalmente nos seguintes temas: licenciamento ambiental, projeto e execução de estações de tratamento de agua e esgoto, tratamento combinado anaerobio-aeróbio de esgoto sanitario, reator de leito fixo operado de modo continuo e avaliação de projetos de melhorias habitacionais e sanitarias."
    },
    {
        nome: "Msc. Dalgoberto Miquilino",
        curso: 7,
        image: "images/Dalgoberto_Miquilino_ihOU1MW.jpg",
        bio: "Graduado em Sistemas de Informação pela Faculdade de Alagoas, Mestre em Modelagem Computacional do Conhecimento pela Universidade Federal de Alagoas-UFAL. Pesquisador de áreas relacionadas a Gerenciamento de Projetos, Educação a distancia, usabilidade e AVA. Experiência em EAD como tutor de sala, tutor-online e professor. Experiência em Docência no Ensino Superior tendo atuado como professor nas áreas de tecnologia da informação, gestão de negocios, gestão educacional e gerenciamento de projetos em diversas instituições de ensino como Faculdade Mauricio de Nassau, FGV, UNOPAR, UFAL-UAB, a nivel de graduação e pos-graduação. Possui experiência em Gestão educacional onde ja atuou como coordenador de graduação e Coordenador-Geral de Pos-graduação na Faculdade Mauricio de Nassau. Trabalha com projetos web, arquitetura da informação, gerência de projetos e ministra aulas ha 15 anos. Atualmente atua como docente Assistente na Universidade Federal de Alagoas-Campus do Sertão, lecionando disciplinas na área de Computação, Sistemas de Informação e Gerenciamento de Riscos nos cursos de Engenharia civil e Engenharia de Produção."
    },
    {
        nome: " Dra. Wanessa Cartaxo Soares",
        curso: 16,
        image: "images/Wanessa_Soares.jpg",
        bio: "Possui graduação em Engenharia Civil pela Universidade Federal da Paraiba (2002); Mestrado em Geotecnia pela Universidade de São Paulo (USP) (2005) e Doutorado em Ciências (Programa: Geotecnia) pela Universidade de São Paulo (USP) (2011) . Atualmente é Diretora Técnica das empresas Concresolo Consultoria em Concreto e Solos Ltda. e Copesolo Estacas e Fundações Ltda. Atualmente é professora da disciplina de Fundações no Curso de Engenharia Civil do Centro Universitario de João Pessoa, onde também ministrou a disciplina de Geologia e Mecânica dos Solos. Tem experiência na área de Engenharia Civil, com ênfase em Fundações, Contenções e Mapeamento Geotécnico."
    },
    {
        nome: "Eng. João Guilherme Lessa Rocha",
        curso: 8,
        image: "images/joaozito.jpg",
        bio: "Possui graduação em Engenharia Civil pelo Centro Universitario CESMAC (2014). Pos graduado em Engenharia de Segurança do Trabalho pela Faculdade Figueiredo Costa. Coordenador Técnico da empresa SOMA Engenharia e Consultoria. "
    },
    {
        nome: "Aline Espindola",
        curso: 9,
        image: "images/Aline_Espindola_YcYi5eR.jpg",
        bio: "Possui graduação em Engenharia Civil pela Universidade Federal de Alagoas (2012) e mestrado em Engenharia de Transportes pelo Instituto Militar de Engenharia (2014). Atualmente é professor assistente da Universidade Federal de Alagoas."
    },
    {
        nome: " Msc. Emerson Lima ",
        curso: 11,
        image: "images/emerson_cortada_YQeNmJc.jpg",
        bio: "Possui graduação em Ciência da Computação pela Universidade Federal de Alagoas (2002), especialização em Automação Industrial (2011) e mestrado em Informatica pela Universidade Federal de Campina Grande (2004), concluido com distinção. Atualmente é professor do Instituto Federal de Educação, Ciência e Tecnologia de Alagoas, atuando tambem como Chefe do Departamento de Apoio Acadêmico. Tambem e coordenador do Grupo de Robotica do IFAL, tendo recebido a Comenda Cientifica Dr. Samuel Cunha pelos trabalhos desenvolvidos com o grupo (2011). Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software e Robótica, atuando principalmente nos seguintes temas: agentes móveis, padroes de projeto, metodos formais, informatica na educação, prototipagem e reciclagem de lixo tecnologico. "
    },
    {
        nome: "Dr. Eduardo Lucena",
        curso: 10,
        image: "images/Eduardo_Amorim_hIcegVF.png",
        bio: "Possui graduação em Engenharia Civil pela Universidade Federal de Alagoas-UFAL (2005), mestrado em Engenharia Hidráulica e Saneamento pela Escola de Engenharia de São Carlos (EESC) da Universidade de São Paulo-USP (2007) e doutorado em Engenharia Hidráulica e Saneamento pela Universidade de São Paulo (2009). Atualmente é professor adjunto e coordenador do curso de Engenharia Ambiental e Sanitaria e pesquisador do Centro de Tecnologia da Universidade Federal de Alagoas(UFAL). Responsavel pelas disciplinas de Avaliação de Impacto Ambiental, Análise de Risco e Tratamento de Efluentes, e professor do programas de pos-graduação em Recursos Hidricos e Saneamento do Centro de Tecnologia e Energia da Biomassa do Centro de Ciências Agrarias da UFAL. Revisor de periodico da International Journal of Hydrogen Energy, Journal of Chemical Technology and Biotechnology e REGA Revista de Gestão de aguas da America Latina. Tem experiência na área de Engenharia Hidraulica e Saneamento, com ênfase em Tratamento de águas Residuárias, atuando principalmente nos seguintes temas: tratamento anaeróbio de águas residuárias contendo compostos tóxicos (fenol), reator de anaeróbio de leito fluidificado, produção biológica de hidrogênio a partir de águas residuárias e produção de bionergia. "
    },
    {
        nome: "Msc. Felipe Souza",
        curso: 14,
        image: "images/Felipe_Souza.jpg",
        bio: "Possui graduação (2007) e mestrado (2010) em Engenharia de Produção pela Universidade Federal de Pernambuco. Atualmente é Professor Assistente de Metodos Quantitativos e Gestão de Operações na Faculdade de Economia, Administração e Contabilidade da Universidade Federal de Alagoas."
    },

    {
        nome: "Msc. Elvys Soares",
        image: "images/elvys_cortada_GXwj38E.jpg",
        bio: "Possui graduação em Bacharelado em Ciência da Computação pela Universidade Federal de Alagoas (2004), formação complementar em Analise de Testes, promovida pela Universidade Federal de Pernambuco em parceria com a Motorola (2005) e mestrado em Modelagem Computacional de Conhecimento pela Universidade Federal de Alagoas (2009). Atualmente é professor do Instituto Federal de Educação, Ciência e Tecnologia de Alagoas. Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software e Inteligência Artificial."
    },
    {
        nome: "João Constantino",
        image: "",
        bio: "Técnico em informática pelo Instituto Federal de Educação, Ciência e Tecnologia de Alagoas, Graduando do curso de Ciência da Computação pela Universidade Federal de Alagoas. Pesquisador bolsista do Grupo Robótica IFAL, atuando nas áreas de robótica, automação, prototipagem e desenvolvimento tecnológico. Atua como programador das linguagens Java , Python e C, e tem conhecimentos em programação WEB (HTML, CSS, Javascript, Servlets, JSP, Django...). Teve projetos premiados nacional e internacionalmente por diversas instituições e feiras de ciência. Atualmente desenvolvendo projetos para à tecnologia assistiva de baixo custo, sistemas web e indústria do esporte. "
    },
    {
        nome: "STARTUP ENG",
        image: "images/5.jpg",
        bio: "O Evento STARTUP ENG 2015 não é um concurso, mas sim um desafio de projetos de startups para empreendedores que desejam desenvolver suas ideias e lançar produtos comercialmente viáveis no ramo da Engenharia. O Evento tem como objetivo diagnosticar problemas reais que afetam as diversas áreas das Engenharias e propor ideias e soluções tecnológicas e o empreendedorismo digital. Para tal, pesquisadores, professores, representantes governamentais, empreendedores e instituições não governamentais atuarão num ecossistema de integração que alie a ciência, inovação e empreendedorismo em prol de soluções de qualidade. \n A participação e o envio de projetos são livres a todos os interessados e inscritos na SEMENGE 2015 e deverá ocorrer no período das 00:00h do dia 30/10/15 às 23:59h do dia 20/11/15. Os aprovados serão divulgados no site oficial do evento e demais recursos de mídia escolhidos pela comissão organizadora e fará uma apresentação para uma banca de jurados renomada no contexto das engenharias e Startups. Haverá premiação para os primeiros colocados."
    },
    {
        nome:"MSc. Lígia Lobo",
        curso: 17,
        image: "images/Ligia_Lobo.jpg",
        bio: "Graduada em Engenharia de Produção Mecânica pela Universidade Regional do Cariri - URCA, concluído em 8 de Maio de 2009. Especialista em Qualidade Industrial pela Universidad Nacional de General San Martín - UNSAM, concluído em 29 de Dezembro de 2012. Mestre em Qualidade Industrial pela Universidad Nacional de General San Martín - UNSAM, concluído em 11 de Abril de 2013. "
    },
    {
        nome:"MSc. Wellinsílvio Costa",
        curso: 18,
        image: "images/Wellinsilvio.jpg",
        bio: "Atualmente é aluno de doutorado em Sistemas de Potência do curso de Engenharia Elétrica na Universidade Federal de Campina Grande. Tem experiência na área de Sistemas Elétricos de Potência, atuando principalmente nos seguintes temas: simulação de sistemas elétricos de potência, modelagem e diagnóstico de faltas."
    },
    {
        nome: "MSc. Raniere Lira",
        curso: 19,
        image: "images/Raniere.jpg",
        bio: ""
    }
];


$(document).delegate("#index", "pageinit", function () {
    $('#tab1').addClass("ui-btn-active");
    $('#tab1').trigger('click');
    refresh_list();

    selected = {};
    selected_curse = {};
});

$(document).delegate("#mapa", "pageinit", function(){
    openPhotoSwipe = function() {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [
            {
                src: 'images/mapa1.png',
                w: 964,
                h: 1024
            },
            {
                src: 'images/mapa2.png',
                w: 1024,
                h: 683
            }
        ];

        // define options (if needed)
        var options = {
            // history & focus options are disabled on CodePen
            history: false,
            focus: false,

            showAnimationDuration: 0,
            hideAnimationDuration: 0

        };

        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    //openPhotoSwipe();

    document.getElementById('view_map_btn').onclick = openPhotoSwipe;
});

$(document).delegate("#view_curse", "pageinit", function(){
    $("#titulo").text(selected_curse.titulo);
    $("#descricao").text(selected_curse.descricao);

});

$(document).delegate("#view_item", "pageinit", function () {
    $('#nome_prof').text(selected.nome);
    $('#bio_prof').text(selected.bio);
    $('#image_prof').attr('src', selected.image);
    if(selected_curse == undefined){
        $('#view_curse_btn').hide();
    }
    $('#view_curse_btn').on('click', function(){
        if(selected_curse != null && selected_curse != {} && selected_curse.titulo){
            $.mobile.changePage("view_curse.html", {role: "dialog"});
        }
    });
});

$(document).delegate("#view_forum", "pageinit", function(){

});

// esta função refresh lista e delega metodo de click para cada item.
function refresh_list() {
    for (var i = 1; i < 5; i++) {
        var l = $("#lista-" + i);
        console.log(l);
        l.promise().done(function () {
            //refresh list here
            $(this).listview("refresh");
            //then add click event using delegation
            $(this).on("click", "li", function () {
                var temp = $(this).data();
                console.log(temp);
                if(temp.ind>=0){
                    selected = lista[parseInt(temp.ind)];
                    console.log(selected);
                    selected_curse = curses[selected.curso];
                    console.log(selected_curse);
                    $.mobile.navigate('view_item.html');
                }else{

                }
            });
        });
    }
}


/**
 * Created by Caio on 18/10/2015.
 */
function validateEmail(a) {
    var o = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return o.test(a)
}
//function postContactToGoogle() {
//    var a = $("#email").val();
//    "" !== a && validateEmail(a) && $.ajax({
//        url: "https://docs.google.com/forms/d/1S9gbOowiQ-TalLDdIeYoPf5Nqyy60aYGx3JSpNatOZc/formResponse",
//        data: {"entry.505346081": a},
//        type: "POST",
//        dataType: "xml",
//        statusCode: {
//            0: function () {
//                console.log($("#email").text())
//            }, 200: function () {
//                console.log($("#email").text())
//            }
//        }
//    })
//}
function postFormToGoogle() {
    var a = $("#nome").val(), o = $("#comentario").val();
    "" !== o && $.ajax({
        url: "https://docs.google.com/forms/d/1ngPrhbQFA-8hZ7p75tBr9qf0AxuNrf2pwf7RfwxDcDA/formResponse",
        data: {"entry_1417058320": a, "entry_391821953": o},
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
            }, 200: function () {
            }
        }
    }).done(function (html) {
        console.log(html);
        window.location = 'index.html'
    }).error(function (data) {
        console.log(data);
    });
}