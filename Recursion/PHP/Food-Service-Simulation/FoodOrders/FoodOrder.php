<?php

namespace FoodOrders;

class FoodOrder {
  protected string $orderTime;
  protected array $items;

  public function __construct(string $orderTime, array $items) {
      $this->orderTime = $orderTime;
      $this->items = $items;
  }
  public function getItems(){
    return $this->items;
  }
  public function getOrderTime(){
    return $this->orderTime;
  }
}