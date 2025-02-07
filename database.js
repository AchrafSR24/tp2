const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database('./maBaseDeDonnees.sqlite', sqlite3.OPEN_READWRITE |
sqlite3.OPEN_CREATE, (err) => {
if (err) {
console.error(err.message);
} else {
console.log('Connecté à la base de données SQLite.');
db.run(`CREATE TABLE IF NOT EXISTS personnes (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nom TEXT NOT NULL,
adresse TEXT 
)`, (err) => {
if (err) {
console.error(err.message);
} else {
// Insertion de données initiales
const personnes = ['Bob', 'Alice', 'Charlie'];
personnes.forEach((nom) => {
db.run(`INSERT INTO personnes (nom) VALUES (?)`, [nom]);
});
}
});
}
});

db.run(`CREATE TABLE IF NOT EXISTS personnes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    adresse TEXT 
    )`, (err) => {
    if (err) {
    console.error(err.message);
    } else {
    // Insertion de données initiales avec adresses
    }
    });
// Configuration de Keycloak
/*const configureKeycloak = () => {
    console.log('Configuration de Keycloak en cours...');
    exec('keycloak-cli create-realm --name=myrealm', (err, stdout, stderr) => {
        if (err) {
            console.error('Erreur lors de la création du realm:', stderr);
            return;
        }
        console.log('Realm créé:', stdout);
        
        exec('keycloak-cli create-client --realm=myrealm --client-id=myclient --secret=mysecret', (err, stdout, stderr) => {
            if (err) {
                console.error('Erreur lors de la configuration du client:', stderr);
                return;
            }
            console.log('Client configuré:', stdout);
            
            exec('keycloak-cli create-user --realm=myrealm --username=testuser --password=testpass', (err, stdout, stderr) => {
                if (err) {
                    console.error('Erreur lors de la création de l\'utilisateur:', stderr);
                    return;
                }
                console.log('Utilisateur créé:', stdout);
            });
        });
    });
};

configureKeycloak();*/
module.exports = db;