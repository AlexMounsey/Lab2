function Player()
{
	this.x = 200;
	this.y = 400;
	this.width = 100;
	this.height = 100;
}

Player.prototype.draw = function(){
	ctx.fillStyle= rgb(55, 25, 100);
	ctx.fillRect(this.x, this.y, this.width, this.height);
}

Player.prototype.checkCollision = function (e){
 
    var collides = false;
        //do the two bounding boxes overlap?
        if ((this.x < e.x + e.width) &&
        (this.x + this.width > e.x) &&
        (this.y + this.height > e.y) &&
        (this.y < e.y + e.height) )
        {              
            collides = true;            
        } 
        return collides;
};

Player.prototype.Update = function(e)
{
	if(e == 87)
	{
		this.y-=10;
	}
	else if(e == 83)
	{
		this.y+=10;
	}
	else if(e == 68)
	{
		this.x+=10;
	}
	else if(e == 65)
	{
		this.x-=10;
	}
}
