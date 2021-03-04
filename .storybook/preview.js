import { addDecorator, addParameters } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { contexts } from "./contexts";

addParameters({
  background: [
    { name: "Default theme", value: "#ffffff", default: true },
    { name: "Dark theme", value: "#050449" },
  ]
});


addDecorator(withContexts(contexts));
addDecorator(withKnobs);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // backgrounds: {
  //   default: 'twitter',
  //   values: [
  //     {
  //       name: 'twitter',
  //       value: '#00aced',
  //     },
  //     {
  //       name: 'facebook',
  //       value: '#3b5998',
  //     },
  //   ],
  // },
}