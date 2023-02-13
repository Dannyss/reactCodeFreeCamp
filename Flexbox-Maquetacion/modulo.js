function generaElementos(indice){
    var elemento = document.createElement("div");
    elemento.className = 'elemento';
    
    //document.getElementsByClassName('contenedor').appendChild("beforeEnd",elemento);
      if(indice == 0){
         var titulo = document.getElementsByClassName('titulo')[0];
        elemento.innerText = "Titulo 1";                            
        titulo.appendChild(elemento,"beforeEnd");
      }
      
      
      
      
      if(indice == 1){
        elemento.innerText = "Modulo "; 
        document.getElementsByClassName('modulo')[0].appendChild(elemento,"beforeEnd");
        var progress = document.createElement('div');
            progress.className = 'progress';
            
        var progress_bar = document.createElement('div');
            progress_bar.className = 'progress-bar';
            progress_bar.style = 'width:0%';
        var progress_bar_text = document.createElement('span');
            progress_bar_text.className = 'progress-bar-text';
            progress_bar_text.innerText = '0%';
            progress_bar.appendChild(progress_bar_text,'beforeEnd');
            progress.appendChild(progress_bar,'beforeEnd');
            elemento.appendChild(progress, 'beforeEnd');
      } 
        
  }
    var numero_elementos = 2;
  var contador = 0;
    function progresoBarra(id){
    
      if(contador == 100){
          clearInterval(id);
          contador = 0;
        setTimeout(progresandoBarra(),1000);
      }else{
     contador = contador+10;
      document.getElementsByClassName('progress-bar')[0].style.width = contador+"%";
      document.getElementsByClassName('progress-bar-text')[0].innerText = contador+'%';
      }
    
        console.log(contador)
  };
    
    function progresandoBarra(){
    var id;
        id = setInterval(function(){progresoBarra(id);},1000);
    }
    for(indice=0; indice < numero_elementos; indice++){generaElementos(indice); }
   // setTimeout(progresandoBarra(),1000);