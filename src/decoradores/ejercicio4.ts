function Singleton<T extends { new(...args: any[]): {} }>(constructor: T) {
    let instancia: any;
  
    const nuevoConstructor: any = function (...args: any[]) {
      if (!instancia) {
        instancia = new constructor(...args);
      }
      return instancia;
    };
  
    return nuevoConstructor;
  }
  
  @Singleton
  class Vehiculo3 {
    constructor(public marca: string) {}
  }
  
  const auto1 = new Vehiculo3('Toyota');
  const auto2 = new Vehiculo3('Honda');
  
  console.log(auto1 === auto2);  // true, ambas son la misma instancia
  