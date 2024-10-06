class Motor {
    constructor(nama, merk, tahun, warna) {
        this.nama = nama;
        this.merk = merk;
        this.tahun = tahun;
        this.warna = warna;
    }

    infoMotor() {
        return `Motor ${this.nama} adalah ${this.merk} tahun ${this.tahun} berwarna ${this.warna}.`;
    }
}

class MotorMetic extends Motor {
    constructor(nama, merk, tahun, warna, kecepatanMaks) {
        super(nama, merk, tahun, warna); 
        this.kecepatanMaks = kecepatanMaks; 
    }

    infoMotorMetic() {
        return `${this.infoMotor()} Motor ini memiliki kecepatan maksimum ${this.kecepatanMaks} km/jam.`;
    }
}

const motorBeat = new Motor("CBS", "Honda", 2024, "hitam");
const motorVario = new Motor("CBS-ISS SP", "Honda", 2024, "putih");

const motorSport = new MotorSport("Kawasaki", "Yamaha", 2024, "merah", 350);

console.log(motoeBeat.infoMotor());
console.log(motorVario.infoMotor());

console.log(motorSport.infoMotorSport());
