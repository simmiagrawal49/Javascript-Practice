var reverse = function(x) {
    var numisneg = false;
    if(x < 0){
        numisneg = true;
        x *= -1;
    };
    var reverseX = parseInt(String(x).split('').reverse().join(''));
    if(reverseX > 0x7FFFFFFF){
      return 0;
    }
    if(numisneg){
        return -1 * reverseX
    } else {
        return reverseX;
    }
};
