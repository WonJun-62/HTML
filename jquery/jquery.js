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
        var allDd = dl.find("dd");
        var allDt = dl.find("dt");

        // alldd.hide();
        // alldt.css("cursor", "pointer");

        // alldt.click(function(){
        //     alldd.hide();
        //     var dt = $(this);
        //     var dd = dt.next();
        //     dd.show();
        //     alldt.css("cursor", "pointer");
        //     dt.css("cursor", "default");
        // });

        function closeAll(){
            allDd.addClass("closed");
            allDt.addClass("closed");
        }

        function open(dt,dd){
            dt.removeClass("closed");
            dd.removeClass("closed");
        }

        closeAll();
        allDt.click(function(){
            var dt = $(this);
            var dd = dt.next();
            closeAll();
            open(dt,dd);
        });

    });

    var interval = 4000;
    $('.slideshow').each(function(){
        var timer;
        var container = $(this);
        function switchimg(){
            var imgs = container.find('img');
            var first = imgs.eq(0);
            var second = imgs.eq(1);
            first.appendTo(container).fadeOut(2000);
            second.fadeIn();
        }
        function startTimer(){
            timer = setInterval(switchimg, interval);
        }
        function stopTimer(){
            clearInterval(timer);
        }

        container.hover(stopTimer, startTimer);
        startTimer();
        
    });

    $("#getText").click(function(){
        // $("#textbox").text("글자 입력 테스트");
        // var req = $.ajax("data.txt");
        var req = $.ajax({
            url: "data.txt",
            dataType: "json"
        });
        req.done(function(data, status){
            // var students = JSON.parse(data);
            // for(var i=0; i<data.length; i++){
            //     var str = "<br>"+data[i].name;
            //     $("#textbox").append(str);
            // }
            var tb = $("<table/>");
            var row = $("<tr/>").append(
                        $("<th/>").text("이름"),
                        $("<th/>").text("아이디"),
                        $("<th/>").text("학과"),
                        $("<th/>").text("수강과목")
                        );
            tb.append(row);
            for(var j=0; j<data.length; j++){
                var row2 = $("<tr/>").append(
                            $("<td/>").text(data[j].name),
                            $("<td/>").text(data[j].id),
                            $("<td/>").text(data[j].department),
                            $("<td/>").text(data[j].class)
                            );
                tb.append(row2);
            }
            $("#textbox").html(tb); //append면 TABLE이 계속 생김
        });
    });

    var req = $.ajax({
        url: "/rss",
        dataType: "xml"         // xml 객체로 parse
    });
    req.done(function(data){
        // console.log(data);
        var items = $(data).find("item");
        if(items.length > 5){
            items = items.slice(0, 5);
            var uTag = $("<ul/>");
            items.each(function(){
                var item = $(this);
                var lk = item.find("link").text();
                var title = item.find("title").text();
                var aTag = $("<a/>")
                .attr({
                    "href": lk,
                    "target": "_blank"
                })
                .text(title);
                var liTag = $("<li/>").append(aTag);
                uTag.append(liTag);
            });
            $("#news").html(uTag);
        }
    });
    req.fail(function(jqXHR, textStatus){
        alert("failed: " + textStatus);
    });

});
