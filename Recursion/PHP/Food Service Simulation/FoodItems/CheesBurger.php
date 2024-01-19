<?php
namespace FoodItems;
use \FoodItems\FoodItem;

class CheeseBurger extends FoodItem{
  public function __construct() {
    parent::__construct("CheesBurger", "CheesBurgerdesu", 10.0);
  }

  public function getCategory(): string{
   return "Burger"; 
  }
}