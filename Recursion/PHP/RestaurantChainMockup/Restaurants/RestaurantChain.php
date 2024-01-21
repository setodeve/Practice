<?php

namespace Restaurants;
use \Restaurants\RestaurantLocation;
use \Company\Company;

class RestaurantChain extends Company {
  private $chainId;
  private $restaurantLocations; // This will be an array of RestaurantLocation objects
  private $cuisineType;
  private $numberOfLocations;
  private $parentCompany;

  public function __construct($chainId, $cuisineType, $parentCompany,$name, $foundingYear, $description, $website, $phone, $industry, $ceo, $isPubliclyTraded, $country, $founder, $totalEmployees, $restaurantLocations) {
      parent::__construct($name, $foundingYear, $description, $website, $phone, $industry, $ceo, $isPubliclyTraded, $country, $founder, $totalEmployees);
      $this->chainId = $chainId;
      $this->cuisineType = $cuisineType;
      $this->parentCompany = $parentCompany;
      $this->restaurantLocations = $restaurantLocations;
      $this->numberOfLocations = 0;
  }

  public function getChainId() {
      return $this->chainId;
  }

  public function setChainId($chainId) {
      $this->chainId = $chainId;
  }

  public function getRestaurantLocations() {
      return $this->restaurantLocations;
  }

  public function addRestaurantLocation(RestaurantLocation $location) {
      $this->restaurantLocations[] = $location;
      $this->numberOfLocations = count($this->restaurantLocations);
  }

  public function getCuisineType() {
      return $this->cuisineType;
  }

  public function setCuisineType($cuisineType) {
      $this->cuisineType = $cuisineType;
  }

  public function getNumberOfLocations() {
      return $this->numberOfLocations;
  }

  // The number of locations is maintained internally, so no setter is provided.

  public function getParentCompany() {
      return $this->parentCompany;
  }

  public function setParentCompany($parentCompany) {
      $this->parentCompany = $parentCompany;
  }

}


?>