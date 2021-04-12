// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
    if (someValue < 42) {
        return 42 - someValue
    }
    
    return someValue - 42  
}

function distanceFromHqInFeet (someValue) {
    
    let distance_in_blocks = distanceFromHqInBlocks(someValue)
    return distance_in_blocks * 264
   // return that distance_in_blocks converted to feet
}

function distanceTravelledInFeet (x ,y ) {
    if (x > y){
        let numblocks = x - y
        return numblocks * 264  
    }
    else{let numblocks = y - x
        return numblocks * 264}
    
}


function calculatesFarePrice(start,destination){
    const ride=distanceTravelledInFeet(start,destination)
    if(ride<=400){
        return 0;
    }else if(ride>400 && ride<2000){
        return((ride - 400)*.02);
    }else if(ride>2000 && ride<2500){
        return(25);
    }else{
        return('cannot travel that far');
    }
} 





    


