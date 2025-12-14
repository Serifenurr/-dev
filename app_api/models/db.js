var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/mekanbul'; 

mongoose.connect(dbURI); 

mongoose.connection.on('connected', function () {
    console.log('Mongoose ' + dbURI + ' adresindeki veritabanına bağlandı\n');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose bağlantı hatası\n: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose bağlantısı kesildi\n');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Bağlantı kapatıldı');
        process.exit(0);
    });
});
require('./venue');