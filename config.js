/* Default: truthful email-draft fallback. The admin may supply an HTTPS JSON endpoint.
   Contract: POST {name,email,subject,message}; return 2xx JSON {success:true} only after acceptance.
   Do not paste Wix internal/private URLs or secrets here. */
window.LEMUS_CONFIG = { endpoint: '', email: 'tony@lemuslandscaping.ca' };
