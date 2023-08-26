import { writeFileSync } from 'node:fs';

const crearArchivo = async ( base = 5, isList, hasta) => {
    try {
        let salida = `=================\ntabla del: ${base}\n=================\n\n`;
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base*i}\n`;
        }
    
        if(isList){
            console.log(salida);
        }
        writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada`;
    } catch (error) {
        throw error;
    }
}

export default crearArchivo;