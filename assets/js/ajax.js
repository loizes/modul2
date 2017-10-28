$(document).ready(function(){                          // по завершению загрузки страницы
    $('btnsurvey').click(function(){                  // вешаем на клик по элементу с id = example-5
        $.getScript('jsjs.js', function(){     // загрузку JavaScript'а из файла example.js 
        $(".fffix").clone().appendTo(".surveyblock");                               // выполняем загруженный JavaScript
        });                
    })
});