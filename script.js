/*
  KPZ Customs - Script principal

  O que este arquivo faz:
  - Abre/fecha o menu mobile;
  - Cria os cards do portfólio usando o data.js;
  - Abre o modal de detalhes quando clica em um projeto;
  - Controla os filtros;
  - Cria as partículas douradas do fundo.
*/

const DISCORD_URL = 'https://discord.gg/nquZvAYmMJ';

const $ = (query, context = document) => context.querySelector(query);
const $$ = (query, context = document) => [...context.querySelectorAll(query)];

// Menu mobile
$('.hamb')?.addEventListener('click', () => {
  $('.menu').classList.toggle('open');
});

// Monta o HTML de cada card de projeto
function cardHTML(projeto) {
  const isFree = projeto.categoria === 'free';

  return `
    <article class="card" data-category="${projeto.categoria}" data-sub="${projeto.subcategoria.toLowerCase()}" onclick="openProject('${projeto.id}')">
      <img src="${projeto.imagem}" alt="${projeto.nome}">

      <div class="card-body">
        <span class="tag">${projeto.categoria} / ${projeto.subcategoria}</span>
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>

        ${isFree ? `
          <a class="free-link" href="${projeto.download || DISCORD_URL}" ${projeto.download ? 'download' : ''} target="_blank" rel="noopener" onclick="event.stopPropagation()">
            Download
          </a>
        ` : ''}
      </div>
    </article>
  `;
}

// Renderiza projetos na página atual
function renderProjects(filter = 'all', subcategoria = '') {
  const grid = $('#projectGrid');
  if (!grid) return;

  const lista = projetos.filter((projeto) => {
    const matchCategoria = filter === 'all' || projeto.categoria === filter;
    const matchSubcategoria = !subcategoria || projeto.subcategoria.trim().toLowerCase() === String(subcategoria).trim().toLowerCase();
    return matchCategoria && matchSubcategoria;
  });

  grid.innerHTML = lista.map(cardHTML).join('') || `
    <p style="color:#aaa;text-align:center;grid-column:1/-1">
      Nenhum projeto cadastrado nessa divisão.
    </p>
  `;
}

// Botões de filtro do portfólio
// IMPORTANTE: pegamos somente botões com data-filter.
// Antes o script pegava também a grade #projectGrid, porque ela também tinha data-filter.
// Isso causava o bug de páginas como Clothes / Corporation exibirem Clothes / Illegal e Others.
$$('button[data-filter]').forEach((botao) => {
  botao.addEventListener('click', () => {
    $$('button[data-filter]').forEach((item) => item.classList.remove('active'));
    botao.classList.add('active');
    renderProjects(botao.dataset.filter);
  });
});

// Abre o modal de detalhes do projeto
function openProject(id) {
  const projeto = projetos.find((item) => item.id === id);
  if (!projeto) return;

  $('#modalTitle').textContent = projeto.nome;
  $('#modalCategory').textContent = `${projeto.categoria} / ${projeto.subcategoria}`;
  $('#modalDesc').textContent = projeto.descricao;
  $('#modalMain').src = projeto.imagem;
  $('#modalDetailsTitle').textContent = projeto.nome;

  $('#modalDetails').innerHTML = projeto.detalhes
    .map((detalhe) => `<li>${detalhe}</li>`)
    .join('');

  $('#modalThumbs').innerHTML = projeto.galeria
    .map((imagem) => `<img src="${imagem}" onclick="$('#modalMain').src='${imagem}'" alt="Preview do projeto">`)
    .join('');

  $('#modalDownload').href = projeto.categoria === 'free'
    ? (projeto.download || DISCORD_URL)
    : DISCORD_URL;

  $('#modalDownload').target = '_blank';
  $('#modalDownload').rel = 'noopener';
  $('#modalDownload').textContent = projeto.categoria === 'free'
    ? 'Baixar Mod'
    : 'Solicitar Projeto';

  $('.modal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

// Fecha o modal
function closeProject() {
  $('.modal').classList.remove('show');
  document.body.style.overflow = '';
}

$('.modal-close')?.addEventListener('click', closeProject);
$('.modal')?.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) closeProject();
});

// Renderiza carrossel da Home
function renderFeatured() {
  const carousel = $('#featuredCarousel');
  if (!carousel) return;

  // O carrossel mostra SOMENTE projetos com destaque: true no data.js.
  // Para escolher as fotos que passam, edite o campo destaque de cada projeto.
  const destaques = projetos.filter((projeto) => projeto.destaque === true);

  // Duplicamos a lista para o efeito de rolagem infinita ficar suave.
  const lista = [...destaques, ...destaques];

  carousel.innerHTML = lista.map((projeto) => `
    <article class="feat" onclick="openProject('${projeto.id}')">
      <img src="${projeto.imagem}" alt="${projeto.nome}">
      <div>
        <small>${projeto.categoria} / ${projeto.subcategoria}</small>
        <b>${projeto.nome}</b>
      </div>
    </article>
  `).join('') || `
    <p style="color:#aaa;text-align:center;width:100%">
      Nenhum destaque cadastrado. Coloque destaque: true em algum projeto no data.js.
    </p>
  `;
}

renderFeatured();

// Renderiza os projetos de cada página/categoria automaticamente
function renderPageByData() {
  const grid = $('#projectGrid');
  if (!grid) return;

  renderProjects(grid.dataset.category || grid.dataset.filter || 'all', grid.dataset.sub || '');
}

renderPageByData();

// Partículas douradas no fundo
const canvas = $('#particles');

if (canvas) {
  const ctx = canvas.getContext('2d');
  let width;
  let height;
  let particles = [];

  function resizeParticles() {
    width = canvas.width = innerWidth;
    height = canvas.height = innerHeight;

    particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      v: Math.random() * 0.35 + 0.08,
      a: Math.random() * 0.55 + 0.14
    }));
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.y -= p.v;

      if (p.y < -8) {
        p.y = height + 8;
        p.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(217,184,47,${p.a})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(217,184,47,.55)';
      ctx.fill();
    });

    requestAnimationFrame(drawParticles);
  }

  addEventListener('resize', resizeParticles);
  resizeParticles();
  drawParticles();
}
