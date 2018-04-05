  //Cancela o evento e chama a função makeGrid()
  $("input[type='submit']").click(function(e) {
    e.preventDefault();
    makeGrid();
  });

//Inicio da função
function makeGrid() {
    //Declaração de variáveis
    let cols = $("#inputWeight").val();
    let rows = $("#inputHeight").val();
    let canvas = $("#pixelCanvas");
    const color = $("#colorPicker");

    //Limpa a tabela
    canvas.children().remove();

    //Cria a grid através dos dados passados pelo usuário
    for (let i = 0; i < rows; i++) {
      canvas.append("<tr></tr>");  
      for (let j = 0; j < cols; j++){
        canvas.children().last().append("<td></td>");
      }
    }

    //Seleciona a cor, e aplica no quadrado que foi clicado
    canvas.on("click", "td", function() {
      let color = $("input[type='color']#colorPicker").val();
      $(this).attr("bgcolor", color);
    });
  }

  