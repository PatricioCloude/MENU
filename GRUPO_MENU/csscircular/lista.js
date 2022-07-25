class Nodo{

    info=0;
    liga=null;
}
export class Lista{
  
   INICIO=null;
   canvas=null;

   constructor(canvas) {
    this.canvas = canvas;
   }///////////////////////////////////////////
   isVacio(){
     if(this.INICIO==null)
        return true;
     else 
        return false;
   }///////////////////////////////////////////
   dibujarNodosLog(){

    var	tmp=this.INICIO;
    var cad="";
    while(tmp!=null){
        cad+=tmp.info+"::";
        tmp=tmp.liga;
    }
    console.log(cad);
    }///////////////////////////////////////////
   buscar(DATO){
    var encontrado=false;
    var	tmp=this.INICIO;
    while(tmp!=null){
        if(tmp.info==DATO){
            encontrado=true;
            break;
        }
        tmp=tmp.liga;
    }
    
    return encontrado;
   }///////////////////////////////////////////

    /////////////////////////////////////////////
    //-------- FUNCIONES PARA AGREGAR --------// 
    /////////////////////////////////////////////

   inserta_inicio(DATO){
       let P=this.INICIO;
       let Q=new Nodo();
       Q.info=DATO;
       Q.liga=P;
       P=Q;

       this.INICIO=P;
   }///////////////////////////////////////////
   inserta_final(DATO){
        let P=this.INICIO;
        
        let T=P;
        while(T.liga!=null){
            T=T.liga; 
        }
        let Q=new Nodo();
        Q.info=DATO;
        Q.liga=null;
        T.liga=Q;
        
        this.INICIO=P;
    }/////////////////////////////////////////////
    inserta_antes_X (DATO,X){
        let P=this.INICIO;
        let Q = P;
        let BAND = 1;
        let T = null;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
                
            }
        }
        if(BAND==1){
            let X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                X1.liga=P;
                P=X1;
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{

            throw new Error("El nodo dado como referencia no se encuentra en la lista\n");
        }
        this.INICIO=P;
    }/////////////////////////////////////////////
    inserta_despues_X ( DATO,X){
        let P=this.INICIO;

        let Q=P;
        let BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=null){
                Q=Q.liga;
            }
            else {
                BAND=0;
            }
        }
        if (BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else  throw new Error("El nodo dado como referencia no se encuentra en la lista\n");
        this.INICIO=P;
    }/////////////////////////////////////////////


    /////////////////////////////////////////////
    //-------- FUNCIONES PARA ELIMINAR --------// 
    /////////////////////////////////////////////


    elimina_inicio(){
        let Q =this.INICIO;
        this.INICIO = Q.liga;
        Q = null;
    }/////////////////////////////////////////////
    elimina_ultimo(){
        let P=this.INICIO;
        let Q=P;
        let T;
        if(P.liga==null) {P=null;}
        else{
            while(Q.liga!=null){
                T=Q;    
                Q=Q.liga;
            }
            T.liga=null;
        }
        Q=null;
        this.INICIO=P;
    }/////////////////////////////////////////////
    elimina_X(DATO){
        let P=this.INICIO;
        let Q=P;
        let T=null;
        let BAND=1;
        while(Q.info!=DATO && BAND==1){
            if(Q.liga!=null){
                T=Q;    
                Q=Q.liga;
            }
            else {BAND=0;}
        }
        if(BAND == 0) throw new Error("El elemento con informacion X no se encuentra en la lista\n");
        else if(P == Q){
            P = Q.liga;
        } else {
            T.liga = Q.liga;
            } 
        Q=null;
        
        this.INICIO=P;
  
    }/////////////////////////////////////////////
    elimina_antes_X(DATO){
        let P = this.INICIO;
        let Q = null;
        let T = null;
        let R = null;
        let BAND;

        if(P.info == DATO)
            throw new Error("No existe un nodo que precede al que contiene a " + DATO);
        else{
            Q = P;
            T = P;
            BAND = 1;
            while(Q.info !=DATO && BAND == 1){
                if(Q.liga != null){
                    R = T;
                    T = Q;
                    Q = Q.liga;
                }
                else{
                    BAND = 0;
                }
            }
            if(BAND == 0)
                throw new Error("El elemento no se encuentra en la lista");
            else if(P.liga == Q){
                P = Q;
            } 
            else{
                R.liga = Q;
            }
            T = null;
            this.INICIO=P;
        }
  
    }/////////////////////////////////////////////

    elimina_despues_X(x){
        let P = this.INICIO;
        let Q = P;
        let T = null;
        let BAND = 1;

        while(Q.info != x && BAND == 1){
            if(Q.liga != null)
                Q = Q.liga;
            else
                BAND = 0;
        }
        if (BAND == 1){
            if(Q.liga == null)
                //window.alert("No hay nodo despues de "+x):
                throw new Error("No hay nodo despues de "+x);
            else {
                T = Q.liga;
                Q.liga = T.liga;
                T = null;
            }
        }
        else{
            throw new Error("El nodo dado como referencia no se encuentra en la lista\n");
        }
        
    }/////////////////////////////////////////////

    dibujarNodos(){
        let canvas = this.canvas;
        let elemCanvas = canvas.getContext("2d");
        let iterador = this.INICIO;

        // coordenadas de los elementos del canvas
        let ejeX = 0;
        let ejeY = 0;
        let ancho = 50;
        let alto = 20;
        let columna = 0; // indicador de columna(1, 2, 3, ...)
        let newfila = 7; // indicador de nueva fila(1, 2, 3, ...) //7
        let temp = newfila;
        let flechaAbajo = false; // indicador para dibujar la flecha a la nueva fila

        //limpiar el lienzo canva antes de dibujar
        elemCanvas.clearRect(0, 0, canvas.width, canvas.height);

        // dibujando elementos uno por uno
        while (iterador != null){
            //Dibujar rectangulo
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "red";
            elemCanvas.fillRect(ejeX, ejeY, ancho, alto);
            //texto
            elemCanvas.fillStyle = "#ecd9d9"; //color de relleno
            elemCanvas.font = "bold 1rem serif";
            elemCanvas.textAlign = "center"; // centrar texto
            elemCanvas.fillText(iterador.info, ejeX + ancho*0.5, ejeY + alto*0.7); // centrar texto
            elemCanvas.closePath();

            //Dibujar flecha
            //linea de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho, ejeY + alto/2);
            elemCanvas.lineTo(ejeX + ancho*1.5, ejeY + alto/2);
            elemCanvas.closePath();
            elemCanvas.stroke();
            //cabeza de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho*1.5, ejeY + alto*0.2);
            elemCanvas.lineTo(ejeX + ancho*1.5 + alto*0.5, ejeY + alto*0.5);
            elemCanvas.lineTo(ejeX + ancho*1.5, ejeY + alto*0.8);
            elemCanvas.closePath();
            elemCanvas.fill();
            
            // flecha a la nueva fila
            if(flechaAbajo)
            {
                //Dibujar flecha
                //linea abajo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ancho*2, ejeY - alto*0.8);
                elemCanvas.lineTo(ancho*2, ejeY - alto*0.2);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //cabeza de la flecha
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ancho*1.8, ejeY - alto*0.2);
                elemCanvas.lineTo(ancho*2, ejeY + alto*0.1);
                elemCanvas.lineTo(ancho*2.2, ejeY - alto*0.2);
                elemCanvas.closePath();
                elemCanvas.fill();   
                
                flechaAbajo = false;
            }

            ejeX = (ancho * 1.7) * ++columna;
            iterador = iterador.liga;
            // nueva fila
            temp--;

            // linea de retorno
            if(iterador == null)
            {                
                // linea al inicio
                //abajo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ejeX, ejeY + alto/2);
                elemCanvas.lineTo(ejeX, ejeY + alto*1.7);
                elemCanvas.closePath();
                elemCanvas.stroke();            
                //atras
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ejeX, ejeY + alto*1.7);            
                elemCanvas.lineTo(alto*2, ejeY + alto*1.7);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //arriba
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(alto*2, ejeY + alto*1.7);
                elemCanvas.lineTo(ancho*0.8, alto);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //cabeza de la flecha
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ancho*0.6, alto*1.4);
                elemCanvas.lineTo(ancho*0.8, alto);
                elemCanvas.lineTo(ancho, alto*1.4);
                elemCanvas.closePath();
                elemCanvas.fill();   
            }

            // nueva fila
            if(temp == 0)
            {
                // linea a la nueva fila
                //abajo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ejeX, ejeY + alto/2);
                elemCanvas.lineTo(ejeX, ejeY + alto*1.7);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //atras
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ejeX, ejeY + alto*1.7);            
                elemCanvas.lineTo(ancho*2, ejeY + alto*1.7);
                elemCanvas.closePath();
                elemCanvas.stroke();
                flechaAbajo = true;

                // nueva fila
                temp = newfila;
                ejeY += 50;
                ejeX = ancho*1.5 + alto*0.5;
                columna = 1;
                //newfila--;
            }
            //console.log(temp+" "+ejeX+" "+ejeY);
        }
    }
}