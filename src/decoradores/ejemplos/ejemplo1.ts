function LogClase(target: Function) {
    console.log(`Clase creada: ${target.name}`);
  }
  
  @LogClase
  class MiClase {
    constructor(public nombre: string, public profesor: string) {
      console.log("Instancia de MiClase creada.");
    }
  }

  const mate = new MiClase("Matematicas","Javier S")
