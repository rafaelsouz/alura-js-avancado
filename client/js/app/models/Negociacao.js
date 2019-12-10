class Negociacao {
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime()); //programação defesiva para evitar alteração da data de um objeto.
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this) //Impede que as propriedades (qtd e valor) sejam alteradas
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime()); //programação defesiva para evitar alteração da data de um objeto.
    }

    get quantidade(){
        return this._quantidade
    }

    get valor(){
        return this._valor
    }
}