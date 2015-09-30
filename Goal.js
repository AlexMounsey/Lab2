//goal

function Goal()
{
	this.x= 100;
	this.y = 200;
	this.width = 100;
	this.height = 100;
	
}

Goal.prototype.draw = function(){
	ctx.fillStyle= rgb(225,25,100);
	ctx.strokeRect(this.x,this.y,this.width,this.height);
}

