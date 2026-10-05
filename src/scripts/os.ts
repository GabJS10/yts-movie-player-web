// Visitor OS from the user agent; `?os=win|linux|mac|other` forces it (handy for checks).
export type Os = 'win' | 'linux' | 'mac' | 'other';
export type Pkg = 'win' | 'deb' | 'rpm' | 'appimage';

export function detectOs(): Os {
  const forced = new URLSearchParams(location.search).get('os');
  if (forced === 'win' || forced === 'linux' || forced === 'mac' || forced === 'other') return forced;
  const ua = navigator.userAgent;
  const plat = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform || navigator.platform || '';
  if (/win/i.test(plat) || /Windows/.test(ua)) return 'win';
  if (/Android|iPhone|iPad/.test(ua)) return 'other';
  if (/mac/i.test(plat) || /Mac OS X/.test(ua)) return 'mac';
  if (/linux|x11|cros/i.test(plat + ua)) return 'linux';
  return 'other';
}

/** Highlight the visitor's row in every download table on the page. */
export function markRows(key: Pkg | null) {
  document.querySelectorAll<HTMLElement>('.dlt-row').forEach((r) => r.classList.toggle('mine', r.dataset.os === key));
}
