window.onload = function(){

  var output = document.getElementById('output');
  var milkcocoa = new MilkCocoa("noteioufq52y.mlkcca.com");
  var ds = milkcocoa.dataStore('gravity');
  var counter = 0;

  ds.on('send', changeViewFromSentMode);

  function changeViewFromSentMode(sent){
    if(sent.value.furue){
      output.innerHTML = "ふるえてる"+ counter +"回目<br>"
      counter ++;
    }
  }
};