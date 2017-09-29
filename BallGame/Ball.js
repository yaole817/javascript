function Ball(){
	var image = path2Image('ball.jpg')
	var o = {
		image : image,
		x : 0,
		y : 0,
		speedX : 10,
		speedY : 10,
	}
	o.move = function(){
		o.x += o.speedX
		o.y += o.speedY
		if(o.x > 300 - o.image.width || o.x < 0){
			log(o.x)
			o.speedX = -o.speedX
		}
		if(o.y > 470 || o.y < 0){
			o.speedY = -o.speedY
		}
	}
	o.update = function(){
		loadImg('ball.jpg',o.x,o.y)
	}
	return o
}