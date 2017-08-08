//Sets default value for resolution to native
$(document).ready(function(){
    var width = screen.width;
    var height = screen.height;
    document.getElementById('width').value = width;
    document.getElementById('height').value = height;
    return;
});

//code for color select
$(document).ready(function(){
    $(".color-button").click(function(){
        $(".color-button").removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function(){
    $(".np-button").click(function(){
        $(".color-button").removeClass('active');
    })
})

