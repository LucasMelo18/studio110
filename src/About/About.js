import React from 'react';

import './About.css';


function About() {
  return (
    <div className="about">
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lbSBTEr2Sm4" title="video empresa"></iframe>
      </div>
      <div>
        <p>
          Somos uma empresa focada no setor de detalhamento automotivo, especializada em Lavagem Ecológica, Higienização Interna, Tratamento de Pintura e seus processos de revitalização, como a Cristalização ou Vitrificação.
        </p>
        <p>
          Confiança que permite estabelecer novos desafios em busca de melhor qualidade na prestação de serviços e em um excelente relacionamento aos nossos clientes.
        </p>
        <p>
          Nos preocupamos muito com o bem estar do seu carro. Nossa equipe de profissionais qualificada trabalha somente com os melhores equipamentos proporcionando os melhores resultados.
        </p>
      </div>
    </div>
  );
}

export default About;
