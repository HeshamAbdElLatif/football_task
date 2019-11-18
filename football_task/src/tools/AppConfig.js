class AppConfig {

    getServerUrl() {
        return "http://api.football-data.org/v2/";
    }
}

export let appConfig = new AppConfig();
