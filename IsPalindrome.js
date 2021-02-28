var isPalindrome = function(x) {
    
    var isneg=false;
    if (x<0){
        return false;
    }
    
    else if(x>=0){
       var revnum=parseInt(String(x).split('').reverse().join(''));
       if(x===revnum)
        {
            return true;
        }
        else{
            return false;
        }}
};
