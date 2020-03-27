const getSpotifyRedirectUri = () => {
    let redirectUri = "";
    if (process.env.GCLOUD_PROJECT) {
        // doesn't appear to every be true - investigate
        redirectUri += "https://the-drop-x-nology.web.app/";
    } else {
        redirectUri += "https://the-drop-x-nology.web.app/";
    }
    return (redirectUri += "connect-music");
};

export const spotify = {
    client_id: "881eaf8069764468a22b14061c72d4e8",
    redirect_uri: getSpotifyRedirectUri(),
    scope: "user-read-private user-read-email user-follow-read"
};
