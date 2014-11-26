console.log('Hey!');

$(document).ready(function(){
    $("#box").css({'height':'100px', 'width':'100px', 
        'background-color':'black', 'position':'absolute'});
    $("#box").animate({'left':'1000px'},6000,'swing', function(){
        alert("DONE ANIMATED");
    });
});

