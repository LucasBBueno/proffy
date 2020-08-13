<h1 align="center">
     <img height="200" style="border-radius: 10px 0 10px" src="https://res.cloudinary.com/lucasbbueno/image/upload/v1597352897/landing_2x_pmdyyu.png">
</h1>

<h4 align="center">

  A ReactJS and React Native application to connect students and teachers
</h4>

<p align="center">
  <a href="#memo-about">About project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#floppy_disk-install">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#cd-run">Run</a>&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
    <img height="400" src="https://res.cloudinary.com/lucasbbueno/image/upload/v1597357175/ProffyWeb_w6gaer.gif">
</P>

<p align="center">
    <img height="450" src="https://res.cloudinary.com/lucasbbueno/image/upload/v1597357175/ProffyMobile_fejaf4.gif">
</P>


## :memo: About

This project was developed during the second event of Next Level Week and consists of an application, Web and Mobile to connect students and teachers.

ReactJS with TypeScript was used for the web application and it was possible to use the same code base for the mobile application with React Native. For the back-end, NodeJS was used together with express to guarantee access to our data through HTTP requests in addition to access to our Sqlite database through Knex.js

Thanks to [Rocketseat] (https://rocketseat.com.br/) for proposing this activity.

## :rocket: Technologies

The project was made with the following technologies:

- [ReactJS](https://reactjs.org/)
- [React-Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Expo](https://expo.io/)
- [NodeJS](https://nodejs.org/en/)
- [Knex.js](http://knexjs.org/)
- [Axios](https://github.com/axios/axios)
- [Express](https://expressjs.com/pt-br/)
- [React-Navigation](https://reactnavigation.org/)
- [VS Code](https://code.visualstudio.com/)


## :floppy_disk: Install
To obtain the application and install its dependencies, we'll use [Yarn](https://yarnpkg.com/) and execute the following commands in the terminal / prompt
```
$ git clone https://github.com/LucasBBueno/proffy
$ cd proffy
```

##### Web
```
$ cd web
$ yarn
```

##### Mobile
```
$ cd ..
$ cd mobile
$ yarn
```

##### Server
```
$ cd ..
$ cd server
$ yarn
```

With that our application available to be executed :smile:

## :cd: Run
The first step to run the applications is to run our server, as after installing the dependencies we are already in the folder, just run:

```
$ yarn start
```
With that our server is started


##### Web
To run the web application we need to open a terminal / prompt in the web folder, after that run:

```
$ yarn start
```

##### Mobile
In the case of our mobile application we will use the expo so that it is possible to execute it. You can use either an emulator or the physical device, in this guide we will choose and Android physical device. For that we must have the Expo application installed on it, and it can be obtained [here](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR).

Now we will start the metro bundler expo server. In the mobile folder execute:
```
$ yarn start
```
The expo server will be started, and now we need to copy the address in the connection tab and change the api.ts file in the project by changing the baseURL path. It should look like this: http://XXX.XXX.XX.XX:3333.

It is important that the port is 3333.

Now in the expo application we must use the scan qr code button and scan the qr code on the metro bundler.

So our application will start :grin:

---

Made with ♥ by Lucas Bueno :wave: [Get in touch!](https://www.linkedin.com/in/lucasbbueno).
