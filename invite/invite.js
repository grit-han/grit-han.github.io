(() => {
 const token = new URL(location.href).searchParams.get('token');
 const valid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(token || '');
 const open = document.getElementById('open-app');
 open.href = valid ? 'dayxday://friend-invite?token=' + encodeURIComponent(token) : 'dayxday://friend-invite?token=invalid';
 let market='https://apps.apple.com/app/id6800927238';
 if (/Android/i.test(navigator.userAgent)) {
  const referrer = valid ? '&referrer=' + encodeURIComponent('invite=' + token) : '';
  market = 'https://play.google.com/store/apps/details?id=com.grittyworld.dayxday' + referrer;
 }
 document.getElementById('install-app').href=market;
 if (/Android/i.test(navigator.userAgent)) {
  location.replace('intent://friend-invite?token=' + encodeURIComponent(valid ? token : 'invalid') + '#Intent;scheme=dayxday;package=com.grittyworld.dayxday;S.browser_fallback_url=' + encodeURIComponent(market) + ';end');
 } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
  // Universal Links normally bypass this document. Recover browser-opened links before falling back to the store.
  let left = false;
  const stop = () => { left = true; };
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  window.addEventListener('pagehide', stop);
  location.replace(open.href);
  setTimeout(() => { if (!left && !document.hidden) location.replace(market); }, 1500);
 }
})();
