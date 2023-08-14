## PROJECT

O projeto é um pequeno sistema de pesquisa de CEP, onde os endereços vão sendo armazenados na tabela
que pode ser baixada a qualquer momento. Além disso é possível escolher o separador, caso o utilizador queira
baixar um conjunto pra consumo via planilha ou importação em sistemas adversos.


## PROJECT RUN

O projeto segue a arquitetura MVC padrão do Laravel, exceto pelo Blade que foi removido da View para garantir 
o uso apenas de html, js, css e php.
Ao clonar o projeto:
 - Composer update;
 - npm install;
 - npm run dev;
 - php artisan migrate.


## TECHNOLOGIES

- Laravel;
- HTML;
- CSS;
- JS Native;
- PHP Native.


## PROCESS

O utilizador informa o CEP no imput disponível, apenas números (mesmo que tente o javascript bloqueia outras
informações como letras e caracteres). 

Ao pesquisar, a função Fetch() do javascript nativo é acionada para uma busca ajax ao repositório VIACEP, que pode ou não retornar dados.
Se sim, os valores são inseridos em uma nova linha da tabela. Se não, uma mensagem de erro é exibida na tela para o utilizador. 

Ao fim das consultas é possível selecionar o separador do conjunto de dados formado e realizar o download do arquivo CSV.
Caso o utilizador queira iniciar uma nova base de consulta, basta limpar a tabela e iniciar a pesquisa novamente.

## OBS
Não foi utilizada nenhuma extensão ou biblioteca de qualquer linguagem ou mesmo do framework Laravel.