# Weather App ⛅

Weather application where you can search current temperature by city. You can also save your favorite cities, so you don't have to search them every time.

## Getting Started

To get up and running with this project, just git clone it to your local machine. Then run npm install and then npm start, but before you do that, you'll need to have a [OpenWeatherMap](https://openweathermap.org/) API key. You also need to create .env file at the root of the project and add REACT_APP_WEATHER_API_KEY=your-api-key OpenWeatherMap api key there.

### Prerequisites

To try out this project, you'll need to have 2 things, an OpenWeatherMap API key and to have Node installed on your machine.

### Installing

Here's a simple step by step guide to get the local development environment running.

```
git clone https://github.com/hkoskinen/weather-app.git
cd weather-app
npm install
cp .env.example .env
```

Now you need to add your own OpenWeatherMap API key after the equal siqn REACT_APP_WEATHER_API_KEY=123yourapikey456 in to the .env file. Once that is done, you can execute the npm start command to start the application.


## Running the tests

Once you have the project cloned, and you have run npm install, then you can execute npm test command to run the automated tests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
