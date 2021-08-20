import VueGravatar from "./components/vue-gravatar";

const vueGravatarPlugin = {
  install: (app) => {
    app.component("vue-gravatar", VueGravatar);
  },
};

export default vueGravatarPlugin;

export { vueGravatarPlugin };
