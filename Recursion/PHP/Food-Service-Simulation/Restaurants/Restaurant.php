<?php

namespace Restaurants;

// use \FoodItems\FoodItem;
use \Persons\Employees\Cashier;
use \Persons\Employees\Chef;

date_default_timezone_set('Asia/Tokyo');

class Restaurant {
  protected string $orderTime;
  protected array $items;

  public function __construct(array $items) {
      $this->orderTime = date("D M d, Y G:i");
      $this->items = $items;
      foreach($items[0] as $dish){

      }

      foreach($items[1] as $emploee){
        if ($emploee instanceof Cashier) {

        }elseif ($emploee instanceof Chef){
  
        }
      }

  }

  public function getItems(){
    return $this->items;
  }

  public function getOrderTime(){
    return $this->orderTime;
  }
}