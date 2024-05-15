import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import { alert, notice, info, success, error } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
 
defaultModules.set(PNotifyMobile, {});
const infoEl = document.querySelector('#key');
const newButEl = document.querySelector('#new_but');
const keys = ['1', '2', '3', '4', '5'];
let currentKeyIndex = 0;
const showKey = () => infoEl.innerHTML = `Please press: ${keys[currentKeyIndex]}`;

showKey();
document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key == keys[currentKeyIndex]) {
        success({
            text: "correct key",
            delay: 1
        });
        currentKeyIndex++;
        if (currentKeyIndex >= 10) {
            success({
                text: "win!",
                delay: 10
            });
        }
        else {
            showKey();
        }
    }
    else {
        error({
            text: "not correct key",
            delay: 1
        });
        showKey();
    }
});

newButEl.addEventListener('click', () => {
    currentKeyIndex = 0;
    info({
        text: "New game started",
        delay: 1
    });
    showKey()
});