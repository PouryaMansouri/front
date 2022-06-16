import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";

config.rawError = true;

const store = createStore({
  modules: {
    AuthModule,
  },
});

export default store;
