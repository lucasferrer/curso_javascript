//Busca com parametro de Class id no query selector
			var titulo =document.querySelector(".titulo");
			// mostrar no console, (F12 para ver)
			console.log(titulo);
			// mostrar no console sem o <h1> (somente o conteudo de dentro da tag)
			console.log(titulo.textContent)
			// Mudar este conteudo para outro
			titulo.textContent = "Aparecida Nutricionista";