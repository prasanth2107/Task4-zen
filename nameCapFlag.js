var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all', true);
request.send();


request.onload = function() {
    var arr = JSON.parse(this.response);
    console.log(arr);
    arr.forEach((item) =>
    {
        console.log(item.name,"name",item.capital,"cap",item.flag);
        
    })
}
