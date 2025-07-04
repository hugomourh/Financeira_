
import { useState } from 'react'


export default function UseSimulacao(){

    const [salario, setSalario] = useState ('')
    const [parcelas, setParcelas] = useState ('')
    const [valor, setvalor] = useState ('')
    const [pendencia, setPendecia] = useState ('')
    const [financiamento, setFinanciamento] = useState('');
    const [Alerta, setAlerta] = useState ('')
    const [Resposta, setResposta] = useState ('')
    const [JurosMensagem, setJurosMensagem] = useState ('')
    const [ValorPagar, setValorPagar] = useState ('')
    const [TaxaJuros, setTaxaJuros] = useState ('')
    const [Autorizacao, setAutorizacao] = useState ('')

    const Calculo = (event) => {
      event.preventDefault();

  const salarioNum = parseFloat(salario);
    const parcelasNum = parseInt(parcelas);
    const valorNum = parseFloat(valor);


    
    const SalarioPorcentagem =  salario * 0.30
    const SalarioPendenciaPorcentagem = salario * 0.05

const Juros = 2 / 100 // 2% por mês

 let ValorDasParcelas = ( valor / parcelas) * (1 + Juros);
 


let ValorTotal = ValorDasParcelas * parcelas;
let ValorJuros = ValorTotal - valor




setValorPagar(ValorTotal)
setJurosMensagem (ValorJuros)
setTaxaJuros(Juros)



   let mensagens = [];
   let mensagemalerta = [];
   let mensagemAutori = [];


   if (!salario || !parcelas || !valor ) {
  alert("Preencha todos os campos corretamente.");
  return;
}

    
    // Empréstimos
    
    if (financiamento === "Emprestimos") {
      if (pendencia === "Nao") {
        if (parcelasNum > 36) {
          mensagemalerta.push("As parcelas de Empréstimo não podem ser maiores que 36x.");
        } else if (ValorDasParcelas > SalarioPorcentagem) {
          mensagens.push("O valor da parcela não pode ultrapassar 30% do salário.");
        } else {
          mensagemAutori.push(`Empréstimo autorizado`);
        }
      } else {
        if (parcelasNum > 36) {
          mensagemalerta.push("As parcelas Empréstimo não podem ser maiores que 48x.");
        } else if (ValorDasParcelas > SalarioPendenciaPorcentagem) {
          mensagens.push("Nome sujo e ainda querendo empréstimo? Está querendo enganar quem?"); <br />
          mensagens.push("O valor das parcelas não pode ultrapassar 5% do salário."); 
        } else {
          mensagemAutori.push("Empréstimo autorizado.");
          
        }
      }
    }

   
    // Veículo
   
    if (financiamento === "Veiculo") {
      if (pendencia === "Nao") {
        if (parcelasNum > 48) {
          mensagemalerta.push("As parcelas para financiamento veicular não podem ser maiores que 48x.");
        } else if (ValorDasParcelas > SalarioPorcentagem) {
          mensagens.push("O valor da parcela não pode ultrapassar 30% do salário.");
        } else {
          mensagemAutori.push("Financiamento autorizado.");
          
        }
      } else {
        if (parcelasNum > 48) {
          mensagemalerta.push("As parcelas para financiamento veicular não podem ser maiores que 48x.");
        } else if (ValorDasParcelas > SalarioPendenciaPorcentagem) {
          mensagens.push("Nome sujo e ainda querendo empréstimo? Está querendo enganar quem?");
          mensagens.push("O valor das parcelas não pode ultrapassar 5% do salário.");
        } else {
          mensagemAutori.push("Financiamento autorizado.");
          
        }
      }
    }

    
    // Imóvel
    
    if (financiamento === "Imovel") {
      if (pendencia === "Nao") {
        if (parcelasNum > 360) {
          mensagemalerta.push("As parcelas para financiamento imobiliario não podem ser maiores que 360x.");
        } else if (ValorDasParcelas > SalarioPorcentagem) {
          mensagens.push("O valor da parcela não pode ultrapassar 30% do salário.");
        } else {
          mensagemAutori.push("Financiamento autorizado.");
          
        }
      } else {
        if (parcelasNum > 360) {
          mensagemalerta.push("As parcelas para financiamento imobiliario não podem ser maiores que 360x.");
        } else if (ValorDasParcelas > SalarioPendenciaPorcentagem) {
          mensagens.push("Nome sujo e ainda querendo empréstimo? Está querendo enganar quem?"); <br />
          mensagens.push("O valor das parcelas não pode ultrapassar 5% do salário.");
        } else {
          mensagemAutori.push("Financiamento autorizado.");
        
        }
      }
    }

    setAlerta (mensagemalerta.join (' '))
    setResposta(mensagens.join(' '));
    setAutorizacao (mensagemAutori.join(' '))
  };
    

return {
    salario, setSalario,
    parcelas, setParcelas,
    valor, setvalor,
    pendencia, setPendecia,
    financiamento, setFinanciamento,
    Alerta, Resposta, JurosMensagem, ValorPagar, TaxaJuros, Autorizacao,
    Calculo
  }
}