var dir = 'right'; //direction

function Animate(elem){
  setInterval(
    function(){
      switch (dir){
        case 'right':
          var right = parseInt(getComputedStyle(elem).right);
          if(right > 0){
            elem.style.left = 5+parseInt(getComputedStyle(elem).left)+'px';
          } else {
            window.dir = 'bottom';
          }
          break;
        case 'bottom':
          var bottom = parseInt(getComputedStyle(elem).bottom);
          if(bottom > 0){
            elem.style.top = 5+parseInt(getComputedStyle(elem).top)+'px';
          } else {
            window.dir = 'left';
          }
          break;
        case 'left':
          var left = parseInt(getComputedStyle(elem).left);
          if(left > 0){
            elem.style.left = (parseInt(getComputedStyle(elem).left)-5)+'px';
          } else {
            window.dir = 'top';
          }
          break;
        case 'top':
          var top = parseInt(getComputedStyle(elem).top);
          if(top > 0){
            elem.style.top = (parseInt(getComputedStyle(elem).top)-5)+'px';
          } else {
            window.dir = 'right';
          }
          break;
      }
      var rotate = elem.style.transform;
      //результат: массив(весь шаблон, только число)
      var deg = /rotate\((-?[0-9]+)deg\)/.exec(rotate) || [0,0];  //regExp
      deg=(parseInt(deg[1])-5)%360;
      elem.style.transform = 'rotate('+deg+'deg)';
    },
    50  //100ms
  );
}

function Start(){
  var main = document.getElementById('main');
  var ball = document.createElement('DIV');
  var line = document.createElement('DIV');
  var eye = document.createElement('DIV');
  ball.id = 'ball1';
  ball.className = 'ball';
  line.id = 'line1';
  line.className = 'line';
  eye.id = 'eye1';
  eye.className = 'eye';
  ball.appendChild(line);
  ball.appendChild(eye);
  main.appendChild(ball);
  Animate(ball);
}

(function() {
   Start();
}());
