// ## Settings #############################
(function( astrology ) {
	
	//Scale of symbols	 
	astrology.SYMBOL_SCALE = 1;		 
	
	// Font color of planet's symbols
	astrology.COLOR_POINTS = "#000";
	
	// Chart margin inside paper
	astrology.MARGIN_CHART = 5; //px
	
	// Planets margin inside a chart
	astrology.MARGIN_POINTS = 10;
	
	// Radix chart element ID
	astrology.ID_RADIX = "radix";
	
	// Color of circles in charts
	astrology.COLOR_CIRCLE = "#666";
	
	// radius / INDOOR_CIRCLE_RADIUS_RATIO
	astrology.INDOOR_CIRCLE_RADIUS_RATIO = 3;
	
	// radius - radius/INNER_CIRCLE_RADIUS_RATIO
	astrology.INNER_CIRCLE_RADIUS_RATIO = 8;
	
	// Transit chart element ID
	astrology.ID_TRANSIT = "transit";
	
	// Points
	astrology.SYMBOL_SUN = "Sun";
	astrology.SYMBOL_MOON = "Moon";
	astrology.SYMBOL_MERCURY = "Mercury";
	astrology.SYMBOL_VENUS = "Venus";
	astrology.SYMBOL_MARS = "Mars";
	astrology.SYMBOL_JUPITER = "Jupiter";
	astrology.SYMBOL_SATURN = "Saturn";
	astrology.SYMBOL_URANUS = "Uranus";
	astrology.SYMBOL_NEPTUNE = "Neptune";
	astrology.SYMBOL_PLUTO = "Pluto";
	astrology.SYMBOL_CHIRON = "Chiron";
	astrology.SYMBOL_LILITH = "Lilith";
	astrology.SYMBOL_NNODE = "NNode";
			 
	// http://www.rapidtables.com/web/color/html-color-codes.htm
	astrology.COLOR_ARIES = "#FF0000";
	astrology.COLOR_TAURUS = "#8B4513";
	astrology.COLOR_GEMINI= "#87CEEB";
	astrology.COLOR_CANCER = "#006400"; 
	astrology.COLOR_LEO = "#FF0000"; 
	astrology.COLOR_VIRGO = "#8B4513"; 
	astrology.COLOR_LIBRA = "#87CEEB";  
	astrology.COLOR_SCORPIO = "#006400";  
	astrology.COLOR_SAGITTARIUS = "#FF0000";
	astrology.COLOR_CAPRICORN = "#8B4513"; 
	astrology.COLOR_AQUARIUS = "#87CEEB"; 
	astrology.COLOR_PISCES = "#006400"; 
		        	
	astrology.COLORS_SIGNS = [astrology.COLOR_ARIES, astrology.COLOR_TAURUS, astrology.COLOR_GEMINI, astrology.COLOR_CANCER, astrology.COLOR_LEO, astrology.COLOR_VIRGO, astrology.COLOR_LIBRA, astrology.COLOR_SCORPIO, astrology.COLOR_SAGITTARIUS, astrology.COLOR_CAPRICORN, astrology.COLOR_AQUARIUS, astrology.COLOR_PISCES];
	
	// 0 degree is on the West 
	astrology.SHIFT_IN_DEGREES = 180;
		       	      
}( window.astrology = window.astrology || {}));