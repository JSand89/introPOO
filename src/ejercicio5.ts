class CuentaBancaria {
    protected saldo: number;
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
    depositar(monto: number): void {
      this.saldo += monto;
      console.log(`Depósito de ${monto}. Saldo actual: ${this.saldo}`);
    }
  
    retirar(monto: number): void {
      console.log("Retiro no permitido en cuenta base.");
    }
  
    getSaldo(): number {
      return this.saldo;
    }
  }
  
  class CuentaAhorros extends CuentaBancaria {
    retirar(monto: number): void {
      if (monto <= this.saldo) {
        this.saldo -= monto;
        console.log(`Retiro de ${monto}. Saldo actual: ${this.saldo}`);
      } else {
        console.log("Fondos insuficientes para retiro.");
      }
    }
  }
  
  class CuentaCorriente extends CuentaBancaria {
    retirar(monto: number): void {
      if (this.saldo - monto >= -500) {
        this.saldo -= monto;
        console.log(`Retiro de ${monto}. Saldo actual: ${this.saldo}`);
      } else {
        console.log("Límite de sobregiro alcanzado.");
      }
    }
  }
  
  const cuentaAhorros = new CuentaAhorros(1000);
  cuentaAhorros.depositar(200);
  cuentaAhorros.retirar(500);
  cuentaAhorros.retirar(800);
  
  const cuentaCorriente = new CuentaCorriente(1000);
  cuentaCorriente.retirar(1200);
  cuentaCorriente.retirar(500);
  