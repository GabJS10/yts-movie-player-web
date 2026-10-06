// Copy buttons on command blocks.
import { text } from './strings';

document.querySelectorAll<HTMLButtonElement>('.cmd-copy').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '');
      btn.textContent = text.copied;
    } catch {
      btn.textContent = text.copyFailed;
    }
    setTimeout(() => (btn.textContent = text.copy), 1800);
  });
});
