// requireds
const fs = require('fs');

let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${ base }, no es un número`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${i} x ${base}= ${ i * base} \n `;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};