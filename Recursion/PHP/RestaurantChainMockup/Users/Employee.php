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

  public function toString(): string {
    return sprintf(
        "・Employee ID: %d\nName: %s %s\nEmail: %s\nPhone Number: %s\nAddress: %s\nBirth Date: %s\nMembership Expiration Date: %s\nRole: %s\nJobTitle: %s\nSalary: %s\nStartDate: %s\n\n",
        $this->getId(),
        $this->getFirstName(),
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
        $this->getFirstName(),
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

  public function toMarkdown() : string {
    return 
"

  #### Employee_Name: {$this->getFirstName()} {$this->getlastName()}

  - Email: {$this->getEmail()}
  - Phone Number: {$this->getPhoneNumber()}
  - Address: {$this->getAddress()}
  - Birth Date: {$this->getBirthDate()->format('Y-m-d')}
  - Is Active: {$this->getMembershipExpirationDate()->format('Y-m-d')}
  - Role: {$this->getRole()}
  - JobTitle: {$this->jobTitle}
  - Salary: {$this->salary}
  - StartDate: {$this->startDate}


";
  }

  public function toArray() : array {
    return [
        'id' => $this->getId(),
        'firstName' => $this->getFirstName(),
        'lastName' => $this->getlastName(),
        'email' => $this->getEmail(),
        'password' => $this->getHashedPassword(),
        'phoneNumber' => $this->getPhoneNumber(),
        'address' => $this->getAddress(),
        'birthDate' => $this->getBirthDate()->format('Y-m-d'),
        'isActive' => $this->getMembershipExpirationDate()->format('Y-m-d'),
        'role' => $this->getRole(),
        'jobTitle' => $this->jobTitle,
        'Salary' => $this->salary,
        'StartDate' => $this->startDate
      ];
  }
}
?>