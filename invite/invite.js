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
 if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))location.replace(market);
})();
