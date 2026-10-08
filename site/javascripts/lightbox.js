/**
 * Interactive Lightbox & Image Zoom for MkDocs Material
 * Marcelo Veras Portfolio
 */

(function () {
  let overlay, content, imgElement, titleElement, openTabBtn, openDocBtn;
  let currentZoom = 1;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  function createLightboxDOM() {
    if (document.getElementById("custom-lightbox-overlay")) return;

    overlay = document.createElement("div");
    overlay.id = "custom-lightbox-overlay";
    overlay.className = "custom-lightbox-overlay";

    overlay.innerHTML = `
      <div class="custom-lightbox-header">
        <span class="custom-lightbox-title" id="custom-lightbox-title">Imagem</span>
        <div class="custom-lightbox-controls">
          <a class="custom-lightbox-btn doc-btn" id="lightbox-open-doc" title="Abrir Relatório Oficial (PDF)" target="_blank" rel="noopener" style="display: none;">📄 Relatório PDF ↗</a>
          <button class="custom-lightbox-btn" id="lightbox-zoom-out" title="Diminuir Zoom (-)">−</button>
          <button class="custom-lightbox-btn" id="lightbox-zoom-reset" title="Restaurar Tamanho">⟲</button>
          <button class="custom-lightbox-btn" id="lightbox-zoom-in" title="Aumentar Zoom (+)">+</button>
          <a class="custom-lightbox-btn" id="lightbox-open-tab" title="Abrir imagem original em nova aba" target="_blank" rel="noopener">↗</a>
          <button class="custom-lightbox-btn close" id="lightbox-close" title="Fechar (Esc)">✕</button>
        </div>
      </div>
      <div class="custom-lightbox-content" id="custom-lightbox-content">
        <img class="custom-lightbox-img" id="custom-lightbox-img" src="" alt="Imagem ampliada" draggable="false" />
      </div>
      <div class="custom-lightbox-footer">
        🔍 Use a roda do mouse para zoom • Arraste para mover • Clique fora ou pressione Esc para fechar
      </div>
    `;

    document.body.appendChild(overlay);

    content = document.getElementById("custom-lightbox-content");
    imgElement = document.getElementById("custom-lightbox-img");
    titleElement = document.getElementById("custom-lightbox-title");
    openTabBtn = document.getElementById("lightbox-open-tab");
    openDocBtn = document.getElementById("lightbox-open-doc");

    // Eventos dos botões
    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-zoom-in").addEventListener("click", () => adjustZoom(0.25));
    document.getElementById("lightbox-zoom-out").addEventListener("click", () => adjustZoom(-0.25));
    document.getElementById("lightbox-zoom-reset").addEventListener("click", resetTransform);

    // Fechar ao clicar no fundo
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target === content) {
        closeLightbox();
      }
    });

    // Tecla Escape para fechar, +/- para zoom
    window.addEventListener("keydown", function (e) {
      if (!overlay.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "+" || e.key === "=") adjustZoom(0.25);
      else if (e.key === "-" || e.key === "_") adjustZoom(-0.25);
      else if (e.key === "0") resetTransform();
    });

    // Zoom via roda do mouse (Wheel)
    content.addEventListener(
      "wheel",
      function (e) {
        if (!overlay.classList.contains("active")) return;
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.2 : -0.2;
        adjustZoom(delta);
      },
      { passive: false }
    );

    // Arraste (Pan) da imagem quando ampliada
    content.addEventListener("mousedown", function (e) {
      if (currentZoom <= 1 && e.target !== imgElement) return;
      isDragging = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      content.classList.add("grabbing");
    });

    window.addEventListener("mousemove", function (e) {
      if (!isDragging) return;
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      updateTransform();
    });

    window.addEventListener("mouseup", function () {
      if (isDragging) {
        isDragging = false;
        content.classList.remove("grabbing");
      }
    });
  }

  function openLightbox(src, alt, docUrl) {
    createLightboxDOM();
    imgElement.src = src;
    imgElement.alt = alt || "Imagem ampliada";
    titleElement.textContent = alt || "Visualização de Imagem";
    openTabBtn.href = src;

    if (openDocBtn) {
      if (docUrl) {
        openDocBtn.href = docUrl;
        openDocBtn.style.display = "inline-flex";
      } else {
        openDocBtn.style.display = "none";
      }
    }

    resetTransform();
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!overlay) return;
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (!overlay.classList.contains("active")) {
        imgElement.src = "";
      }
    }, 250);
  }

  function adjustZoom(delta) {
    const newZoom = Math.min(Math.max(0.5, currentZoom + delta), 4);
    currentZoom = newZoom;
    if (currentZoom <= 1) {
      panX = 0;
      panY = 0;
    }
    updateTransform();
  }

  function resetTransform() {
    currentZoom = 1;
    panX = 0;
    panY = 0;
    updateTransform();
  }

  function updateTransform() {
    if (!imgElement) return;
    imgElement.style.transform = `translate(${panX}px, ${panY}px) scale(${currentZoom})`;
  }

  function attachImageListeners() {
    createLightboxDOM();

    // Selecionar imagens de conteúdo
    const images = document.querySelectorAll("article.md-content__inner img:not(.no-zoom)");
    images.forEach((img) => {
      // Ignorar logos, favicons ou fotos de perfil de 150px
      if (img.src.includes("3x4e.png") || img.src.includes("favicon") || img.src.includes("logo") || img.classList.contains("no-zoom")) {
        return;
      }

      // Adicionar cursor e evento
      img.style.cursor = "zoom-in";
      img.title = img.title || "Clique para ampliar";

      // Evitar múltiplos listeners
      if (img.dataset.lightboxAttached) return;
      img.dataset.lightboxAttached = "true";

      img.addEventListener("click", function (e) {
        const docUrl = img.dataset.docUrl || (img.closest("a") && img.closest("a").href.endsWith(".pdf") ? img.closest("a").href : null);
        const parentLink = img.closest("a");
        if (parentLink) {
          e.preventDefault();
        }
        openLightbox(img.src, img.alt, docUrl);
      });
    });
  }

  // Inicialização no DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachImageListeners);
  } else {
    attachImageListeners();
  }

  // Suporte à navegação do MkDocs Material (Instant loading)
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(function () {
      attachImageListeners();
    });
  }
})();
