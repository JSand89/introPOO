class Animal {
    constructor(public nombre: string) {}
  
    hacerSonido(): void {
      console.log("Sonido genérico");
    }
  }
  
  class Perro extends Animal {
    hacerSonido(): void {
      console.log("Guau!");
    }
  }
  
  const perro = new Perro("Firulais");
  perro.hacerSonido(); // Imprime "Guau!"
  