# Dunforce
This is my program for the backend test for Dunforce .

*  **Routes are inside /DunforceApi/src/Controller/DunforceAPIController.php**

## Stack

- [ReactJS] For the front end part.
- [Symfony4] is used to serve the web app (REST API).


## Installation


```bash
$ # Clone the repository.
$ git clone https://github.com/Mehdi-111/mehdi-111.git
$
$ # Install packages.
$ npm install  (inside the dunforce_app folder)
$ and then : npm start  (to launch the app on port 3000)
$
$ # to start the server use (inside the DunforceApi folder) : 
$ php -S 127.0.0.1:8000 -t public

```
## API Documentation : 

 **Methods:**
  `GET` | `POST` | `DELETE` | `PUT`
## Routes : 

GET http://localhost:8000/api/dunforce/entreprises 
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ organizations : [...] }`
    
PUT http://localhost:8000/api/dunforce/entreprises/update 
* **Data Params**
Index of the organization to update. ({"index" : 3})
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ organizations : [...] }`  
    
POST http://localhost:8000/api/dunforce/entreprises/add 

* **Data Params**
JSON file :  { "name" :name , 
"description": description , 
users : users }
.

* **Success Response:**
  **
  * **Code:** 200 <br />
    **Content:** `{ organizations : [...] }`   
    
DELETE http://localhost:8000/api/dunforce/entreprises/delete 

* **Data Params**
Index of the organization to delte. ({"index" : 1})

* **Success Response:**
  **
  * **Code:** 200 <br />
    **Content:** `{ organizations : [...] }`       

## Screenshots : 
* **Main screen :**

<img width="1440" alt="Capture d’écran 2020-03-26 à 3 38 12 PM" src="https://user-images.githubusercontent.com/52630337/77660525-bb296680-6f79-11ea-834b-c75d6e63d6be.png">

* **Add organization:**

<img width="1436" alt="Capture d’écran 2020-03-26 à 3 38 36 PM" src="https://user-images.githubusercontent.com/52630337/77660442-9af9a780-6f79-11ea-800d-dbc7ff4e2613.png">

* **Update organization :**

<img width="1000" alt="Capture d’écran 2020-03-26 à 3 38 55 PM" src="https://user-images.githubusercontent.com/52630337/77660265-62f26480-6f79-11ea-9a45-d3d4921dee92.png">

## Next steps :

- [ ] Adding errors handling.
- [ ] Improve front.
- [ ] Adding documentation with swagger
