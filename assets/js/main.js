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
    $('#avatar').addClass('swing').addClass('sh-img');                         
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
