<?php
spl_autoload_register(function ($class) {
    $file = __DIR__ ."/". str_replace('\\', '/', $class) . '.php';
    // echo "Requiring.... $class\n";
    if (file_exists($file)) {
        require_once $file;
    }
});

$cheeseBurger = new FoodItems\CheeseBurger();
$fettuccine = new FoodItems\Fettuccine();
$hawaiianPizza = new FoodItems\HawaiianPizza();
$spaghetti = new FoodItems\Spaghetti();

$Inavah = new Persons\Employees\Chef("Inayah Lozano", 40, "Osaka", 1, 30);
$Nadia = new Persons\Employees\Cashier("Nadia Valentine", 21, "Tokyo", 1, 20);

$saizeriya = new \Restaurants\Restaurant(
    [[
        $cheeseBurger,
        $fettuccine,
        $hawaiianPizza,
        $spaghetti
    ],
    [
        $Inavah,
        $Nadia
    ]]
);

$interestedTastesMap = [
    "Margherita" => 1,
    "CheeseBurger" => 2,
    "Spaghetti" => 1
];

$Tom = new \Persons\Customers\Customer("Tom", 20, "Saitama", $interestedTastesMap);

$invoice = $Tom->order($saizeriya);
$invoice->printInvoice();
