msgDiv = '<div id="msgDiv" class="dialog" role="dialog">'+
            '<div class="header">'+
                '<h2>Jotes</h2>'+
            '</div>'+
            '<div id="body"></div>'+
            '<div class="choose">'+
                '<input type="button" id="attention">attention<div>'+
                '<input type="button" id="note">note</div>'
            '</div>'+
        '</div>';
selected = "";
color = {};
color.red ="#ff0000";
color.yellow="rgb(54, 29, 241)"

$(document).ready(function(){
    init();
    $("body").mouseup(function(e){
        var txt;
        txt = document.getSelection();
        console.log(txt);
        if(txt.toString() != null && txt.toString().trim() != 0){
            showDiv(e.pageX, e.pageY);
            selected = txt;
        }
    });
    $("#attention").click(function(){
        var n = document.createElement("SPAN");
        n.style.color=color.red;
        document.getSelection().getRangeAt(0).surroundContents(n);
        $('div#msgDiv').hide();
    });
    $("#note").click(function(){
        var n = document.createElement("SPAN");
        n.style.color=color.yellow;
        document.getSelection().getRangeAt(0).surroundContents(n);
        $('div#msgDiv').hide();
    });
});

//const
isShowMsgDialog = false;

init = function(){
    $("html > body").append(msgDiv);
    $('div#msgDiv').hide();
    $("html > body").click(function(){
        if (window.getSelection().toString() == null ||  window.getSelection().toString().trim().length == 0){
            console.log("hide");
            $('div#msgDiv').hide();
        }
    });
}

showDiv = function(x, y){
    console.log("inn");
    $('div#msgDiv').css({
        "left": x+"px",
        "top": y+"px"
    })
    $('div#msgDiv').show();
    isShowMsgDialog = true;
}

