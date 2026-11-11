(() => {
 const token = location.hash.slice(1);
 const valid = /^[a-f0-9]{64}$/.test(token);
 const open = document.getElementById('open-app');
 // Capability stays in the fragment; never forward it to store/referrer/analytics.
 open.href = valid ? 'dayxday://move/#' + token : 'dayxday://move/#invalid';
 document.getElementById('install-app').href = /Android/i.test(navigator.userAgent)
  ? 'https://play.google.com/store/apps/details?id=com.grittyworld.dayxday'
  : 'https://apps.apple.com/app/id6800927238';
 // Universal/app links handle installed apps; a browser can retry using this button.
})();
