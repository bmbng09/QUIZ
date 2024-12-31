function validateForm() {
    const nama = document.getElementById('nama').value.trim();
    const nim = document.getElementById('nim').value.trim();
    const errorNamaElement = document.getElementById('error-Nama');
    const errorNimElement = document.getElementById('error-NIM');


    errorNamaElement.innerText = '';
    errorNimElement.innerText = '';

    let isValid = true;

    
    if (nama === '') {
        errorNamaElement.innerText = 'Masukan Nama terlebih dahulu!';
        isValid = false;
    }

    
    if (nim === '') {
        errorNimElement.innerText = 'Masukan NIM terlebih dahulu!';
        isValid = false;
    }

   
    if (isValid) {
        alert('Form berhasil dikirim!');
        window.location.href = 'mulai.html';
    }
}