# Vue 3 - Gravatar Component

Not compatible with Vue 2

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

#### **Using NPM**

```sh
npm install vue3-gravatar
```

## Usage

### 1.) Add plugin to Vue

You can define your custom breakpoints:

```js
import VueGravatar from "vue3-gravatar";
const app = createApp(App);
app.use(VueGravatar);
app.mount("#app");
```

### 2.) Usage (no import needed)

```html
<vue-gravatar :email="user.email" :size="150" />
```
