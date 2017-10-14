import React from 'react';

import { Jumbotron } from 'react-bootstrap';

export default function About() {
  return (
    <Jumbotron>
      <h2>Sobre a ideia [direto ao ponto]</h2>
      <h3>Objetivo</h3>
      <p>Estabelezer um padrão JSON para troca de currículos.</p>
      <h3>Inspiração</h3>
      <p>
        Hoje temos NF-e e NFS-e que facilita o transito de informações de
        compras e vendas. Ter um padrão digital para currículo vai facilitar a
        candidatos o envio de seus dados a diversos destinos e recrutadores
        receber de diversos candidatos e importar para o sistema de forma
        automatizada.
      </p>
      <h3>Implementação</h3>
      <p>Definição do Modelo/Schema</p>
      <p>Visualizador/Interpretador</p>
      <p>https://github.com/marcelobohn/app-resume</p>

    </Jumbotron>
  );
}
