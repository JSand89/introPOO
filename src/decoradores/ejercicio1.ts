function LogInstancia(target: Function) {
    const original = target;
  
    
    function construct(constructor: any, args: any[]) {
      console.log(`Nueva instancia de ${constructor.name} creada.`);
      return new constructor(...args);
    }
  
    const newConstructor: any = function (...args: any[]) {
      return construct(original, args);
    };
  
    newConstructor.prototype = original.prototype;
  
    return newConstructor;
  }
  
  @LogInstancia
  class Persona3 {
    constructor(public nombre: string) {}
  }
  
  const persona = new Persona3("Carlos");
  