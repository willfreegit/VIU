db.createCollection("noticia")
db.createCollection("usuario")
db.createCollection("visitas")

db.runCommand( {  
   collMod: "usuario",  
   validator: { $jsonSchema: {  
      bsonType: "object",  
      required: [ "nombre", "apellido", "correo", "usuario", "password" ],  
      properties: {  
         nombre: {  
            bsonType: "string",  
            description: "nombre debe ser de tipo string y requerido"  
         },  
         apellido: {  
            bsonType: "string",  
            description: "apellido debe ser de tipo string y requerido"  
         },  
         correo: {  
            bsonType: "string",  
            description: "correo debe ser de tipo string y requerido"  
         },  
         usuario: {  
            bsonType: "string",  
            description: "usuario debe ser de tipo string y requerido"  
         },  
         password: {  
            bsonType: "string",  
            description: "password debe ser de tipo string y requerido"  
         }  
      }  
   } },  
   validationLevel: "strict"  
   } )  

db.runCommand( {  
   collMod: "visitas",  
   validator: { $jsonSchema: {  
      bsonType: "object",  
      required: [ "id_noticia", "id_usuario", "fecha_consulta", "contador" ],  
      properties: {  
         id_noticia: {  
            bsonType: "bson",  
            description: "id_noticia debe ser de tipo bson y requerido"  
         },  
         id_usuario: {  
            bsonType: "bson",  
            description: "id_usuario debe ser de tipo bson y requerido"  
         },  
         fecha_consulta: {  
            bsonType: "timestamp",  
            description: "fecha_consulta debe ser de tipo timestamp y requerido"  
         },  
         contador: {  
            bsonType: "int",  
            description: "contador debe ser de tipo integer y requerido"  
         }
      }  
   } },  
   validationLevel: "strict"  
   } )  
