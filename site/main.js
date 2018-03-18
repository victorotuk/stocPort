$(document).ready(function () {

  //bradley and everyone that called him the fuhrer will pay for treason

  alert("hey");

  $('#stockInput').val();
  const url = "https://www.alphavantage.co/query";
  const fn = '?function=TIME_SERIES_DAILY';
  const os = '&outputsize=full';
  const sym = '&symbol=';
  const apiKey = '&apikey=RO6QHBGM0A4VO7NT';

const urlToFetch = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=RO6QHBGM0A4VO7NT";

const $responseField = $('#responseField');


$('#sumbit').on('click', ()=>{



  //display some elements from the response
  $.ajax({

      url: urlToFetch,
      type: 'GET',
      dataType: 'json',

      success(response){
        console.log(response);
        //$responseField.append('<p>the stock price is: </p><p>' + response.Daily[0][1] + '</p>');
        //const res = JSON.parse(response);
      },

      error(jqXHR, status, errorThrown){
        console.log(jqXHR);

      }
  });


});


});
