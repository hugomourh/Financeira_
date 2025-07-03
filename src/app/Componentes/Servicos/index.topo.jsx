'use client'; 
import "bootstrap/dist/css/bootstrap.min.css";
import  estilo from"./topo.module.css"
import { useEffect } from 'react';
import Link from "next/link";

export default function Topo(){
      useEffect(() => {
        if (typeof window !== "undefined") {
          import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
}, []);
    return(
        <>
        
    <div className={estilo.Titulo}>
        <h2>Digicrédito</h2>
      
        
    <div>
  {/* Botão normal (visível em telas médias pra cima) */}
  <button
    className="btn btn-primary d-none d-md-block"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    Informações
  </button>

  {/* Botão hambúrguer (visível só em telas pequenas) */}
  <button
    className="btn btn-primary d-block d-md-none"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
     ☰ 
  </button>

  {/* Offcanvas */}
  <div
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasRightLabel">Informações</h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div className="offcanvas-body">
      <Link href="/">Simulação</Link> <br />
      <Link href="/">Contato</Link> <br />
      <Link href="/">Dúvidas</Link> <br />
      <Link href="/">Empréstimo</Link> <br />
    </div>
  </div>
</div>



       
       
        




  </div>      
  
        </>
    )
}