
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
    
    //Esta era la forma que usabamos antes de ES
    let hello = "Hello";
    let world = "World";
    let epicPhrase = hello + ' ' + world;
    console.log(epicPhrase);

    //Y asi es como se usa despues de ES
    //las comillas francesas se hacen con la combinacion alt + 96 ``
    let epicPhrase2 = `${hello} ${world}`;
    console.log(epicPhrase2);


    let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
    + "otra frase epica que necesitamos."

    // es6
    let lorem2 = `otra frase epica que necesitamos
    ahora es otra frase epica
    `;

    console.log(lorem);
    console.log(lorem2);

    let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
    }

    console.log(person.name, person.age);

    let { name } = person;
    console.log(name);

    let team1 = ['Oscar', 'Julian', 'Ricardo'];
    let team2 = ['Valeria', 'Yesica', 'Camila'];

    let education = ['David', ...team1, ...team2];

    console.log(education);

    {
    var globalVar = "Global Var";
    }

    {
    let globalLet = 'Global Let';
    console.log(globalLet);
    }

    console.log(globalVar);

    const a = 'b';
    a = 'a';
    console.log(a);