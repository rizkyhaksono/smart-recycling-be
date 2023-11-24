# Smart Recycling API Docs

Smart Recycling API using prisma and MySQL

## Installation

> npm i

> yarn install

> pnpm install

Test on [`POSTMAN`](https://www.postman.com/) or else.

## Table of Endpoints

| No. | Endpoints              | Method |
| --- | ---------------------- | ------ |
| 1   | /api/signup            | POST   |
| 2   | /api/signin            | POST   |
| 3   | /api/user              | GET    |
| 4   | /api/events            | GET    |
| 5   | /api/events            | POST   |
| 6   | /api/reports           | GET    |
| 7   | /api/reports           | POST   |
| 8   | /api/exchange          | GET    |
| 8   | /api/exchange/:user_id | GET    |
| 8   | /api/exchange          | POST   |

### Sign Up

```
POST - http://localhost:4000/api/signup
Payload:
{
    "name": "test1",
    "email": "test1@gmail.com",
    "password": "root"
}
```

Response:

```
{
    "success": true,
    "data": {
        "id": "49b28845-7c93-407a-b5f0-d73aadf5bb0c",
        "name": "test1",
        "email": "test1@gmail.com",
        "password": "$2a$12$vPpP8A9d0NhaePh7c6DAUuqR4ziJgD4YYBl2vRhYTKRw54es/WzfS",
        "role": "USER",
        "points": 0,
        "created_at": "2023-11-23T05:40:48.060Z",
        "updated_at": "2023-11-23T05:40:48.060Z"
    }
}
```

### Sign In

```

POST - http://localhost:4000/api/signin
Payload:
{
    "email": "test1@gmail.com",
    "password": "root"
}
```

Response:

```
{
    "status": 200,
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5YjI4ODQ1LTdjOTMtNDA3YS1iNWYwLWQ3M2FhZGY1YmIwYyIsImlhdCI6MTcwMDcxODY1MSwiZXhwIjoxNzAwNzI5NDUxfQ.e58ZLrSeY8B3jRphjZ9-rLYH_c0V6whV_WVFbbDICKw",
    "refresh_token": "7f884e0edfb736f841678bd7368d7e1c"
}
```

### Get User

```
GET - http://localhost:4000/api/user
Header - Authorization: "Bearer access_token"
```

> **EXAMPLE Bearer Token:** eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5YjI4ODQ1LTdjOTMtNDA3YS1iNWYwLWQ3M2FhZGY1YmIwYyIsImlhdCI6MTcwMDcxODY1MSwiZXhwIjoxNzAwNzI5NDUxfQ.e58ZLrSeY8B3jRphjZ9-rLYH_c0V6whV_WVFbbDICKw

Response:

```
{
    "status": 200,
    "user": {
        "uuid": "49b28845-7c93-407a-b5f0-d73aadf5bb0c",
        "name": "test1",
        "email": "test1@gmail.com",
        "role": "USER"
    }
}
```

### POST Events

```
POST - http://localhost:4000/api/events
{
  "title": "Sample Event 3",
  "description": "This is a sample event description.",
  "path_image": "",
  "user_id": "49b28845-7c93-407a-b5f0-d73aadf5bb0c"
}
```

Response:

```
{
    "status": 201,
    "data": {
        "id": 3,
        "title": "Sample Event 3",
        "description": "This is a sample event description.",
        "path_image": "",
        "created_at": "2023-11-23T05:53:49.288Z",
        "user_id": "49b28845-7c93-407a-b5f0-d73aadf5bb0c"
    }
}
```

Credit to [Jody Yuantoro](https://github.com/xyzuan) and [Syauqi](https://github.com/syauqiamiq)

[MIT LICENSE](https://github.com/rizkyhaksono/smartrecycling-be/blob/main/LICENSE)
