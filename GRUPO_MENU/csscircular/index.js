import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from './dialog.js';

let lista=null;

export async function insertar_al_inicio(){
    let canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    let DATO = await bootbox_prompt("INSERTAR INICIO-> Ingrese dato del nuevo nodo: ");
    if(DATO==null)
        return;
    try{
        if(lista.buscar(DATO)==true)
            throw new Error("El dato ya se inserto previamente");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }

        let DATO = await bootbox_prompt("INSERTAR FINAL->Ingrese dato del nuevo nodo: ");
        if(DATO==null )
            return;

        if(lista.buscar(DATO)==true)
                throw new Error("El dato ya se inserto previamente");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO); 
    }catch(e){
       await bootbox_alert(e.message);
    }
}//////////////////////////////////////////////////////////
export async function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("INSERTAR ANTES DE  X->Ingrese un dato para el nuevo nodo: ");
        if(DATO==null)
                return;
        let X = await bootbox_prompt("INSERTAR ANTES DE X->Ingrese valor del nodo de referencia: ");
        if(X==null)
                return;
        if(lista.buscar(DATO)==true)
                throw new Error("El dato ya se inserto previamente");
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function inserta_despues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("INSERTAR DESPUES DE X->Ingrese un dato para el nuevo nodo: ");
        if( DATO==null)
                return;
        let X = await bootbox_prompt("INSERTAR DESPUES DE X->Ingrese valor del nodo de referencia: ");
        if(X==null )
                 return;
        if(lista.buscar(DATO)==true)
                throw new Error("El dato ya se inserto previamente");
        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function elimina_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        lista.elimina_inicio();
        lista.dibujarNodosLog();	
        lista.dibujarNodos(null);
        await bootbox_alert("Nodo inicial eliminado correctamente");
    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function elimina_ultimo(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }

        lista.elimina_ultimo();
        lista.dibujarNodosLog();	
        lista.dibujarNodos(null);

        await bootbox_alert("Nodo final eliminado correctamente");
    }catch(e){

        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function elimina_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("ELIMINAR X->Ingrese valor del nodo: ");
        if(DATO==null)
            return;
        lista.elimina_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(null);
        await bootbox_alert("Nodo eliminado correctamente");
    }catch(e){

        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function elimina_antes_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("ELIMINAR ANTES DE X->Ingrese valor del nodo de referencia: ");
        if(DATO==null )
            return;
        lista.elimina_antes_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        await bootbox_alert("Nodo eliminado correctamente");
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function elimina_despues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("ELIMINAR DESPUES DE X->Ingrese valor del nodo de referencia: ");
        if(DATO==null )
            return;
        lista.elimina_despues_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        await bootbox_alert("Nodo eliminado correctamente");
    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////




