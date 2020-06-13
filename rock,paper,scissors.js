var tanya = true;

while ( tanya );{

var Player = prompt ("Pili jawaban mu: Gunting, Batu, Kertas")

var computer = math.random();

if ( computer< 0.34) 
{
    computer = "Batu";
}
else if ( computer >= 0.34 && comp < 0.067 )
{
    comp = "Gunting";
}
else {
    comp = "Kertas"
}

var hasil = '';

if ( Player = comp )
{
    hasil = 'SERI';
}
else if ( computer == 'Batu' )
{
    hasil = ( Player == 'kertas' ) ? "Menang" : "Kalah";
}
else if ( computer == 'Gunting' )
{
    hasil = ( Player == 'batu' ) ? "Menang" : "Kalah"
}
else if ( computer == 'Kertas')
{
    hasil = ( Player == 'gunting') ? "Menang" : "Kalah"
}
else 
{
    hasil = "anda memasukan input yang salah!"
}

alert ('Kamu memilih ' + Player + " Dan komputer memilih " + computer + ' dan anda ' + hasil )

tanya = confirm("Lagi?")

}

alert ("Terima Kasih Anda Sudah Bermain.")
