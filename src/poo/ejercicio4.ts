abstract class Figura {
    abstract calcularArea(): number;
  }
  
  class Rectangulo extends Figura {
    constructor(private ancho: number, private alto: number) {
      super();
    }
  
    calcularArea(): number {
      return this.ancho * this.alto;
    }
  }
  
  class Circulo extends Figura {
    constructor(private radio: number) {
      super();
    }
  
    calcularArea(): number {
      return Math.PI * this.radio ** 2;
    }
  }
  
  const rectangulo = new Rectangulo(5, 10);
  console.log("Área del rectángulo:", rectangulo.calcularArea());
  
  const circulo = new Circulo(3);
  console.log("Área del círculo:", circulo.calcularArea());
  