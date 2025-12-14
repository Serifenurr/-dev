var mongoose = require('mongoose');

var dbURI = 'mongodb+srv://serifenuryilmaz:mekan2025@cluster0.ua468bs.mongodb.net/mekanbul?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(() => {
        console.log('VERİTABANINA BAĞLANDI!');
    })
    .catch((err) => {
        console.log('BAĞLANTI HATASI:', err);
    });


mongoose.connection.on('disconnected', function () {
    console.log('Bağlantı koptu.');
});

process.on('SIGINT', function () {
    mongoose.connection.close().then(() => {
        process.exit(0);
    });
});

require('./venue');