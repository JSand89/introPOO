# Clase introducción a POO

## Ejercicio 1: Clases y Objetos
Crea una clase Persona que tenga las siguientes propiedades:

+ nombre (string)
+ edad (number)
+ Un método saludar() que imprima un mensaje con el nombre de la persona.

### Instrucciones:

+ Instancia la clase Persona con un nombre y edad.
+ Llama al método saludar().

## Ejercicio 2: Encapsulamiento

Modifica la clase Persona para que el nombre sea una propiedad privada. Añade un método getNombre() para acceder al nombre.

### Instrucciones:
+ Asegúrate de que el nombre no pueda ser accedido directamente.
+ Crea una instancia y usa el método getNombre().

## Ejercicio 3: Herencia

Crea una clase Animal con una propiedad nombre y un método hacerSonido(). Luego, crea una clase Perro que herede de Animal y sobreescriba el método hacerSonido() para que imprima "Guau!".

### Instrucciones:
+ Crea una instancia de Perro y llama al método hacerSonido().

## Ejercicio 4: Polimorfismo

Crea una clase abstracta Figura que tenga un método abstracto calcularArea(). Luego, crea dos clases Rectangulo y Circulo que hereden de Figura e implementen el método calcularArea().

### Instrucciones:

+ Crea una instancia de Rectangulo y otra de Circulo, y llama al método calcularArea().

## Ejercicio 5: Abstracción y Herencia

Crea una clase CuentaBancaria que tenga una propiedad saldo y métodos depositar() y retirar(). Luego, crea dos clases CuentaAhorros y CuentaCorriente que hereden de CuentaBancaria e implementen reglas diferentes para el método retirar().

### Instrucciones:

+ La CuentaAhorros no puede retirar más del saldo disponible.
+ La CuentaCorriente puede tener un saldo negativo hasta un límite de -500.
+ Crea instancias de ambas cuentas y prueba sus métodos.

## Ejercicio 6: Composición

Crea una clase Motor y una clase Auto que incluya un Motor en su interior. El Auto debe tener métodos para arrancar y detener el motor.

### Instrucciones:

+ Usa composición en lugar de herencia.
