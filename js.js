window.onload = function(){
    //sozdau json
    function creatjson(coursecount, lectioncount){
        var jsontext ="{";
        for (var i = 1; i <= coursecount; i++){
        jsontext += "\"curse" + i + "\": [\"curse" + i + "\"";
            for (var j = 1; j <= lectioncount; j++){
                jsontext += ", \"lection" + j + "\"";
            };
            jsontext += "]";
            if (i < coursecount)
                jsontext += ", ";
    
        };
        jsontext += "}"
        return jsontext;
    };
    console.log(creatjson(2, 2));
    
    //
    curs = JSON.parse(creatjson(2, 2));
    console.dir(curs);
    var page = document.getElementsByName("page");
    console.log(page);

    for(key in curs){
        for(var i = 1; i < this.length; i++){
            
        }        
    }
    
}
