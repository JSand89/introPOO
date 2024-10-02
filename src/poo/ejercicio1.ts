class Persona {
    constructor(public nombre: string, public edad: number) {}
  
    saludar(): void {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Instanciar y llamar al método
  const persona1 = new Persona("Carlos", 30);
  persona1.saludar();
  