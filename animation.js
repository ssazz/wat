window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		radius = 150,
		angle = 0,
		numObj = 12,
		slice = (2 * Math.PI) / numObj,
		x, y,

		target = {
			x: width,
			y: Math.random() * height
		},

		points = [],
		numPoints = 10,
		ease = 0.1;

	for(var i = 0; i < numPoints; i++) {
		points.push({
			x: 0,
			y: 0
		});
	}

	update();

	document.body.addEventListener("mousemove", function(event) {
		target.x = event.clientX;
		target.y = event.clientY;
	});

	function update() {
		context.clearRect(0, 0, width, height);

		var leader = {
			x: target.x,
			y: target.y
		};

		for(var i = 0; i < numPoints; i++) {
			var point = points[i];
			point.x += (leader.x - point.x) * ease;
			point.y += (leader.y - point.y) * ease;

			//context.beginPath();
			//context.arc(point.x, point.y, 10, 0, Math.PI * 2, false);
			//context.fill();
      
      for (var j=0; j<numObj; j++) {
        angle = j * slice;
			  context.beginPath();
		    x = Math.cos(angle) * radius * (i+5)/numPoints + point.x;
		    y = Math.sin(angle) * radius * (i+5)/numPoints + point.y;
		    context.arc(x, y, 3, 0, 2 * Math.PI, false);
			  context.fill(); 
      }

			leader.x = point.x;
			leader.y = point.y;
		}


		requestAnimationFrame(update);
	}

};
