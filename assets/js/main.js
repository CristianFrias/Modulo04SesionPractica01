$(() => { // FUNCIÓN READY
    // ARREGLO DE INGREDIENTES
    const ingredientes = [
        "Carne",
        "Pollo",
        "Tocino",
        "Mozzarella",
        "Champiñón",
        "Cebolla",
        "Piña",
        "Pimentón",
        "Choclo"
    ];
    
    // FUNCIÓN QUE RECORRE EL OBJETO INGREDIENTES
    // MUESTRA LA LISTA DE LOS ELEMENTENOS EN EL HTML, LINEA DE CÓDIGO 26
    const mostrarIngredientes = () => {
        for (const ingrediente of ingredientes) {
            // SELECTOR # LLAMA DEL DIV HTML, CLASE APPEND Y ESO AGREGA UN DIV INPUT CON LOS INGREDIENTES
            // GENERA UN DIV POR CADA INGREDIENTE
            $("#ingredientes").append(`
                <div>
                    <input type="checkbox" value="${ingrediente}" class="check-ingredientes"> ${ingrediente}
                </div>
            `)
        }    
    }
    mostrarIngredientes();

    // ARREGLO VACÍO
    let seleccionados = [];
    // MUESTRA LOS INGREDIENTES QUE HACEN CLICK DEL ARREGLO INGREDIENTES
    const mostrarSeleccionados = () => {
        $("#seleccionados").html(seleccionados.join(", "))
    }

    const mostrarExtrasSeleccionados = () => {
        const extras = []
        $("#extras-seleccionados").html("")
        $("#total-extra").html("$0")
        if(seleccionados.length > 3) {
            for (let index = 3; index < seleccionados.length; index++) {
                extras.push(seleccionados[index])
            }
            $("#extras-seleccionados").html(extras.join(", "))
            $("#total-extra").html(`${extras.length*800}`)
        }
    }

    // SIRVE PARA CAPTURAR ELEMENTOS QUE SE GENERARON DE MANERA DINÁMICA EN EL HTML, HACIENDO REFERENCIA AL DOCUMENTO
    $(document).on("click",".check-ingredientes", function() {
        // THIS HACE REFERENCIA AL ELEMENTO QUE HIZO CLICK
        const checked = $(this).prop('checked');
        const value = $(this).val()
        if(checked) {
            seleccionados.push(value)
        } else {
            seleccionados = seleccionados.filter(item => item != value)
        }
        mostrarSeleccionados()
        mostrarExtrasSeleccionados()
    })

    // SIRVE PARA CAPTURAR ELEMENTOS QUE ESTÁN FIJOS EN EL HTML
    $("#btn-enviar").click(function() {
        const valor = $("#txt-propina").val();
        if(valor == "") {
            return alert("No ha definido la propina")
        }
        $("#monto-propina").html(`${valor}`)
        alert(`Su propina de ${valor} ha sido enviado.`)
    })
});
