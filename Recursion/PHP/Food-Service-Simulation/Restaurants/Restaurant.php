<?php

namespace Restaurants;

date_default_timezone_set('Asia/Tokyo');

class Restaurant {
  protected string $orderTime;
  protected array $items;

  public function __construct(array $items) {
      $this->orderTime = date("D M d, Y G:i");
      $this->items = $items;
  }

  public function getItems(){
    return $this->items;
  }

  public function getOrderTime(){
    return $this->orderTime;
  }
}