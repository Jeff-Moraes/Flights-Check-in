<h1 align="center">
    Flights Check-in
</h1>

<h4 align="center">
  Web application build with React to help users to make a flight Check-in
</h4>

<p align="center">
  <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;
</p>


![App Screenshot](https://res.cloudinary.com/jeffmoraes/image/upload/c_scale,h_478/v1604444692/portfolio/Captura_de_Tela_2020-11-04_a%CC%80s_00.04.26_voqmwl.png)

<p align="center">
  <a href="https://flights-check-in.vercel.app/" target="_blank">
    <img alt="Demo on Netlify" src="https://res.cloudinary.com/jeffmoraes/image/upload/c_scale,w_236/v1603399947/portfolio/Captura_de_Tela_2020-10-22_a%CC%80s_22.52.10_px7ami.png">
  </a>
</p>

## About

A small React single page application to do web check-in for flights

## Technologies

This project was developed with the following technologies:

- [ReactJS](https://reactjs.org/)
- [styled-components](https://www.styled-components.com/)
- [react-router-dom](https://github.com/ReactTraining/react-router)
- [material-ui](https://github.com/mui-org/material-ui)

## How To Use

To try it at the deployed version [here](https://flights-check-in.vercel.app/) you need to run the fake server on your terminal.
You can do the check-in with the example flight and passenger info:
</br>
flight number = BER3270 </br>
passenger last name = Doe
</br>
```bash
# to try it at the vercel deployed link you have to go into the repository folder and run the fake json server on your terminal
$ npx json-server server.json -p 3333 -w
```
</br>
To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:
</br>

```bash
# Clone this repository
$ git clone https://github.com/Jeff-Moraes/Flights-Check-in

# Go into the repository
$ cd BVG-Ticket-Picker

# Install dependencies
$ yarn install

# Run the app
$ yarn start

# in another terminal run the json-server - fake API
$ npx json-server server.json -p 3333 -w
```

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
