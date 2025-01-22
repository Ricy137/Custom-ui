## Overview
Display brief messages/notification
## How to use
Used for notification of processes that have been or will be performed

## How's it developed
Similar to `Modal`. The only difference is that the states of Toast won't be replaced by new `showToast`, instead new states pushed by `showToast` will be added to the existing states. The `Toast` component will then display all the states in the array.