import React from 'react';
import { Icon } from 'react-fa';

export default function About() {
  return (
    <div>
      <h3><Icon name="chevron-right"/> Objetivo</h3>
      <p>Estabelezer um padrão JSON para troca de currículos.</p>
      <h3><Icon name="chevron-right"/> Inspiração</h3>
      <p>
        Hoje temos NF-e e NFS-e que facilita o transito de informações de
        compras e vendas.</p> 
      <p>Ter um padrão digital para currículo vai facilitar a
        candidatos o envio de seus dados a diversos destinos e recrutadores
        receber de diversos candidatos e importar para o sistema de forma
        automatizada.
      </p>
      <h3><Icon name="chevron-right"/> Implementação</h3>
      <p>Este site contém:</p>
      <ul>
      <li><b>Visualizador/Interpretador</b> que permite receber um arquivo JSON e exibir dentro de um formato para leitura.</li>
      <li><b>Modelo/Schema</b> contém a regra da estrutura do arquivo a ser criado, é usado para verificar se o JSON do currículo é válido</li>
      <li><b>Exemplo</b> arquivo JSON de exemplo</li>      
      <li>URL para baixar os fontes: https://github.com/marcelobohn/app-resume</li>
      </ul>
    </div>
  );
}
