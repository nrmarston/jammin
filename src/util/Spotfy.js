let accessToken;
const clientId = 'de88365c28b64d2ba1c2a27239aea5c2';
const redirectUri = 'http://localhost:3000/'; 

const Spotify = {
  getAccessToken(){
    if(accessToken){
      return accessToken;
    }

    // Check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if(accessTokenMatch && expiresInMatch){
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      
      // This clears the parameters, allowing us to grab a new access token when it expires
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      
      const accessURL = `https://accounts.spotify.com/authorize?
      client_id=${clientId}&response_type=token&
      scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      
      window.location = accessToken;

    }
  }
}

export default Spotify;