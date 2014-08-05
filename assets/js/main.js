$(document).ready(function(){
    var isMobile = {  
        Android: function() {  
            return navigator.userAgent.match(/Android/i) ? true : false;  
        },  
BlackBerry: function() {  
    return navigator.userAgent.match(/BlackBerry/i) ? true : false;  
},  
iOS: function() {  
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;  
},  
Windows: function() {  
    return navigator.userAgent.match(/IEMobile/i) ? true : false;  
},  
any: function() {  
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  
}  
};  
if( isMobile.any() )   
{  
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", function () {
            tilt([event.beta, event.gamma]);
        }, true);
    } else if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', function () {
            tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
        }, true);
    } else {
        window.addEventListener("MozOrientation", function () {
            tilt([orientation.x * 50, orientation.y * 50]);
        }, true);
    }
    count=0;
    fa=$('.fa');
    window.setInterval(function(){
        if(count>=fa.length){
            count=0;
        }
        $(fa[count]).addClass('sh-text').css("color","#ff9800");
        if(count==0){
            $(fa[fa.length-1]).removeClass('sh-text').css("color","#b2dfdb");
        }else{
            $(fa[count-1]).removeClass('sh-text').css("color","#b2dfdb");
        }
        count++;
    },1000);
}  else{
    $('#avatar').bind('touchstart mousedown', function(){ $(this).addClass('swing').addClass('sh-img');
    },function(){$(this).removeClass('swing').removeClass('sh-img') });
    $('.fa').bind('touchstart mousedown',function(){
        $(this).addClass('swing').addClass('sh-text');
    },function(){$(this).removeClass('swing').removeClass('sh-text')});
    $('#avatar').hover(function(){
        $(this).addClass('swing').addClass('sh-img');
    },function(){$(this).removeClass('swing').removeClass('sh-img')});
    $('.fa').hover(function(){
        $(this).addClass('swing').addClass('sh-text');
    },function(){$(this).removeClass('swing').removeClass('sh-text')});
}
});
id = -1;
function tilt(x){
    // console.log(x[1]);
    arc=-x[1]/10;
    $('#avatar').css("-webkit-transform","rotate("+arc+"deg)");
    $('#avatar').css("-moz-transform","rotate("+arc+"deg)");
    $('#avatar').css("-ms-transform","rotate("+arc+"deg)");
    $('#avatar').css("-o-transform","rotate("+arc+"deg)");
    $('#avatar').css("transform","rotate("+arc+"deg)");
}

