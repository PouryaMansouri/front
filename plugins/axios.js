export default function ({
    store,
    app: { $axios },
    redirect
}) {
    $axios.onRequest((config) => {
        if (config.isBasic) {
            config.headers.Authorization = 'Basic Og==';
            return config;
        }
        if (store.state.auth.access) {
            config.headers.Authorization = 'Bearer ' + store.state.auth.access;
        }

        return config;
    });

    $axios.onError(async (error) => {
        const statusCode = error.response ? error.response.status : -1;

        if (statusCode === 401 || statusCode === 422) {
            const refresh = store.state.auth.refresh;
            if (error.response.data.errorCode === 'JWT_TOKEN_EXPIRED' && refresh) {
                if (Object.prototype.hasOwnProperty.call(error.config, 'retryAttempts')) {
                    store.commit('auth/logout');
                    return redirect('/anmelden');
                }
                const config = { retryAttempts: 1, ...error.config };
                try {
                    await store.dispatch('auth/refresh');
                    return Promise.resolve($axios(config));
                } catch (e) {
                    store.commit('auth/logout');
                    return redirect('/anmelden');
                }
            }

            store.commit('auth/logout');
            return redirect('/anmelden');
        }

        return Promise.reject(error);
    });
}