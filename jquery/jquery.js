$(document).ready(function(){
    var i = 0;
    $("div.out").mouseover(function () {
        $("div.out p:first").text("mouse over");
        $("div.out p:last").text(++i);
    });
    $("div.out").mouseout(function () {
        $("div.out p:first").text("mouse out");
    });

    // method chaining
    // $("div.out")
    // .mouseover(function () {
    //     $("p:first", this).text("mouse over");
    //     $("p:last", this).text(++i);
    // })
    // .mouseout(function () {
    //     $("p:first", this).text("mouse out");
    // });

    function maxopen(event){
        var maxwindow = window.open(event.data.url, "", event.data.winattributes);
        maxwindow.moveTo(0,0);
        maxwindow.resizeTo(screen.availWidth, screen.availHeight)
    }

    $("#b1").on("click", {url: "http://www.google.com", winattributes: "resize=1, scrollbars=1, status=1"}, maxopen);

});


