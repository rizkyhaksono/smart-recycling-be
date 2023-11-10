# Smart Recycling API Docs

Test on [`POSTMAN`](https://www.postman.com/) or else.

## Sign Up

```
POST - http://localhost:3000/api/signup
Payload:
{
  "name":"User name",
  "email":"user@email.com",
  "password":"*****"
}
```

## Sign In

```
POST - http://localhost:3000/api/login
Payload:
{
  "email":"user@email.com",
  "password":"*****"
}

Response:
{
  "status": 200,
  "access_token": "eyJhbGciOiJIUzI1N****",
  "refresh_token": "eyJhbGciOiJI****"
}
```

## Get Data by Token

```
GET - http://localhost:3000/api/profile
Header -  Authorization: "Bearer access_token"
```

## Refresh Token

```
GET - http://localhost:3000/api/refresh
Header -  Authorization: "Bearer refresh_token"

Response: (New access and refresh token)
{
  "status": 200,
  "access_token": "eyJhbGciOiJIUzI1NiI****",
  "refresh_token": "eyJhbGciOiJIUzI1NiI****"
}
```
