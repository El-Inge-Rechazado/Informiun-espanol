$(document).ready(function(){
    $('ul.menuJuego li a:first').addClass('active');
    $('.secciones article:not(:first)').hide();
    $('ul.menuJuego li a').click(function(e){
        e.preventDefault(); 
        $('ul.menuJuego li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();
        var activeTab = $(this).attr('href');
        $(activeTab).show();
    });
});
