
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var grocery = $("input#first").val();
        $("input#first").val(" ");
        var arrayName = []
        var groceries = arrayName.unshift(grocery);
        arrayName.forEach(function(flavor) {
            $('#out').append("<li>" + flavor + "</li>");
            event.preventDefault();

        });
    });
    // $("#blank form").submit(function(event) {
    //     var grocery1 = $("input#agnes").val();
    //     $("input#agnes").val(" ");
    //     var arrayName1 = []
    //     var grosseries = arrayName1.unshift(grocery1);
    //     arrayName1.forEach(function(flavos) {
    //         $('#friend').append("<li>" + flavos + "</li>");
    //         event.preventDefault();
    //     });
    // });


//     $("#blanks form").submit(function(event){
//         var animal= $("input#enter").val();
//         var car= $("input#entry").val();
// event.preventDefault();
// var arrest = [animal,car];
// var arrested = arrest.slice();
// arrested.push();
// alert(arrested);
//     });

// var numbers = [1,2,3,4,4,45,56]
// var tripledNumbers = numbers.map(function(number){
//     return number * 3;
// });
// alert(tripledNumbers)
// });
// var lats = [3,5,7,9]
// var chapo = lats.map(function(number){
//     return number + 1;
// });
// alert (chapo);
// var words= ["Mi ni ule msee","kilasi"];
// var ups = words.map(function(x){
//
//     alert(words.toUpperCase);


    for (var sums=0;sums <=50; sums +=1){
        sums;
    }
    alert (sums);
});
