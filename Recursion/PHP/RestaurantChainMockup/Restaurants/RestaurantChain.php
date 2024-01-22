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
      $this->numberOfLocations = count($restaurantLocations);
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

  public function toString(): string {
    return sprintf(
        "■Chain Id: %s\nName: %s\nFoundingYear: %s\nDescription: %s\nWebsite: %s\nPhoneNumber: %s\nIndustry: %s\nCeo: %s\nIsPubliclyTraded: %s\nCountry: %s\nFounder: %s\nTotalEmployees: %s\ncuisineType: %s\nparentCompany: %s\nnumberOfLocations: %s\n\n",
        $this->chainId,
        $this->getName(),
        $this->getFoundingYear(),
        $this->getDescription(),
        $this->getWebsite(),
        $this->getPhone(),
        $this->getIndustry(),
        $this->getCeo(),
        $this->getIsPubliclyTraded(),
        $this->getCountry(),
        $this->getFounder(),
        $this->getTotalEmployees(),
        $this->cuisineType,
        $this->parentCompany,
        $this->numberOfLocations
    );
  }

  public function toMarkdown() : string {
    return 
"
## Chain_Name: {$this->getName()}
- ChainId: {$this->chainId}
- FoundingYear: {$this->getFoundingyear()}
- Description: {$this->getDescription()}
- Website: {$this->getWebsite()}
- Industry: {$this->getIndustry()}
- Ceo: {$this->getCeo()}
- IsPubliclyTraded: {$this->getIsPubliclyTraded()}
- Country: {$this->getCountry()}
- Founder: {$this->getFounder()}
- TotalEmployees: {$this->getTotalEmployees()}
- cuisineType: {$this->cuisineType}
- parentCompany: {$this->parentCompany}
- numberOfLocations: {$this->numberOfLocations}

";
  }

  public function toArray() : array {
    return [
        'id' => $this->chainId,
        'foundingYear' => $this->getFoundingyear(),
        'description' => $this->getDescription(),
        'website' => $this->getWebsite(),
        'industry' => $this->getIndustry(),
        'ceo' => $this->getCeo(),
        'isPubliclyTraded' => $this->getIsPubliclyTraded(),
        'country' => $this->getCountry(),
        'founder' => $this->getFounder(),
        'totalEmployees' => $this->getTotalEmployees(),
        'cuisineType' => $this->cuisineType,
        'parentCompany' => $this->parentCompany,
        'numberOfLocations' => $this->numberOfLocations
      ];
  }

}


?>