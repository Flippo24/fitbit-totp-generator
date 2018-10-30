/*
 * Entry point for the watch app
 */
import * as messaging from "messaging";
import document from "document";
import { me as device } from "device";

const code = document.getElementById("code");
const bar = document.getElementById("bar");
let refresh = 0;
const interval = 30000;

code.style.display = "inline";

function updateBar() {
  bar.animate("enable");
  refresh = Date.now();
  setTimeout(getCode, interval);
}

function getCode(force) {
  if (force !== true && Date.now() - refresh < interval)
    return;
  refresh = Date.now();
  messaging.peerSocket.send("foo");
}

messaging.peerSocket.onmessage = function(evt) {
  code.text = evt.data["value"];
  updateBar();
};

document.onkeypress = function(evt) {
  getCode(true);
}
