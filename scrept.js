const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = '... جاري ارسال الكتاب';

   const serviceID = 'default_service';
   const templateID = 'template_iwubtcq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = '\u2714\uFE0F تم الإرسال إلى حسابك';
    }, (err) => {
      btn.value = 'فشل الإرسال !';
      alert(JSON.stringify(err));
    });
});
