// Copy buttons on command blocks.
document.querySelectorAll<HTMLButtonElement>('.cmd-copy').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '');
      btn.textContent = 'Copiado';
    } catch {
      btn.textContent = 'Selecciona y copia';
    }
    setTimeout(() => (btn.textContent = 'Copiar'), 1800);
  });
});
