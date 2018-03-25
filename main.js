var Friends = [];
var Toys = [];
var Bkgr = [];
var friendscnt = 0,
		toycnt = 0;
var isStrict = false;
var Esidebar = document.getElementById("sidebar"),
		Efriends = document.getElementById("friends"),
		Etoys = document.getElementById("toys"),
		Ebkgr = document.getElementById("bkgr"),
		Econt = document.getElementById("container");

function calcSize(name){
	if(name < 100){
		var img = new Image();
		img.src = "chr/" + name + ".png";
		var x =document.body.clientWidth *0.18;
		var y = document.body.clientWidth *0.18 *img.height /img.width;
		return [x,y];
	}else{
		//TODO:HANDLE TOYS
	}
}

function calcToySize(){

}



function getFriends(){
	for(let i = 1;i != 46;i++){
		Efriends.innerHTML += '<img src = "chr/' + i + '.png" name ="'+i+'" class = "FriendsPic"></img>';
	}
}getFriends();
function getToys(){
	for(let i = 1;i != 153;i++){
		Etoys.innerHTML += '<img src = "toys/' + i + '.png" name ="'+(i+100)+'" class = "ToysPic"></img>';
	}
}getToys();
function getAreas(){
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
	console.log(anCusor(Econt)[1]);
	console.log(window.getComputedStyle(Econt,null).height.split('p')[0]);
}

Econt.ondrop = function(e){
	var name = e.dataTransfer.getData("text");
	var size = calcSize(name);
	var pos = anCusor(Econt);
	if(!(pos[0] - size[0]/2 <= 0 || pos[1] - size[1]/2 <= 0 || pos[0] + size[0]/2 >= window.getComputedStyle(Econt,null).width.split('p')[0] || pos[1] + size[1]/2 >= window.getComputedStyle(Econt,null).height.split('p')[0])){
		function setImage(){
			img.name = name;
			img.id = Friends.length;
			Friends.push(name);
			img.style.position = "absolute";
			img.className = 'anfriends';
			img.style.top = anCusor(Econt)[1] - size[1]/2  + 'px';
			img.style.left = anCusor(Econt)[0] - size[0]/2 + 'px';
			//img.style.top = anCusor(Econt)[1] + 'px';
			//img.style.left = anCusor(Econt)[0] + 'px';

			
		}
		if(name > 100){
			var img = new Image();
			img.src = "toys/" + (name - 100) + ".png";
			setImage();
			Econt.appendChild(img);
		}else{
			var img = new Image();
			img.src = "chr/" + name + ".png";
			setImage();
			Econt.appendChild(img);
		}
	}
}








//Please don't edit the code below unless you understand what you are doing.


function sidetoggle(){
	if(Esidebar.style.width == '256px'){
		Esidebar.style.width = 0;
		Efriends.style.transform = 'translateX(-256px)';
		Etoys.style.transform = 'translateX(-256px)';
		Ebkgr.style.transform = 'translateX(-256px)';
	}else{
		Esidebar.style.width = '256px';
		Efriends.style.transform = 'translateX(0px)';
		Etoys.style.transform = 'translateX(0px)';
		Ebkgr.style.transform = 'translateX(0px)';
	}

}
Efriends.onmouseover=function(){Esidebar.style.setProperty('justify-content', 'flex-start', 'important');}
Efriends.onmouseleave = function(){Esidebar.style.setProperty('justify-content', 'center', 'important');Efriends.scrollTo(0,0);}
Etoys.onmouseleave = function(){Etoys.scrollTo(0,0);}
Ebkgr.onmouseover=function(){Esidebar.style.setProperty('justify-content', 'flex-end', 'important');}
Ebkgr.onmouseleave = function(){Esidebar.style.setProperty('justify-content', 'center', 'important');Ebkgr.scrollTo(0,0);}


function $(name,func){
	var collect = document.querySelectorAll(name);
	if(collect.length != 0){
		for(let i = 0;i != collect.length;i++){
			func.call(collect[i]);
		}
	}
	return;
}

function anCusor(obj){
 var ParentObj=obj;
 var left = obj.offsetLeft;
 var top = obj.offsetTop;
 while(ParentObj = ParentObj.offsetParent){
  left += (ParentObj.offsetLeft );
  top += (ParentObj.offsetTop );
 }
 var x = event.clientX-left+document.body.scrollLeft  - 2 + obj.scrollLeft;
 var y = event.clientY-top+document.body.scrollTop - 2 + obj.scrollTop;
 return [x,y];
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
