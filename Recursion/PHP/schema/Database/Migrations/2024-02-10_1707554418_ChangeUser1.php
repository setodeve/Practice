<?php

namespace Database\Migrations;

use Database\SchemaMigration;

class ChangeUser1 implements SchemaMigration
{
    public function up(): array
    {
        return [
            "Alter TABLE users Add nickname VARCHAR(255)"
        ];
    }

    public function down(): array
    {
        return [
            "Alter TABLE users Drop Column nickname"
        ];
    }
}