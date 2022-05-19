// Use the same rest countries and print all countries name, region, sub region and population

let request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function () {
    let data = JSON.parse(request.response);
    console.log(data);
    for (let index = 0; index <data.length; index++) {
        
        console.log(data[index].name,data[index].region,data[index].subregion,data[index].population);

        
    }
    
};

request.onerror=function(){
    console.log('something error');
};

// country flags
 let request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function () {
    let data = JSON.parse(request.response);

    for (let index = 0; index <data.length; index++) {
        
        console.log(data[index].flags);

        
    }
    
};

request.onerror=function(){
    console.log('something error');
};
