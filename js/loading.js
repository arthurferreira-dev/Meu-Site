function loading() {
    var div = document.querySelector(div.loader-wrapper)

    div.style.display = 'block'
    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    });
}