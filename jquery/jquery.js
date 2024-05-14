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

    $("#add_img").click(show_note_form);

    function show_note_form(){
        $("#note_form").addClass("popup");
        change_position($(".popup"));    //top,left 속성 변경
        $("#note_form").slideDown("slow");  //show();
    }

    $("#add_note").click(function(){
        var title = $("#note_title").val();
        var date = $("#note_date").val();
        var content = $("#note_content").val();

        var str = "<p>" + title + "<br>" + date + "<br>" + content + "</p><br>";
        
        $("#note_form").slideUp("fast");    //hide();
        // $("#note_form").css("display", "none");
        $("#note").append(str);
    });

    
    
    

    function change_position(obj){
        var l = ($(window).width() - obj.width())/2;
        var t = ($(window).height() - obj.height())/2;
        obj.css({top:t, left:l});
    }

    $(window).resize(function(){
        change_position($(".popup"));
    });

    $("#moving_button").click(function(){
        $("#moving_box").animate({
            right: "0px",
            height: "+=50px",
            width: "+=50px"
        });
        $("#animation_test").animate({
            height: "+=50px"
        })
    });
   
    
    $(".accordion").each(function(){
        var dl = $(this);
        var alldd = dl.find("dd");
        var alldt = dl.find("dt");
        alldd.hide();
        alldt.css("cursor", "pointer");

        alldt.click(function(){
            alldd.hide();
            $(this).next().show();
            alldt.css("cursor", "pointer");
            $(this).css("cursor", "default");
        });

    });

});