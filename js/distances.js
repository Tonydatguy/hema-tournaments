const R = 6.378e+6;
function distancefunction(lat0, long0, lat1, long1) {
    let hav = 1-Math.cos(lat1-lat0)+Math.cos(lat0)*Math.cos(lat1)*(1-Math.cos(long1-long0));
    let D = 2*R*Math.asin(Math.sqrt(hav/2))
    return D;
}