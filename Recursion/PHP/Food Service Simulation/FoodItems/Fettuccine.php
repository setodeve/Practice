<?php
namespace FoodItems;

use \FoodItems\FoodItem;

class Fettuccine extends FoodItem{
  public function __construct() {
    parent::__construct("Fettuccine", "Fettuccine", 8.0);
  }

  public function getCategory(): string{
   return "Pasta"; 
  }

}