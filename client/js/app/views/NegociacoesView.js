class NegociacoesView extends View {

    template(model) {

        return`
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th onclick="negociacaoController.ordena('data')" >DATA</th>
                        <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                        <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                        <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map(negociacao => ` 
                        <tr>
                            <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>    
                        </tr>
                    `).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.volumeTotal}
                    </td>
                </tfoot>
            </table>    
        `;
    }
}