const getApiUrl = () => {
    const hostname = window.location.hostname;
    
    if (hostname.includes('uat.niamod.rocks')) {
      return 'https://uat.niamod.rocks';
    } else if (hostname.includes('green.niamod.rocks')) {
      return 'https://green.niamod.rocks';
    } else if (hostname.includes('niamod.rocks')) {
      return 'https://niamod.rocks';
    } else {
      return 'http://localhost:9080';
    }
};