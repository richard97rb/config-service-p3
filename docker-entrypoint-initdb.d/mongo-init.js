print('Start Databases#################################################################');

db = db.getSiblingDB('customers_database');
db.createUser(
    {
        user: 'root',
        pwd: 'root',
        roles: [{ role: 'readWrite', db: 'customers_database' }],
    },
);
db.createCollection('customers');

db = db.getSiblingDB('accounts_database');
db.createUser(
    {
        user: 'root',
        pwd: 'root',
        roles: [{ role: 'readWrite', db: 'accounts_database' }],
    },
);
db.createCollection('accounts');

db = db.getSiblingDB('transactions_database');
db.createUser(
    {
        user: 'root',
        pwd: 'root',
        roles: [{ role: 'readWrite', db: 'transactions_database' }],
    },
);
db.createCollection('transactions');

print('END #################################################################');