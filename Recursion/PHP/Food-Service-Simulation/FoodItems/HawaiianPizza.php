<?php
namespace FoodItems;

class HawaiianPizza extends FoodItem{
  public function __construct() {
    parent::__construct("HawaiianPizza", "HawaiianPizzadesu", 15.0,5);
  }

  public function getCategory(): string{
   return "HawaiianPizza"; 
  }

}