class AppConfig {

    getServerUrl() {
        return "https://api.football-data.org/v2/";
    }
}

export let appConfig = new AppConfig();
