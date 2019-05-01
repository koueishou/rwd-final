$(document).ready(function(){
    $(".showmenu").on("click", function(e){
        e.preventDefault();
        $("body").toggleClass("menu-show");
        $(".topbar i").toggleClass("far fa-times");
    });

    // Cart.html
    // Sidebar
    $(".sidebar li").on("click touchstart", function(e){
        e.preventDefault();
        $(this).siblings('li').removeClass('clicked');
        $(this).addClass('clicked');                       
    });
    // 愛心
    $(".meals .product a i").on("click touchstart", function(e){
        e.preventDefault();
        $(this).toggleClass("far fa-heart fas fa-heart clicked");
    });
    // 加入購物車
    $(".meals .detail a").on("click touchstart", function(e){
        e.preventDefault();
        $(this).toggleClass("clicked");
    });

});
