const savePDFButton = document.getElementById('save-as-pdf');



savePDFButton.addEventListener('click', () => {

  window.print(); // Triggers the browser's print dialog

});