$('.filter_view').children('div').mousemove(function(){
    $(this).css('border','1px solid white');
    $(this).children("ul").css('display','block');
});

$('.filter_view').children('div').mouseout(function(){
    $(this).css('border','1px solid rgb(204,204,204)');
    $(this).children("ul").css('display','none');
});


$('.popular_list_img').mousemove(function(){
    $(this).children("div").css('display','block');
});

$('.popular_list_img').mouseout(function(){
    $(this).children("div").css('display','none');
});