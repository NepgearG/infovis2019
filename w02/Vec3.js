Vec3 = function(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}
Vec3.prototype.max = function()
{
	var temp = 0;
	if(this.x>this.y){
		if(this.x>this.z){
			temp = this.x;
		}
		else{
			temp = this.z;
		}
	}
	else{
		if (this.y>this.z) {
			temp = this.y;
		}
		else{
			temp = this.z;
		}
	}
	return temp
}
Vec3.prototype.mid = function()
{
	var temp = 0;
	if(this.x>this.y){
		if(this.x<this.z){
			temp = this.x;
		}
		else{
			temp = this.z;
		}
	}
	else{
		if (this.y<this.z) {
			temp = this.y;
		}
		else{
			temp = this.z;
		}
	
	}
	return temp
}
Vec3.prototype.min = function()
{
	var temp = 0;
	if(this.x<this.y){
		if(this.x<this.z){
			temp = this.x;
		}
		else{
			temp = this.z;
		}
	}
	else{
		if (this.y<this.z) {
			temp = this.y;
		}
		else{
			temp = this.z;
		}
	
	}
	return temp
}
AreaOfTriangle = function(v0,v1,v2)
{
	var a,b,c,p
	a = distance(v0,v1)
	b = distance(v0,v2)
	c = distance(v1,v2)
	p = (a+b+c)/2
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));

}

distance = function (v0,v1){
	var distance = Math.sqrt((v0.x-v1.x)*(v0.x-v1.x)+(v0.y-v1.y)*(v0.y-v1.y)+(v0.z-v1.z)*(v0.z-v1.z))
	return distance
}