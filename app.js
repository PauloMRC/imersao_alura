function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
  
    // Itera sobre cada item (dado) da lista de dados
    for (let dado of dados) {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p><a href="#" target="_blank">${dado.link}</a></p>
        </div>
      `;
    }
    // Insere o HTML gerado na seção selecionada, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }