db.noticia.find();
db.noticia.find().pretty;
db.noticia.find({'title': {'$gte': "S"}});

db.usuario.find();
db.usuario.find().pretty;
db.usuario.find({'usuario': "wmonge"});
