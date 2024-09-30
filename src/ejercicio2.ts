class Persona2 {
    private nombre: string;
  
    constructor(nombre: string, public edad: number) {
      this.nombre = nombre;
    }
  
    getNombre(): string {
      return this.nombre;
    }
  
    saludar(): void {
      console.log(`Hola, mi nombre es ${this.getNombre()} y tengo ${this.edad} años.`);
    }
  }
  
  const persona2 = new Persona("Lucía", 25);
  persona2.saludar();
  // persona2.nombre // Error: la propiedad 'nombre' es privada
  