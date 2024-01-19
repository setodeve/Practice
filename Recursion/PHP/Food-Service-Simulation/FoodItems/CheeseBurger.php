<?php
namespace FoodItems;

class CheeseBurger extends FoodItem{
  public function __construct() {
    parent::__construct("CheesBurger", "CheesBurgerdesu", 10.0,2);
  }

  public function getCategory(): string{
   return "CheeseBurger"; 
  }
}