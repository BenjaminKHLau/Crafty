![CraftyLogo](https://user-images.githubusercontent.com/20654267/198357386-cedcf1d9-c833-4b32-9b28-2189ebdc2df5.png)




[Crafty](https://socrafty.herokuapp.com/) is a web application inspired by Etsy. Crafty is a MineCraft themed American company that lets you buy and sell merchandise. It is headquartered in Texas.


# Project Wiki
* [API Documentation]()
* [Database Schema]()
* [Features]()
* [Redux State Shape]()
* [Contact Us]()


# Built With
#### Frameworks, Platforms, & Libraries:
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-BDBDBD?style=for-the-badge&logo=Flask&logoColor=black)
![Redux](https://img.shields.io/badge/Python-%23F7DF1E?style=for-the-badge&logo=Python&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

#### Database:
![Postgresql](https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

#### Hosting:
![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white)


## Landing Page

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/198359108-0401410e-315c-441f-8b2d-c6710004aa90.png">

## Sign Up Form (Modal)

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/198359245-25097b8e-4220-4493-ba6e-44535a741abb.png">

## Login Form (Modal)

<img width="961" alt="image" src="https://user-images.githubusercontent.com/20654267/198359405-ed46baa3-d020-41ef-b60c-0865b3c51d56.png">

## Shop Details Page 

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/198359671-414127cb-f885-4da4-9fdf-d12cc6af0250.png">

## Create a Shop Form (Modal)

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/198359810-b04eb348-df50-4adf-9907-07c4d251f06e.png">

## Merchandise (Bottom of Shop Details Page)

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/198359998-70351d75-cae0-4357-9260-bc82d6765e45.png">

## Add Merchandise Form (Modal. Must be logged in and be owner of the shop)

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/198360243-ea458803-f5fc-4d91-b8c7-5407f22f61f5.png">

## Merchandise Details Page 

<img width="1920" alt="image" src="https://user-images.githubusercontent.com/20654267/198360592-82e8a0aa-f901-4125-9bb3-179f8bbf7061.png">




# Future Features

#### • Profile
#### • Reviews
#### • AWS Image Uploading
#### • Categories
#### • Search Bar


# Getting started
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/BenjaminKHLau/Halp.git
   ```

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Make sure the SQLite3 database connection URL is in the **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


