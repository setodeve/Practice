<?php

namespace FoodItems;

abstract class FoodItem{
  protected string $name;
  protected string $description;
  protected float $price;
  protected int $estimatedMinitues;

  public function __construct(string $name, string $description, float $price, int $estimatedMinitues) {
      $this->name = $name;
      $this->description = $description;
      $this->price = $price;
      $this->estimatedMinitues = $estimatedMinitues;
  }

  abstract public function getCategory(): string;

  public function getName():string{
    return $this->name;
  }

  public function getPrice():float{
    return $this->price;
  }

  public function getEstimatedMinitues():float{
    return $this->estimatedMinitues;
  }
}