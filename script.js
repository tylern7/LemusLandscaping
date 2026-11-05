'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
window.matchMedia('(min-width:761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.querySelectorAll('[data-subject]').forEach(link=>link.addEventListener('click',()=>{const topic=document.querySelector('#topic'); if(topic) topic.value=link.dataset.subject;}));
document.querySelector('#year').textContent=new Date().getFullYear();
/* Contact form posts to Web3Forms via fetch; falls back to normal POST without JS. */
(function(){
  const form=document.getElementById('contact-form');
  if(!form||!window.fetch) return;
  form.addEventListener('submit',function(event){
    event.preventDefault();
    const status=document.getElementById('form-status');
    const btn=form.querySelector('button[type="submit"]');
    const honeypot=form.querySelector('input[name="botcheck"]');
    if(honeypot&&honeypot.checked){if(status) status.textContent=''; return;}
    if(btn) btn.disabled=true;
    if(status) status.textContent='Sending…';
    const payload=Object.fromEntries(new FormData(form).entries());
    // unchecked honeypot checkbox is omitted from FormData; send empty botcheck
    if(!('botcheck' in payload)) payload.botcheck='';
    fetch('https://api.web3forms.com/submit',{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify(payload)
    })
      .then(async function(response){
        const data=await response.json().catch(function(){return {};});
        if(response.ok&&data&&data.success){
          window.location.href='https://lemuslandscaping.ca/thanks.html';
          return;
        }
        throw new Error((data&&data.message)||'fail');
      })
      .catch(function(){
        if(status) status.textContent='Sorry, that didn’t send. Please call (905) 902-7076 or email tony@lemuslandscaping.ca.';
      })
      .finally(function(){if(btn) btn.disabled=false;});
  });
})();
