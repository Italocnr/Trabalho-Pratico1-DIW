// estrutura json pagina de detalhes
const projetosDetalhes = { // Renomeado para seguir o padrão camelCase

    // Feira de Ciências e Tecnologia
    "feiraDeCiencias": { // ID em camelCase
        // Seção Detalhes principal
        titulo: "Feira de Ciências e Tecnologia", 
        introducao: "Explore a inovação e o pensamento científico que movem nossos alunos em busca de soluções para o futuro.", 

        // Seção de detalhes 1 (imagem + texto)
        secaoDetalhes1: { 
            titulo: "Polo de Iniciação Científica e Tecnologia", 
            imagem: "img/alunos_trabalhando_feira_de_ciencias.png", 
            altImagem: "Alunos trabalhando em projeto de feira de ciências",
            texto: `A Feira de Ciências e Tecnologia anual da Escola Estadual Florentino Arnaldo Coelho é o ápice do aprendizado investigativo. Nossos estudantes, sob a orientação de professores especializados, desenvolvem projetos inovadores que abrangem diversas áreas do conhecimento. Essa iniciativa estimula a curiosidade, o pensamento crítico e a aplicação prática de conceitos aprendidos em sala de aula, preparando-os para os desafios do ensino superior e do mercado de trabalho.`,
            layout: "image-left"
        },

        // Seção de galeria
        galeria: { 
            titulo: "Momentos e Descobertas na Feira", 
            imagens: [ 
                { src: "img/aluno_apresentando_projeto_feira.png", alt: "Aluno apresentando projeto na feira" },
                { src: "img/experimento_cientifico_em_andamento.png", alt: "Experimento científico em andamento" },
                { src: "img/visitantes_interagindo_feira.png", alt: "Visitantes interagindo com projetos na feira" }
            ],
            descricao: "Confira alguns dos momentos mais marcantes e das invenções apresentadas em nossas últimas edições, evidenciando o talento e a dedicação de nossos jovens cientistas"
        },

        // Seção de depoimento
        depoimento: { 
            texto: "Participar da Feira de Ciências foi uma experiência transformadora. Aprendi a pesquisar, a colaborar e apresentar minhas ideias com confiança.", 
            autor: "Julia Santos", 
            posicao: "Aluna, 2º Ano do Ensino Médio" 
        },

        // Seção de botão de pré-matrícula (CTA - Call To Action)
        cta: { 
            titulo: "Ficou Inspirado? Faça parte desta jornada!", 
            textoBotao: "Garanta sua vaga", 
            linkBotao: "index.html#ma" 
        }
    },


    // Clube de Debates e Oratória
    "clubeDeDebates": { 
        titulo: "Clube de Debates: Voz, Argumento e Cidadania",
        introducao: "Desenvolvemos pensadores críticos e comunicadores eficazes, preparando-os para liderar e influenciar o mundo.",

        // Seção de detalhes 1 (imagem + texto)
        secaoDetalhes1: {
            titulo: "A Arte da Argumentação",
            imagem: "img/alunos_participando_de_debate.png", 
            altImagem: "Alunos participando de um debate",
            texto: `O Clube de Debates da Escola Florentino Arnaldo Coelho é um ambiente estimulante onde os alunos aprimoram suas habilidades de oratória, pesquisa e pensamento crítico. Semanalmente, discutimos temas relevantes da atualidade, praticando a construção de argumentos sólidos e a escuta ativa. Essa atividade é fundamental para a formação de cidadãos conscientes e preparados para defender suas ideias de forma articulada e respeitosa em qualquer esfera da vida.`,
            layout: "image-right" 
        },

        // Seção de galeria
        galeria: {
            titulo: "Pensamento em Ação",
            imagens: [
                { src: "img/mesa_de_debate_com_alunos.png", alt: "Mesa de debate estudantil com alunos" },
                { src: "img/aluna_fazendo_apresentacao_oral.png", alt: "Aluna fazendo apresentação oral" },
                { src: "img/grupo_de_debate_em_discussao_ativa.png", alt: "Grupo de debate em discussão ativa" }
            ],
            descricao: "Imagens que ilustram a seriedade e o dinamismo de nossos debates, onde cada aluno tem a oportunidade de expressar sua voz e aprimorar seu poder de persuasão."
        },

        // Seção de depoimento
        depoimento: {
            texto: "O Clube de Debates me deu a confiança para expressar minhas opiniões e a capacidade de entender diferentes pontos de vista.",
            autor: "Mariana Souza",
            posicao: "Membro do Clube, 2º Ano"
        },

        // Seção de botão de pré-matrícula
        cta: {
            titulo: "Quer ter sua voz ouvida? Junte-se ao nosso clube!",
            textoBotao: "Garanta sua vaga",
            linkBotao: "index.html#ma"
        }
    },

    // Jornada Cultural de Artes
    "jornadaCulturalDeArtes": { 
        titulo: "Jornada Cultural: Expressão e Protagonismo",
        introducao: "Um palco para os talentos, vozes e criatividade dos nossos alunos, celebrando a arte e a diversidade cultural.",

        // Seção de detalhes 1 (imagem + texto)
        secaoDetalhes1: {
            titulo: "Desenvolvimento de Talentos e Habilidades",
            imagem: "img/aluno_em_apresentacao_teatral.png", 
            altImagem: "Aluno em apresentação teatral",
            texto: `A Jornada Cultural da Escola Florentino Arnaldo Coelho é um espaço vibrante onde os alunos exploram e desenvolvem suas habilidades artísticas e de comunicação. Com oficinas de teatro, música, dança e artes visuais, incentivamos a expressão individual e coletiva, aprimorando a criatividade, a disciplina e a capacidade de trabalhar em equipe. É uma celebração anual da diversidade e do talento que florescem em nossa comunidade escolar.`,
            layout: "image-left"
        },

        // Seção de galeria
        galeria: {
            titulo: "Cultura em Cena",
            imagens: [
                { src: "img/peca_de_teatro_estudantil.png", alt: "Peça de teatro estudantil" },
                { src: "img/alunos_tocando_instrumentos.png", alt: "Alunos tocando instrumentos musicais" },
                { src: "img/exposicao_de_arte_estudantil.png", alt: "Exposição de arte estudantil" }
            ],
            descricao: "Imagens que capturam a energia e a emoção das apresentações teatrais, musicais e exposições de arte que fazem da nossa Jornada Cultural um evento inesquecível."
        },

        // Seção de depoimento
        depoimento: {
            texto: "A Jornada Cultural me ajudou a descobrir minha paixão pelo teatro e a superar a timidez. É um espaço onde podemos ser quem somos.",
            autor: "Pedro Henrique",
            posicao: "Aluno, 1º Ano do Ensino Médio"
        },
        cta: {
            titulo: "Desperte seu potencial artístico e acadêmico!",
            textoBotao: "Garanta sua vaga",
            linkBotao: "index.html#ma"
        }
    },


    // Seção de Olimpíadas Acadêmicas
    "olimpiadasDoConhecimento": { 
        titulo: "Olimpíadas do Conhecimento: Desafios e Conquistas",
        introducao: "Incentivamos a excelência e o pensamento lógico através da participação em competições que revelam grandes talentos.",

        // Seção de detalhes (imagem + texto)
        secaoDetalhes1: {
            titulo: "Preparação para o Sucesso",
            imagem: "img/alunos_resolvendo_problemas.png", 
            altImagem: "Alunos resolvendo problemas em competição",
            texto: `Nossa escola tem um histórico de sucesso nas Olimpíadas Acadêmicas de Matemática, Física, Química, Biologia e Línguas. Oferecemos programas de preparação intensivos, com aulas extras e simulados, para que nossos alunos se destaquem em nível regional e nacional. A participação nessas competições não apenas aprimora o conhecimento técnico, mas também desenvolve habilidades de resolução de problemas, raciocínio lógico e gestão de tempo, essenciais para o futuro acadêmico e profissional.`,
            layout: "image-left"
        },

        // Seção de Galeria
        galeria: {
            titulo: "Momentos de Concentração e Vitórias",
            imagens: [
                { src: "img/alunos_concentrados_em_provas.png", alt: "Alunos concentrados em prova" },
                { src: "img/cerimonia_de_premiacao_olimpiadas.png", alt: "Cerimônia de premiação de olimpíada" },
                { src: "img/grupo_de_estudo_olimpiadas.png", alt: "Grupo de estudo para olimpíadas" }
            ],
            descricao: "Veja nossos alunos em ação, dedicados aos estudos e celebrando suas conquistas nas diversas olimpíadas do conhecimento que participamos anualmente."
        },

        // Seção de depoimento
        depoimento: {
            texto: "As Olimpíadas me ensinaram que a persistência e o estudo em equipe são chaves para superar qualquer desafio acadêmico.",
            autor: "Lucas Ferreira",
            posicao: "Medalhista em Matemática, 3º Ano"
        },

        // Seção de pré-matrícula das olimpíadas do conhecimento
        cta: {
            titulo: "Tem paixão por desafios? Venha para o Florentino!",
            textoBotao: "Garanta sua vaga",
            linkBotao: "index.html#ma"
        }
    },
};


