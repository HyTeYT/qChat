# qChat - the simple chat for everyone!
## FAQ
  - What is qChat?
    - qChat is a simple, websocket-based online Chatroom-Application!
    
  - Can I use it for myself?
    - Of course you can! It's open source! Just make sure to credit `@marvinborner` and `@hyteyt`!

## Installation Guide

1. `git clone` it into your web server path
2. Go into `assets/php/Server/` directory and install server files with `composer install`
3. Cd into `assets/php/Server/src/` and execute `php createDB.php` (sqlite3 required)
4. Edit the websocket IP in the `assets/js/main.js` file according to your servers IP (you can also use a DynDNS)  
5. Run `startserver.sh` to start the server normally or `startserver.sh -p` to start it as a daemon.

Enjoy!
  
