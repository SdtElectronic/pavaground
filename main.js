var Friends = [];
var Toys = [];
var Bkgr = [];
var friendscnt = 0,
	toycnt = 0;
var isStrict = false;
var Esidebar = document.getElementById("sidebar"),
	Escont = document.getElementById("sidecont"),
	Efriends = document.getElementById("friends"),
	EfriendsC = document.getElementById("friendsCont")
	Etoys = document.getElementById("toys"),
	EtoysC = document.getElementById("toysCont")
	Ebkgr = document.getElementById("bkgr"),
	EbkgrC = document.getElementById("bkgrCont"),
	Econt = document.getElementById("container");
function scaleCont(){
	Econt.style.transform = "scale(" + calcScale() + ")";
}
scaleCont();

window.onresize = function(){scaleCont();};
//document.documentElement.watch("clientHeight",scaleCont());

/*function calcSize(name){
	if(name < 100){
		var img = new Image();
		img.src = "chr/" + name + ".png";
		var x =document.body.clientWidth *0.18;
		var y = document.body.clientWidth *0.18 *img.height /img.width;
		return [x,y];
	}else{
		//TODO:HANDLE TOYS
	}
}*/




function getFriendsS(){
	Efriends.innerHTML = "";
	for(let i = 1;i != 46;i++){
		Efriends.innerHTML += '<img src = "chr/' + i + '.png" name ="'+i+'" class = "FriendsPic"></img>';
	}
}getFriendsS();
function getFriendsM(){
	Efriends.innerHTML = "";
	for(let i = 1;i != 46;i++){
		Efriends.innerHTML += '<img src = "chr/' + i + '.png" name ="'+i+'" class = "FriendsPicM"></img>';
	}
}
function getToysS(){
	Etoys.innerHTML = "";
	for(let i = 1;i != 153;i++){
		Etoys.innerHTML += '<img src = "toys/' + i + '.png" name ="'+(i+100)+'" class = "ToysPic"></img>';
	}
}getToysS();
function getToysM(){
	Etoys.innerHTML = "";
	for(let i = 1;i != 153;i++){
		Etoys.innerHTML += '<img src = "toys/' + i + '.png" name ="'+(i+100)+'" class = "ToysPicM"></img>';
	}
}
function getAreas(){
	Ebkgr.innerHTML = "";
	for(let i = 1;i != 3;i++){
		Ebkgr.innerHTML += '<img src = "bkgr/' + i + '.png" name ="'+(i+1000)+'" class = "AreasPic"></img>';
	}
}

$(".FriendsPic",
	function(){
		this.ondragstart = function(e){
			if(isStrict == false){
				/*var img = new Image;
				img.name = this.id;
				img.src = this.src;
				img.class = this.class;
				Efriends.insertBefore(img, this);*/
			}else{
				//Esidebar.removeChild(this);
				//Friends
			}
			e.dataTransfer.setData("text",this.name);
		}
		/*this.ondragend = function(e){
			this.offsetParent = Econt;
			var size = calcSize(this.name);
			var pos = anCusor(Econt);
			if(pos[0] - size[0]/2 <= 0 || pos[1] - size[1]/2 <= 0 || pos[0] + size[0] >= Econt.width || pos[1] + size[1] >= Econt.height){
				console.log("overflow");


			}
		}*/
	}
);

Econt.ondragover = function(e){
	e.preventDefault();
}
Econt.onclick = function(e){
	console.log(e.offSetX);
	console.log(e.offsetY);
}

Econt.ondrop = function(e){
	var name = e.dataTransfer.getData("text");
	var pos = [anCusor(e)[0],anCusor(e)[1]];
	if(name > 100){
		var img = new Image();
		img.src = "toys/" + (name - 100) + ".png";
		if(!isOverflow(e,img)){
			img.name = name - 100;
			img.id = toycnt ++;
			img.className = 'antoy';
			img.style.top = pos[1] - img.height/2  + 'px';
			img.style.left = pos[0] - img.width/2 + 'px';
			Econt.appendChild(img);
		}
	}else{
		var img = new Image();
		img.src = "chr/" + name + ".png";
		if(!isOverflow(e,img)){
			img.name = name;
			img.id = friendscnt ++;
			img.className = 'anfriends';
			img.style.top = pos[1] - img.height/2  + 'px';
			img.style.left = pos[0] - img.width/2 + 'px';
			Econt.appendChild(img);
		}
	}
}


//Please don't edit the code below unless you understand what you are doing.
/*Object.defineProperty(document.documentElement,'clientWidth',get: function(){},set: function(value) {
    zhihu = value;
    console.log('set:' + zhihu);

  }
});*/

