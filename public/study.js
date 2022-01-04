//------------------------------------------POMODORO TIMER----------------------------------------------

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

//Guarda el tiempo
var startTimer;


//Boton start,reset y stop

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Funcion de inicio del timer
function timer(){
    
    //Contador del trabajo
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Contador del break
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Incrementa el contador en uno si el ciclo se completó
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Funcion de stop del timer
function stopInterval(){
    clearInterval(startTimer);
}

//-----------------------------------------Quotes con AJAX------------------------------------

$(document).ready(function(){
    let quote;
    let author;

    function getNewQuote(){

        $.ajax({
            url:'http://api.forismatic.com/api/1.0/',
            jsonp:'jsonp',
            dataType:'jsonp',
            data:{
                method:'getQuote',
                lang: 'en',
                format: 'jsonp',
            },
            success: function(response){
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('#quote').text(quote);
                if(author){
                    $('#author').text('said by ' + author);
                }else{
                    $('#author').text('Unkown author')
                }
            }
        });
    }
getNewQuote();

$('.get-quote').on('click',function(){
    getNewQuote()});
});

