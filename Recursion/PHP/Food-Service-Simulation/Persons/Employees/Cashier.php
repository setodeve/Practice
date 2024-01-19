<?php

namespace Persons\Employees;

use \Persons\Employees\Employee;
use \FoodOrders\FoodOrder;
use \Restaurants\Restaurant;
use \Invoices\Invoice;

class Cashier extends Employee {
  public function __construct(string $name, int $age, string $address, int $employeeId, float $salary) {
    parent::__construct($name, $age, $address, $employeeId, $salary);
  }

  public function generateOrder(array $categories, Restaurant $restaurant):FoodOrder{
    $list = [];
    foreach ($categories as $key => $value){
      foreach ($restaurant->getItems()[0] as $m){
        if ($key == $m->getCategory()){
          array_push($list,[$m,$value]);
        }
      }
    }
    $order = new FoodOrder($restaurant->getOrderTime(),$list);
    return $order;
  }

  public function generateInvoice(FoodOrder $order): Invoice{
    $totalPrice = 0.0;
    $totalMinitues = 0;

    foreach($order->getItems() as $item){
      $totalPrice += $item[0]->getPrice()*$item[1];
      $totalMinitues += $item[0]->getEstimatedMinitues()*$item[1];
    }
    echo "Dishes will be ready in {$totalMinitues} Minitues\n";
    return new Invoice($order->getOrderTime(),$totalPrice,$totalMinitues);
  }
}