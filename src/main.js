import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";
import router from "./router/router";
import VIntersection from "./directives/VIntersection";

console.log(components, "main");

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.directive("intersection", VIntersection);
app.use(router).mount("#app");
