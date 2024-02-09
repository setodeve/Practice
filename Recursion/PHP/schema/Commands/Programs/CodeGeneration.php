<?php

namespace Commands\Programs;

use Commands\AbstractCommand;

class CodeGeneration extends AbstractCommand
{
    protected static ?string $alias = 'code-gen';
    protected static bool $requiredCommandValue = true;

    public static function getArguments(): array
    {
        return [];
    }

    public function execute(): int
    {
        $codeGenType = $this->getCommandValue();
        $className = ucfirst($codeGenType);
        $fileName = "./Commands/Programs/" . $className . ".php";
        $open_output = <<<PHP
        <?php
    
        namespace Commands\Programs;
        
        use Commands\AbstractCommand;
        use Commands\Argument;
        
        class $className extends AbstractCommand
        {
            protected static ?string \$alias = '$codeGenType';
        
            public static function getArguments(): array
            {
                return [];
            }
        
            public function execute(): int
            {
                return 0;
            }
        }
        ?>
        PHP;

        file_put_contents($fileName, $open_output);
        $this->log('Generated in '.$fileName );
        return 0;
    }
}