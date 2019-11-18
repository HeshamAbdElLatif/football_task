import axios from "axios";
import {appConfig} from "./AppConfig";

class HttpClient {

    get(path, config, successCb, errorCb) {
        let url = appConfig.getServerUrl() + path;
        config.timeout= 100 * 1000;
        axios.get(url, config)
            .then(successCb)
            .catch(errorCb);
    }
    delete(path, config, successCb, errorCb) {
        let url = appConfig.getServerUrl() + path;
        config.timeout= 100 * 1000;
        axios.delete(url, config)
            .then(successCb)
            .catch(errorCb);
    }
    post(path, config, data, successCb, errorCb) {
        let url = appConfig.getServerUrl() + path;
        config.timeout= 100 * 1000;
        axios.post(url, data, config)
            .then(successCb)
            .catch(errorCb);
    }
    put(path, config, data, successCb, errorCb) {
        let url = appConfig.getServerUrl() + path;
        config.timeout= 100 * 1000;
        axios.put(url, data, config)
            .then(successCb)
            .catch(errorCb);
    }
}

export let httpClient = new HttpClient();
