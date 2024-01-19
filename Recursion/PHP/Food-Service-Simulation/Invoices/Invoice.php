<?php

namespace Invoices;

class Invoice {
  protected string $orderTime;
  protected float $finalPrice;
  protected int $estimatedMinitues;

  public function __construct(string $orderTime,int $finalPrice , int $estimatedMinitues) {
      $this->orderTime = $orderTime;
      $this->finalPrice = $finalPrice;
      $this->estimatedMinitues = $estimatedMinitues;
  }

  public function printInvoice(){
    echo "----------------------------\n";
    echo "Date : $ {$this->orderTime}\n";
    echo "Final Price : $ {$this->finalPrice}\n";
    echo "----------------------------\n";
  }
}