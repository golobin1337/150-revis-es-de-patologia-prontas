// Smooth-scroll nos botões âncora (efeito de descer até o checkout)
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if(!a) return;
    var id = a.getAttribute('href').slice(1);
    if(!id) return;
    var target = document.getElementById(id);
    if(!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});
  });
})();


// Popup de desconto ao clicar no plano básico
(function(){
  var cta = document.getElementById('basic-cta');
  var dlg = document.getElementById('upsell');
  if(!cta || !dlg || typeof dlg.showModal !== 'function') return; // sem suporte: link segue normal
  cta.addEventListener('click', function(e){
    e.preventDefault();
    dlg.showModal();
  });
  dlg.querySelector('.upsell-close').addEventListener('click', function(){ dlg.close(); });
  // fecha ao clicar fora do card
  dlg.addEventListener('click', function(e){ if(e.target === dlg) dlg.close(); });
})();
