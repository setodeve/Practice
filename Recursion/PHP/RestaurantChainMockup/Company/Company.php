<?php

namespace Company;

use File\FileConvertible;

class Company implements FileConvertible {
  private $name;
  private $foundingYear;
  private $description;
  private $website;
  private $phone;
  private $industry;
  private $ceo;
  private $isPubliclyTraded;
  private $country;
  private $founder;
  private $totalEmployees;

  public function __construct($name, $foundingYear, $description, $website, $phone, $industry, $ceo, $isPubliclyTraded, $country, $founder, $totalEmployees) {
      $this->name = $name;
      $this->foundingYear = $foundingYear;
      $this->description = $description;
      $this->website = $website;
      $this->phone = $phone;
      $this->industry = $industry;
      $this->ceo = $ceo;
      $this->isPubliclyTraded = $isPubliclyTraded;
      $this->country = $country;
      $this->founder = $founder;
      $this->totalEmployees = $totalEmployees;
  }

  public function getName() {
    return $this->name;
  }

  public function getN() {
    return $this->name;
  }

  public function setName($name) {
      $this->name = $name;
  }

  public function getFoundingYear() {
      return $this->foundingYear;
  }

  public function setFoundingYear($foundingYear) {
      $this->foundingYear = $foundingYear;
  }

  public function toString(): string {
    return "";
  }

  public function toHTML(): string {
    return "";
  }

  public function toMarkdown(): string{
    return "";
  }

  public function toArray(): array{
    return [];
  }

}


?>