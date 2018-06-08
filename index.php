<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <title>qChat!</title>
    <script>
        window.onload=function()
        {
                var nameinput=prompt('Bitte gib deinen Namen ein!');
                var $user;
                if(nameinput != "") {
                    $user = nameinput;
                    window.location.href = './chat.php/?u='+$user;
                }
                else location.reload();
        }
    </script>
</head>
<body>
<br>
</body>
</html>