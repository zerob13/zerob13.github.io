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
    $('#avatar').css("-webkit-transform","rotate("+x[1]+"deg)");
    $('#avatar').css("-moz-transform","rotate("+x[1]+"deg)");
    $('#avatar').css("-ms-transform","rotate("+x[1]+"deg)");
    $('#avatar').css("-o-transform","rotate("+x[1]+"deg)");
    $('#avatar').css("transform","rotate("+x[1]+"deg)");
}

