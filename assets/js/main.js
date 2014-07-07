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
    $('#avatar').addClass('swing');                         
}  else{
    $('#avatar').hover(function(){
        $(this).addClass('swing');
    },function(){$(this).removeClass('swing')});
    $('.fa').hover(function(){
        $(this).addClass('swing');
    },function(){$(this).removeClass('swing')});
}
});
