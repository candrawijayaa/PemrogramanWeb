var umur = prompt("Masukkan umur Anda:");
var jk = prompt("Masukkan jenis kelamin Anda (M/F):");

if (jk == "M" || jk == "m") {
  if (umur < 20)
    document.write("Kamu adalah laki-laki muda");
  else
    document.write("Kamu adalah laki-laki dewasa");
} 
else if (jk == "F" || jk == "f") {
  if (umur < 20)
    document.write("Kamu adalah perempuan muda");
  else
    document.write("Kamu adalah perempuan dewasa");
} 
else {
  document.write("Jenis kelamin tidak dikenali");
}
