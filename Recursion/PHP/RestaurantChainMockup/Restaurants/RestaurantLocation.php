<?php
namespace Restaurants;

use \Users\Employee;

class RestaurantLocation {
  private $name;
  private $address;
  private $city;
  private $state;
  private $zipCode;
  private $employees; // This will be an array of Employee objects
  private $isOpen;
  private $hasDriveThru;

  public function __construct($name, $address, $city, $state, $zipCode, $isOpen, $hasDriveThru,$employees) {
      $this->name = $name;
      $this->address = $address;
      $this->city = $city;
      $this->state = $state;
      $this->zipCode = $zipCode;
      $this->isOpen = $isOpen;
      $this->hasDriveThru = $hasDriveThru;
      $this->employees = $employees;
  }


  public function getName() {
      return $this->name;
  }

  public function setName($name) {
      $this->name = $name;
  }

  public function getEmployees(){
    return $this->employees;
  }
  
  public function addEmployee(Employee $employee) {
      $this->employees[] = $employee;
  }

  public function isCurrentlyOpen() {
      return $this->isOpen;
  }

  public function setOpenStatus($isOpen) {
      $this->isOpen = $isOpen;
  }

  public function hasDriveThruOption() {
      return $this->hasDriveThru;
  }

  public function setDriveThruStatus($hasDriveThru) {
      $this->hasDriveThru = $hasDriveThru;
  }

  public function toHTML() : string {
    return sprintf("
            <div class='restaurant-location-info'>
              <span>Company: %s ,</span>
              <span>Address: %s ,</span>
              <span>Zipcpde: %s</span>
            </div>",
        $this->name,
        $this->address,
        $this->zipCode
    );
  }
}

?>