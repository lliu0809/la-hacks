'use strict'

 let sub = document.getElementById('sub');
 sub.onclick = function(){
 	var x = document.getElementById("URL").value;
	var y = document.getElementById("N_hours").value;
	 
	 
	chrome.storage.sync.set({'url': x}, function() {

  });
	 chrome.storage.sync.set({'time': y}, function() {

  });
	 chrome.storage.sync.get('url', function(data) {
    console.log(data.url);
  });
	 
	 chrome.storage.sync.get('timer',function(data)
{
//console.log(data.timer);
function myloop(){

   setTimeout(function()
   {
   data.timer--;
   if(data.timer>=0)
   {
   console.log(data.timer);
   myloop();
   }
   else{
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + '#3aa888' + '";'});
    });}
   },100
   )}
myloop();
});
	 

  	//document.getElementById("display").innerHTML = x;

 }