
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