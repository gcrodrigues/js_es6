class NegociacaoController{
  
    constructor(){ 
        let $ = document.querySelector.bind(document); //.bind() mantem associação do querySelector com o document

        this._form = $('.form');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){    
        event.preventDefault();

        //let data = new Date(this._inputData.value.replace(/-/g, ','));  RegEx
        let data = new Date(
            ...this._inputData.value //spread operator - cada item do constructor sera passado como um parametro
                .split('-')
                .map((item, indice) => item - indice % 2) //arrow function
        ); 

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    
        console.log(negociacao);
        this.resetCampos();
    }

    resetCampos(){
        this._form.reset();
        this._inputData.focus();
    }
}