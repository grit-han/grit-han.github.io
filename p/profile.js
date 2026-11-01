(() => {
 const code=new URL(location.href).searchParams.get('u')||'';const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
 if(!/^[A-Za-z0-9_-]{22}$/.test(code))return;
 let bits=0,value=0,hex='';for(const char of code){value=(value<<6)|alphabet.indexOf(char);bits+=6;if(bits>=8){bits-=8;hex+=((value>>>bits)&255).toString(16).padStart(2,'0');}}
 if((value&15)!==0)return;
 const id=hex.slice(0,8)+'-'+hex.slice(8,12)+'-'+hex.slice(12,16)+'-'+hex.slice(16,20)+'-'+hex.slice(20);
 const link='dayxday://public-library?ownerId='+id+'&entry=link';document.getElementById('open').href=link;let opened=false;document.addEventListener('visibilitychange',()=>{if(document.hidden)opened=true;});location.replace(link);setTimeout(()=>{if(!opened)location.replace(/Android/i.test(navigator.userAgent)?'https://play.google.com/store/apps/details?id=com.grittyworld.dayxday':'https://apps.apple.com/app/id6800927238');},1200);
})();