
const textos = [
"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
];

var arrow = 0;

function inicial(){
  document.getElementById('falas').innerHTML = textos[0];
  console.log('foi carregado');
}

function myFunction(refer){
  

  if(refer=='direita'){
    if(arrow==textos.length-1){
      arrow = '0';
    }else{
      arrow++;
    }
    
    document.getElementById('falas').innerHTML = textos[arrow];

  }
  if(refer=='esquerda'){
    if(arrow==0){
      arrow = textos.length-1;
    }else{
      arrow--;
    }
    
    document.getElementById('falas').innerHTML = textos[arrow];
  }
}


