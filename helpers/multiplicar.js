const fs = require('fs'); 
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';

        for (let i = 1; i<=hasta; i++) {
            salida += `${ colors.green(base) } ${ colors.blue( 'x' ) } ${ colors.green( i ) } ${ colors.blue( '=' ) } ${ base * i } \n`;
        }
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        if( listar ) console.log(salida)

        return colors.rainbow( `tabla-${ base }.txt` );

    } catch (error) {
        throw error;
    } 
}

module.exports = {
    crearArchivo
}