var boxes = document.getElementsByClassName('box');

var squares=[];

for(let i=0;i<boxes.length;i++){
	for(let j=0;j<5;j++){
		var s = document.createElement('div');
		s.className="square";
		s.hVel=Math.floor(Math.random()*3+1);
		s.vVel=Math.floor(Math.random()*3+1);
		s.Left=Math.floor(Math.random()*boxes[i].scrollWidth)-20;
		s.Top=Math.floor(Math.random()*boxes[i].scrollHeight)-20;
		s.maxLeft=boxes[i].scrollWidth;
		s.maxTop=boxes[i].scrollHeight;
		boxes[i].appendChild(s);
		squares.push(s);
	}
}
console.log(squares);
setInterval(function(){
	for(let i=0;i<squares.length;i++)
		move(squares[i]);
},50);

function move(obj){
	
	if(obj.Left>=(s.maxLeft-obj.scrollWidth)||obj.Left<=0)
		obj.hVel*=-1;
	if(obj.Top>=(s.maxTop-obj.scrollHeight)||obj.Top<=0)
		obj.vVel*=-1;
	
	obj.Left+=obj.hVel;
	obj.Top+=obj.vVel;
	
	if(obj.Left>obj.maxLeft - obj.scrollWidth){
		obj.Left=obj.maxLeft - obj.scrollWidth;
		obj.hVel*=-1;
	}
	if(obj.Top>obj.maxTop - obj.scrollHeight){
		obj.Top=obj.maxTop - obj.scrollHeight;
		obj.vVel*=-1;
	}
	
	if(obj.Left<0)
		obj.Left=0;
	if(obj.Top<0)
		obj.Top=0;

	obj.style.left=obj.Left+"px";
	obj.style.top=obj.Top+"px";
}
