import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface User {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
    access: string;
    refresh: string;
}

export interface UserAuthInfo {
    errors: unknown;
    user: User;
    isAuthenticated: boolean;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
    errors = {};
    user = {} as User;
    isAuthenticated = !!JwtService.getToken();

    /**
     * Get current user object
     * @returns User
     */
    get currentUser(): User {
        return this.user;
    }

    /**
     * Verify user authentication
     * @returns boolean
     */
    get isUserAuthenticated(): boolean {
        return this.isAuthenticated;
    }

    /**
     * Get authentification errors
     * @returns array
     */
    get getErrors() {
        return this.errors;
    }

    @Mutation
    [Mutations.SET_ERROR](error) {
        this.errors = { ...error };
    }

    @Mutation
    [Mutations.SET_AUTH](user) {
        this.isAuthenticated = true;
        this.user = user;
        this.errors = {};
        JwtService.saveAccessToken(user.access);
        JwtService.saveRefreshToken(user.refresh);
    }

    @Mutation
    [Mutations.SET_USER](user) {
        this.user = user;
    }

    @Mutation
    [Mutations.SET_PASSWORD](password) {
        this.user.password = password;
    }

    @Mutation
    [Mutations.PURGE_AUTH]() {
        this.isAuthenticated = false;
        this.user = {} as User;
        this.errors = [];
        JwtService.destroyToken();
    }

    @Action
    [Actions.LOGIN](credentials) {
        return ApiService.post("token/", credentials)
            .then(({ data }) => {
                this.context.commit(Mutations.SET_AUTH, data);
            })
            .catch(({ response }) => {
                this.context.commit(Mutations.SET_ERROR, response.data.errors);
            });
    }

    @Action
    [Actions.LOGOUT]() {
        this.context.commit(Mutations.PURGE_AUTH);
    }

    @Action
    [Actions.REGISTER](credentials) {
        return ApiService.post("accounts/register/", credentials)
            .then(({ data }) => {})
            .catch(({ response }) => {
                this.context.commit(Mutations.SET_ERROR, response.data.errors);
            });
    }

    @Action
    [Actions.VERIFY_AUTH](payload) {
        if (JwtService.getToken()) {
            ApiService.setHeader();
            ApiService.post("api/token/verify/", payload)
                .then(({ data }) => {
                    this.context.commit(Mutations.SET_AUTH, data);
                })
                .catch(({ response }) => {
                    this.context.commit(Mutations.SET_ERROR, response.data.errors);
                    this.context.commit(Mutations.PURGE_AUTH);
                });
        } else {
            this.context.commit(Mutations.PURGE_AUTH);
        }
    }
}
