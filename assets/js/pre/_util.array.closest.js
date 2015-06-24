function closest (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}

// Examples
// 
// var arr = [2, 42, 82, 122, 162, 202, 242, 282, 322, 362];
// closest(0,arr);    /*  2    */
// closest(160,arr);  /*  162  */
// closest(2000,arr); /*  362  */