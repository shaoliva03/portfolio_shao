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