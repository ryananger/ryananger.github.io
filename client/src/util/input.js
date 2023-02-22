import st from 'ryscott-st';

var mouse = {
  x: null,
  y: null,
  over: null
};

window.addEventListener('mousemove', function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  var element = document.elementFromPoint(mouse.x, mouse.y);

  mouse.over = element ? element : null;
}, {passive: true});

window.addEventListener('keypress', function(e) {
  if (e.target.type === 'text') {return;}

  switch (e.key) {
    case 'm':
      console.log(mouse);
      break;
  }
});