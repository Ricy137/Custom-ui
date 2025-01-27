## Overvie

A Select component

## How to use

- A customizable Select for displaying choices and current selected options/placeholder.
- Currently it's just a single select dropdown ( Radio ), TODO: add multi-select dropdown

## How's it developed

The customized Select is actually a dropdown. Since it's a dropdown, it's using `floating-ui` to achieve the dropdown effect as well as related interactions.

Additionally, the components wrapped around functions of `Select`. Every option is just a `div` in the dropdown, and the onClicked would trigger encapsulated function, `handleSelect` to save the current selected option and `Select` onChange event to pass to `onChanged` prop to mimic the `Select` onChange behavior.

And the use of dropdown and div instead of native `select` is to better manipulate UI easily
