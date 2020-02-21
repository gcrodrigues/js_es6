class ListaNegociacoes{

    constructor(){

        this._negociacoes = []; 
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //programação defensiva - blinda a lista de negociações
        return [].concat(this._negociacoes);
    }
}