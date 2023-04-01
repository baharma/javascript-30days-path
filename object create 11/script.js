
const methomahasiswa  = {

     makan :  function mahasiswa(nama, energi){
        let mahasiswa = {}
        mahasiswa.nama = nama
        mahasiswa.energi = energi
    }
    
        mahasiswa.makan = function(porsi){
            this.energi += porsi
            console.log(`halo ${this.nama}, selamat makan`)
        }
        mahasiswa.main = function(jam){
            this.energi -= jam
            console.log(`halo ${this.name}, selamat bermain `)
        }
    }



const Mahasiswa = (nama,energi) =>{
    let mahasiswa = {}
    mahasiswa.nama = nama
    mahasiswa.energi = energi
    mahasiswa.makan = methos
}