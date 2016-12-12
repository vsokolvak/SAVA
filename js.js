window.onload = function(){
    //create json создаю джейсон чтобы не писать в ручную и тестить при любом количестве курсов
    function creatjson(coursecount, lectioncount){
        var jsontext ="[";       
        for (var i = 1; i <= coursecount; i++){
            if(i == 1)
                jsontext += "{\"curse_name\": ";
            else
                jsontext += ", {\"curse_name\": ";
            jsontext += "\"curs" + i + "\", ";
            jsontext += "\"lection\": [";
            for(var j = 1; j <= lectioncount; j++){
                if(j == 1)
                    jsontext += "{\"lection_name\": ";
                else
                    jsontext += ", {\"lection_name\": ";
                jsontext += "\"lection" + j + "\", ";
                jsontext += "\"url\": ";
                jsontext += "\"url"+ j + "\"}";
            }
            jsontext += "]}";
        }
        jsontext += "]";
        return jsontext;
    };

    console.log(creatjson(2, 2));


    //add coursename to block добавляю названия курсов в вёрстку адаптивно для любого количества курсов не зависимо от html
    var curs = JSON.parse(creatjson(11, 25));//преобразовал json
    console.dir(curs);//проверил
    var pagecurs = document.getElementById('curs'); //страница с курсами
    var pagelect = document.getElementById('lect'); //страница лекций
    var pages = document.querySelectorAll('main>section'); // все страницы
    var curentpage = 0; // щётчик текущей страницы
    var lection_arrey = [];
    for(var j = 0; j < curs.length; j++){ //цикл перебора курсов
        var blok = document.createElement('div');//создал дивчик, добавил ему название курса как текст и разместил его на странице курсов 
        pagecurs.appendChild(blok);
        blok.innerHTML = curs[j].curse_name;
    //add onclick function to block добавляю обработчик клика на блоки курсов
        blok.addEventListener('click', clik_curse);
    }
    function clik_curse(){
            if(lection_arrey[0]){
                for(var k = 0; k < lection_arrey.length; k++)
                lection_arrey[k].remove();
            }
            curentpage = 1; //изменил щётчик текущей страницы
            changepage(curentpage); // запустил функцию смены страницы относительно щётчика
            for(var i = 0; i < curs.length; i++){ //цикл чтобы узнать на какой курс кликнули и вывести его лекции
                if(this.innerHTML == curs[i].curse_name) break; 
            }
            for(var j = 0; j <= curs[i].lection.length - 1; j++){ //цикл перебора курсов
                var blok = document.createElement('div');//создал дивчик, добавил ему название курса как текст и разместил его на странице курсов 
                lection_arrey[j] = blok;
                pagelect.appendChild(lection_arrey[j]);
                blok.innerHTML = curs[i].lection[j].lection_name;
                //обработка клика на лекцию
                blok.addEventListener('click', click_lection); 
                document.getElementsByClassName('cursename')[0].innerHTML = this.innerHTML; //блок заголовок лeкций, присвоил ему имя курса по которому кликнули
    //add onclick function to block добавляю обработчик клика на блоки курсов
            }
            function click_lection(){
                curentpage = 2;
                changepage(curentpage);
                var video = document.getElementsByTagName('source')[0];
                for(var k = 0; k < curs[i].lection.length; k++){ //цикл чтобы узнать на какую лекцию кликнули и вывести видео
                    if(this.innerHTML == curs[i].lection[k].lection_name) break; 
                }
                video.setAttribute("src", curs[i].lection[k].url);
            }
    }
    // функция переключения страниц
    function changepage(n){
        for(var i = 0; i < pages.length; i++){
            if (i == n)
                pages[i].style.display = "flex";
            else
                pages[i].style.display = "none";
        }
    }
    //end
    var toogle = document.getElementsByClassName('navigation');
        for(var i = 0; i < toogle.length; i++){
            toogle[i].addEventListener('click', go_toogle_prew);
            function go_toogle_prew(){
                changepage(--curentpage);
        }
    }
    


}
