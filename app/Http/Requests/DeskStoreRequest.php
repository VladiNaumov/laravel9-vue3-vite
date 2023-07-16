<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @property mixed $desks
 */
class DeskStoreRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|max:255|unique:desks,name,' //.$this->desks->id
        ];
    }
    public function messages()
    {
       return [
          'name.unique' =>'name must be unique (имя должно быть уникальным)'
       ];
    }
}
