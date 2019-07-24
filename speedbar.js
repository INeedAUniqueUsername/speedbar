// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/index.php?version=4.8.41&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //input.value = str;
    //console.log(str)
    let index = null;
    let words = null;
    let input = null;

    window.onkeypress = function(event) {
        if(event.keyCode === 32) {
            if(index !== null) {
                input.value = words[index]
                index++;
            } else {
                let row = document.getElementById('row1');
                let spans = row.getElementsByTagName("*")
                words = []
                for(let i = 0; i < spans.length; i++) {
                    words.push(spans[i].innerHTML);
                }
                let str = words[0];
                for(let i = 1; i < words.length; i++) {
                    str += ' ' + words[i];
                }
                input = document.getElementById('inputfield')
                index = 0;
                console.log(words[0])
            }
        }
    };
})();
