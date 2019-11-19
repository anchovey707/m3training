var boxes = document.getElementsByClassName('box');


for(let i=0;i<boxes.length;i++){

	var s = docuement.createElement('div');
	s.className="square";
	s.hVel='1';
	s.vVel='1';
	s.setInterval(function(){
		move(this);
	},500);
	boxes[i].appendChild(s);
}



function(obj){
	obj.left+=obj.hVel;
	obj.top+=obj.vVel;
}
