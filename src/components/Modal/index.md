## Overview
Display a modal dialog box. It exports `showModal` and `hideModal` functions to customizablly control actions related to modals. 

## How to use
> When requiring users to interact with the application, but without jumping into a new page and interrupting the user's workflow, you can use the Modal component to create a new floating layer over the current page to get user feedback or display information.

* Use `showModal` and `hideModal` to control the display of the modal.
* the Modal consists of `header`, `divider`, and `content`. THe `header` and `divider` can be adjusted according to specific need/different application styles.
* pass modal content body by `content` prop.


## How's it developed
* The component represents the modal, `ModalRender` always exist in the DOM, which requires to be added to the DOM tree beforehand.
* Then, it's using zustand to manage modal state( information about the modal, such like title, content, etc). `ModalRender` would conditionally render empty content(`</>`) or the modal according to the state.
* `showModal` and `hideModal` are functions to control the modal state, thus control the display of Modal.
* All modal states are currently managed by zustand, but can be replaced by any global state management library. Or, Vanilla JavaScript is a better option.
* Using `react-spring` (`useTransition`) for entering & disappearing animations of the modal according to state.
* Using `floating-ui` for creating floating layer and interaction control, such as `useDismiss` for closing modal when clicking outside of the modal.

## Additional thoughts:
For different projects using different libraries. You can replace `zustand` with Jotai or simply use `context` according to your project. Additionally, `react-spring` maybe overkilled here. A simple CSS animation can be used to replace it. The repo's codes only provided the basic structure/idea of how to develop a modal component. You can customize it according to your project's needs.