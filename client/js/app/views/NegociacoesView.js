class NegociacoesView  extends View{

    constructor(elemento){

        super(elemento);
    }

    template(model){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th onclick="negociacaoController.ordena('data')">DATA</th>
                        <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                        <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                        <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map( (negociacao) => {
                        return `
                            <tr>
                                <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan='1'><b>Total</b></td>
                    <td>${model.negociacoes.reduce( (total, negociacao) => { 
                            return total + negociacao.quantidade
                        }, 0.0 )
                    }</td>
                    <td>${model.negociacoes.reduce( (total, negociacao) => { 
                            return total + negociacao.valor
                        }, 0.0 )
                    }</td>
                    <td>${model.negociacoes.reduce( (total, negociacao) => { 
                            return total + negociacao.volume
                        }, 0.0 )
                    }</td>
                </tfoot>
            </table>
        `;
    }
}