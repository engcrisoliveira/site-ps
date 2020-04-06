


$('#carouselExampleControls').on('slide.bs.carousel', function () {
  myFunction('direita');
})

var relato = [
  {
    texto: "Ser um dos fundadores da Seed a Bit me traz um sentimento de eterna conexão com a empresa. Participei de todo processo de fundação e federação junto à galera massa da minha época. O primeiro contrato eu tava lá pra assinar. Nos eventos do MEJ eu tava lá levando a nossa bandeira e gritando, feito louco, que a Seed a Bit seria gigante um dia. Foram 2 anos intensos. Hoje, depois de 1 ano da minha saída percebi de longe que nossa Seed a Bit voou demais e isso se deve muito ao trabalho de todo mundo que passa por ela. É garra, determinação, foco. É vontade de ser Seed a Bit e de levar isso no coração pra sempre. Se essa oportunidade está aberta para você, agarre e aproveite da melhor forma possível! #voaseed 💙",
    ass: "- Felipe Cavalcanti (Estudante do Curso de Ciência da Computação)"
  },
  {
    texto: "Ser Analista Comercial na Seed a Bit foi uma experiência onde aprendi e desenvolvi habilidades que eu não conhecia tanto profissional quanto pessoal. Entender na prática como funciona uma empresa e a troca de conhecimento com outras áreas foi muito enriquecedor para mim. Além disso, poder participar de um meio onde vários universitários engajados através da tecnologia tem o propósito de mudar a nossa realidade foi  uma experiência incrível.",
    ass :"- Andressa Santana (Estudante do Curso de Sistemas de Informação)"
  },
  {
    texto: "Acredito que os desafios nos movem, não importam seus tamanhos. Criamos a Seed por vislumbramos um desafio, o de transformar a realidade na vida de cada aluno, seja de computação ou não, dos nossos cursos e departamentos, de cada pessoa que tem um breve contato com ela.Traçar planos, iniciar uma caminhada, criar uma empresa e ajudar os nossos clientes. Aos poucos escrevendo nossa história e auxiliando tantas outras empresas a também escreverem as suas. A Seed foi feita para cada um de vocês superarem seus próprios limites. Acreditem, conquistem, não se limitem, façam parte dessa história, sejam Seed a Bit.",
    ass :"- Mateus Silva (Estudante do Curso de Ciência da Computação)"
  }
  

]


var arrow = 0;


function myFunction(refer){
  

  if(refer=='direita'){
    if(arrow==relato.length-1){
      arrow = '0';
    }else{
      arrow++;
    }
    
    document.getElementById('falas').innerHTML = relato[arrow].texto;
    document.getElementById('ass').innerHTML = relato[arrow].ass;
  }
  if(refer=='esquerda'){
    if(arrow==0){
      arrow = relato.length-1;
    }else{
      arrow--;
    }
    
    document.getElementById('falas').innerHTML = relato[arrow].texto;
    document.getElementById('ass').innerHTML = relato[arrow].ass;
  }
}


