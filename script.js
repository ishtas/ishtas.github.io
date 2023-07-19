var filterActive;

function filterCategory(cat1, cat2, cat3) {
    // hide all elements
    $('.f-cat').removeClass('active');

    // the filtering in action for all criteria
    var selector = ".f-cat";

    if (cat1 !== 'cat-all') {
        selector = selector + '[data-cat~="' + cat1 + '"]';
    }
    if (cat2 !== 'cat-all') {
        selector = selector + '[data-cat2~="' + cat2 + '"]';
    }
    if (cat3 !== 'cat-all') {
        selector = selector + '[data-cat3~="' + cat3 + '"]';
    }

    // show filtered elements
    $(selector).addClass('active');

    // reset active filter
    filterActive = cat1;
}

// show all items initially
$('.f-cat').addClass('active');

// call the filtering function when selects are changed
$('.filtering select').change(function() {
    var cat1 = $('.filtering select.cat1').val();
    var cat2 = $('.filtering select.cat2').val();
    var cat3 = $('.filtering select.cat3').val();
    
    filterCategory(cat1, cat2, cat3);
});
