<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

include("conection.php");

// ... Código de conexão com o banco de dados ...

$lista = array();

$sql = "SELECT id, name, price, image FROM products"; // Altere a consulta para incluir a coluna "image"

$resultado = mysqli_query($conection, $sql);

if ($resultado) {
    while ($row = mysqli_fetch_assoc($resultado)) {
        $lista[] = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'price' => number_format($row['price'], 2, ",", "."),
            'image' => 'http://localhost/e-commerce-shanti/php/images/' . $row['image'] // Caminho para a imagem no servidor
        );
    }
    mysqli_free_result($resultado);
} else {
    echo "Erro na consulta: " . mysqli_error($conection);
}

echo json_encode($lista, JSON_UNESCAPED_UNICODE);

mysqli_close($conection);
