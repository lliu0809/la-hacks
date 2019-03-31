// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

//chrome.storage.sync.set( {'timer1':  Date(0,0,0,2,0,0,0 )}, function(){ console.log( Date(0,0,0,2,0,0,0 ));});


chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);

});

changeColor.onclick = function(element) {
    let color = element.target.value;
   // let ocolor = document.body.style.backgroundColor
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };

  let changeColorAgain = document.getElementById('changeColorAgain');
chrome.storage.sync.get('color2', function(data) {
  changeColorAgain.style.backgroundColor = data.color2;
  changeColorAgain.setAttribute('value', data.color2);
});

changeColorAgain.onclick = function(element) {
    let color2 = element.target.value;
   // let ocolor = document.body.style.backgroundColor ;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color2 + '";'});
    });
  };

//////////////////////////////


////////////////////////
var points =10 ;





chrome.storage.local.get('timer',function(data)
{
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

//    chrome.storage.local.set({'timer': data.time},function() {});
}
);
