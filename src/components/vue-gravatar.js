import { h } from "vue";
import md5 from "md5";

export default {
  name: "vue-gravatar",
  props: {
    email: {
      type: String,
      default: "default",
    },
    size: {
      type: [Number, String],
      default: 200,
    },
    tag: {
      type: String,
      default: "div",
    },
    defaultImage: {
      type: String,
      default: '404'
    }
  },
  data() {
    return { finalSize: 200 };
  },
  created() {
    this.finalSize = Number(this.size);

    if (this.finalSize < 24) {
      this.finalSize = 24;
    }

    if (this.finalSize > 2048) {
      this.finalSize = 2048;
    }
  },
  computed: {
    gravatarUrl() {
      const hash = md5(this.email.trim().toLowerCase());
      return `https://www.gravatar.com/avatar/${hash}?s=${this.finalSize}&d=${this.defaultImage}`;
    },
  },
  render() {
    return h("img", {
      src: this.gravatarUrl,
    });
  },
};
