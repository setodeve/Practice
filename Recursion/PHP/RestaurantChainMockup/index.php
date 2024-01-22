<?php
spl_autoload_extensions(".php"); 
spl_autoload_register();
require_once 'vendor/autoload.php';
use \Helpers\RandomGenerator;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $format = $_POST["format"];
    
    $restauchain = RandomGenerator::generateData();

    if ($format == 'markdown'){
      RandomGenerator::generateMD($restauchain);
      header('Location: generate.php');
      exit;
    } elseif ($format == 'json') {
      RandomGenerator::generateJson($restauchain);
      header('Location: generate.php');
      exit;
    } elseif ($format == 'txt') {
      RandomGenerator::generateTxt($restauchain);
      header('Location: generate.php');
      exit;
    } else {
        
    }
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Info</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="main">
        <?php $format=="html" ?>
            <?php foreach ($restauchain as $rc): ?>
                <h2 class="restaurant-chain-title"><?php echo $rc->getName()?></h2>
                <details class="restaurant-chain">
                    <summary class="restaurant-chain-name">
                        Restaurant Chain Infomation
                    </summary>
                    <?php foreach ($rc->getRestaurantLocations() as $rl): ?>
                        <details class="restaurant-location">
                            <summary>
                                <?php echo $rl->getName()?>
                            </summary>
                            <?php echo $rl->toHtml()?>
                            <?php 
                                foreach ($rl->getEmployees() as $em):
                                    echo $em->toHTML();
                                endforeach;
                            ?>
                        </details>
                    <?php endforeach; ?>
                </details>
            <?php endforeach; ?>
    </div>
</body>
</html>