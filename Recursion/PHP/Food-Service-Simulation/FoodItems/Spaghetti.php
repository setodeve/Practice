<?php
namespace FoodItems;

class Spaghetti extends FoodItem{
  public function __construct() {
    parent::__construct("Spaghetti", "Spaghettidesu", 8.0,5);
  }

  public function getCategory(): string{
   return "Spaghetti"; 
  }

}