// Renderiza a barra de guias com os períodos em #tabs (usa RELATORIOS de reports.js).
(function () {
  const el = document.getElementById("tabs");
  if (!el || typeof RELATORIOS === "undefined") return;
  const semHtml = (s) => s.replace(/\.html$/, "");
  const arquivoAtual = location.pathname.split("/").pop() || RELATORIOS[0].arquivo;
  const atual = semHtml(arquivoAtual);
  RELATORIOS.forEach((r, i) => {
    const a = document.createElement("a");
    a.className = "tab" + (semHtml(r.arquivo) === atual ? " active" : "");
    a.href = r.arquivo;
    a.textContent = r.label;
    if (i === 0) {
      const b = document.createElement("span");
      b.className = "badge";
      b.textContent = "Atual";
      a.appendChild(b);
    }
    el.appendChild(a);
  });
  // Aba do histórico consolidado (visão acumulada de todo o período).
  const hist = document.createElement("a");
  hist.className = "tab hist" + (atual === "historico" ? " active" : "");
  hist.href = "historico.html";
  hist.textContent = "Histórico consolidado";
  hist.title = "Visão acumulada de toda a gestão de tráfego";
  el.appendChild(hist);
  // Link para a outra marca.
  const marca = document.createElement("a");
  marca.className = "tab brand";
  marca.href = "../";
  marca.textContent = "Action+ ↗";
  marca.title = "Ir para os relatórios da Action+";
  el.appendChild(marca);
})();
