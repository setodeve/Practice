<?php

namespace Users;
use \Users\User;

class Employee extends User {
  private string $jobTitle;
  private float $salary;
  private string $startDate;
  private string $awards;

  public function __construct(
    int $id, string $firstName, string $lastName, string $email, 
    string $password, string $phoneNumber, string $address, 
    \DateTime $birthDate, \DateTime $membershipExpirationDate, string $role,
    string $jobTitle, float $salary, string $startDate, string $awards 
  ) {
    parent::__construct(
      $id,
      $firstName,
      $lastName,
      $email,
      $password,
      $phoneNumber,
      $address,
      $birthDate,
      $membershipExpirationDate,
      $role
    );
    $this->jobTitle = $jobTitle;
    $this->salary = $salary;
    $this->startDate = $startDate;
    $this->awards = $awards;
  }

  public function toHTML() : string {
    return sprintf("
        <details class='user-card'>
            <summary>%s %s</summary>
            <div class='user-info'>
              <li>%s</li>
              <li>%s</li>
              <li>%s</li>
              <li>Birth Date: %s</li>
              <li>Membership Expiration Date: %s</li>
              <li>Role: %s</li>
              <li>JobTitle: %s</li>
              <li>Salary: %s</li>
              <li>StartDate: %s</li>
            </div>
        </details>",
        $this->getfirstName(),
        $this->getLastName(),
        $this->getEmail(),
        $this->getPhoneNumber(),
        $this->getAddress(),
        $this->getBirthDate()->format('Y-m-d'),
        $this->getMembershipExpirationDate()->format('Y-m-d'),
        $this->getRole(),
        $this->jobTitle,
        $this->salary,
        $this->startDate
    );
  }
}
?>