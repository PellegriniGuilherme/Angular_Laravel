<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateIndicacaoRequest;
use App\Http\Requests\DeleteIndicacaoRequest;
use App\Http\Requests\GetIndicacaoRequest;
use App\Http\Requests\UpdateIndicacaoRequest;
use App\Models\Indicacao;
use App\Traits\ApiResponser;

class IndicacaoController extends Controller
{
    
    use ApiResponser;

    public function getIndicacoes()
    {
        $indicacoes = Indicacao::all();
        return $this->success($indicacoes);
    }

    public function getIndicacao(GetIndicacaoRequest $request)
    {
        $indicacoes = Indicacao::find($request->indicacao_id);
        return $this->success($indicacoes);
    }

    public function createIndicacao(CreateIndicacaoRequest $request)
    {
        $indicacao = Indicacao::create([
            "nome" => $request->nome,
            "cpf" => $request->cpf,
            "telefone" => $request->telefone,
            "email" => $request->email,
            "status_id" => 1
        ]);

        return $this->success(
            $indicacao, 
            'Indicação cadastrada com sucesso'
        );
 
    }

    public function deleteIndicacao(DeleteIndicacaoRequest $request)
    {
        $indicacao = Indicacao::find($request->indicacao_id);
        $indicacao->delete();

        return $this->success(
            null, 
            'Indicação deletada com sucesso'
        );
    }

    public function updateIndicacao(UpdateIndicacaoRequest $request)
    {
        $indicacao = Indicacao::find($request->indicacao_id);
        if($indicacao->status_id > $request->status_id){
            return $this->error('Não é permitido inserir um status anterior', 400);
        }
        $indicacao->status_id = $request->status_id;
        $indicacao->save();

        return $this->success(
            $indicacao, 
            'Indicação atualizada com sucesso'
        );
    }

}
