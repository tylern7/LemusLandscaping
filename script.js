'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
window.matchMedia('(min-width:761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.querySelectorAll('[data-subject]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#subject').value=link.dataset.subject;}));
document.querySelector('#year').textContent=new Date().getFullYear();
const form=document.querySelector('#contact-form');
const config=window.LEMUS_CONFIG||{endpoint:'',email:'tonylemus.socialmedia@gmail.com'};
if(config.endpoint)document.querySelector('#form-note').textContent='Send your message directly to the Lemus team.';
form.addEventListener('submit',async event=>{
 event.preventDefault();if(!form.reportValidity())return;
 const fields=Object.fromEntries(new FormData(form));const status=document.querySelector('#form-status');const button=form.querySelector('button[type="submit"]');
 if(!config.endpoint){
  const body=`Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`;
  window.location.href=`mailto:${config.email}?subject=${encodeURIComponent(fields.subject||'Website enquiry')}&body=${encodeURIComponent(body)}`;
  status.textContent='Your email draft is ready. Send it from your email app. If no draft opened, use the email link alongside this form.';return;
 }
 button.disabled=true;status.textContent='Sending your message…';
 const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),15000);
 try{
  const endpoint=new URL(config.endpoint,window.location.href);if(endpoint.protocol!=='https:')throw new Error('HTTPS endpoint required');
  const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(fields),signal:controller.signal});
  if(!response.ok)throw new Error('Submission failed');const result=await response.json();if(result.success!==true)throw new Error('Message not accepted');
  status.textContent='Thanks for your message!';form.reset();
 }catch(error){status.textContent='We couldn’t confirm delivery. Your message is still here. Please email us directly or call (905) 902-7076.';}
 finally{clearTimeout(timeout);button.disabled=false;}
});
