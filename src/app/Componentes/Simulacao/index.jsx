'use client'; 
import "bootstrap/dist/css/bootstrap.min.css";
import useSimulacao from './CalculoSi.js'
import { useEffect} from 'react';
import estilo from '@/app/Componentes/Simulacao/simulacao.module.css'



export default function Simulacao(){

 const {
    salario, setSalario,
    parcelas, setParcelas,
    valor, setvalor,
    pendencia, setPendecia,
    financiamento, setFinanciamento,
    Alerta, Resposta, JurosMensagem, ValorPagar, Autorizacao,
    Calculo
  } = useSimulacao()






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