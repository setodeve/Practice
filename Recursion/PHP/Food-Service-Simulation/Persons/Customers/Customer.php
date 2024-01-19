<?php

namespace Persons\Customers;

use \Persons\Person;
use \Invoices\Invoice;
use \Restaurants\Restaurant;

class customer extends Person {
  protected int $orderTime;
  protected array $items;
  protected array $map;
  public function __construct(string $name, int $age, string $address, array $map) {
    parent::__construct($name, $age, $address);
    $this->map = $map;
  }

  public function order(Restaurant $restaurant): Invoice {
    $empoyee = $restaurant->getItems()[1];
    $order = $empoyee[1]->generateOrder($this->map,$restaurant);
    $invoice = $empoyee[1]->generateInvoice($order);
    $empoyee[0]->prepareFood($order);

    return $invoice;
  }
}