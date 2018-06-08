#!/usr/bin/env bash
cd assets/php/Server/bin/

if [ "$1" = "-p" ]
    then
        nohup php chat_server.php &
else
        php chat_server.php
fi
