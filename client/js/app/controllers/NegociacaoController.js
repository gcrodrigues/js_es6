class NegociacaoController{
  
    constructor(){ 

        let $ = document.querySelector.bind(document); //.bind() mantem associação do querySelector com o document

        this._form = $('.form');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia' , 'ordena', 'inverteOrdem'
        );
        
        this._mensagem =new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        );
        
        this._ordemAtual = '';
    }

    importaNegociacoes() {
        let service = new NegociacaoService();
        
        
        service.obterNegociacoes()
            .then(negociacoes =>{
                negociacoes
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = "Negociações importadas com sucesso."
            })
            .catch(erro => this._mensagem.texto = erro);
    }

    ordena(coluna) {
        
        if(this._ordemAtual == coluna){
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
            
        }
        this._ordemAtual = coluna;
    }

    adiciona(event){    

       event.preventDefault();
       this._listaNegociacoes.adiciona(this._criaNegociacao());

       this._mensagem.texto ='Negociação adicionada com sucesso!';
       
       this._resetCampos();       
    }

    apaga(){
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = 'Negociações apagadas com sucesso!';
    }
 
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _resetCampos(){

        this._form.reset();
        this._inputData.focus();
    }
}