class ListaNegociacoes{

    constructor(){
        
        this._negociacoes = [];
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao)
    }

    get negociacoes(){

        return [].concat(this._negociacoes);
    }

    esvazia(){

        this._negociacoes = [];
    }
    
    get quantidadeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.quantidade, 0.0);
    }
    
    get valorTotal() {
        return this._negociacoes.reduce((total, n) => total + n.valor, 0.0);
    }
    
    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }
        
        
}