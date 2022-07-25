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

    dibujarNodos(valor) {
        let canvas = this.canvas;
        let ctx = canvas.getContext("2d");
        let tmp = this.INICIO;

        // coordenadas de los elementos del canvas
        let x = 0;
        let y = 0;
        let ancho = 50;
        let alto = 25;
        let columna = 0; 
        let newfila = 8; 
        let temp = newfila;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let nodo=null;

        while (tmp != null)
        {
            if(valor != undefined && tmp.info==valor){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle =  "rgb(51,51,0)";//GRIS
                ctx.fillRect (x, y, ancho,alto);

                nodo = {};
                nodo.x = x;
                nodo.y = y;
                nodo.width = ancho;
                nodo.height = alto;
                nodo.info = tmp.info;
            }
            else{
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "purple";
                ctx.font = "16px Arial ";
                ctx.fillRect(x, y, ancho, alto);
            }
            //texto
            ctx.fillStyle = "white"; //color de relleno
            ctx.font = "16px Arial ";
            ctx.textAlign = "center"; // centrar texto
            ctx.fillText(tmp.info, x + ancho*0.5, y + alto*0.7); // centrar texto
            ctx.closePath();

            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.moveTo(x + ancho, y + (alto-2.5)/2);
            ctx.lineTo(x + ancho*1.5, y + (alto-2.5)/2);
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.moveTo(x + ancho*1.5, y + (alto-2.5)*0.2);
            ctx.lineTo(x + ancho*1.5 + (alto-2.5)*0.5, y + (alto-2.5)*0.5);
            ctx.lineTo(x + ancho*1.5, y + (alto-2.5)*0.8);
            ctx.closePath();
            ctx.fill();

            x = (ancho * 1.7) * ++columna;
            tmp = tmp.liga;

            // nueva fila
            temp--;
            if(temp == 0)
            {
                // linea a la nueva fila
                //abajo
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x, y + (alto-2.5)/2);
                ctx.lineTo(x, y + (alto-2.5)*1.7);
                ctx.closePath();
                ctx.stroke();
                //atras
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x, y + (alto-2.5)*1.7);
                ctx.lineTo(ancho/2, y + (alto-2.5)*1.7);
                ctx.closePath();
                ctx.stroke();

                //linea abajo
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(ancho/2, y + (alto-2.5)*1.7);
                ctx.lineTo(ancho/2, y + (alto-2.5)*2.5);
                ctx.closePath();
                ctx.stroke();
                
                //cabeza de la flecha
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(ancho/2.5, y + (alto-2.5)*2);
                ctx.lineTo(ancho/2, y + (alto-2.5)*2.5);
                ctx.lineTo(ancho/1.6, y + (alto-2.5)*2);
                ctx.closePath();
                ctx.fill();

                // nueva fila
                temp = newfila;
                y += 55;
                x = 0;
                columna = 0;
            }
            if(nodo!=null){

                setTimeout(function(){
                    //Dibujar rectangulo
                    ctx.beginPath();
                    ctx.fillStyle = "red";//ROJO
                    ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
                    //texto
                    ctx.fillStyle ="white";
                    ctx.font = "16px Arial";
                    ctx.fillText(nodo.info, nodo.x + nodo.width*0.5, nodo.y + nodo.height*0.7); // centrar texto
                    ctx.closePath();
                },500);
            }
        }
    }
}