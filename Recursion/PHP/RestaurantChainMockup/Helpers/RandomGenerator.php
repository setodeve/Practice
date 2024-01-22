<?php

namespace Helpers;

use Faker\Factory;
use Users\Employee;
use Restaurants\RestaurantLocation;
use Restaurants\RestaurantChain;

class RandomGenerator {
    public static function employee(): Employee {
        $faker = Factory::create();
        $minsalary = $_POST["minSalary"] ?? 100;
        $maxsalary = $_POST["maxSalary"]?? 10000;

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
            rand($minsalary,$maxsalary),
            $faker->date(),
            $faker->word()
        );
    }

    public static function generateRestauntLocation($employees):RestaurantLocation{
        $faker = Factory::create();
        $mincode = $_POST["minZipcode"] ?? "11111";
        $maxcode = $_POST["maxZipcode"] ?? "99999";
        return new RestaurantLocation(
            $faker->company(),
            $faker->address(),
            $faker->city(),
            $faker->state(),
            rand((int)$mincode ,(int)$maxcode),
            "Yes",
            $faker->randomElements(["Yes","No"])[0],
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

    public static function generateEmployees(): array {
        $employees = [];
        $number = $_POST["count"] ?? 5;

        for ($i = 0; $i < $number; $i++) {
            array_push($employees,self::employee());
        }

        return $employees;
    }

    public static function generateData(): array{
        $restauchain = [];
        $locationcount = $_POST["locationCount"] ?? 5;
        for ($i = 0; $i < rand(1,5); $i++){
            $restaurantlocation = [];
            for ($j = 0; $j < $locationcount; $j++){
                array_push($restaurantlocation,self::generateRestauntLocation(self::generateEmployees()));
            }
            array_push($restauchain, self::generateRestaurantChain($restaurantlocation));
        }
        return $restauchain;
    }

    public static function generateMD($restauchain){
        $num = rand(100,999);
        $filename = "test-{$num}.md";
        foreach ($restauchain as $rc){
            file_put_contents($filename,$rc->toMarkdown(), FILE_APPEND);
            foreach ($rc->getRestaurantLocations() as $rl){
                file_put_contents($filename,$rl->toMarkdown(), FILE_APPEND);
                foreach ($rl->getEmployees() as $em){
                    file_put_contents($filename,$em->toMarkdown(), FILE_APPEND);
                }
            }
        }
        header('Content-Type: plain/txt');
        header("Content-Disposition:attachment;filename = {$filename}");
        header('Content-Length: '.filesize($filename));
        echo file_get_contents($filename);
    }

    public static function generateJson($restauchain){
        $num = rand(100,999);
        $filename = "test-{$num}.json";
        $data = [];
        foreach ($restauchain as $rc){
            $chain = [];
            foreach ($rc->getRestaurantLocations() as $rl){
                $local = [];
                $employee = [];
                foreach ($rl->getEmployees() as $em){
                    array_push($employee,$em->toArray());
                }
                $local = array(
                    "local" => array(
                        "local-info" => $rl->toArray(),
                        "employee" => $employee
                    )
                );
                array_push($chain, $local);
            }
            array_push($data,$chain);
        }
        file_put_contents($filename,json_encode($data,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT), FILE_APPEND);
        header('Content-Type: plain/txt');
        header("Content-Disposition:attachment;filename = {$filename}");
        header('Content-Length: '.filesize($filename));
        echo file_get_contents($filename);
    }

    public static function generateTxt($restauchain){
        $num = rand(100,999);
        $filename = "test-{$num}.txt";
        foreach ($restauchain as $rc){
            file_put_contents($filename,$rc->toString(), FILE_APPEND);
            foreach ($rc->getRestaurantLocations() as $rl){
                file_put_contents($filename,$rl->toString(), FILE_APPEND);
                foreach ($rl->getEmployees() as $em){
                    file_put_contents($filename,$em->toString(), FILE_APPEND);
                }
            }
            file_put_contents($filename,"-----------------------------------------------------------------\n", FILE_APPEND);
        }
        header('Content-Type: plain/txt');
        header("Content-Disposition:attachment;filename = {$filename}");
        header('Content-Length: '.filesize($filename));
        echo file_get_contents($filename);
    }

    
}
?>