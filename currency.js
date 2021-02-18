var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all', true);
request.send();

request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
     var currency = data.filter((item) => {
         //return item.currencies[0].symbol === "$";
         if(item.currencies[0].symbol === "$")
         {
             console.log(item.name);
         }
     })
   console.log(currency);
}