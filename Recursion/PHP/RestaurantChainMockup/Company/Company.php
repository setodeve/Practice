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

  // descriptionプロパティのgetter
  public function getDescription() {
      return $this->description;
  }

  // websiteプロパティのgetter
  public function getWebsite() {
      return $this->website;
  }

  // phoneプロパティのgetter
  public function getPhone() {
      return $this->phone;
  }

  // industryプロパティのgetter
  public function getIndustry() {
      return $this->industry;
  }

  // ceoプロパティのgetter
  public function getCeo() {
      return $this->ceo;
  }

  // isPubliclyTradedプロパティのgetter
  public function getIsPubliclyTraded() {
      return $this->isPubliclyTraded;
  }

  // countryプロパティのgetter
  public function getCountry() {
      return $this->country;
  }

  // founderプロパティのgetter
  public function getFounder() {
      return $this->founder;
  }

  // totalEmployeesプロパティのgetter
  public function getTotalEmployees() {
      return $this->totalEmployees;
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