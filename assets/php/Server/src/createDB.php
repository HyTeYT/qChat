<?php
try {
    $pdo = new PDO('sqlite:../database/chats.db');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->exec("
      CREATE TABLE IF NOT EXISTS
        messages (
          id INTEGER PRIMARY KEY,
          message varchar(2047),
          nickname varchar(31),
          time DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ");
} catch (PDOException $e) {
    echo $e->getMessage();
}
