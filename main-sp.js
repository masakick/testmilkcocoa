window.onload = function(){

  var output = document.getElementById('output');
  
  var x=0;
  var y=0;
  var px=0;
  var py=0;
  var furufuru = false;
  
  var milkcocoa = new MilkCocoa('noteioufq52y.mlkcca.com');
  var ds = milkcocoa.dataStore('gravity');

  window.addEventListener('devicemotion', function(e){
    gravity = e.accelerationIncludingGravity;
    x = gravity.x;
    y = gravity.y;

    output.innerHTML
    = 'x: '+x
    + '<br>y: '+y;
	
	sendModeFromGravityValue(x,y,px,py);
    
    //ds.push({mode: "yes"});
    
    px = x;
    py = y;

  },true);
  
  function sendModeFromGravityValue(x,y,px,py){

    var VU = x*px+y*py;
	var valV = Math.sqrt(x*x+y*y);
	var valU = Math.sqrt(px*px+py*py);
	var cos = VU / valV / valU;

    // portrait -> landscape
    if(!furufuru && cos < 0.95){
      furufuru = true;
      console.log("send "+furufuru);
      ds.send({furue: furufuru});
    }

    // landscape -> portrait
    if(furufuru && cos >= 0.95){
      furufuru = false;
      console.log("send "+furufuru);
      ds.send({furue: furufuru});
    }
  }

};