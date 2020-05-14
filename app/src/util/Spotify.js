import React from 'react';

export default function Spotify(props) {
    let clientID = 'd34a15672c304568a1673b95dfca72a0';

    const getAccessToken = () => {
        app.get('/login', function(req, res) {
            var scopes = 'user-read-private user-read-email';
            res.redirect('https://accounts.spotify.com/authorize' +
              '?response_type=code' +
              '&client_id=' + clientID +
              (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
              '&redirect_uri=' + encodeURIComponent(redirect_uri));
            });
    }
    return;

}