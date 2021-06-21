const linguagem = document.querySelector('.lista-linguagem')
const editorCodigo = document.querySelector('.area-editor')

const nomeProjeto = document.querySelector('.nome-projeto')
const descricaoProjeto = document.querySelector('.detalhe-projeto')

const botaoEditor = document.querySelector('.botao-visual')
const botaoSalvar = document.querySelector('.salvar')

botaoEditor.addEventListener('click', () => {
    let codigo = editorCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

function mudaLinguagem() {
    let codigo = {'texto': editorCodigo.querySelector('code').innerText}
    editorCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    editorCodigo.firstChild.innerText = codigo.texto
}


botaoSalvar.addEventListener('click', () => {
    if (typeof(Storage) !== "undefined") {
        console.log('suporta o localstorage!')
        const projeto = montaProjeto()
        salvaLocalStorage(projeto)
    } else {
        console.log('não suporta o localstorage')
    }
})

function montaProjeto() {
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'nomeDoProjeto': nomeProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'corDaBorda': botaoColorido.value,
            'linguagem': linguagem.value,
            'codigo': editorCodigo.querySelector('code').innerText
        }
    }
    return projeto
}

function atribuiId() {
        return localStorage.length             
 }
    
function salvaLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}

//Botão Colorido//
const botaoColorido = document.querySelector(".botao-colorido");
const bordaColorida = document.querySelector(".borda-editor");

botaoColorido.addEventListener("input", (event) => {
  let color = event.target.value;
  bordaColorida.style = `background: ${color}`;
});
