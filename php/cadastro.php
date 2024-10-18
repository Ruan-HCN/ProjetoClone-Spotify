<?php    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "db_spotify";
    $con = mysqli_connect($servername, $username, $password, $database);

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    } else {
        echo "Connected successfully";

        $edNome = mysqli_real_escape_string($con, $_POST['name']);
        $edcellnumber = mysqli_real_escape_string($con, $_POST['phone']);
        $edEmail = mysqli_real_escape_string($con, $_POST['email']);
        $edPsw = mysqli_real_escape_string($con, $_POST['password']);

        $sql = "INSERT INTO tbl_spotify (nome, Numero_celular, email, senha)
                VALUES ('$edNome', '$edcellnumber', '$edEmail', '$edPsw')";

        $rs = mysqli_query($con, $sql);

        if ($rs) {
            echo "Registro cadastrado com sucesso!";
        } else {
            echo "Erro ao cadastrar registro: " . mysqli_error($con);
        }
    }
    
    mysqli_close($con);
?>
