class calculadora{
    buscarArreglo(){
        let input = document.getElementById("result")
        let cadena = input.value
        let c=0,posicion=0, bandera = false
        let arreglo = cadena.split(";")
        let dato =prompt("Ingrese un valor a buscar")
        if(isNaN(dato) == false){
            dato= parseInt(dato)
        }
        console.log(dato)
        while(c < arreglo.length && bandera == false){
            if(arreglo[c] == dato){
                posicion = c
                bandera = true
            }
            c++
        }
        console.log(bandera)
        if(bandera == true){
            input.value = `el elemento ${dato.toString()} se encuentra en la posición: ${posicion.toString()}` 

        }else{
            input.value=`el elemento no se encuentra en el arreglo`
        }
    }
    
    mayor_arreglo(){
        let result= document.getElementById("result")
        let numeros = result.value
        let arreglo = numeros.split(";")
        let mayor,pos=0 
        if (arreglo[0] != ""){
            if ((isNaN(parseInt(arreglo)) == false)){
                    for (let i=0; i < arreglo.length;i++){
                        if(i == 0 ){
                            mayor= arreglo[0]
                        }
                        if (parseInt(arreglo[i]) > mayor){
                            mayor = parseInt(arreglo[i])
                            pos = i
                        }
                    }
                    result.value=`El mayor del arreglo es ${mayor.toString()}`
            }else{
                result.value=`dato ingresado es incorrecto`
            }
        }else{
            alert("ingrese datos")
        }
    }
     eliminar_arreglo(){
        let result = document.getElementById("result")
        let arreglo = result.value
        arreglo = arreglo.split(";")
        let valor_eliminar = prompt("ingrese el valor que desea eliminar")
        let i=0, new_arreglo=[],bandera = false, new_pos=0
        let log = arreglo.length
        console.log(valor_eliminar)
        console.log(arreglo)

        if(isNaN(valor_eliminar) == false){
            valor_eliminar = parseInt(valor_eliminar)
        }
        while(i < log && bandera == false){
            if(arreglo[i] == valor_eliminar){
                bandera= true
            }
        i++
        }
        console.log(bandera)
        if(bandera == true){
            for(i =0; i < log; i++){
                if(arreglo[i] == valor_eliminar){
                    arreglo[i]= " "
                }else{
                    new_pos++
                }
            }
            console.log(new_pos)
            i=0
            let pos = 0
            while(i <= new_pos){
                if(arreglo[pos] !== " "){
                    new_arreglo[i] = arreglo[pos]
                    i++
                }
                pos++
            }
            result.value=`se presenta el arreglo con el elemento eliminado ${new_arreglo.toString()}`
        }else{
            result.value=`El elemento que desea eliminar no se encuentra en el arreglo `
        } 
     }
    insertar_arreglo(){
        let result= document.getElementById("result")
        let arreglo = result.value
        arreglo= arreglo.split(";")
        let valor_inser =prompt("ingrese el valor a insertar")
        let posicion_inser = parseInt(prompt("solicito la posicion a insertar"))
        let long = arreglo.length , inicio = 0, new_arreglo=[]
        if(isNaN(valor_inser) == false){
            valor_inser= parseInt(valor_inser)
        }
        if(posicion_inser > long){
            long = posicion_inser
        }
        long = long
        let bandera = false
        let pos_new=0
        while(inicio <= long && bandera == false){
            if(inicio ==  posicion_inser){
                new_arreglo[inicio] = valor_inser
                bandera= true 
            }else{
                new_arreglo[inicio] = arreglo[inicio]  
            }
            pos_new++
            inicio++
        }
        pos_new = pos_new -1
        if(bandera == true){
            while(pos_new <= long){
                console.log(arreglo[pos_new])
                new_arreglo[pos_new + 1] = arreglo[pos_new]
            pos_new++
            }
        }else{
            while(pos_new <= long){
                console.log(arreglo[pos_new])
                new_arreglo[pos_new] = arreglo[pos_new]
                pos_new++
            }
        }
        result.value= `se presenta con el dato ingresado ` +new_arreglo
        console.log(new_arreglo)
    }
    promedio_arreglo(){
        let result = document.getElementById("result")
        let numero = result.value
        let arreglo = numero.split(";"),bandera = true,c=0
        console.log(arreglo)
        let acum = 0, pos=0, promedio=0
        while(c < arreglo.length && bandera == true){
            if(isNaN(arreglo[c]) == false){
                bandera=true
            }else{
                bandera = false
            }
        c++
        }
        console.log(bandera)
        if(bandera == true ){
            for(let pos = 0; pos < arreglo.length;pos++){
                acum =  acum + parseInt(arreglo[pos])
            }
            pos = arreglo.length 
            console.log(pos)
            promedio= parseFloat(acum/pos)
            result.value=`la suma es `+acum+ ` y el promedio es ` +promedio
        }
        else{
            alert("se ha encontrado un dato incorrecto")
        }
    }
    base10_base2(){
        let result= document.getElementById("result")
        let num = result.value
        let binario = [] , i=0,ini=0,bin=""
        if(isNaN(num) == false){
            if(num >=0){
                while(num >= 1 ){
                    binario[i] = num % 2 
                    num = Math.floor(num / 2)
                    i++
                }
                console.log(binario)
                for(i=binario.length - 1 ; ini <= i ; i--){
                    bin = bin + binario[i]
                }
                result.value=` la conversión es `+bin
            }else{
                result.value=`Error dato incorrecto`
            }
        }else{
            alert(`Dato incorrecto`)
        }
    }
    base10_base8(){
        let result = document.getElementById("result")
        let num = result.value
        let octal= "", conta = 0 
        result.value=`La conversión a base 8 es: `
        if(isNaN(num) == false){
            if(num >=0){
                    while(num > 0){
                        octal = (num % 8) + octal
                        num = Math.floor(num / 8 )
                    }
                    result.value+= octal
            }else{
                result.value=`Error dato incorrecto`
            }
        }else {
            alert(`Valor incorrecto`)
        }
    } 
    base10_base16(){
        let result= document.getElementById("result")
        let numeros=[],pos=0,base16="",aux=0
        let num = parseInt(result.value)
        console.log(num)
        result.value=  `El número` +num
        if (isNaN(num) == false){
            if (num >= 0){
                while (num >= 16){
                    numeros[pos] = num % 16
                    num = Math.floor(num / 16)
                    pos= pos + 1 
                }
                numeros[pos]=num
                for (aux= numeros.length - 1; aux >= 0; aux-- ){
                    switch(numeros[aux]){
                        case 10:
                            base16 = base16 + "A"
                            break
                        case 11:
                            base16 = base16 + "B"
                            break
                        case 12:
                            base16 = base16 + "C"
                            break
                        case 13:
                            base16 = base16 + "D"
                            break
                        case 14:
                            base16 = base16 + "E"
                            break
                        case 15:
                            base16 = base16 + "F"
                            break
                    default:
                        base16 = base16 + numeros[aux]
                    }
                }
                console.log(base16)
                result.value+=` convertido a base 16 es: `+base16
            }else{
                result.value=`error datos incorrectos`
            }
        }else{
            alert(`Valor incorrecto`)
        }
    }
    base2_base16(){
        let entrada = document.getElementById("result")
        let num= entrada.value
        let  alm=[],i,cont=0,arreglo=[],total=0,pos=0,base16="",resp,bandera=true,c=0
        console.log(num.length)
        while(bandera == true && c < num.length){
            if(parseInt( num[c]) == 1 || parseInt( num[c]) == 0){
                console.log(num[c])
                bandera=true
            }else{
                bandera= false
            }
            c++
        }
        console.log(bandera)
        if(isNaN(num) == false){
            if( bandera == true){
                for(i=0;i<num.length;i++){
                    alm[i]=num.charAt(i)
                }
                for(i=0;i<alm.length;i++){
                    if(alm[i]==1){
                        cont = cont+Math.pow(2, alm.length-i-1)
                    }
                }
                while ( cont > 0){
                total = cont % 16;
                cont = Math.floor(cont/ 16);
                switch (total > 9 || total < 16){
                    case total == 10:
                        total = "A";
                        break;
                    case total == 11:
                        total = "B";
                        break;
                    case total == 12:
                        total = "C";
                        break;
                    case total == 13:
                        total = "D";
                        break;
                    case total == 14:
                        total = "E";
                        break;
                    case total == 15:
                        total = "F";
                        break;     
                }
                arreglo.unshift(total)
            }
            if(total ){
                entrada.value = "La base 16 es: "+ arreglo.join('')
            }
          }else{
            result.value= `Dato ingresado incorrecto`
          }
      }else{
        alert(`Error, se ha ingresado un caracter`)
      }
    }
    base2_base10(){    
        let result= document.getElementById("result")
        let numbi = result.value
        let acum = 0, conta = 0,mod = 0,residuo=0,bandera = true,c=0
        console.log(numbi)
        while(bandera == true && c < numbi.length){
            if(parseInt(numbi[c]) == 1 || parseInt(numbi[c]) == 0){
                bandera=true
            }else{
                bandera=false
            }
            c++
        }
        console.log(bandera)
       
        if(isNaN(numbi) == false){
            if(bandera == true){
                    while( numbi >= 1)
                    {
                        numbi = parseInt(numbi)
                        mod = numbi % 10
                        //console.log(mod)
                        residuo= mod * (2**conta)
                        acum = acum + residuo
                        //console.log(residuo)
                        conta++
                        numbi = Math.trunc(numbi / 10 )
                        //console.log(numbi)
                    }
                    result.value=`la conversión del numero a base 10 es: ${acum.toString()}`
                
            }else{
                result.value=`Error al ingresar el dato`
            }
        }else{
            result.value=`Error, dato no aceptado`
        }
    }
    Perfecto(){
        let result = document.getElementById("result")
        let n = 1, acum = 0
        let num = parseInt(result.value)
        while (n < num){
            if (num % n == 0){
                acum = acum + n
            }
            n++
        }
        if(acum == num){ 
        result.value= 'el numero es perfecto'  }
        else{ result.value ='el numero no es perfecto'}
    }
    primo(){
        let result = document.getElementById("result")
        let i =1,conta=0
        let num = parseInt(result.value)
        console.log(isNaN(num))
        console.log(num,result) 
        if (isNaN(num) == false){
            if (num >= 0 ){
                while(i <= num && conta <= 2 ){
                 if (num % i == 0 ){
                    conta = conta + 1  
                 }
                 i++
                }
                if (conta == 2 ){
                 result.value=`El numero ${num.toString()} es primo`;
                }else{
                 result.value=`El numero ${num.toString()} no es primo`;
                }
            }else{
             result.value=`Los números negativos no son primos`;
         }
         }else{
             alert(`Ingrese datos validos`)
         }
 
     }
     fibonacci(){
        let result = document.getElementById("result")
        let num = parseInt(result.value)
        let a=0,b=1,c=0,fibonacci=""
        if(isNaN(num) == false){
            if(num > 0 ){
                for (let i = 0; i <num; i++)
                {
                   fibonacci= fibonacci +" " +a.toString()
                   c =a+b
                   a = b 
                   b = c
                } 
                result.value=` la respuesta es : ${fibonacci.toString()}`  
            }else{
                result.value=`Ingrese valores validos`
            }
        }else{
           alert(`Ingrese datos validos`)
        }
    }
    divisores(){
        let result = document.getElementById("result")
        let num = parseInt(result.value)
        let i 
        result.value=`los divisores del ${num.toString()} son: ` 
        if (isNaN(num)== false){
            if(num >=0){
                for(i = 1; i < num; i++){
                    if (num % i == 0 )
                    {
                       result.value+=`${i.toString()} ; `
                    }
                }
                if( num == 0 ){
                    result.value=`El 0 tiene divisores infinitos`
                }else if(num == 1){
                    result.value=`el divisor de ${num.toString()} es 1`
                }
            }else{
                let pos=-1  
                while( num < pos ){
                    if( num % pos == 0 ){
                        result.value+=` ${pos.toString()} `
                    }
                    pos--
                }
            }
        }else{
            alert(`Ingrese datos validos`)
        }
    }
    invertido(){
        let result = document.getElementById("result")
        let digito=0,invertido=""
        let num = result.value
        num = parseInt(num)
        
        if(isNaN (num) == false){
                if(num >= 0 ){
                    while (num > 0){
                        digito = num % 10
                        
                        num = Math.floor(num / 10)
                        invertido = invertido + digito.toString();
                    }
                    result.value = ` el resultado es  `+invertido    
        }
    }
        else{
            alert(`Ingrese datos validos`)
        }   

    }
palindroma(){
    let result= document.getElementById("result")
    let log
    let newcadena= "", invertida=""
    let cadena =result.value
    if(isNaN(cadena) == true ){
       for(let log =cadena.length-1;log >= 0 ;log--){
         if (cadena[log] !== " " && (cadena[log] !== "," && cadena[log] !== ";")){
            newcadena = cadena[log] + newcadena
            invertida = invertida + cadena[log]
         }
       }
       console.log(newcadena,invertida)
       if(newcadena == invertida){
        result.value=` la palabra ` +cadena+ ` es palindroma`
       }else{
        result.value=`La palabra ` +cadena+ ` no es palindroma`
       }
    }else{
        alert(`Ingrese datos validos`)
    }
}
Invertida(){
    let result = document.getElementById("result")
    let cadena = result.value
    let nuevaCadena =" ", i = 0
    if(isNaN(cadena) == true){
        for (i = cadena.length - 1; i >= 0; i--) {
            nuevaCadena = nuevaCadena + cadena[i];
        }
        result.value = `La palabra invertida es: ` +nuevaCadena
    }else{
        alert(`Ingrese datos validos`)
    }
}

caracteres(){
    let result= document.getElementById("result")
    let cadena = result.value
    let conta_vocales=0,contar_caracteres=0, conta_letras=0,conta_num=0
    let letras =["B","b","C","c","D","d","F","f","G","g","H","h","J","j","K","k","L","l","M","m","N","n","ñ","Ñ","P","p","Q","q","R","r","S","s","T","t","V","v","W","w","X","x","Y","y","Z","z"]
        for(let i = 0; i < cadena.length;i++){
            switch (cadena[i]){
                case "a":
                case "A":
                    conta_vocales++
                break
                case "e":
                case "E":
                conta_vocales++
                break
                case "i":
                case "I":
                    conta_vocales++
                break
                case "o":
                case "O":
                conta_vocales++
                break
                case "u":
                case "U":
                    conta_vocales++
                break
            default:
                if(isNaN(cadena[i]) == false && cadena[i] !== " "){
                    conta_num++
                } 
                if(isNaN(cadena[i]) == true && cadena[i] !== " "){
                    let pos = 0
                    let bandera = false
                    while(pos <=43 && bandera == false){
                        if(cadena[i] == letras[pos] ){
                            bandera = true
                        }
                    pos++
                    }
                    if(bandera == true){
                        conta_letras++
                    }else{
                        contar_caracteres++
                    }
                }
            }
        }
        if((conta_letras == 0)&& (conta_num == 0) && (conta_vocales == 0) && (contar_caracteres == 0)){
            result.value=`Ingrese caracteres`
        }else{
            result.value=`se ha ingresado ${conta_vocales.toString()} vocales, ${conta_letras.toString()} letras, ${conta_num.toString()} números, ${contar_caracteres.toString()} caracteres`
}
}
buscar_cadena(){
    let result = document.getElementById("result")
    let cadena = result.value
    let bandera=false, ini=0, pos1 = 0, pos2 = 0 , new_cadena="",ini_posicion = 0 
    if(isNaN(cadena) == true){
        let enco_cadena = prompt("ingrese cadena a buscar")
        while(ini < cadena.length && bandera == false){
            if(cadena[ini] == enco_cadena[0]){
                pos1 = ini 
                ini_posicion= pos1
                pos2 = 0
                while(pos2 < enco_cadena.length){
                    if(cadena[pos1] == enco_cadena[pos2]){
                       new_cadena = new_cadena + cadena[pos1]
                    }
                    pos2++
                    pos1++ 
                }
                if(new_cadena == enco_cadena){
                    bandera= true 
                }
            }
            ini++
        }
        if(bandera == true){
            pos1 = pos1 - 1
            alert("cadena ha sido encontrada")
            result.value=`inicia en la posición ` +ini_posicion+ ` y finaliza en la posición ` +pos1
        }else{
            result.value=`la cadena no se encuentra en el arreglo`
        }
    }else{
        alert(`Ingrese datos validos`)
    
    }

}
conta_palabras(){
    let result= document.getElementById("result")
    let cadena = result.value
    let conta = 0,i = 0, log = cadena.length - 1,pos=0,new_cadena=[],posicion=0,bandera=false
    let caracter =[",",";","/","-","=","#","@","(",")","=","[","]","+","!","`","%","?","¿",".","^","$","{","}"]
    let longitud = caracter.length -1
    let numeros=["0","1","2","3","4","5","6","7","8","9"]
    if(isNaN(cadena) == true){
        while( pos <= log){
            while( i <= longitud){
                new_cadena[pos] = cadena[pos]
                if(cadena[pos] == caracter[i] || numeros[i] == cadena[pos]){
                    posicion = pos
                    bandera  = true
                }
                i++
            }
            if(bandera == true){
                new_cadena[posicion] = " "
            }
            bandera = false
            pos++
            i=0
        }
        cadena= new_cadena
        if (cadena.length != 0 && isNaN(cadena) == true ){
            if((cadena[0] !== " " && cadena[log] == " ") || (cadena[0] == " " && cadena[log] == " " )){
                conta = 0 
                while(i < log){
                    if((cadena[i] !== " ") && (cadena[i+1]==" ") ){
                        conta = conta + 1     
                    }
                    i++
                }
            }else if((cadena [0] !== " ") || (cadena [0] == " " && cadena[log] !== " ")){
                conta = 1 
                while(i < log){
                    if((cadena[i] !== " " && cadena[i+1] ==" ") && (cadena[i] !== ";" )) {
                        conta = conta + 1 
                    }
                    i++
                }
            }
            result.value=` se ingreso ` +conta+ ` palabras` 
        }else{
            result.value=` ingrese datos validos`
        }
    }else{
        alert(`Ingrese datos validos`)
    }
        
}
}
let cal = new calculadora()