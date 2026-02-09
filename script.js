//Area of a triangle
function findTriangleArea( base, height ) {
    //Area = base x height / 2
    return (base * height) / 2; //multiplies the base and the height and divides that by 2
}//eo findTriangleArea

//Console Log 
console.log( "Area of Triangle" );
console.log( `Triangle with base: 3, height: 4 -> Area = ${findTriangleArea( 3, 4 ).toFixed( 1 )}` ); //base = 3 & height = 4, 1 decimal -> toFixed(1)
console.log( `Triangle with base: 5, height: 7 -> Area = ${findTriangleArea( 5, 7 ).toFixed( 1 )}` ); //base = 5 & height = 7, 1 decimal
console.log( '\n' ); //Space for next console log block


//Volume of a sphere
function findSphereVolume( radius ) {
    //Volume = 4/3 * pi * radius^3
    return 4 / 3 * Math.PI * radius ** 3; //Math.PI is 3.1415.... and ** is exponential | No need for parenthesis as exponent will happen first then multiplication/division
}//eo findSphereVolume

//Console Log 
console.log( "Volume of Sphere" );
console.log( `Sphere with r = 3 -> Volume = ${findSphereVolume( 3 ).toFixed( 1 )}` ); //base = 3 & height = 4, 1 decimal 
console.log( `Sphere with r = 5 -> Volume = ${findSphereVolume( 5 ).toFixed( 1 )}` ); //base = 3 & height = 4, 1 decimal 
console.log( '\n' ); //Space for next console log block


//Convert units to meters
function convertToMeters( distance, unit ) {
    if ( distance === 0 || unit === "m" ) { //short circuit
        return distance; //do nothing and return original
    }//eo if 

    switch ( unit ) {//check for which unit needs to be used and convert
        case "km": 
            return distance * 1000;     //kilometers: 1km = 1000m
        case "y": 
            return distance * 0.9144;   //yard: 1y = 0.9144m 
        case "mi": 
            return distance * 1609.34;  //mile: 1mi = 1609.34m
        default: 
            return null;
    }//eo switch for unit
}//eo convertToMeters

//Console Log 
console.log( "Convert Distance" );
console.log( `50m = ${convertToMeters( 50, "m" ).toFixed( 2 )}m` ); //50m, 2 decimals
console.log( `100y = ${convertToMeters( 100, "y" ).toFixed( 2 )}m` ); //100y, 2 decimals
console.log( `1mi = ${convertToMeters( 1, "mi" ).toFixed( 2 )}m` ); //1mi, 2 decimals
console.log( `1.234km = ${convertToMeters( 1.234, "km" ).toFixed( 2 )}m` ); //1.234km, 2 decimals
console.log('\n'); //Space for next console log block


//Convert string to seconds
function strToSecs ( time ){
    time = time.split( ":" ); // Split into an array with possible outcomes as [ "HH", "MM", "SS" ], [ "MM", "SS" ], or [ "SS" ]
    //3 possible formats as input
    if ( time.length == 3 ){//HH:MM:SS
        totalSeconds = parseInt( time[ 0 ] ) * 3600 + parseInt( time[ 1 ] ) * 60 + parseInt( time[ 2 ] );
    }
    else if ( time.length == 2 ){ //MM:SS
        totalSeconds = parseInt( time[ 0 ] ) * 60 + parseInt( time[ 1 ] );
    }
    else { //SS only
        totalSeconds = parseInt( time[ 0 ] ); //Already in seconds
    }

    return totalSeconds;
}

//Console Log 
console.log( "Time Conversion" );
console.log( `02:33:21 is ${strToSecs( "02:33:21" )} seconds` );
console.log( `00:04:51 is ${strToSecs( "00:04:51" )} seconds` );
console.log( `04:51 is ${strToSecs( "04:51" )} seconds` );
console.log( `00:13 is ${strToSecs( "00:13" )} seconds` );
console.log( `13 is ${strToSecs( "00:13" )} seconds` );

