const generatorPassword =require('geneatorPassword');

const password = generatorPassword.generate({
    length:20,
    numbers:true,
    symbol:true,
    uppercas:true,
    lowercase:true
});
console.log(`generated password: ${password}`);

