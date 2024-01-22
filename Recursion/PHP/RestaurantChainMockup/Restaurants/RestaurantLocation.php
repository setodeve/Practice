<?php
namespace Restaurants;

use \Users\Employee;
use File\FileConvertible;
class RestaurantLocation implements FileConvertible {
  private $name;
  private $address;
  private $city;
  private $state;
  private $zipCode;
  private $employees;
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

  public function toString(): string {
    return sprintf(
        "●Location Name: %s\nAddress: %s\nCity: %s\nState: %s\nZipCode: %s\nDrivenThru: %s\n\n",
        $this->name,
        $this->address,
        $this->city,
        $this->state,
        $this->zipCode,
        $this->hasDriveThru
    );
  }

  public function toMarkdown() : string {
    return 
"
### Location_Name: {$this->name}
- address: {$this->address}
- city: {$this->city}
- state: {$this->state}
- zipCode: {$this->zipCode}
- hasDriveThru: {$this->hasDriveThru}
";
  }

  public function toArray() : array {
    return [
        'name' => $this->name,
        'address' => $this->address,
        'city' => $this->city,
        'state' => $this->state,
        'zipCode' => $this->zipCode,
        'hasDriveThru' => $this->hasDriveThru
      ];
  }
}

?>