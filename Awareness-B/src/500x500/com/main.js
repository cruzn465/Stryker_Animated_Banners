//IIFE TO EXTRACT DIMENSION DATA
var dimensions = (function(){
        var str = document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value;
        var widthMatch = /width\=(\d+)/.exec(str);
        var heightMatch = /height\=(\d+)/.exec(str);
        return {
            width: parseInt(widthMatch[1]),
            height: parseInt(heightMatch[1])
        }
})();

var tl;
var stopWatch;

//INITIALIZE
function init(){
    IDsToVars();

    container.style.width = dimensions.width + 'px';
    container.style.height = dimensions.height + 'px';
    
    //set timeline
    tl = new TimelineLite();

    addListeners();
    
    animate();
}

function addListeners(){
    //replay functionality
    /*
    replay_button.addEventListener('mouseover',function(){
        TweenLite.fromTo(replay_button, .5, {rotation:'-360'}, {overwrite:false, rotation:'0'});
    })
    replay_button.addEventListener('click',function(){
            tl.restart();
    })
    */
}

//ANIMATE
function animate(){
    stopWatch=new Date().getTime(); 

    //timeline animation here
    tl
    // f1
    .to(bg1,3.1,{ease:Quad.easeOut,scale: 1.1,x:15},"-=.4")
    .from(copy1_2x,.4,{opacity:0,ease:Quad.easeOut,width:0},"f1c-=3")
    .to([bg1,copy1_2x],.4,{opacity:0,ease:Quad.easeOut},"-=.7")

    // f2
    .to(bg2,3.1,{ease:Quad.easeOut,scale: 1.1,x:15},"-=.4")
    .from(copy2_2x,.4,{opacity:0,ease:Quad.easeOut,width:0},"f2c-=3")
    .to([bg2,copy2_2x],.4,{opacity:0,ease:Quad.easeOut},"-=.7")

    // f3
    .to(bg3,3.1,{ease:Quad.easeOut,scale: 1.1},"-=.4")
    .from(copy3_2x,.4,{opacity:0,ease:Quad.easeOut,width:0},"f3c-=3")
    .to([bg3,copy3_2x],.4,{opacity:0,ease:Quad.easeOut},"-=.7")

    // f4
    .to(bg4,3.3,{ease:Quad.easeOut,scale: 1.1,x:15},"-=.4")
    .from(copy4_2x,.4,{opacity:0,ease:Quad.easeOut,width:0},"f4c-=3")
    .to([bg4,copy4_2x,legal_2x],.4,{opacity:0,ease:Quad.easeOut},"ef-=.6")
    .from(ef_legal_2x,.4,{opacity:0,ease:Quad.easeOut},"ef-=.7")


    // ef
    .from(logo_2x,.4,{opacity:0})
    .from(ef1_2x,.2,{opacity:0,ease:Quad.easeOut,width:0},"-=.1")
    .from(ef2_2x,.2,{opacity:0,ease:Quad.easeOut,width:0},"+=.1")
    .from(ef3_2x,.4,{ease:Quad.easeOut,width:0},"+=.1")
    // .to(ef3_2x,.2,{opacity:0,ease:Quad.easeOut,width:0,x:dimensions.width/2},"efSwitch+=.5")
    // .from(ef4_2x,.4,{opacity:0,ease:Quad.easeOut,width:0},"efSwitch+=.5")

    .from(cta_2x,.3,{opacity:0,ease:Quad.easeOut,width:0},"+=.4")
    .fromTo(sheen1,.4,{x:-300,ease:Quad.easeOut},{x:500,ease:Quad.easeIn},"+=.1")





    


    
    .call(returnTimer)
}

function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*.001;
    console.log(stopWatch+" seconds");
}

function clickThrough(){
    window.open(clicktag);
}

//SET IDs IN DOM TO GLOBAL VARIABLES
function IDsToVars(){
    var allElements = document.getElementsByTagName("*");
    
    for (var q = 0; q<allElements.length; q++){
         var el = allElements[q];
         if (el.id){
            window[el.id]=document.getElementById(el.id);
        }
    }
};