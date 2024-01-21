<?php
spl_autoload_extensions(".php"); 
spl_autoload_register();
require_once 'vendor/autoload.php';
use \Helpers\RandomGenerator;

$min = $_GET['min'] ?? 5;
$max = $_GET['max'] ?? 10;

$min = (int)$min;
$max = (int)$max;

$restauchain = [];
for ($num = 0; $num < rand(1,10); $num++){
    $restaurantlocation = [];
    for ($num = 0; $num < rand(1,5); $num++){
        array_push($restaurantlocation,RandomGenerator::generateRestauntLocation(RandomGenerator::employees($min, $max)));
    }
    array_push($restauchain, RandomGenerator::generateRestaurantChain($restaurantlocation));
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
                            foreach ($rl->getEmployees() as $employee):
                                echo $employee->toHTML();
                            endforeach;
                        ?>
                    </details>
                <?php endforeach; ?>
            </details>
        <?php endforeach; ?>
    </div>
</body>
</html>