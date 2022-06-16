import { createI18n } from "vue-i18n/index";

const messages = {
  en: {
    main: "Main",
  },
  fa: {
    main: "اصلی",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages,
});

export default i18n;
