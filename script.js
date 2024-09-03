 // Seleciona todos os itens de FAQ
 const faqItems = document.querySelectorAll('.faq-item');

 faqItems.forEach(item => {
     item.addEventListener('click', () => {
         // Alterna a classe ativa
         item.classList.toggle('active');
     });
 });

 

 // Função para atualizar o contador regressivo
 function updateCountdown() {
     const endDate = new Date("December 25, 2024 00:00:00").getTime();
     const now = new Date().getTime();
     const distance = endDate - now;

     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     document.getElementById("days").innerText = days;
     document.getElementById("hours").innerText = hours;
     document.getElementById("minutes").innerText = minutes;
     document.getElementById("seconds").innerText = seconds;

     // Se a contagem regressiva estiver concluída, exibe uma mensagem
     if (distance < 0) {
         clearInterval(x);
         document.getElementById("countdown-header").innerHTML = "Evento expirado!";
     }
 }

 // Atualiza o contador regressivo a cada segundo
 setInterval(updateCountdown, 1000);
 document.querySelectorAll('.btn-cta').forEach(button => {
     button.addEventListener('mouseover', () => {
       button.style.transform = 'scale(1.05)';
       button.style.transition = 'transform 0.3s ease';
     });
   
     button.addEventListener('mouseout', () => {
       button.style.transform = 'scale(1)';
     });
   });
   
