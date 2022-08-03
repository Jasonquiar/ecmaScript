
//Parametros por defecto

//lo utilizamos para que aparezca información por defecto si el usuario no nos proporciona información

    // forma usada antes de ES6
    function newFunction(name, age, country) {
        var name = name || 'oscar';
        var age = age || 32;
        var country = country || 'MX';
        console.log(name, age, country);
    };
    
    // Despues de ES6 colocamos el paramotro por defecto desde la asignación de los parametros
    function newFunction2(name = 'oscar', age = 32, country = "MX") {
        console.log(name, age, country);
    };
    
    // Si no declaramos ningun atributo, aparecera 'Oscar' '32' 'MX' 
    newFunction2();
    newFunction2('Ricardo', '23', 'CO');
  

//Template Literal - Plantillas literales

//Nos permitir separar o unir varios elementos 
    
    //Esta era la forma que usabamos antes de ES6
    let hello = "Hello";
    let world = "World";
    let epicPhrase = hello + ' ' + world;
    console.log(epicPhrase);

    //Y asi es como se usa despues de ES6
    //las comillas francesas se hacen con la combinacion alt + 96 ``
    let epicPhrase2 = `${hello} ${world}`;
    console.log(epicPhrase2);


//Forma de hacer un string antes de ES6 con el \n
    let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
    + "otra frase epica que necesitamos."

    // Con EC6
    let lorem2 = `otra frase epica que necesitamos
    ahora es otra frase epica
    `;

    console.log(lorem);
    console.log(lorem2);


//DETRUCCTURACIÓN DE ELEMENTOS
    //tenemos un objeto
    let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
    }

    // Antes de ES6
    console.log(person.name, person.age);

    //Con ES6 lo obtenemos del objeto   
    let { name, age} = person;
    console.log(name, age);

// Operador de propagacion - Spread Operator
    let team1 = ['Oscar', 'Julian', 'Ricardo'];
    let team2 = ['Valeria', 'Yesica', 'Camila'];

    //Antes de ES6 se tenia que colocar cada uno de los elementos dentro del nuevo array en forma manual,
    //ahora con los puntos suspensivos invocan al arreglo que queremos vincular en educación
    let education = ['David', ...team1, ...team2];

    console.log(education);


//Explicando el Hoisting  y el scope con diferentes bloques
    {
        // la palabra reservada var tiene un hoisting global y se monto en el objeto global This
        var globalVar = "Global Var"; 
    }

    {
        // la palabra reservada let tiene hosting local esta constante solo puede ser invocada dentro de este scope o bloque, si esta por fuera seria un undefined
        let globalLet = 'Global Let';
        console.log(globalLet);
    }

    console.log(globalVar);

    // const sera una variable que no se puede cambiar este codigo nos generaria ERROR
    const a = 'b';
    a = 'a';
    console.log(a);

// PARAMETROS EN OBJETOS 
//Propiedad de objetos mejorada que nos ayuda a declarar objetos de una forma mas sencilla 

    //Antes de EC6

    let nombre = 'oscar';
    let edad = 32;
    obj = { nombre: nombre, edad: edad };

    // Desdpues de es6
    obj2 = { nombre, edad };
    console.log(obj2);


// ARROY FUNCTION o Funciones de tipo flecha
// Solventa un problemas particular o trabajar con dos elemento: una sintaxis mas reducida y un This no vinculabre


    const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
    ]
    
    // Para trabajar con los anteriores objetos de la const names antes de EC6 donde pasabamos una function anonima y recibiamos el elemento para luego pasar por la consola
     let listOfNames = names.map(function (item) {
    console.log(item.name);
    })

    // Con EC6 hacemos Arrow Function que tambien son anonimas
    // Se llama arrow function por la sintaxis =>
    //Esto seria lo mismo de la function anterior
    let listOfNames2 = names.map(item => console.log(item.name));

    //La listaOfNames2 representaba el caso de un solo elemento, pero arroy function puede hacerce con varios elementos así:
    const listOfNames3 = (name, age, country) => {
        //Aca va la function  correspondiente
    }
    
    // Cuando solo se pasa un solo elemetnto 
    const listOfNames4 = name => {
        // Acá va la function correspondiente
    }

    // Utilizadon arroy function con una nueva funtion ya no se usa bloque de llaves {}
    const square = num => num * num;

//PROMESAS
// Con esta vamos a trabajar el asincronismos, ya que JavaScript no es sincronico solo ejecuta un proceso a la vez
    
    // La promesa tiene dos posibles opciones, sea rechazada o aceptada
    const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
        resolve('Hey!');
        } else {
        reject('Ups!!');
        }
    });
    }

    helloPromise()
    //Aca obtendriamos la respuesta, ya sea la promesa positiva o resuelta con .then ( ten presente que . then se puede agregar mas de uno) y en le caso negativa o rechazada con .catch 
    .then(response => console.log(response))
    .catch(error => console.log(error));

//CLASES EN JAVASCRIPT
    //
    class calculator {
        //Se agregan dos variables dentro del scope global
        constructor() {
            this.valueA = 0;
            this.valueB = 0;
        }
        //Metodo de sumar utilizado los valores de constructor
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }
        // Asi podemos utilizar la clase como un new
        const calc = new calculator();
        console.log(calc.sum(2, 2));


//MODULOS
    // Creando un archivo adicional para usar el modo podemos tener logica separada del hilo principal
    // como en el archivo module.js exportamos la function hello podemos usar dicho codigo con la palabra import
    import { hello } from './module';

    hello();


//GENERATOR
// UN generator es una function especial que retorna una serie de valor según el algoritmo definido cada vez que se use un .next segira en la function logica subsiguiente 
    
    //con el * al frente de la palabra reservado function definimos que la funcion es una function generator
    function* helloWorld() {
        if (true) {
            //yield nos permite retornar algo y lo guarda de forma interna qeu sirve para guardar la informacion de la primera iteración 
            yield 'Hello, ';
        }
        if (true) {
            yield 'World';
        }
    };

    const generatorHello = helloWorld();
    // Con .next que va a permiter usar la primera logica y obtener el valor y cuando se vuelve a ejecutar .next va a recordar la asignación logica y mostrarte el segundo valor 
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value); // En esta linea se vera Undefined ya que la function helloWorld solo tiene dos funciones