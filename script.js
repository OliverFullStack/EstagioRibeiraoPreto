// // 1) 
let indice = 13;
let soma = 0;
let K = 0;
if (K < indice) {
    K = K + 1;
    soma = soma + K;
}
console.log(soma) // ao final o valor será 1 



//2)
function isFibonacci(number) {
    let a = 0;
    let b = 1;
    let fib = b;

    while (fib < number) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib === number;
}



// 3 )
/*

a) 1, 3, 5, 7,___ => 9

b) 2, 4, 8, 16, 32, 64,___   => 128 

c) 0, 1, 4, 9, 16, 25, 36, ___ => 49

d) 4, 16, 36, 64, ___ => 10

e) 1, 1, 2, 3, 5, 8, ___  => 13

f) 2,10, 12, 16, 17, 18, 19, ___  => 200

/*/



// 4) 
/* Resposta : 

por meio do calor que a lâmpada dissipa quando está acessa, 
acenderiamos o primeiro interruptor e esperariamos alguns minutos,
em seguida vamos desligarmos o primeiro interruptor e ligar
o segundo, podemos entrar na sala após ligar o segundo interruptor.

Se a lâmpada estiver acessa, o interruptor 2 é o correto, se estiver
apagada e quente o interruptor 1 é o correto,  e se estiver apagada e 
fria o 3 interruptor é o certo.

Portanto precisariamos ir só uma vez a sala das lâmpadas 

/*/



// 5) // ainda estou estudando funções integradas, por isso só consegui dessa forma
function reverse(str) {
    if (str === '') {
      return '';
    } else {
      return reverse(str.substr(1)) + str.charAt(0);
    }
  }
  
  let reverseString = reverse('Estágio Ribeirão Preto')
  console.log(reverseString)
