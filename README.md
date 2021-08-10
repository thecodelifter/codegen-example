# Codegen Example w/ React Apollo FE + Node GraphQL BE

This is basic demo on how to setup CodeGen for the BE and FE.

## Installation

First you are going to need to install the Node modules required for the BE and FE.

BE installation

```bash
cd backend && npm i
```

FE installation

```bash
cd frontend && npm i
```

## Usage & Instructions

You will need to run the BE and FE at the same time to do this run the following commands in two separate terminals.

BE command

```bash
cd backend && npm run codegen:generate && npm run start
```

FE command

```bash
cd frontend && npm run codegen:generate && npm run start
```

The `npm run codegen:generate` command is the Codegen Generator generating the types for you to use.

The BE types that are generated from the `backend/schema.ts` file and our outputted to `backend/graphql-types.ts` available for you to use within your backend folder.

Now for the FE all the `GraphQL` files are located in `frontend/src/graphql` from here after running the `cd frontend && npm run codegen:generate` you will see in the same folder as the `GraphQL` files `*.generated.tsx`. These are the outputted files from the `Codegen Generator`.

This generated file contains the `types, hooks required & graphql document` generated.

Code example below on how to import and use the hook from the `GetAllUsers.generated.tsx` file.

```typescript
import { useGetAllUsersQuery } from 'graphql/queries/GetAllUsers.generated';

const User = () => {
  const { data, loading } = useGetAllUsersQuery();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data?.getAllUsers.map((user) => (
        <div key={user?.id}>{user?.name}</div>
      ))}
      {data?.getAllUsers.length === 0 && <div>There are currently no users</div>}
    </div>
  );
};
```
