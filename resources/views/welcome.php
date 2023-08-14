<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Export CSV Viacep</title>

    <!-- Import Custom CSS -->
    <link rel="stylesheet" href="<?= url('/styles.css') ?>">
</head>

<body>
    <!-- Section Page -->
    <section>
        <div>
            <div>
                <h1>VIACEP - PESQUISA E EXPORTAÇÃO</h1><hr>
                <div class="main border">
                    <!-- "Form" -->
                    <label for="cep">Informe o CEP <i title="Apenas números, sem pontuação!"> i </i></label><br>
                    <input class="border" type="text" id="cep" placeholder="85887000" min="0" minlength="8" maxlength="8" autocomplete="off" oninput="javascript: 
                            this.value = this.value.replace(/\D/g, ''); 
                            if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength); 
                            if (this.value.length < this.maxLength) document.querySelector('#button-search').style.display = 'none';
                            if (this.value.length == this.maxLength) document.querySelector('#button-search').style.display = 'inline';" />
                    <div class="buttons">
                        <button class="btn-warning" onclick="unset()" title="Clique para limpar">LIMPAR</button>
                        <button class="d-none btn-primary" onclick="getCep()" title="Clique para fazer a busca" id="button-search">PESQUISAR</button>
                    </div>

                    <!-- Span Error -->
                    <span class="error d-none">CEP informado inválido ou inexistente!</span>

                    <!-- Table Data -->
                    <table id="table" class="d-none">
                        <thead>
                            <tr>
                                <th>CEP</th>
                                <th>Localidade</th>
                                <th>UF</th>
                                <th>Logradouro</th>
                                <th>Bairro</th>
                                <th>Complemento</th>
                                <th>DDD</th>
                                <th>GIA</th>
                                <th>IBGE</th>
                                <th>SIAFI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- insert new data -->
                        </tbody>
                    </table>

                    <!-- Options Table -->
                    <div>
                        <div class="div-select d-none">
                            <label for="option">Separador CSV</label>
                            <select name="option" id="option">
                                <option value="," selected>virgula</option>
                                <option value=";">ponto e virgula</option>
                            </select>
                        </div>
                        <button class="btn-success d-none" type="button" id="btn-table" onclick="tableToCSV()">Download CSV</button>
                        <button class="btn-warning d-none" type="button" id="btn-table-clean" onclick="cleanTable()">Limpar Tabela</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Import Custom Script -->
    <script src="<?= url('/scripts.js') ?>"></script>
</body>

</html>