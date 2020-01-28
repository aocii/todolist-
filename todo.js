$("input").keyup(function (e) {
    var value = $(this).val();
    if (e.which == 13) {
        $("ul").append('<li class="list-group-item"><div id="slide"><i class="fas fa-trash-alt"></i></div>' + value + '</li>');
        $(this).val("");
    }
    $("li").on("click", function () {
        $(this).toggleClass("done");
    });
    $("i").on("click",function(){
        $(this).parent().parent()[0].remove();
    });
})

$("li").on("click", function () {
    $(this).toggleClass("done");
});
$("i").on("click",function(){
    $(this).parent().parent()[0].remove();
});