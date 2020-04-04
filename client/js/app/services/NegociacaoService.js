class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter negociações da semana');
                });

        });                       
    }

    obterNegociacoesDaSemanaAnterior(){
        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter negociações da semana anterior');
                });

        });
    }

    obterNegociacoesDaSemanaRetrasada(){
        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter negociações da semana retrasada');
                });

        });
    }

    obterNegociacoes() {
        return Promise.all([
            this.obterNegociacoesDaSemana(),       
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada(),
        ]).then(periodos =>{
            let negociacoes = periodos
              .reduce((dados, periodos) => dados.concat(periodos), [])
             return negociacoes;
        })
          .catch(erro => {throw new Error(erro)});
        
    }
    
}