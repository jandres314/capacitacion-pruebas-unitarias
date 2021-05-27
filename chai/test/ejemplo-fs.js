var chai = require('chai');
chai.use(require('chai-fs'));
chai.use(require('chai-json-schema'));

describe('set-pruebas-plugin-fs', () => {

    it(`dado una ruta en filesystem
    cuando se tiene un directorio
    entonces la validación isDirectory debe arrojar un resultado exitoso`, () => {
        const path = 'D:/universidad/04-transaccionales';
        chai.assert.isDirectory(path);
    });

    it(`dado una ruta en filesystem
    cuando se tiene un directorio con archivos
    entonces la validación notIsEmptyDirectory debe arrojar un resultado exitoso`, () => {
        const path = 'D:/universidad/04-transaccionales';
        chai.assert.notIsEmptyDirectory(path);
    });

    it(`dado una ruta en filesystem
    cuando se tiene un archivo con contenido
    entonces la validación notIsEmptyFile debe arrojar un resultado exitoso`, () => {
        const path = 'D:/universidad/04-transaccionales/archivo-json.json';
        chai.assert.notIsEmptyFile(path);
    });

    it(`dado una ruta en filesystem
    cuando se tiene un archivo con un json
    entonces la validación jsonFile debe arrojar un resultado exitoso`, () => {
        const path = 'D:/universidad/04-transaccionales/archivo-json2.json';
        chai.assert.jsonFile(path);
    });

    it(`dado una ruta en filesystem
    cuando se tiene un archivo con un json que tiene un esquema definido y el contenido del archivo cumple con dicho esquema
    entonces la validación jsonSchemaFile debe arrojar un resultado exitoso`, () => {
        const esquema = {
            "type": "object",
            "properties": {
              "nombre": {
                "type": "string"
              }
            },
            "required": [
              "nombre"
            ]
          };
        const path = 'D:/universidad/04-transaccionales/archivo-json2.json';
        chai.assert.jsonSchemaFile(path, esquema);
    });

});