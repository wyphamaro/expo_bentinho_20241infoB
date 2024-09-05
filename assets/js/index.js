const fetchButton = document.getElementById('fetch-button');
        const imageContainer = document.getElementById('image-container');

        fetchButton.addEventListener('click', async () =>{
            try {
                const response = await fetch('https://nekos.best/api/v2/neko', {
                    mode: 'cors'
                });

                const data = await response.json();

                const imgElement = document.createElement('img');
                imgElement.src = data.results[0].url;
                imageContainer.innerHTML = '';
                imageContainer.appendChild(imgElement);
            } catch (error) {
                console.error('Erro ao buscar a imagem:', error);
            }
        });

       