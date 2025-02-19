function consultarElemento() {
    const nomeElemento = document.getElementById('nomeElemento').value.trim().toLowerCase();
    const resultado = document.getElementById('resultado');

    // Tabela periódica com os nomes dos elementos, seus grupos e períodos
    const tabelaPeriodica = {
        "hidrogênio": [1, 1], "hélio": [18, 1], "lítio": [1, 2], "berílio": [2, 2], "boro": [13, 2], "carbono": [14, 2],
        "nitrogênio": [15, 2], "oxigênio": [16, 2], "fluor": [17, 2], "neônio": [18, 2], "sódio": [1, 3], "magnésio": [2, 3],
        "alumínio": [13, 3], "silício": [14, 3], "fósforo": [15, 3], "enxofre": [16, 3], "cloro": [17, 3], "argônio": [18, 3],
        "potássio": [1, 4], "cálcio": [2, 4], "escândio": [3, 4], "titânio": [4, 4], "vanádio": [5, 4], "cromo": [6, 4],
        "manganês": [7, 4], "ferro": [8, 4], "cobalto": [9, 4], "níquel": [10, 4], "cobre": [11, 4], "zinco": [12, 4],
        "gálio": [13, 4], "germânio": [14, 4], "arsênio": [15, 4], "selênio": [16, 4], "bromo": [17, 4], "krípton": [18, 4],
        "rubídio": [1, 5], "estrôncio": [2, 5], "ítterio": [3, 5], "zircônio": [4, 5], "niobio": [5, 5], "molibdênio": [6, 5],
        "tecnetio": [7, 5], "rutenio": [8, 5], "ródio": [9, 5], "paládio": [10, 5], "prata": [11, 5], "cádmio": [12, 5],
        "íturio": [13, 5], "láncio": [14, 5], "cério": [15, 5], "disprósio": [16, 5], "terbium": [17, 5], "europio": [18, 5],
        "frâncio": [1, 6], "radônio": [2, 6], "actínio": [3, 6], "tório": [4, 6], "protácio": [5, 6], "urânio": [6, 6],
        "netúnio": [7, 6], "plutônio": [8, 6], "amerício": [9, 6], "curio": [10, 6], "berquélio": [11, 6], "califórnio": [12, 6],
        "einsteinio": [13, 6], "fermio": [14, 6], "mendelevio": [15, 6], "nobelio": [16, 6], "lawrencio": [17, 6], "rutherfordio": [18, 6],
        "dubnio": [1, 7], "seabórgio": [2, 7], "bohrio": [3, 7], "hássio": [4, 7], "meitnério": [5, 7], "darmstádio": [6, 7],
        "roentgênio": [7, 7], "copernício": [8, 7], "nihônio": [13, 7], "flérvovio": [14, 7], "moscóvio": [15, 7], "tenessino": [16, 7],
        "oganessônio": [17, 7]
    };

    // Converte o nome do elemento para minúsculas e remove espaços extras
    if (tabelaPeriodica[nomeElemento]) {
        const [grupo, periodo] = tabelaPeriodica[nomeElemento];
        resultado.textContent = `O elemento ${nomeElemento.charAt(0).toUpperCase() + nomeElemento.slice(1)} pertence ao grupo ${grupo} e ao período ${periodo}.`;
    } else {
        resultado.textContent = "Elemento não encontrado. Verifique o nome e tente novamente.";
    }
}
