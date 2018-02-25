$(document).ready(function () {

  //bradley and everyone that called him the fuhrer will pay for treason

  alert("hey");
  const urlToFetch = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=demo';
  function getData(){

    $.ajax({
        url: urlToFetch,
        type: 'GET',
        dataType: 'json',

        success(response){
          console.log(response);
          return response;
        },
        error(jqXHR, status, errorThrown){
          console.log(jqXHR);
        }
    });
  }
  getData();

});
