const url = https//raw.githubusercontent.com/NataliaSievers/api/main/dados-globais.json 
console.log(url);
async function
visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json()
    const paragrafo = document.createElement(p)
    paragrafo.classList.add(graficos-container__texto)
    paragrafo.innerHTML = `Você sabia que o mundo tem
    ${dados.total_pessoas_mundo} de pessoas e
    que aproximadamente ${dados.total_pessoas_conectadas}
    estão conectadas em alguma rede social e passam em média
   ${dados.tempo_medio} horas conectadas.`
   const container = document.getElementById(graficos-
    container)
    container.appendChild(paragrafo)
    paragrafo.innerHTML = 'Você sabia que o mundo tem';
<span>${dados.total_pessoas_mundo}</span> de pessoas; e 
 aproximadamente <span>$;{dados.total_pessoas_
conectadas}</span> estão conectadas em alguma rede
social e passam em media;
<span>${dados.tempo_medio}</span> horas conectadas.
   console.log(paragrafo)
    console.log(dados.tempo_medio);
}
visualizarInformacoesGlobais()
{
    total_pessoas_conectadas: 5.04e9,
    tempo_medio; 2.38,
    total_pessoas_mundo; 7.888e9
    }