# Ohjelmistoprojekti

The project is a website created for a company invented by a group of international business students. The company sells plants and flowers for other companies and offers a maintenance service to upkeep them. The website has the functionality to sign up and login with a username and a password. It is also possible to log in as an admin user to add or delete plants from the collection that the website showcases.

The team members are Ilari Ijäs, Eero Kokkonen, Tomi Salminen and Marika Verger.


## Backend
In root folder
```
    docker compose up -d
```

Create .env file in backend folder:
```
    JWT_KEY="whatEverYouWant"
    POSTGRESQL_USER=postgres
    POSTGRESQL_HOST=localhost
    POSTGRESQL_DB=postgres
    POSTGRESQL_PASSWORD=postgres
    POSTGRESQL_PORT=5432
```

In backend folder:
```
    npm install
    npm run dev
```

## Adding admin user
in backend folder:
```
    cd scripts
    node add_admin_to_db.js
```

## Running backend tests
in backend folder:
```
    npm run test
```

## Frontend
Create .env file in frontend folder:
```
    VITE_API_URL=http://localhost:3001
```

In frontend folder:
```
    npm install
    npm run dev
```

## Link for website
https://kasvi-sivu-frontend.onrender.com/

## Admin user
With admin user you can create new plants to website. <br />
Username: admin@gmail.com <br />
Password: admin@gmail.com <br />
