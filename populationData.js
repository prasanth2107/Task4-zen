var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all', true);
request.send();

request.onload = function() {
    var arr = JSON.parse(this.response);
    console.log(arr);
    var population = arr.filter((item) => {
        return item.population < 200000;

    });
    console.log(population);
    for(var i=0;i<population.length;i++)
    {
        console.log(population[i].name);
    }
}