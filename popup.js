// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var nhours=0;
let sub = document.getElementById('enter');
 sub.onclick = function(element){
  var url = document.getElementById("website").value;
  var nhours= document.getElementById("Time Planned").value;
  };
chrome.storage.local.set( {'timer':  nhours}, function(){});
var points = 10;
var time= 0;
var times=0;
chrome.storage.sync.set({'pts': points}, function() {

  });

/*let subb = document.getElementById('Redeem');
 subb.onclick = function(element){
 times++;
chrome.storage.sync.get('pts', function(data) {points=data.pts; });
points--;
chrome.storage.sync.set({'pts': points}, function() { });

chrome.storage.sync.get('timer', function(data) {time=data.timer; });
time= time +60;
chrome.storage.sync.set({'timer': time}, function() { });
};*/




//////////////////////////////



////////////////////////






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


