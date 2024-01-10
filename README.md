# API Project Structure

An API schema/project/boilerplate with a scalable and maintainable architecture reference for building production-ready RESTful APIs using Node.js, Express, TypeScript, and any database of choice.

## Project Structure

A typical top-level directory layout for a project with this architecture is as follows:
```tree
api-schema/
│
├── src/
│   ├── app.ts
│   ├── api/
│   │   ├── controllers/
│   │   │   └── exampleController.ts
│   │   ├── routes/
│   │   │   └── exampleRoutes.ts
│   │   └── middlewares/
│   │       └── exampleMiddleware.ts
│   │
│   ├── models/
│   │   └── exampleModel.ts
│   │
│   ├── services/
│   │   └── exampleService.ts
│   │
│   ├── repositories/
│   │   └── exampleRepository.ts
│   │
│   ├── types/
│   │   └── exampleType.ts
│   │
│   ├── utils/
│   │   └── exampleUtil.ts
│   │
│   └── tests/
│       └── exampleTest.ts
│
├── migrations/
│   └── exampleMigration.ts
│
├── seeds/
│   └── exampleSeed.ts
│
├── public/
│   ├── images/
│   ├── css/
│   └── js/
│
├── views/
│   └── exampleView.ejs
│
├── docs/
│   └── exampleDoc.md
│
├── scripts/
│   └── exampleScript.sh
│
├── dist/ or build/
│   └── (compiled JS files)
│
├── config/
│   └── exampleConfig.ts
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

The directory structure is grouped by file type rather than by modules or features. Each file type has its own folder, and similar functionality is grouped together in the same folder.

The code is written is a example code which sends a response with a message "This is an example" from the `/example` route.

## Getting Started

### Clone the repo

```bash
git clone https://github.com/arnapchapagain/api-schema.git
```

### Rename the project

```bash
mv api-schema <project-name>
```


### Install dependencies

```bash
yarn install 

Or

npm install
```

### Run the server

#### Development

```bash
yarn dev

Or 

npm run dev
```

#### Production

```bash
yarn start

Or 

npm start
```