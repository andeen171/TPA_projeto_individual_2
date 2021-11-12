const calcular = document.getElementById('calcular');

function simular_financiamento () {
    const name = document.getElementById('name').value;
    const renda = document.getElementById('renda').value;
    const value = document.getElementById('value').value;
    const entrada = document.getElementById('entrada').value;
    const juros = document.getElementById('juros').value;
    const n = document.getElementById('prestacoes').value;
    const result = document.getElementById('result')

    // let parcela_mensal = (value - entrada) * (((1 + juros) ** n) * juros) / ((1 + juros) ** n) - 1)
    const i = juros / 100
    let parcela_mensal = (( value - entrada) * (((1 + i) ** n) * i) / (((1 + i) ** n) -1)).toFixed(2)
    if (parcela_mensal > (renda * 0.3)) {
        result.textContent = `Olá ${name}, seu financiamento não foi aprovado por conta que o valor da parcela ultrapassa o valor maximo com a sua renda  ${renda * 0.3}`
        return
    }
    result.textContent = `Olá ${name}, seu financiamento foi aprovado em ${n} parcelas de ${parcela_mensal} reais`
};

calcular.addEventListener('click', simular_financiamento)