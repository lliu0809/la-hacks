// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  chrome.storage.sync.set({color2: '#aa0b01'}, function() {
    console.log("The color is unknown.");
  });
	
	chrome.storage.sync.set({'timer':120},function(){});
	
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
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

//    chrome.storage.local.set({'timer': data.time},function() {});

