# Relatórios de Tráfego Pago — Action+ e Action Films

Site estático no GitHub Pages com os relatórios semanais/mensais de desempenho de tráfego pago das duas marcas. Cada período é uma página própria com guias de navegação, sempre no padrão visual de cada marca.

## Links

| Marca | Site | Pasta |
|---|---|---|
| Action+ | https://agencia-action.github.io/relatorios-trafego/ | raiz |
| Action Films | https://agencia-action.github.io/relatorios-trafego/films/ | `films/` |

**Repositório:** https://github.com/Agencia-Action/relatorios-trafego (conta `Agencia-Action`).
**Pasta local:** `C:\Users\conta\Desktop\relatorios-trafego`.

## Estrutura

```
relatorios-trafego/
├── index.html                     → redireciona para o relatório mais recente da Action+
├── reports.js                     → lista de períodos da Action+ (mais recente primeiro)
├── nav.js                         → renderiza a barra de guias + link "Action Films ▶"
├── relatorio-2026-06-12.html      → 14/05 – 12/06/2026 (atual)
├── relatorio-2026-05-29.html      → 01/05 – 29/05/2026 (maio)
├── relatorio-2026-05-04.html      → 28/04 – 04/05/2026 (semana)
├── relatorio-mar-abr-2026.html    → 01/03 – 04/05/2026 (bimestre)
├── README.md
└── films/
    ├── index.html                 → redireciona para o mais recente da Films
    ├── reports.js                 → lista de períodos da Films
    ├── nav.js                     → guias + link "Action+ ↗"
    ├── logo-action-films.png      → logo oficial (branca, fundo transparente)
    ├── relatorio-2026-06-12.html  → 14/05 – 12/06/2026 (atual)
    └── relatorio-2026-05-22.html  → 23/04 – 22/05/2026 (maio)
```

## Como atualizar (rotina semanal)

1. Copiar o relatório mais recente da marca e renomear para `relatorio-AAAA-MM-DD.html` (usar a data final do período).
2. Atualizar os números, o período no `<title>`, na tag do topo, no subtítulo e no rodapé.
3. Adicionar o novo período no **topo** da lista em `reports.js` — a guia "Atual" é sempre o primeiro item.
4. Atualizar o redirect do `index.html` da marca para o novo arquivo.
5. Publicar: `git add . && git commit && git push` (atualiza no ar em ~1 minuto).

## Regras editoriais

- **Publicar apenas KPIs e pontos positivos.** Pontos negativos e melhorias são análise interna — entregar somente no chat, nunca no site.
- Iniciar toda frase e item de lista com letra maiúscula.
- Cada relatório segue as seções: Visão geral → Google Ads → Meta Ads → Presença digital → Destaques do período.

## Padrão visual

### Action+ (Brandbook v1.0)

- **Cores:** Action Green `#91FF56` (destaque), Strategy Green `#4DC149`, Dark Blue `#042D46`, Very Dark Blue `#0C2335`, Almost Black `#00121D` (fundo), Light Blue `#A3C6D5`, Really Very Light Blue `#EEF7FF` (texto).
- **Tipografia:** Inter (texto), Clash Display só para o logotipo "Action+".
- **Estética:** flat, sem gradiente. Site oficial: agenciaaction.com.

### Action Films (manual de marca)

- **Cores:** monocromática — preto `#151515` / `#0A0A0A` (fundo), prata `#B7B8B5` → `#73777B` (destaque digital), branco, cards `#141414`, bordas `#2A2A2A`.
- **Logo:** usar sempre `films/logo-action-films.png` (extraída do manual; "action" com play encaixado no "o" + "films"). Não recriar em texto.
- **Tipografia:** Glancyr/Rink (logo) e Franie (texto) não existem como web fonts — usar Inter como fallback.
- **Tagline:** "Mais do que vídeos, criamos presença". Site oficial: actionfilms.com.br.

## Histórico de períodos publicados

| Marca | Período | Arquivo |
|---|---|---|
| Action+ | 14/05 – 12/06/2026 | `relatorio-2026-06-12.html` |
| Action+ | 01/05 – 29/05/2026 | `relatorio-2026-05-29.html` |
| Action+ | 28/04 – 04/05/2026 | `relatorio-2026-05-04.html` |
| Action+ | 01/03 – 04/05/2026 | `relatorio-mar-abr-2026.html` |
| Action Films | 14/05 – 12/06/2026 | `films/relatorio-2026-06-12.html` |
| Action Films | 23/04 – 22/05/2026 | `films/relatorio-2026-05-22.html` |
