var boxes = document.getElementsByClassName('box');


for(let i=0;i<boxes.length;i++){
	console.log('found a box!');
	var s = document.createElement('div');
	s.className="square";
	s.hVel='1';
	s.vVel='1';
	setInterval(function(){
		move(s);
	},500);
	boxes[i].appendChild(s);
}



function move(obj){
	obj.style.left=(obj.hVel+obj.left)+"px"
	obj.style.top=(obj.vVel+obj.top)+"px"
	console.log('moving!');
}