/*var Cargs = {CHeight : document.documentElement.clientHeight,
				 CWidth : document.documentElement.clientWidth
			 };

Object.defineProperty(Cargs,'CWidth', {
  get: function() {
  },
  set: function(value) {
    console.log('set:' + value);
  }
});*/
var friSV  = document.getElementById("friendsSV");
var toySV  = document.getElementById("toysSV");
var bkgSV  = document.getElementById("bkgrSV");
var friMV  = document.getElementById("friendsMV");
var bkgMV  = document.getElementById("bkgrMV");
var toyMV  = document.getElementById("toysMV");

friSV.onclick = function(){
	this.style.backgroundColor = "rgba(34,68,102,0.4)";
	this.style.borderRadius = "4px";
	this.style.padding = "1px";
	friMV.style.backgroundColor = "";
	friMV.style.borderRadius = "";
	getFriendsS();
}
friMV.onclick = function(){
	this.style.backgroundColor = "rgba(34,68,102,0.4)";
	this.style.borderRadius = "4px";
	this.style.padding = "1px";
	friSV.style.backgroundColor = "";
	friSV.style.borderRadius = "";
	getFriendsM();
}
toySV.onclick = function(){
	this.style.backgroundColor = "rgba(34,68,102,0.4)";
	this.style.borderRadius = "4px";
	this.style.padding = "1px";
	toyMV.style.backgroundColor = "";
	toyMV.style.borderRadius = "";
	getToysS();
}
toyMV.onclick = function(){
	this.style.backgroundColor = "rgba(34,68,102,0.4)";
	this.style.borderRadius = "4px";
	this.style.padding = "1px";
	toySV.style.backgroundColor = "";
	toySV.style.borderRadius = "";
	getToysM();
}



function sidetoggle(){
	if(Escont.style.transform != 'translateX(-256px)'){
		Escont.style.transform = 'translateX(-256px)';
	}else{
		Escont.style.transform = 'translateX(0px)';
	}

}
EfriendsC.onmouseover=function(){Esidebar.style.setProperty('justify-content', 'flex-start', 'important');}
EfriendsC.onmouseleave = function(){Esidebar.style.setProperty('justify-content', 'center', 'important');Efriends.scrollTo(0,0);}
EtoysC.onmouseleave = function(){Etoys.scrollTo(0,0);}
EbkgrC.onmouseover=function(){Esidebar.style.setProperty('justify-content', 'flex-end', 'important');}
EbkgrC.onmouseleave = function(){Esidebar.style.setProperty('justify-content', 'center', 'important');Ebkgr.scrollTo(0,0);}


function $(name,func){
	var collect = document.querySelectorAll(name);
	if(collect.length != 0){
		for(let i = 0;i != collect.length;i++){
			func.call(collect[i]);
		}
	}
	return;
}

function anCusor(ev){
 /*var ParentObj=obj;
 var left = obj.offsetLeft;
 var top = obj.offsetTop;
 while(ParentObj = ParentObj.offsetParent){
  left += (ParentObj.offsetLeft );
  top += (ParentObj.offsetTop );
 }
 var x = event.clientX-left+document.body.scrollLeft  - 2 + obj.scrollLeft;
 var y = event.clientY-top+document.body.scrollTop - 2 + obj.scrollTop;*/
 return [ev.offsetX,ev.offsetY];
}

function calcScale(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  var hh = window.getComputedStyle(Econt,null).height.split('p')[0];
  var ww = window.getComputedStyle(Econt,null).width.split('p')[0];
  return (h/hh > w/ww)?(h/hh):(w/ww);
}

function isOverflow(ev,Cobj){
	var size = [Cobj.width,Cobj.height];
	var pos = [anCusor(ev)[0],anCusor(ev)[1]];
	if(pos[0] - size[0]/2 <= 0 || pos[1] - size[1]/2 <= 0 || pos[0] + size[0]/2 >= window.getComputedStyle(ev.target,null).width.split('p')[0] || pos[1] + size[1]/2 >= window.getComputedStyle(ev.target,null).height.split('p')[0]){
		return true;
		console.log(pos[0]);
	}else{
		return false;
	}
}

/*function sidetoggle(objname){
	var obj = document.getElementById(objname);
	var w = window.getComputedStyle(obj, null).width;
	//alert(wsav);
	function wsav(unsav){
		if(unsav != 0)var sav = w;
		return sav;
	}
	if(wsav() == w){
		wsav(w);
		obj.style.width = 0;
	}else{
		alert(wsav());
		obj.style.width = wsav();
	}
	return wsav(w);
}*/
