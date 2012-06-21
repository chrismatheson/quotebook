Quotebook is a small site which will allow a club or even single person to keep a record of "quotes"

The UI is based on bootstrap from twitter, with help from jQuery for client side functionality. 
I have tried to keep everything as client side as possible to make the app portable and possibly rolled into a iOS
wrapper at some point in the future.

persistance of data is provided by Parse on a free tier (which should be more than enough for a small club / organisation)

The repo also includes some Node.js code to set up a simple web server and manifest so that this project can be cloned and
uploaded directly to any Node.js system to run. Alternatively to run this from a standard we host only the contents of 
/public/* are required.

TODO

Fix Modal view for mobile
Add Edit/Delete functionality

