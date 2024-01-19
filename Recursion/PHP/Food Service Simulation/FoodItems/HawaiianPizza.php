<?php
namespace FoodItems;
use \FoodItems\FoodItem;

class HawaiianPizza extends FoodItem{
  public function __construct() {
    parent::__construct("HawaiianPizza", "HawaiianPizzadesu", 15.0);
  }

  public function getCategory(): string{
   return "Pizza"; 
  }

}