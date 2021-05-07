var findMedianSortedArrays = function(nums1, nums2) {

     nums1.push.apply(nums1,nums2);

 console.log(nums1);
nums1.sort(function(a,b) { return a - b; });
    
    console.log(nums1);
    var len=nums1.length;
    console.log(len);
    var median=0;
    if(len%2==0){
        index=(len/2)-1;

        median=(nums1[index]+nums1[index+1])/2;
    }
     else{
         index=(len-1)/2;

        median=nums1[index];
     }
    return median;    

};
