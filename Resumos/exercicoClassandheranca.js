class Veiculo {
  constructor (marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
  }
  descrever(){
    return `${this.marca} ${this.modelo}`
  }
}
class Carro extends Veiculo {
  constructor (marca,modelo,porta){
    super (marca,modelo);
    this.porta = porta;
  }
  abrirPortas(){
    return "Abrindo porta...";
  }
}
class Moto extends Veiculo {
  constructor (marca, modelo, cilindradas){
    super(marca, modelo);
    this.cilindradas = cilindradas;
  }
  descrever(){
    return `Moto: ${this.marca} ${this.modelo}`;
  }
}

const golzinho = new Carro ('Gol', 'Bolinha', 4);
golzinho.marca
golzinho.modelo
golzinho.porta
golzinho.descrever();
golzinho.abrirPortas();

const yamaha = new Moto('Yamaha','Xtb-50', 1000);
yamaha.marca;
yamaha.modelo;
yamaha.cilindradas;
yamaha.descrever();
