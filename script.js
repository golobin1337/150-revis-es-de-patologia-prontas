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

