/**
 * Created by Caio on 03/09/2015.
 */
var selected = {};
var lista = [
    {
        nome: "Dr. Fernando Sa Cavalcanti",
        image: "images/Perfil_Fernando_Cavalcanti.jpg",
        bio: "Possui Graduacao em Arquitetura e Urbanismo pela Universidade Federal de Alagoas (2007), Mestrado em Construcao Civil pela Universidade Federal de Sao Carlos (2010), Doutorado em Arquitetura e Urbanismo pela Universidade de Sao Paulo (2013) e Curso Tecnico em Edificacoes pelo Centro Federal de Educacao Tecnologica de Alagoas (2000). Atualmente e Professor Adjunto da Universidade Federal de Alagoas na area de Linguagem e Representacao e desenvolve pesquisa com enfase em Projeto e Tecnologia de Arquitetura e Urbanismo e Conforto Ambiental, atuando principalmente nos seguintes temas: Projeto Arquitetonico, Ventilacao Natural, Desempenho Termico de Edificacoes, Arquitetura Bioclimatica e Simulacao Computacional."
    },
    {
        nome: "Dr. Allan Cunha de Barros",
        image: "images/alancunha.jpg",
        bio: "Possui graduacao em Engenharia Agronomica pela Universidade Federal de Sergipe (2006) e mestrado e doutorado em Irrigacao e Drenagem pela ESALQ-USP ( 2011). Atualmente e professor da Universidade Federal de Alagoas (UFAL). Tem experiencia na area de Engenharia Agricola, com enfase em Irrigacao e Drenagem, atuando principalmente nos seguintes temas: qualidade da irrigacao, entupimento de emissores, manejo da irrigacao, TDR, simulacao de crescimento de culturas."
    },
    {
        nome: "Msc. Tania Voronkoff",
        image: "images/Perfil_Tania_Voronkoff.jpg",
        bio: "Possui graduacao em Engenharia Civil pela Universidade Federal de Alagoas - UFAL (1984), pos - graduacao Latu Sensu em Formacao para Docencia do Ensino Superior pela Fundacao Educacional Jayme de Altavila - FEJAL (2001) e mestrado em Engenharia de Producao, na area de Gestao da Producao do NEP - Nucleo de Engenharia de Producao, da Universidade Federal da Paraiba - UFPB (2009). Lecionou nos Cursos de Engenharia Civil e Engenharia de Producao da Universidade Federal de Alagoas - Campus Sertao, as disciplinas:Engenharia de Produto I, Engenharia de Produto II,Engenharia de Metodos,Gestao de Residuos Solidos e Processos Produtivos . Atualmente e professora do Curso de Engenharia de Pesca da Unidade Penedo - Campus Arapiraca da Universidade Federal de Alagoas onde coordena o Curso de Engenharia de Producao."
    },
    {
        nome: "Msc. Christiano Varady",
        image: "images/Perfil_Cristiano_Varady.jpg",
        bio: "Engenheiro Civil formado pela Universidade Federal de Alagoas. Atualmente, e mestrando em Estruturas pela Universidade Federal de Alagoas e Especialista em Gerenciamento de Projetos pela Fundacao Getulio Vargas. Possui interesse nas areas de Gerenciamento de Projetos, Computacao Grafica e Correlacao de Imagens Digitais."
    },
    {
        nome: "Msc. Karlisson Andre",
        image: "images/karlisonandre.png",
        bio: "Possui graduacao em Eng. Civil pela Universidade Federal de Alagoas (2007) e mestrado em Engenharia Civil pela Universidade Federal de Alagoas (2011). Tem experiencia na area de Engenharia Civil, com enfase em Engenharia Civil, atuando principalmente nos seguintes temas: residuo de construcao e demolicao, agregado, argamassa, reciclagem e concreto."
    },
    {
        nome: "Dr. Rafaela Faciola",
        image: "images/rafaelafaciola.png",
        bio: " Formada em Engenharia Civil pela Faculdade Ideal - FACI (2006). Mestre em Geotecnia pela Universidade de Sao Paulo - Escola de Engenharia de Sao Carlos (2009). Doutora em Geotecnia pela Universidade de Sao Paulo - Escola de Engenharia de Sao Carlos (2014). Professora Adjunta na Universidade Federal de Alagoas - UFAL, Campus do Sertao, no curso de Engenharia Civil, atuando nas areas de mecanica dos solos e fundacoes. Atua na area da Geotecnia Ambiental, com temas relacionados disposicao de residuos solidos, aterros sanitarios e solos expansivos."
    },
    {
        nome: "Dr. Juliane Marques",
        image: "images/Juliane_Marques_QEXTC1O.jpg",
        bio: "Possui graduacao em Engenharia Civil pela Universidade Federal de Alagoas, mestrado em Engenharia Civil - USP - Escola de Engenharia de Sao Carlos e doutorado em Engenharia Civil pela Escola Politecnica da Universidade de Sao Paulo. Atualmente e professora adjunto A da Universidade Federal de Alagoas - UFAL, e responsavel tecnico da AGM Geotecnica Ltda. Tem experiencia na area de Engenharia Civil, com enfase em Engenharia de Solos / Geotecnia, atuando principalmente nos seguintes temas: fundacoes profundas e fundacoes superficiais, estacas moldadas in loco com bulbos, estacas escavadas a seco com aneis, provas de carga, reforco de fundacoes, instrumentacao em profundidade e pratica de fundacoes."
    },
    {
        nome: "Msc. Alexandre Nascimento de Lima",
        image: "images/Alexandre_Lima_3muXQPc_OkXylbk.jpg",
        bio: "Possui graduacao em Engenharia Civil pela Universidade Federal de Alagoas e Mestrado em Engenharia Civil area Estruturas. Atualmente e Professor Assistente na area de Materiais da Universidade Federal de Alagoas, no Campus do Sertao. Tem experiencia na area de Engenharia Civil, com enfase em Materiais e Componentes de Construcao e estruturas de concreto armado. Atualmente e Coordenador do Curso de Engenharia de Producao do Campus do Sertao."
    },
    {
        nome: "Msc. Viviane Regina Costa",
        image: "images/Viviane_Costa.jpg",
        bio: "Graduada em Arquitetura e Urbanismo pela Universidade Federal de Alagoas (2006). Mestra em Arquitetura e Urbanismo pelo programa de Pos-Graduacao em Dinamicas do Espaco Habitado da Faculdade de Arquitetura e Urbanismo da Universidade Federal de Alagoas (2008). Doutoranda em Arquitetura e Urbanismo no Programa Dinamicas do Espaco Habitado da Faculdade de Arquitetura e Urbanismo da Universidade Federal de Alagoas.Professora do Eixo de Tecnologia da Universidade Federal de Alagoas do Campus do Sertao. Pesquisadora do Grupo de Pesquisa Morfologia dos Espacos de Uso Publico. Tem experiencia na area de Arquitetura e Urbanismo, atuando principalmente nos seguintes temas: sistemas de espacos livres; espacos urbanos de uso publico; apropriacao dos espacos, intervencao urbana, centralidades urbanas e areas de atividades mutliplas."
    },
    {
        nome: "Dr. Aline Ramos",
        image: "images/Aline_Ramos_nM5yXAJ.jpg",
        bio: "Possui graduacao em Engenharia Civil pela Universidade Federal de Alagoas (1987), mestrado em Engenharia Civil (Engenharia de Estruturas) pela Universidade de Sao Paulo (1992) e doutorado em Engenharia Civil (Engenharia de Estruturas) pela Universidade de Sao Paulo (2002). Atualmente e professor associado da Universidade Federal de Alagoas, e desenvolve pesquisas nas linhas: mecanica das estruturas, estruturas de concreto (moldado no local e pre-moldado), coordenacao modular e habitacao de interesse social. Participou da fundacao da Associacao Rede Metrologica de Alagoas-RMAL, atuou como Diretora Tecnica e atualmente exerce o cargo de Presidente da mesma. Exerce ainda o cargo de Presidente do Instituto de Desenvolvimento Cientifico e Tecnologico de Alagoas-ICTAL, orgao resonsavel pela gestao do Parque Tecnologico de Alagoas."
    },
    {
        nome: "Dr. Antonio Netto",
        image: "images/Antonio_Netto_mNyh1HC.jpg",
        bio: "Possui graduacao em Engenharia Civil pela Universidade Federal de Alagoas (UFAL) e Pos-graduacao (Mestrado e Doutorado) pela Escola de Engenharia de Sao Carlos - EESC da Universidade de Sao Paulo - USP. Tem experiencia na area de Engenharia Ambiental, com enfase em tratamento de aguas residuarias, atuando principalmente nos seguintes temas: licenciamento ambiental, projeto e execucao de estacoes de tratamento de agua e esgoto, tratamento combinado anaerobio-aerobio de esgoto sanitario, reator de leito fixo operado de modo continuo e avaliacao de projetos de melhorias habitacionais e sanitarias."
    },
    {
        nome: "Msc. Dalgoberto Miquilino",
        image: "images/Dalgoberto_Miquilino_ihOU1MW.jpg",
        bio: "Graduado em Sistemas de Informacao pela Faculdade de Alagoas, Mestre em Modelagem Computacional do Conhecimento pela Universidade Federal de Alagoas-UFAL. Pesquisador de areas relacionadas a Gerenciamento de Projetos, Educacao a distancia, usabilidade e AVA. Experiencia em EAD como tutor de sala, tutor-online e professor. Experiencia em Docencia no Ensino Superior tendo atuado como professor nas areas de tecnologia da informacao, gestao de negocios, gestao educacional e gerenciamento de projetos em diversas instituicoes de ensino como Faculdade Mauricio de Nassau, FGV, UNOPAR, UFAL-UAB, a nivel de graduacao e pos-graduacao. Possui experiencia em Gestao educacional onde ja atuou como coordenador de graduacao e Coordenador-Geral de Pos-graduacao na Faculdade Mauricio de Nassau. Trabalha com projetos web, arquitetura da informacao, gerencia de projetos e ministra aulas ha 15 anos. Atualmente atua como docente Assistente na Universidade Federal de Alagoas-Campus do Sertao, lecionando disciplinas na area de Computacao, Sistemas de Informacao e Gerenciamento de Riscos nos cursos de Engenharia civil e Engenharia de Producao."
    },
    {
        nome: " Dra. Wanessa Cartaxo Soares",
        image: "images/Wanessa_Soares.jpg",
        bio: "Possui graduacao em Engenharia Civil pela Universidade Federal da Paraiba (2002); Mestrado em Geotecnia pela Universidade de Sao Paulo (USP) (2005) e Doutorado em Ciencias (Programa: Geotecnia) pela Universidade de Sao Paulo (USP) (2011) . Atualmente e Diretora Tecnica das empresas Concresolo Consultoria em Concreto e Solos Ltda. e Copesolo Estacas e Fundacoes Ltda. Atualmente e professora da disciplina de Fundacoes no Curso de Engenharia Civil do Centro Universitario de Joao Pessoa (UNIPe), onde tambem ministrou a disciplina de Geologia e Mecanica dos Solos. Tem experiencia na area de EngenhariaCivil, com enfase em Fundacoes, Contencoes e Mapeamento Geotecnico."
    },
    {
        nome: "Eng. Joao Guilherme Lessa Rocha",
        image: "images/user.png",
        bio: "Possui graduacao em Engenharia Civil pelo Centro Universitario CESMAC (2014). Pos graduado em Engenharia de Seguranca do Trabalho pela Faculdade Figueiredo Costa. Coordenador Tecnico da empresa SOMA Engenharia e Consultoria. "
    },
    {
        nome: "Aline Espindola",
        image: "images/Aline_Espindola_YcYi5eR.jpg",
        bio: "Possui graduacao em Engenharia Civil pela Universidade Federal de Alagoas (2012) e mestrado em Engenharia de Transportes pelo Instituto Militar de Engenharia (2014). Atualmente e professor assistente i da Universidade Federal de Alagoas."
    },
    {
        nome: " Msc. Emerson Lima ",
        image: "images/emerson_cortada_YQeNmJc.jpg",
        bio: "Possui graduacao em Ciencia da Computacao pela Universidade Federal de Alagoas (2002), especializacao em Automacao Industrial (2011) e mestrado em Informatica pela Universidade Federal de Campina Grande (2004), concluido com distincao. Atualmente e professor do Instituto Federal de Educacao, Ciencia e Tecnologia de Alagoas, atuando tambem como Chefe do Departamento de Apoio Academico. Tambem e coordenador do Grupo de Robotica do IFAL, tendo recebido a Comenda Cientifica Dr. Samuel Cunha pelos trabalhos desenvolvidos com o grupo (2011). Tem experiencia na area de Ciencia da Computacao, com enfase em Engenharia de Software e Robotica, atuando principalmente nos seguintes temas: agentes moveis, padroes de projeto, metodos formais, informatica na educacao, prototipagem e reciclagem de lixo tecnologico. "
    },
    {
        nome: "Dr. Eduardo Lucena",
        image: "images/Eduardo_Amorim_hIcegVF.png",
        bio: "Possui graduacao em Engenharia Civil pela Universidade Federal de Alagoas-UFAL (2005), mestrado em Engenharia Hidraulica e Saneamento pela Escola de Engenharia de Sao Carlos (EESC) da Universidade de Sao Paulo-USP (2007) e doutorado em Engenharia Hidraulica e Saneamento pela Universidade de Sao Paulo (2009). Atualmente e professor adjunto e coordenador do curso de Engenharia Ambiental e Sanitaria e pesquisador do Centro de Tecnologia da Universidade Federal de Alagoas(UFAL). Responsavel pelas disciplinas de Avaliacao de Impacto Ambiental, Analise de Risco e Tratamento de Efluentes. e professor do programas de pos-graduacao em Recursos Hidricos e Saneamento do Centro de Tecnologia e Energia da Biomassa do Centro de Ciencias Agrarias da UFAL. Revisor de periodico da International Journal of Hydrogen Energy, Journal of Chemical Technology and Biotechnology e REGA Revista de Gestao de aguas da America Latina. Tem experiencia na area de Engenharia Hidraulica e Saneamento, com enfase em Tratamento de aguas Residuarias, atuando principalmente nos seguintes temas: tratamento anaerobio de aguas residuarias contendo compostos toxicos (fenol), reator de anaerobio de leito fluidificado, producao biologica de hidrogenio a partir de aguas residuarias e producao de bionergia. "
    },
    {
        nome: "Msc. Felipe Souza",
        image: "images/Felipe_Souza.jpg",
        bio: "Possui graduacao (2007) e mestrado (2010) em Engenharia de Producao pela Universidade Federal de Pernambuco. Atualmente e Professor Assistente de Metodos Quantitativos e Gestao de Operacoes na Faculdade de Economia, Administracao e Contabilidade da Universidade Federal de Alagoas."
    },

    {
        nome: "Msc. Elvys Soares",
        image: "images/elvys_cortada_GXwj38E.jpg",
        bio: "Possui graduacao em Bacharelado em Ciencia da Computacao pela Universidade Federal de Alagoas (2004), formacao complementar em Analise de Testes, promovida pela Universidade Federal de Pernambuco em parceria com a Motorola (2005) e mestrado em Modelagem Computacional de Conhecimento pela Universidade Federal de Alagoas (2009). Atualmente e professor do Instituto Federal de Educacao, Ciencia e Tecnologia de Alagoas. Tem experiencia na area de Ciencia da Computacao, com enfase em Engenharia de Software e Inteligencia Artificial."
    }];


$(document).delegate("#index", "pageinit", function () {
    $('#tab1').addClass("ui-btn-active");
    refresh_list();
});

$(document).delegate("#view_item", "pageinit", function () {
    $('#nome_prof').text(selected.nome);
    $('#bio_prof').text(selected.bio);
    $('#image_prof').attr('src', selected.image);
    selected = {};
});

// esta funcao refresh lista e delega metodo de click para cada item.
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