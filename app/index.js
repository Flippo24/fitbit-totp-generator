/*
 * Entry point for the watch app
 */
import * as messaging from "messaging";
import document from "document";

let code = document.getElementById("code");

code.style.display = "inline";

messaging.peerSocket.onmessage = function(evt) {
  code.text = evt.data["value"];
};

document.onkeypress = function(evt) {
  messaging.peerSocket.send("foo");
}