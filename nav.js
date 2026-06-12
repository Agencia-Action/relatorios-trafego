// Renderiza a barra de guias com os períodos em #tabs (usa RELATORIOS de reports.js).
(function () {
  const el = document.getElementById("tabs");
  if (!el || typeof RELATORIOS === "undefined") return;
  const semHtml = (s) => s.replace(/\.html$/, "");
  const atual = semHtml(location.pathname.split("/").pop() || RELATORIOS[0].arquivo);
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
})();
