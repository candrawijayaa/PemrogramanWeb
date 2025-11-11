function validateForm() {
        var nama = document.forms["myForm"]["nama"].value;
        var email = document.forms["myForm"]["email"].value;
        var pesan = document.forms["myForm"]["pesan"].value;


        var regexEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

        if (nama == "" || email == "" || pesan == "") {
                alert("Semua field harus diisi!");
                return false;
        }

        if (!regexEmail.test(email)) {
                alert("Format email tidak valid!");
                return false;
        }

        alert("Form berhasil dikirim!");
        return true;
}
