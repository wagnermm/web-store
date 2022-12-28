/* var url = "https://thumbs.dreamstime.com/z/v%C3%A1rias-contas-coloridas-no-mercado-fundo-de-papel-parede-um-colar-colorido-feito-pedras-preciosas-e-joias-semipreciosas-161059879.jpg"

$(document).ready(function() {
    $('.banner').css('background-image', `url(${url})`)
}) */


/*
 * Owl carousel products
 */

$(document).ready(function() {
    
    $('.owl-carousel').owlCarousel();
    
    let titulos = $('h4') // tag
    
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id
    
    console.log(titulos.first());
    

    // Configuração de produtos
    
    $('.featured-item a').addClass('btn btn-dark stretch-link');
    
    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
})