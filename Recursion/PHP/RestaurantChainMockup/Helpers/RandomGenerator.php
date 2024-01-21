<?php

namespace Helpers;

use Faker\Factory;
use Users\Employee;
use Restaurants\RestaurantLocation;
use Restaurants\RestaurantChain;

class RandomGenerator {
    public static function employee(): Employee {
        $faker = Factory::create();

        return new Employee(
            $faker->randomNumber(),
            $faker->firstName(),
            $faker->lastName(),
            $faker->email,
            $faker->password,
            $faker->phoneNumber,
            $faker->address,
            $faker->dateTimeThisCentury(),
            $faker->dateTimeBetween(),
            $faker->randomElement(['admin', 'user', 'editor']),
            $faker->jobTitle(),
            1000.0,
            $faker->date(),
            $faker->word()
        );
    }

    public static function generateRestauntLocation($employees):RestaurantLocation{
        $faker = Factory::create();
        return new RestaurantLocation(
            $faker->company(),
            $faker->address(),
            $faker->city(),
            $faker->state(),
            $faker->postcode(),
            "Yes",
            $faker->randomElements(["Yes","No"]),
            $employees
        );
    }

    public static function generateRestaurantChain($restaurantLocations){
        $faker = Factory::create();
        return new RestaurantChain(
            $faker->randomNumber(),
            $faker->word(),
            $faker->company(),
            $faker->company(),
            $faker->year(),
            $faker->text(),
            $faker->url,
            $faker->phoneNumber(),
            $faker->word(),
            $faker->name(),
            $faker->boolean(),
            $faker->country(),
            $faker->name(),
            $faker->numberBetween(50, 10000),
            $restaurantLocations
        );
    }

    public static function employees(int $min, int $max): array {
        $faker = Factory::create();
        $employees = [];
        $numOfUsers = $faker->numberBetween($min, $max);

        for ($i = 0; $i < $numOfUsers; $i++) {
            $employees[] = self::employee();
        }

        return $employees;
    }
}
?>