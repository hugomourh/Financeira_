'use client'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect} from 'react';
import estilo from '@/app/Componentes/Simulacao/simulacao.module.css'



export default function Simulacao(){

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
          mensagemalerta.push("As parcelas não podem ser maiores que 36x.");
        } else if (ValorDasParcelas > SalarioPorcentagem) {
          mensagens.push("O valor da parcela não pode ultrapassar 30% do salário.");
        } else {
          mensagemAutori.push(`Empréstimo autorizado`);
        }
      } else {
        if (parcelasNum > 48) {
          mensagemalerta.push("As parcelas não podem ser maiores que 48x.");
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
          mensagemalerta.push("As parcelas não podem ser maiores que 48x.");
        } else if (ValorDasParcelas > SalarioPorcentagem) {
          mensagens.push("O valor da parcela não pode ultrapassar 30% do salário.");
        } else {
          mensagemAutori.push("Financiamento autorizado.");
          
        }
      } else {
        if (parcelasNum > 48) {
          mensagemalerta.push("As parcelas não podem ser maiores que 48x.");
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
          mensagemalerta.push("As parcelas não podem ser maiores que 360x.");
        } else if (ValorDasParcelas > SalarioPorcentagem) {
          mensagens.push("O valor da parcela não pode ultrapassar 30% do salário.");
        } else {
          mensagemAutori.push("Financiamento autorizado.");
          
        }
      } else {
        if (parcelasNum > 360) {
          mensagemalerta.push("As parcelas não podem ser maiores que 360x.");
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
    






      useEffect(() => {
            if (typeof window !== "undefined") {
              import("bootstrap/dist/js/bootstrap.bundle.min.js"); 
        }
    }, [])
    
    return(
        <>
    <div className={estilo.corpo}> 



   
 <div className={estilo.formulario}>    
 <form >
<div className={estilo.Mensagem}>
{Alerta && (
  <div className="alert alert-danger alert-dismissible fade show" role="alert">
    <p>{Alerta}</p>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
)}

</div>
<label>Salário:</label><br />
<input type="number"
value={salario}
onChange={(e) => setSalario(e.target.value)}
placeholder="Digite aqui"
className={`${estilo.inputs} focus-ring py-1 px-2 text-decoration-none border`}
required
/> <br />

<label>Quantidade de parcelas:</label><br />
<input type="number"
value={parcelas}
onChange={(e) => setParcelas(e.target.value)}
placeholder="Digite aqui"
className={`${estilo.inputs} focus-ring py-1 px-2 text-decoration-none border`}
required
 /> <br/>

<label>Valor do empréstimo:</label><br />
<input type="number"
value={valor}
onChange={(e) => setvalor(e.target.value)}
placeholder="Digite aqui"
className={`${estilo.inputs} focus-ring py-1 px-2 text-decoration-none border`}
required  
/> <br />


<label htmlFor="">Possui pedência em seu nome? (nome sujo)</label> <br />

<input
  type="radio"
  name="Pendencia"
  value="Sim"
  checked={pendencia === "Sim"}
  onChange={(e) => setPendecia(e.target.value)}
/>
<label>Sim</label><br />

<input
  type="radio"
  name="Pendencia"
  value="Nao"
  checked={pendencia === "Nao"}
  onChange={(e) => setPendecia(e.target.value)}
/>
      <label>Não</label><br />


<div className={estilo.radio}>
<label >Tipo de financiamento</label><br />

<input
        type="radio"
        name="TipoFinanciamento"
        checked={financiamento === "Emprestimos"}
        value="Emprestimos"
        onChange={(e) => setFinanciamento(e.target.value)}
         
/>        
<label>Empréstimo</label><br />
</div >
<div className={estilo.radio}>
<input
        type="radio"
        name="TipoFinanciamento"
        checked={financiamento === "Veiculo"}
        value="Veiculo"
        onChange={(e) => setFinanciamento(e.target.value)}
        
      />
      <label>Automóvel</label><br />
</div>
<div className={estilo.radio}>
<input
        type="radio"
        name="TipoFinanciamento"
        checked={financiamento === "Imovel"}
        value="Imovel"
        onChange={(e) => setFinanciamento(e.target.value)}
        
      />
      <label>Imobiliario</label><br />

</div>
<div className={estilo.botao}>
<button className={`btn btn btn-info`} onClick={Calculo}>Calcular</button>
</div>
 </form>
</div> 

{Resposta && (
  <div className={estilo.MensagemResposta}>
    <p>{Resposta}</p>
    
  </div>
)}

    </div>
    <div className={estilo.tabela}>
  {Autorizacao && (
 <>
<h3>Empréstimo Autorizado</h3>
  <table >
    <thead>
      <tr >
        <th className={estilo.coluna} >Informações</th>
        <th className={`${estilo.coluna} ${estilo.colunaBlack}`}>Valores</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className={`${estilo.coluna} ${estilo.colunaBlack}`}>Valor Empréstimo</td>
        <td className={estilo.coluna}>{valor}</td>
      </tr>
      <tr>
        <td className={estilo.coluna}>Taxa de Juros (MENSAL)</td>
        <td className={`${estilo.coluna} ${estilo.colunaBlack}`}>2%</td>
      </tr>
      <tr>
        <td className={`${estilo.coluna} ${estilo.colunaBlack}`}>Juros a Pagar</td>
        <td className={estilo.coluna}>{Number(JurosMensagem).toFixed(2)}</td>
      </tr>
      <tr>
        <td className={estilo.coluna}>Total a Pagar</td>
        <td className={`${estilo.coluna} ${estilo.colunaBlack}`}>{Number(ValorPagar).toFixed(2)}</td>
      </tr>
    </tbody>
  </table>
  </>
)}
    



</div> 
  
  

        
       
        
 

        </>
    )
}