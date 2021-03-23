function allPossibleSubstring() {
    
     strs =["flower"];
        str = "flower";
        for (var i=0 ; i<=str.length ; i ++){
            
                for(var j=i ; j<=str.length ; j++){
                     sub = str.substring(i,j);
            document.write('\n<br>');
                document.write(sub);
                }
           
        }
     //   var sub = str.substring(1,3);
       // return sub;
   //document.write(sub);
}
allPossibleSubstring();
