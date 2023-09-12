var degistir=document.getElementById("random-video");
var youtubeCodes = ['R3wiX05SJps', '7lmCu8wz8ro', 'o8NPllzkFhE','7ond5eF7L-I','eI0r_aL4rhg','RRgAdi3gX-s','lAJWHHUz8_8','zIwLWfaAg-8','OlLFK8oSNEM'];


function degistir1(){
var rand = Math.floor(Math.random()*youtubeCodes.length);
var iframeYoutube = `<iframe width="360" height="203" 
src="https://www.youtube.com/embed/${youtubeCodes[rand-1]}?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>`;
wrap = document.getElementById("wrap");
wrap.innerHTML = iframeYoutube;
}
degistir1();

