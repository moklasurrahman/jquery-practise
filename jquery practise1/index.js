// $(".time p").append("hello all out")

// $(".time p").prepend("hello all out ")

// var para1 = $("<p></p>").text("This is paragraph 0")

// $("#p1").before(para1)


// // attribute manipulation

// $("a").attr("href")


// $("h1").addClass("rip")


// $(".btn").click(function () {
//     var valu = this.innerHTML;
//     $("p").text(valu + " is clicked")
// })


$(".btn").on("mouseover", function () {
    var valu = this.innerHTML;
    $("p").text(valu + " is clicked")
})