<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateIndicacaoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nome' => ['required', 'string'],
            'cpf' => ['required', 'size:11', 'unique:indicacoes', 'cpf'],
            'telefone' => ['required', 'max:11', 'min:10'],
            'email' => ['required', 'email', 'unique:indicacoes'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'nome.required' => 'O campo nome é um campo obrigatório',
            'nome.string' => 'O campo nome é um campo do tipo texto',
            'cpf.required' => 'O cpf é um campo obrigatório',
            'cpf.size' => 'O campo cpf não é um CPF válido',
            'cpf.unique' => 'CPF já cadastrado',
            'telefone.required' => 'O campo telefone é um campo obrigatório',
            'telefone.max' => 'O campo telefone não pode conter mais que 11 dígitos',
            'telefone.min' => 'O campo telefone não pode conter menos que 10 dígitos',
            'email.required' => 'O campo email é um campo obrigatório',
            'email.email' => 'O campo email não é email válido',
            'email.unique' => 'Email já cadastrado'
        ];
    }
}
