$('.nxt').click(function() {
    $(this).parent(".box").animate({left: '-150%'}, 500 );
    $(this).parent(".box").next(".box").animate({left: '50%'},500);
});

$('.prv').click(function() {
    $(this).parent(".box").animate({left: '150%'}, 500 );
    $(this).parent(".box").prev(".box").animate({left: '50%'},500);
});
