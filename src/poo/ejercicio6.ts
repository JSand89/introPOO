class Motor {
    encendido: boolean = false;
  
    arrancar(): void {
      this.encendido = true;
      console.log("Motor arrancado");
    }
  
    detener(): void {
      this.encendido = false;
      console.log("Motor detenido");
    }
  }
  
  class Auto {
    private motor: Motor;
  
    constructor() {
      this.motor = new Motor();
    }
  
    encenderAuto(): void {
      this.motor.arrancar();
    }
  
    apagarAuto(): void {
      this.motor.detener();
    }
  }
  
  const miAuto = new Auto();
  miAuto.encenderAuto();
  miAuto.apagarAuto();
  