# Ohjelmistoprojekti
## Backend
In root folder
```
    docker compose up -d
```

Create .env file in backend folder:
```
    JWT_KEY="whatEverYouWant"
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
