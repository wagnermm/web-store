/*
/* Exibir linha span
$(document).ready(function() {
    $('.navbar-dark .navbar-nav .nav-link').mouseenter(function() {
        $('#underline').show();
    });
});
*/

/* alterar o background-image*/

var url = "https://img.freepik.com/fotos-gratis/cachoeira-de-erawan-no-outono-tailandia-bela-cachoeira-com-piscina-esmeralda-na-natureza_335224-777.jpg?w=2000"

$(document).ready(function() {
    $('.banner').on('click', function() {
        $(this).css('background-image' , `url(${url})`)
    })
}) 



/*
* Owl carousel products
*/

$(document).ready(function() {
    
    $('.owl-carousel').owlCarousel();
    
    // Configuração de produtos
    
    $('.featured-item a').addClass('btn btn-dark stretch-link');
    
    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
})



/*
* Lista menu hamburger
*/

$('.navbar-toggler').click(function(){
    $('#navbarResponsive').show();
})

$('.navbar-brand').click(function(){
    $('#navbarResponsive').hide();
})


/*
* Nav-modal-open
*/

$('.nav-modal-open').on('click', function(e) {
    
    e.preventDefault();
    
    let elem = $(this).attr('rel')
    
    $('.modal-body').html($('#'+elem).html())
    $('.modal-header h5.modal-title').html($(this).text())
    
    let myModal = new bootstrap.Modal($('#modalId'))
    
    myModal.show()
})