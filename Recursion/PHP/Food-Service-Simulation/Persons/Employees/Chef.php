<?php

namespace Persons\Employees;

use \Persons\Employees\Employee;
use \FoodOrders\FoodOrder;

class Chef extends Employee {
  public function __construct(string $name, int $age, string $address, int $employeeId, float $salary) {
    parent::__construct($name, $age, $address, $employeeId, $salary);
  }

  public function prepareFood(FoodOrder $order){
    $str = "";
    foreach($order->getItems() as $o){
      $str = $str . "Preparing..... {$o[0]->getName()} * {$o[1]} \n";
    }
    echo $str;
  }
}