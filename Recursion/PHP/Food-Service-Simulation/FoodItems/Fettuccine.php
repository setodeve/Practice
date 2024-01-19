<?php
namespace FoodItems;

class Fettuccine extends FoodItem{
  public function __construct() {
    parent::__construct("Fettuccine", "Fettuccine", 8.0,5);
  }

  public function getCategory(): string{
   return "Fettuccine"; 
  }

}