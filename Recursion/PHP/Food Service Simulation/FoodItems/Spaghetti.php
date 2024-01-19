<?php
namespace FoodItems;
use \FoodItems\FoodItem;

class Spaghetti extends FoodItem{
  public function __construct() {
    parent::__construct("Spaghetti", "Spaghettidesu", 8.0);
  }

  public function getCategory(): string{
   return "Pasta"; 
  }

}