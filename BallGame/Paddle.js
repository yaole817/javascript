function Paddle(){
	var image = path2Image('paddle.png')
	var o = {
		image : image,
		x : 50,
		y : 400,
		speedX : 15,
		speedY : 10,
	}
	o.update = function(){
		loadImg('paddle.png',o.x,o.y)
	}
	o.moveLeft = function(){
		o.x -= o.speedX
		if(o.x <= 0){
			o.x = 0
		}
	}
	o.moveRight = function(){
		o.x += o.speedX
		if(o.x > (300 - o.image.width)){
			o.x = 300 - o.image.width
		}
	}
	return o
}