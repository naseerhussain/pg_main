saveDetails = function(who,name,mobile,email,location,password,confirm){

        var table = localStorage.getItem('"'+who+'"') || {};
        var size = 0;
        if(Object.size(table) > 0){
                table = JSON.parse(table);
                size = Object.key(table);
                size = parseInt(size);
        }

        table[size+1] = {"name":name,
                          "mobile":mobile,
                          "email":email,
                          "location":location,
                          "password":password
                         };
        table = JSON.stringify(table);
        localStorage.setItem('"'+who+'"', table);

}

getDetails = function(who){
    var table = localStorage.getItem('"'+who+'"') || {};
    var size = 0;

    if(Object.size(table) > 0){
        table = JSON.parse(table);
    }
    return table;
}

savePgDetails = function(name,address,city,mobile,sharing,type,pgFor,facility){
    var table = localStorage.getItem("pgTable") || {};
        var size = 0;
        if(Object.size(table) > 0){
                table = JSON.parse(table);
                size = Object.key(table);
                size = parseInt(size);
        }

        table[size+1] = {
                            "name":name,
                            "address":address,
                            "city":city,
                            "mobile":mobile,
                            "sharing":sharing,
                            "type":type,
                            "pgFor":pgFor,
                            "facility":facility
                         };
        table = JSON.stringify(table);
        localStorage.setItem("pgTable", table);
}

getPgDetails = function(){
    var table = localStorage.getItem("pgTable") || {};
    var size = 0;

    if(Object.size(table) > 0){
        table = JSON.parse(table);
    }
    return table;

}

getLength = function(table){
    var size = 0;
    if(Object.size(table) > 0){
        //table = JSON.parse(table);
        size = Object.key(table);
        size = parseInt(size);
    }   
    return size;
}

Object.size = function(obj) {
    var size = 0, key;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

Object.key = function(obj){
    var size = 0;

    for(key in obj){
        size= key;
    }
    return size;
}
