# Notes

For the sake of brevity, I included some things that would need to be modified in a production-ready app.

- There are no front-end tests
- Typescript gets compiled on the fly in React, hence all types are included under `dependencies`
- IDs-to-names are hardcoded in React, as suggested in the description
- Both apps were marked as separate repositories for the ease of deployment

Also note that the Star Wars API is unstable and may fail at random.

# Testing

To run the code locally, clone the repository and execute the following commands:
```
cd api
npm install
npm run build
npm start
cd ../client
npm install
npm run build
npm start
```

The API will be accessible at `localhost:9001`, the frontend app will be available at `localhost:3000`.

To run tests for the backend, use `npm run test`.

You can also test both apps on Heroku: `https://starwars-client-vkr.herokuapp.com/` for the frontend or `https://starwars-api-vkr.herokuapp.com/` for direct testing of the API.
