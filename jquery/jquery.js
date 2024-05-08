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

    function flash(){
        $("#off_test").show().fadeOut("slow");
    }

    $("#bind").click(function(){
        $(".lab")
        .on("click", "#theone", flash)
        .find("#theone")
        .text("Can Click!");
    });

    $("#unbind").click(function(){
        $(".lab")
        .off("click", "#theone", flash)
        .find("#theone")
        .text("Does Nothing...");
    });

    $("#trigger_test button:first").click(function(){
        update($("span:first"));
    });

    $("#trigger_test button:last").click(function(){
        $("#trigger_test button:first").trigger("click");
        update($("span:last"));
    });

    function update(j){
        var n = parseInt(j.text(), 10);
        j.text(n+1);
    }

    $("#imageArea").click(function(){
        if($("#image").attr("src") == "dog1.jpeg"){
            $("#image").attr("src", "dog2.jpeg");
        }
        else{
            $("#image").attr("src", "dog1.jpeg");
        }
    });

    var imgArray = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg"];
    var albumIndex = 0;
    $("#imgAlbum").attr("src", imgArray[albumIndex]);

    $("#imgAlbum").click(function(){
        albumIndex = (albumIndex+1)%imgArray.length;
        $("#imgAlbum").attr("src", imgArray[albumIndex]);
    });

    $(".main-menu").mouseover(function(){
        $(this).css({"font-size": 20, backgroundColor: "green"});
    });

    $(".main-menu").mouseout(function(){
        $(this).css({"font-size": "1em", background: "none"});
    });

});


