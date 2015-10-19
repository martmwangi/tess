/*
$(function(){
    $('.tlt').textillate({ in : {
            effect: 'flash',
            shuffle: false,
            sync: true
        },
        loop: false;
    });
});
*/
$('.tlt').textillate({
    in: {effect: 'flash', delay:100},
    out: {effect: '',delay:2000000000000},
    loop: true
});
