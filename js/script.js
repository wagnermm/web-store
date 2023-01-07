
/*
* Owl carousel products
*/

$(document).ready(function() {
    
    $('.owl-carousel').owlCarousel();
    
    // Configuração de produtos
    
    $('.featured-item a').addClass('btn btn-dark stretch-link');
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



/*
* Validação de formulário
*/
function validate(elem) {
    if(elem.val() == '' ) {
        
        console.log('O campo ' + elem.attr('name') + ' é obrigatório')
        
        elem.parent().find('.text-muted').show()
        
        elem.addClass('invalid')
        
        return false
    } else {
        elem.parent().find('.text-muted').hide()
        elem.removeClass('invalid')
        
    }
}


$('body').on('submit', '.modal-body .form', function(e) {
    
    e.preventDefault()
    
    const inputName = $('#nome')
    const inputEmail = $('#email')
    
    validate(inputName)
    validate(inputEmail)
    
    if(inputName.hasClass('invalid') || inputEmail.hasClass('invalid')) {
        console.log('Verificar os campos obrigatóios')
        return false
    } else {
        $(this).submit()
    }
})


$('body').on('blur', '#nome', function() {
    validate($(this))   
})

$('body').on('blur', '#email', function() {
    validate($(this))
})

$('body').on('focus', '#date', function() {
    $(this).datepicker()
})

$('body').on('blur', '#date', function() {
    validate($(this))
    $(this).mask('00/00/0000');
})

$('body').on('blur', '#time', function() {
    validate($(this))
    $(this).mask('00:00');
})

$('body').on('blur', '#cep', function() {
    validate($(this))
    $(this).mask('00000-000');
})

$('body').on('blur', '#phone', function() {
    validate($(this))
    $(this).mask('00000-0000');
})

$('body').on('blur', '#cpf', function() {
    validate($(this))
    $(this).mask('000.000.000-00');
})