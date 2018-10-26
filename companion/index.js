/*
 * Entry point for the companion app
 */

import * as messaging from "messaging";
import {settingsStorage} from "settings";
import {jsOTP} from './jsOTP.js'

function updateCode() {
  let totp = new jsOTP.totp();
  let key = JSON.parse(settingsStorage.getItem("setting_tokenKey"))["name"];
  let code = totp.getOtp(key.toUpperCase());
  messaging.peerSocket.send( {value: code } );
}

messaging.peerSocket.onopen = updateCode;
messaging.peerSocket.onmessage = updateCode;