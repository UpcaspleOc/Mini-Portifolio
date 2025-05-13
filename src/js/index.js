const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {

    aba.addEventListener("click", function () {

        const abaSelecionada = document.querySelector(".aba.selecionado")
        abaSelecionada.classList.remove("selecionado")

        aba.classList.add("selecionado")

         const informacaoSelecionada = document.querySelector(".info-conteudo.selecionado")
        informacaoSelecionada.classList.remove("selecionado")
        
        
const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")


    });
});

