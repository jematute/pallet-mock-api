export class ClientSettings {

    private static instance: ClientSettings;
    private constructor() {
        // do something construct...
    }
    userId: string;
    currentScreen: string;
    filterOptions: {
        showGoodCases: true,
        showErrorCases: true,
    }

    static getInstance() {
        if (!ClientSettings.instance) {
            ClientSettings.instance = new ClientSettings();
            // ... any one time initialization goes here ...
        }
        return ClientSettings.instance;
    }

}