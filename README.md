# A TOTP Code Generator for Fitbit Ionic (and Versa, probably)
This is a simple code generator for TOTP authentication codes. Enter the
shared secret on the settings page (located within the Fitbit app on your
smartphone) and then launch the app to see the most current code. The code
does not automatically refresh; refresh the
code by pressing any button on the device (other than the back button).

This app only works with a 30 second interval and generates 6-digit
codes.

# Acknowledgements

The guts of this code are shamelessly ripped from
[JS-OTP](https://github.com/jiangts/JS-OTP)
by Allan Jiang, which uses code from the
[Node OTP](https://github.com/guyht/notp/) and
[jsSHA](https://github.com/caligatio/jsSHA/).
from Brian Turek.
