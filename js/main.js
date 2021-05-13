let question = document.querySelectorAll(".payment-form__step");
let index = 0;

show(question[index]);

document.getElementById("next").addEventListener("click", function _tmp() {
  hide(question[index]);
  index++;
  
  if( !question[index] ) {
    this.removeEventListener("click", _tmp);
    this.textContent = "No more questions!";
    // this keyword refers to context of function call (here: The clicked button)
    return;
  }
  
  show(question[index]);
});

function show(el, value) {
  el.style.display = value || "block";
}
function hide(el) {
  el.style.display = "none";
}

function longRange() {
    var long=document.getElementById('long-range'); 
    var longValue=document.getElementById('long-value'); 
    longValue.innerHTML=long.value;

}
function heightRange() {
    var height=document.getElementById('height-range');
    var heightValue=document.getElementById('height-value'); 
    heightValue.innerHTML=height.value;
}
function widthRange() {
    var width=document.getElementById('width-range');
    var widthValue=document.getElementById('width-value'); 
    widthValue.innerHTML=width.value;
}
/*$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('hero-form');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: './send.php',
            data: formNm.serialize(),
            beforeSend: function () {
                // Вывод текста в процессе отправки
                $(formNm).html('<p style="text-align:center">Отправка...</p>');
            },
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html('<p style="text-align:center">'+data+'</p>');
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });
});*/
$(document).ready( function(){
    $(".nav__btn").click(function() {
        $(".nav__list").toggleClass("active");
    });

    $(".nav__item").hover(function() {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
          $(this).children(".subnav__list").stop().slideDown(300);
        } else {
          $(this).children(".subnav__list").stop().slideUp(300);
        }
      });

});