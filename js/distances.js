const R = 6.378e+6; //earths radius
function distancefunction(lat0, long0, lat1, long1) { //haversine function for distance
    let hav = 1-Math.cos(lat1-lat0)+Math.cos(lat0)*Math.cos(lat1)*(1-Math.cos(long1-long0)); //doing the havsine
    let D = 2*R*Math.asin(Math.sqrt(hav/2)) //solving for the distance
    return D; //returning the distance
}