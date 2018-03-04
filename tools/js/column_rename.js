DATA = {keys:[],values:[]}

var calculate_result = function(){
    var result = {};
    for(i in DATA.keys){
        var k = DATA.keys[i];
        console.log(k);
        for(j in DATA.values){
            var v = DATA.values[j];
            if(v.startsWith(k)){
                rest = v.substring(k.length+1);
                result[k] = rest;
            }
        }
    }
    var repr = "";
    for(i in DATA.keys){
        var k = DATA.keys[i];
        var v = null;
        if(k in result){
            var v = result[k];
        }
        repr += k+"\t"+v+"\n";
    }
    $("#result").val(repr);
    console.log(result);
    
}
var update_values = function(k){
    DATA.values = k;
}

var update_keys = function(k){
    DATA.keys = k;
}

$(document).ready(function(){
    console.log("loaded");
    $("#calculate").click(function(){
        text = $("#labels").val();
        keys = text.split("\n");
        update_keys(keys);

        text = $("#values").val();
        values = text.split("\n");
        update_values(values);

        
        calculate_result();
    })
})
