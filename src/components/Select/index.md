## Overvie

A Select component

## How to use

- A customizable Select for displaying choices and current selected options/placeholder.
- Set `mode` to 'multiple' for multiple selections. The default `mode` is 'single'
- Set `options` to an array of options to display in the dropdown, and you may want to an array of options as default value
- If you want to customize the option item, you can pass `dropdownClassName` to the component
- If you want to customize the select input, you can pass `className` to the component
- Additional customized style may be applied directly to the component as needed
- Currently it accepts `ref` as props but no use for it. Depending on future needs, the `ref` prop may be utilized.
- For `onChange`, it passed an object with `target` property consisted of `value` and `name`( mimic onChange event of native `select`)

## How's it developed

The customized Select is actually a dropdown. Since it's a dropdown, it's using `floating-ui` to achieve the dropdown effect as well as related interactions.

Additionally, the components wrapped around functions of `Select`. Every option is just a `div` in the dropdown, and the onClicked would trigger encapsulated function, `handleSelect` to save the current selected option and `Select` onChange event to pass to `onChanged` prop to mimic the `Select` onChange behavior.

And the use of dropdown and div instead of native `select` is to better manipulate UI easily
