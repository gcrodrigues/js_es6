class ListaNegociacoes{

    constructor(){

        this._negociacoes = [];
        // this._armadilha = armadilha; 
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
        // this._armadilha(this);
    }

    esvazia(){
        this._negociacoes = [];
        // this._armadilha(this);
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }

    get negociacoes(){
        //programação defensiva - blinda a lista de negociações
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total+= n.volume , 0.0);
    }
}