// Lógica JavaScript para Carregar Detalhes na página detalhes.html 

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Verifica se o ID existe na URL e se o projeto correspondente existe no nosso JSON
    if (projectId && projetosDetalhes[projectId]) {
        loadProjectDetails(projetosDetalhes[projectId]);
    } else {
        // Lidar com projeto não encontrado ou ID ausente
        console.error("Projeto não encontrado ou ID ausente na URL.");
        // Exibir uma mensagem de erro ou redirecionar
        document.getElementById('project-title').textContent = "Projeto Não Encontrado";
        document.getElementById('project-intro').textContent = "Parece que o projeto que você procura não existe ou o link está inválido. Por favor, retorne à página inicial.";

        // Ocultar seções dinâmicas se o projeto não for encontrado
        if (document.getElementById('details-section-1')) document.getElementById('details-section-1').style.display = 'none';
        if (document.getElementById('gallery-section')) document.getElementById('gallery-section').style.display = 'none';
        if (document.getElementById('depoimento-section')) document.getElementById('depoimento-section').style.display = 'none'; // Corrigido ID
        if (document.getElementById('btn-section')) document.getElementById('btn-section').style.display = 'none'; // Corrigido ID
    }
});

function loadProjectDetails(data) {
    // Atualiza o título da página
    document.title = `Detalhes - ${data.titulo}`;

    // Seção Detalhes Principal
    document.getElementById('project-title').textContent = data.titulo;
    document.getElementById('project-intro').textContent = data.introducao;

    // --- SEÇÃO DE DETALHES 1 (IMAGEM + TEXTO) ---
    const detalhesSecao1 = data.secaoDetalhes1;
    if (detalhesSecao1) {
        document.getElementById('details-title-1').textContent = detalhesSecao1.titulo;
        document.getElementById('main-image-1').src = detalhesSecao1.imagem;
        document.getElementById('main-image-1').alt = detalhesSecao1.altImagem;
        document.getElementById('details-text-1').textContent = detalhesSecao1.texto;

        // Lógica para inverter layout
        const row1 = document.querySelector('#details-section-1 .row');
        if (row1) { // Verifica se o elemento existe
            if (detalhesSecao1.layout === "image-right") {
                row1.classList.add('flex-row-reverse');
            } else {
                row1.classList.remove('flex-row-reverse');
            }
        }
    } else {
        // Ocultar seção se não houver dados
        if (document.getElementById('details-section-1')) document.getElementById('details-section-1').style.display = 'none';
    }


    // --- SEÇÃO DE GALERIA ---
    const galeriaData = data.galeria;
    if (galeriaData && galeriaData.imagens && galeriaData.imagens.length > 0) {
        document.querySelector('#gallery-section h3').textContent = galeriaData.titulo;
        const galleryRow = document.getElementById('gallery-row');
        if (galleryRow) { 
            galleryRow.innerHTML = ''; 
            galeriaData.imagens.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col-md-4 col-sm-6 mb-4';
                col.innerHTML = `<img src="${item.src}" class="img-fluid rounded shadow-sm" alt="${item.alt}">`;
                galleryRow.appendChild(col);
            });
        }
        document.getElementById('gallery-description').textContent = galeriaData.descricao;
    } else {
        if (document.getElementById('gallery-section')) document.getElementById('gallery-section').style.display = 'none';
    }


    // --- SEÇÃO DE DEPOIMENTO ---
    const depoimentoData = data.depoimento;
    if (depoimentoData && depoimentoData.texto && depoimentoData.autor) {
        document.getElementById('depoimento-text').textContent = depoimentoData.texto; 
        document.getElementById('depoimento-author').innerHTML = `${depoimentoData.autor} <cite title="Fonte do Depoimento">${depoimentoData.posicao}</cite>`; 
    } else {
        if (document.getElementById('depoimento-section')) document.getElementById('depoimento-section').style.display = 'none'; 
    }


    // --- SEÇÃO DE CTA (Chamada para Ação do botão) ---
    const ctaData = data.cta;
    if (ctaData) {
        document.querySelector('#btn-section h2').textContent = ctaData.titulo; 
        const ctaButton = document.querySelector('#btn-section .btn'); 
        if (ctaButton) { // Verifica se o elemento existe
            ctaButton.textContent = ctaData.textoBotao;
            ctaButton.href = ctaData.linkBotao;
        }
    } else {
        if (document.getElementById('btn-section')) document.getElementById('btn-section').style.display = 'none'; 
    }
}