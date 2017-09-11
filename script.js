const secondHand = document.querySelector('.second-hand');
secondHand.style.background='red';
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const seconds = new Date().getSeconds();
var secDeg = ((seconds / 60) * 2*Math.PI);

function setDate() {
    const now = new Date();
    
    secDeg += ((1 / 60) * 2*Math.PI);
    secondHand.style.transform = `rotate(${secDeg}rad)scale(1.1, 1)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)scale(1, 1)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)scale(0.75, 1)`;

    setTimeout(setDate, 1000);
}
setDate();

$(function() {
    $('#sun_yellow').animate({
        'top': '96%',
        'opacity': 0.4
    }, 18000, function() {
        $('#stars').animate({
            'opacity': 1
        }, 5000, function() {
            $('#moon').animate({
                'top': '30%',
                'opacity': 1
            }, 3000, function() {
                $('#sstar').animate({
                    'opacity': 1
                }, 300);
                $('#sstar').animate({
                    'backgroundPosition': '0px 0px',
                    'top': '15%',
                    'opacity': 0
                }, 500, function() {
                    $('#title').animate({
                        'opacity': 1
                    }, 1000);
                    $('#back').animate({
                        'opacity': 1
                    }, 3000);
                });
            });
        });
    });
    $('#sun_red').animate({
        'top': '96%',
        'opacity': 0.8
    }, 8000);
    $('#sky').animate({
        'backgroundColor': '#4F0030'
    }, 18000);
    $('#clouds').animate({
        'backgroundPosition': '1000px 0px',
        'opacity': 0
    }, 30000);
    $('#night').animate({
        'opacity': 0.8
    }, 20000);
});