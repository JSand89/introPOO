function DeshabilitarInstanciacion(constructor: Function) {
    throw new Error('Esta clase no puede ser instanciada');
  }
  
  @DeshabilitarInstanciacion
  class Vehiculo {
    constructor(public marca: string) {}
  }
  
  // const auto1 = new Vehiculo('Toyota'); // Esto generará un error
  