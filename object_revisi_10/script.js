// let mahasiswa = {
//     nama : 'aditya',
//     strong : 10,
//     makan : function(porsi){
//         this.strong = this.strong + porsi
//         console.log('selamat datang kau tai' + this.nama )
//     }
// }


function mahasiswa(nama, energi){
    let mahasiswa = {}
    mahasiswa.nama = nama
    mahasiswa.energi = energi

    mahasiswa.makan = (porsi) =>{
        // += adalah tanda memudahkan dimana di bawah 
        // kita tidak perlu lagi menambah this pada porsi 
        this.energi += porsi 
        console.log(`halo ${this.nama} , selamat makan`)
    }
    return mahasiswa
}

let sandhika = mahasiswa('aditya',10)

let doddy = mahasiswa('doddy', 20)