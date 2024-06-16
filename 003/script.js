document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    const filePreview = document.getElementById('filePreview');
    const submitBtn = document.getElementById('submitBtn');
    
    const statusMessage = document.getElementById('statusMessage');

    let selectedFile;

    fileInput.addEventListener('change', (e) => {
        selectedFile = e.target.files[0];
        fileName.textContent = `Arquivo selecionado: ${selectedFile.name}`;
    });

    submitBtn.addEventListener('click', () => {
        if (!selectedFile) {
            alert('Nenhum arquivo foi selecionado!');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const fileContent = event.target.result;
            tratarDados(fileContent);
        };
        reader.readAsText(selectedFile);

        statusMessage.textContent = "Processando...";
    });

    

    function tratarDados(data) {
        const colspecs = [
            [0, 2], [2, 10], [10, 12], [12, 24], [24, 27], [27, 39], [39, 49], [49, 52], [52, 56], [56, 69], 
            [69, 82], [82, 95], [95, 108], [108, 121], [121, 134], [134, 147], [147, 152], [152, 170], [170, 188], 
            [188, 201], [201, 202], [202, 210], [210, 217], [217, 230], [230, 242], [242, 245]
        ];
        const names = [
            'TIPREG', 'DTPREG', 'CODBDI', 'CODNEG', 'TPMERC', 'NOMRES', 'ESPECI', 'PRAZOT', 'MODREF', 
            'PREABE', 'PREMAX', 'PREMIN', 'PREMED', 'PREULT', 'PREOFC', 'PREOFV', 'TOTNEG', 'QUATOT', 
            'VOLTOT', 'PREEXE', 'INDOPC', 'DATVEN', 'FATCOT', 'PTOEXE', 'CODISI', 'DISMES'
        ];

        const lines = data.split('\n').slice(1, -1);
        const tabela = lines.map(line => {
            const row = {};
            colspecs.forEach((spec, index) => {
                const [start, end] = spec;
                row[names[index]] = line.slice(start, end).trim();
            });
            return row;
        });

        const valoresPor100 = ['PREABE', 'PREMAX', 'PREMIN', 'PREMED', 'PREULT', 'PREOFC', 'PREOFV'];
        tabela.forEach(row => {
            valoresPor100.forEach(key => {
                const originalValue = row[key].replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
                const parsedValue = parseFloat(originalValue);
                const dividedValue = parsedValue / 100;
                const formattedValue = dividedValue.toFixed(2).replace('.', ',');
                console.log(`Original: ${originalValue}, Parsed: ${parsedValue}, Divided: ${dividedValue}, Formatted: ${formattedValue}`);
                row[key] = formattedValue;
            });
            row['DTPREG'] = formatDate(row['DTPREG']);
        });

        const csvContent = convertToCSV(tabela);
        downloadCSV(csvContent, `${selectedFile.name}.csv`);

        statusMessage.textContent = "Download concluído!";
        
        const cotacoes = tabela.slice(0, 10);
        const porativo = cotacoes.filter(row => row['CODNEG'] === 'B3SA3');
        filePreview.textContent = JSON.stringify(porativo, null, 2);
    }

    function formatDate(dateStr) {
        const year = dateStr.slice(0, 4);
        const month = dateStr.slice(4, 6);
        const day = dateStr.slice(6, 8);
        return `${day}/${month}/${year}`;
    }

    function convertToCSV(objArray, delimiter = ';') {
        const array = [Object.keys(objArray[0])].concat(objArray);
        return array.map(it => {
            return Object.values(it).join(delimiter);
        }).join('\n');
    }

    function downloadCSV(content, fileName) {
        const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', fileName);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
});
