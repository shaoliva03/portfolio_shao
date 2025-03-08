// JavaScript Document

  window.addEventListener('load', () => {
            const loadingScreen = document.getElementById('loading-screen');
            const content = document.getElementById('content');
            
            setTimeout(() => {
                loadingScreen.style.display = 'none'; 
                content.style.display = 'flex'; 
            }, 4000); 
        });

        document.addEventListener('DOMContentLoaded', () => {
            const inicioLink = document.querySelector('a[href="#"]');
            inicioLink.addEventListener('click', (e) => {
                e.preventDefault(); 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
            });
        });

 document.querySelectorAll('.image-card').forEach(card => {
      card.addEventListener('click', function() {
        const images = card.getAttribute('data-images').split(',');
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');

		  
        document.querySelector('.popup-title').textContent = title;
        document.querySelector('.popup-description').textContent = description;

 
        const popupImageContainer = document.querySelector('.popup-image-container');
        popupImageContainer.innerHTML = ''; 

        images.forEach(image => {
          const imgElement = document.createElement('img');
          imgElement.src = image.trim(); 
          imgElement.alt = 'Imagen del proyecto';
          imgElement.style.width = '100%';
          imgElement.style.marginBottom = '15px'; 
          popupImageContainer.appendChild(imgElement);
        });

        const overlay = document.querySelector('.overlay');
        const popup = document.querySelector('.popup');
        overlay.style.display = 'block';
        popup.style.display = 'block';

        document.querySelector('.close-btn').addEventListener('click', () => {
          overlay.style.display = 'none';
          popup.style.display = 'none';
        });
      });
    });




        // Mostrar el popup después de 30 segundos
        setTimeout(() => {
            const spamPopup = document.getElementById('spam');
            spamPopup.style.display = 'flex'; // Cambia el display para hacerlo visible
        }, 15000); // Retraso de 15 segundos 

    // Evento para rechazar el diálogo
    document.getElementById('denyButn').addEventListener('click', () => {
        alert('Sin tu apoyo, me tocará explicarle a mi mamá que mi plan de ser artista era en serio...¡a vivir debajo del puente!'); // Lógica adicional aquí
        document.getElementById('spam').style.display = 'none'; // Oculta el popup
    });

    // Botón "Saber más" para mostrar más información o realizar otra acción
    document.getElementById('acceptButn').addEventListener('click', () => {
        // Aquí ya no hace falta mostrar una alerta, porque el enlace ya tiene target="_blank" en el HTML
        // El botón abrirá la URL en una nueva pestaña automáticamente
    });