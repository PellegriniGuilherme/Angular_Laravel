<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Indicacao extends Model
{
    use HasFactory;

    protected $table = 'indicacoes';

    protected $fillable = [
        'id',
        'nome',
        'cpf',
        'telefone',
        'email',
        'status_id'
    ];

    protected $hidden = ['created_at', 'updated_at'];

    public function status()
    {
        return $this->hasOne(Status::class, 'id', 'status_id');
    }
}
