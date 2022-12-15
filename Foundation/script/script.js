$('.section8-items > div').on('click', function(){
    $(this).children('.items-icon').toggleClass('items-rotate-icon')
    $(this).parent('.section8-items').toggleClass('change-color')
    $(this).next('.section8-items_text').slideToggle(300)
    $(this).children('.items_text').toggleClass('items_text-white')
})

$('.section3-items > div').on('click', function(){
    $(this).children('.section3_title').toggleClass('section3_title-blue')
    $(this).next('.section3_text').slideToggle(300)
    
})

$('.section3-items').on('click', function(){
    $(this).children('.item2').toggleClass('item2-blue')
})