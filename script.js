        const Pi = 3.14;
		var radius = 6.378e6;
	
		let Circumference = 2*Pi*radius;
		let SurfaceArea = 4*Pi*radius**2;
		let Volume = (4/3)*Pi*radius**3;
		
		document.write("The radius of the sphere is " + radius + '<br>' );
	    document.write("The circumference is " + Circumference + '<br>');
	    document.write("The surface area is " + SurfaceArea + '<br>');
	    document.write("The volume is " + Volume + '<br>');
		