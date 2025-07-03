import Image from "next/image"
import FotoEmprestimo from "@/app/Componentes/Fotos/Emprestimo.webp"
import FotoCasa from "@/app/Componentes/Fotos/casapng.jpeg"
import FotoCarro from "@/app/Componentes/Fotos/carronpg.png"        
import estilo from "@/app/Componentes/Servicos/Servico.module.css"   


export default function CorpoServico(){
    return(
        <>

        <hr />
        <div className={estilo.PriBloco}>
        <div>
            <h3>Empréstimo Pessoal</h3>
            <p>Aqui na Digicrédito você pode financiar seu emprestimo pessoasl em até 36x</p>
            </div>
            <Image className={estilo.imagem} src={FotoEmprestimo}  alt="Foto empréstimo"/>
        </div>
        
        <div className={estilo.PriBloco}>
            <div>
            <h3>Financiamento Veicular</h3>
            <p>Aqui na Digicrédito você pode financiar seu veiculo em até 48x</p>
            </div>
            <Image className={estilo.imagem} src={FotoCarro} alt="Foto carro" />
        </div>
        
        <div className={estilo.PriBloco}>
            <div>
            <h3>Financiamento Imobiliario </h3>
            <p>Aqui na Digicrédito você pode financiar seu imóvel em até 360x</p>
            </div>
            <Image  className={estilo.imagem} src={FotoCasa} alt="Foto casa"/>
        </div>
        
        
        
        
        </>
    )
}