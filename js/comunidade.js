const projetosSalvos = document.querySelector('.container-comunidade')

new function () {
    mostraProjetos()
}

function mostraProjetos() {
    if(localStorage.length <= 0) {
        return
    }
    let projetos = []
    for(let i = 0; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    projetos.forEach(projeto => {
        const cartao = criaCartao(projeto)
        projetosSalvos.innerHTML += cartao
        const codigoHtml = projetosSalvos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    })
}

function criaCartao(projeto) {
    const cartao = `
        <div class="projeto" data-id="${projeto.id}">
           <div style="background-color:${projeto.detalhesDoProjeto.corDaBorda}" class="borda-editor">
                <div class="editor-projeto">
                <div class="botao-vermelho">
                <div class="botao-amarelo">
                <div class="botao-verde">
                </div></div></div>
                <code class="hljs" ${projeto.detalhesDoProjeto.linguagem} ></code>
            </div>
        </div>
        <div class="preview">
                <h1>${projeto.detalhesDoProjeto.nomeDoProjeto}</h1>
                <h2>${projeto.detalhesDoProjeto.descricaoDoProjeto}</h2>

                <div class="box-interatividade">
                <div class="comentarios">
                    <div class="interatividade" alt="Balão de Comentários">
						<span class="comentarios"></span>
				</div>
				

            	<div class="curtidas">
                    <div class="interatividade" alt="Coração"></div>
						<span class="curtidas"></span>
            	</div>

                <div class="perfil">
					<div class="foto-perfil" alt="Foto do Perfil"/>
                    	<span class="nome">@Juliana</span>
                </div>	
            </div>        
    `
    return cartao
}