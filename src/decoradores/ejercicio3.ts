function AgregarPropiedad(constructor: Function) {
    constructor.prototype.tipo = 'Vehículo';
  }
  
  @AgregarPropiedad
  class Vehiculo2 {
    constructor(public marca: string) {}
  }
  
  const auto = new Vehiculo2('Toyota');
  console.log((auto as any).tipo); // "Vehículo"
  