## Overview

The Canvas component is a reusable React component designed to encapsulate the functionality of an HTML <canvas> element. It provides a simple interface for drawing on the canvas using the CanvasRenderingContext2D API. The component is designed to be flexible, allowing users to pass custom drawing logic via a draw prop.

## How to use

`draw` prop

## How's it designed

- used `useRef` hook to create a reference to the `canvas` element. Then use the reference to access the canvas.

- used `useEffect` hook to trigger the `draw` function whenever the component mounts or the `draw` prop changes. This ensures that the canvas is updated appropiately.

_It's a really simple component :)_
