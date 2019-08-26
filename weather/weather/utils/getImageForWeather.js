/* eslint-disable global-require */

const images = {
    Clear: require('../assets/clear.png'),
    Hail: require('../assets/hail.png'),
    'Heavy Cloud': require('../assets/heavy-cloud.png'),
    'Light Cloud': require('../assets/light-cloud.png'),
    'Cloud': require('../assets/clouds.png'),
    'Heavy Rain': require('../assets/heavy-rain.png'),
    'Light Rain': require('../assets/light-rain.png'),
    Rain: require('../assets/light-rain.png'),
    Showers: require('../assets/showers.png'),
    Sleet: require('../assets/sleet.png'),
    Snow: require('../assets/snow.png'),
    Thunder: require('../assets/thunder.png'),
    Haze: require('../assets/clear.png'),
    Clouds: require('../assets/clouds.png')
  };
  
  export default weather => images[weather];