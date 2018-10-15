# Arquivei pré-conta

Esse projeto foi criado usando [Create React App](https://github.com/facebook/create-react-app).

Para executar, copie os arquivos desse repositório para um diretório local, acesse via terminal com Node instalado, e no diretório arquivei_pre_conta execute os seguintes comandos:

```
npm install
```

Para instalar os requisitos necessários e

```
npm start
```

Para iniciar a aplicação

Será aberta uma guia de internet na página localhost:3000, com a aplicação já rodando

## Funcionamento e processo de desenvolvimento

De acordo com as exigências desse projeto, foram utilizadas as imagens encontradas em [https://zpl.io/scene/aw1MQL7](https://zpl.io/scene/aw1MQL7) para entender o fluxograma do projeto e visualizar as interfaces que deveriam ser implementadas.

Como não encontrei uma forma de inspecionar os elementos de design por esse link (como deveria permitir a ferramenta Zeplin), utilizei as páginas [https://launchpad.animaapp.com/preview/AH3GqYC/pg1](https://launchpad.animaapp.com/preview/AH3GqYC/pg1), [https://launchpad.animaapp.com/preview/HS8YgEf/pg2](https://launchpad.animaapp.com/preview/HS8YgEf/pg2) e [https://launchpad.animaapp.com/preview/fWXquC3/pg3](https://launchpad.animaapp.com/preview/fWXquC3/pg3), que também foram enviadas como material para o projeto, para copiar os estilos que utilizaria na minha versão do projeto (devido a isso e à forma como essas páginas foram estruturadas, os elementos foram todos posicionados na página de forma absoluta, considerando certo posicionamento, e também alguns elementos foram utilizados de forma não convencional, como a tabela de conteúdos, que não foi implementada como `<table>`, como normalmente é).

Dessa forma, o design foi seguido o mais próximo possível a essas páginas que me foram enviadas como material.

Assim que os componentes são carregados na tela, um dos componentes da tabela de informações aciona uma rotina que carrega os dados encontrados no arquivo `initial-state.json` para a tabela em questão, de forma simulada.

Caso o usuário acione o botão `Ver Nota`, a página é redirecionada para um link externo (como também não consegui localizar qual o link que deveria ser utilizado, utilizei um *placeholder* de link que abre uma página com um pdf simples).

Caso acione o botão `Experimentar o Arquivei`, o *modal* com mais informações sobre o site aparece, e se o botão de confirmação for acionado, o outro modal com a tela de carregamento deve aparecer.

Como trata-se de um projeto em que a comunicação com o *back-end* ocorre de maneira simulada, decidi por adicionar um *delay* a essa tela, para que a transição não fosse feita de maneira instantânea.

Após a conclusão do carregamento, o site é redirecionado para a tela da própria arquivei com o token criado para o usuário (o token é imaginário, pode-se entender melhor analisando o código-fonte do projeto, principalmente o arquivo `index.js`).

A alteração para ver resultado positivo ou negativo dessa última api simulada é feita por meio de substituição de linhas no código, de forma a buscar o arquivo exemplo `migration-success.json` e `migration-failure.json`.

## Testes Unitários

Gostaria de deixar claro que os testes unitários não foram implementados para esse projeto por falta de tempo, visto que a finalização do código e do funcionamento primário foi bem próxima ao prazo de entrega da atividade.

## Ferramentas

Apenas para exemplificações em comentários do código-fonte, foi instalado `JQuery` no projeto. Portanto, pode-se encontrar no código-fonte exemplos de como seriam as chamadas para APIs reais, utilizando essa ferramenta.

Foi utilizado também o *framework* `W3CSS` para fins de estilização, em particular para estilizar botões de forma mais simples, visto que esse *framework* possui um design pré-definido para esses elementos.