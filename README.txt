KPZ CUSTOMS - SITE ORGANIZADO E EDITÁVEL

Arquivos principais:

1. index.html
   Página inicial do site.

2. portfolio.html
   Página com todos os projetos.

3. vehicles-corporation.html / vehicles-illegal.html / vehicles-others.html
   Páginas separadas para veículos.

4. weapons-custom.html
   Página de armas personalizadas.

5. clothes-corporation.html / clothes-illegal.html / clothes-others.html
   Páginas separadas para roupas e skins.

6. free.html
   Página para mods gratuitos.

7. terms.html
   Página de termos da KPZ Customs.

8. data.js
   ARQUIVO MAIS IMPORTANTE PARA EDITAR.
   É nele que você adiciona projetos, troca nomes, descrições, detalhes, imagens e downloads.

9. script.js
   Controla os cards, modal, filtros, carrossel e partículas.
   Normalmente você não precisa mexer nele.

10. style.css
   Controla o visual do site.
   Mexa nele para mudar cores, tamanhos, bordas, fontes etc.

Como adicionar projeto:

1. Coloque a imagem em assets/img/
2. Abra data.js
3. Copie um bloco de projeto
4. Cole abaixo
5. Troque:
   - id
   - nome
   - categoria
   - subcategoria
   - imagem
   - descricao
   - detalhes
   - galeria

Categorias:
vehicles
weapons
clothes
free

Subcategorias:
Corporation
Illegal
Others
Custom Weapons
Download

Discord configurado:
https://discord.gg/nquZvAYmMJ


BUG CORRIGIDO:
- As páginas de subcategoria agora mostram somente a divisão aberta.
- Exemplo: clothes-corporation.html mostra apenas projetos com categoria clothes e subcategoria Corporation.
- O problema era que o script confundia a grade de projetos com botão de filtro.
