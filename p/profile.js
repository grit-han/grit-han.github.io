(() => {
 const code=new URL(location.href).searchParams.get('u')||'';const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
 if(!/^[A-Za-z0-9_-]{22}$/.test(code))return;
 let bits=0,value=0,hex='';for(const char of code){value=(value<<6)|alphabet.indexOf(char);bits+=6;if(bits>=8){bits-=8;hex+=((value>>>bits)&255).toString(16).padStart(2,'0');}}
 if((value&15)!==0)return;
 const id=hex.slice(0,8)+'-'+hex.slice(8,12)+'-'+hex.slice(12,16)+'-'+hex.slice(16,20)+'-'+hex.slice(20);
 const link='dayxday://public-library?ownerId='+id+'&entry=link';document.getElementById('open').href=link;
 const android=/Android/i.test(navigator.userAgent);
 const ios=/iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1;
 if(!android&&!ios)return;
 const market=android?'https://play.google.com/store/apps/details?id=com.grittyworld.dayxday':'https://apps.apple.com/app/id6800927238';
 if(android){location.replace('intent://public-library?ownerId='+id+'&entry=link#Intent;scheme=dayxday;package=com.grittyworld.dayxday;S.browser_fallback_url='+encodeURIComponent(market)+';end');return;}
 let left=false;document.addEventListener('visibilitychange',()=>{if(document.hidden)left=true;});window.addEventListener('pagehide',()=>{left=true;});
 location.replace(link);setTimeout(()=>{if(!left&&!document.hidden)location.replace(market);},1500);
})();
