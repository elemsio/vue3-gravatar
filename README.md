# Vue 3 - Gravatar Component

Very simple gravatar component made vor Vue 3.

Not compatible with Vue 2.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

#### **Using NPM**

```sh
npm install vue3-gravatar
```

## Usage

### 1.) Add plugin to Vue (main.js/ts)

```js
import VueGravatar from "vue3-gravatar";
const app = createApp(App);
app.use(VueGravatar);
app.mount("#app");
```

### 2.) Your Templates (no import needed)

```html
<vue-gravatar :email="user.email" :size="150" />
```
