var xmlhttp = new XMLHttpRequest();
 
xmlhttp.open('GET','https://restcountries.eu/rest/v2/all', true);
 
xmlhttp.send();
 
xmlhttp.onload = function() {
    var arr = JSON.parse(this.response);
    console.log(arr);
    var asiaData = arr.filter((data) => {
    return data.region === "Asia";
    });
    console.log(asiaData);
 
    for(var i=0; i<asiaData.length; i++)
    {
       console.log(asiaData[i].name);
    }
}
