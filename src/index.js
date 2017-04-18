import { fromJS } from 'immutable';

export default (engine, whitelist = []) => {
    return {
        ...engine,

        load() {
            return engine.load().then((result) => {
                whitelist.forEach((key) => {
                    // Support strings for one-level paths
                    if (typeof key === 'string') {
                        result[key] = fromJS(result[key]);  // eslint-disable-line no-param-reassign
                        return;
                    }

                    let loadState = result || {};
                    const keyFound = key.slice(0, key.length - 1).every((keyPart) => {
                        if (!loadState.hasOwnProperty(keyPart)) {
                            return false;
                        }
                        loadState = loadState[keyPart];
                        return true;
                    });

                    const lastKeyPart = key[key.length - 1];
                    if (keyFound && loadState.hasOwnProperty(lastKeyPart)) {
                        loadState[lastKeyPart] = fromJS(loadState[lastKeyPart]);
                    }
                });
                return result;
            });
        },
    };
};
