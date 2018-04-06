function calcScale(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  var hh = document.getElementById("container").height;
  var ww = document.getElementById("container").width;
  return (h/hh > w/ww)?(w/ww):(h/hh);
}
if(pos[0] - size[0]/2 <= 0 || pos[1] - size[1]/2 <= 0 || pos[0] + size[0]/2 >= window.getComputedStyle(Econt,null).width.split('p')[0] || pos[1] + size[1]/2 >= window.getComputedStyle(Econt,null).height.split('p')[0]);
