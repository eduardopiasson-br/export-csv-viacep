// função para buscar e setar os valores de cep na tabela
async function getCep(){
    var cep = document.getElementById("cep").value;
    const response = await fetch("https://viacep.com.br/ws/" + cep + "/json/")
    const data = await response.json();

    if(data.erro) {
        document.getElementsByClassName('error')[0].style.display = 'flex';
    } else {
        document.getElementById('table').style.display = 'table';
        document.getElementById('btn-table').style.display = 'block';
        document.getElementById('btn-table-clean').style.display = 'block';
        document.getElementsByClassName('div-select')[0].style.display = 'block';
        document.getElementsByClassName('error')[0].style.display = 'none';
        document.getElementById('table').getElementsByTagName('tbody')[0].insertRow().innerHTML = "<tr>"+
                "<td>"+ data.cep +"</td>"+
                "<td>"+ data.localidade +"</td>"+
                "<td>"+ data.uf +"</td>"+
                "<td>"+ data.logradouro +"</td>"+
                "<td>"+ data.bairro +"</td>"+
                "<td>"+ data.complemento +"</td>"+
                "<td>"+ data.ddd +"</td>"+
                "<td>"+ data.gia +"</td>"+
                "<td>"+ data.cep +"</td>"+
                "<td>"+ data.siafi +"</td>"+
                "</tr>";
        unset();
    }
    console.log(data, data.cep);
}

// funão para resetar o input value
function unset() {
    document.getElementById('cep').value = '';
    document.getElementsByClassName('error')[0].style.display = 'none';
    document.getElementById('button-search').style.display = 'none';
}

// função para limpar a tabela e resetar os resultados
function cleanTable() {
    document.getElementById('table').style.display = 'none';
    document.getElementById('table').getElementsByTagName('tbody')[0].innerHTML = '';
    document.getElementById('btn-table').style.display = 'none';
    document.getElementById('btn-table-clean').style.display = 'none';
    document.getElementsByClassName('div-select')[0].style.display = 'none';
}

// Função para transformar a tabela em dados CSV
function tableToCSV() {
 
    var csv_data = [];
    var rows = document.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].querySelectorAll('td,th');
        var csvrow = [];

        for (var j = 0; j < cols.length; j++) {
            csvrow.push(cols[j].innerHTML);
        }

        csv_data.push(csvrow.join(document.getElementById('option').value));
    }

    csv_data = csv_data.join('\n');
    downloadCSVFile(csv_data);

}

// Função para realizar o download dos dados convertidos
function downloadCSVFile(csv_data) {

    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    var temp_link = document.createElement('a');
    temp_link.download = "addresses.csv";

    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    temp_link.click();
    document.body.removeChild(temp_link);
}