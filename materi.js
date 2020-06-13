alert ('Apa Kabar!');

var lagi 

while ( lagi === true ){

    var nama = prompt ("Siapa Nama Anda?")

    alert ("Halo, Apa Kabar " + nama)

    confirm ("Apakah Nama Anda Benar?")

    if (lagi === false)
    
    alert ('ty')
}

alert ("Terima kasih " + nama)

//Control FLOW

alert ('Mulai');

for ( var a = 1 ; a <=5 ; a++){
    alert ('Halo Apa Kabar!')
}

alert ('selesai');

//WHile

var nilaiawal = 1

while ( nilaiawal <= 5){
    console.log('Tambah')
    nilaiawal++;
}

//switch

var makanan = prompt('Pilih makanan dari \n sapi, nasi, sayur, cola, burger, gorengan')

switch (makanan) {
    case 'sapi':
    case 'nasi':
    case 'sayur':
        alert( 'Ini adalah makan sehat!')
    break;
    case 'cola':
    case 'burger':
    case 'gorengan':
        alert ('Ini adalah makanan tidak sehat!')
    break;
    default :
        alert ('anda tidak memilih dari option')
}

//PERULANGAN & PENGKONDISIAN

var s = '';

for ( var i = 10; i > 0 ; i--){
    for ( var j = 0 ; j < i ; j++){
        s += '*';
    }
    s += '\n'
}

console.log(s);