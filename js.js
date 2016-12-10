window.onload = function(){
    //create json создаю джейсон чтобы не писать в ручную и тестить при любом количестве курсов
    function creatjson(coursecount){
        var jsontext ="[\"curs1\"";
        for (var i = 2; i <= coursecount; i++){
        jsontext += ", \"curs" + i + "\"";
        }
        jsontext += "]";
        return jsontext;
    };
    console.log(creatjson(2));
    //end
    //add coursename to block добавляю названия курсов в вёрстку адаптивно для любого количества курсов не зависимо от html
    curs = JSON.parse(creatjson(8));//преобразовал json
    console.dir(curs);//проверил
    var pagecurs = document.getElementById('curs'); //страница с курсами
    console.log(pagecurs);
        for(var j = 0; j < curs.length; j++){ //цикл перебора курсов
            var blok = document.createElement('div');//создал дивчик, добавил ему название курса как текст и разместил его на странице курсов 
            pagecurs.appendChild(blok);
            blok.innerHTML = curs[j];
        }
    
}
