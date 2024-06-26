// Declaração de variáveis
let numero1 = 8; let numero2 = 3; 
let texto1 = "4"; let saudacao = "Olá"; 
let nome = "João"; // Operações aritméticas 
let soma = numero1 + numero2; let diferenca = numero1 - numero2; 
let produto = numero1 * numero2; 
let quociente = numero1 / numero2; // Operações entre números e strings 
let somaMisturada = numero1 + texto1; // "84" (concatenação) 
let subtracaoMisturada = numero1 - texto1; // 4 (subtração após conversão) // Concatenação de strings 
let mensagem = saudacao + ", " + nome + "!"; 
let mensagem2 = `${saudacao}, ${nome}!`; // Saída dos resultados 
console.log(`Soma: ${soma}`); // 11 
console.log(`Diferença: ${diferenca}`); // 5 
console.log(`Produto: ${produto}`); // 24 
console.log(`Quociente: ${quociente}`); // 2.6666... 
console.log(`Soma Misturada: ${somaMisturada}`); // "84" 
console.log(`Subtração Misturada: ${subtracaoMisturada}`); // 4 
console.log(`Mensagem: ${mensagem}`); // "Olá, João!" 
console.log(`Mensagem2: ${mensagem2}`); // "Olá, João!"
