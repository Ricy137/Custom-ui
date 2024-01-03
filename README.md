# Custom-ui

**it's currently just a self-use and experiment project, codes are in a mess and misleading. I will continue developing it and you are welcom finish the README( more like words I told to myself, lol) to learn more about the repo**

## curent develop plan
* update current components
* Solve the conflicts and provide docs( not only for demonstration, but also for self-use, lol)

## Why do I start the repo?

React components libraries like MUI, ANTD is a good option for fast development phase, but they're also large and hard to customize. So I developed custom-ui since a customized component library will provide the minizest size which is good for performance, it will also be much easier for me to customize these components as well as optimize them and it would be a good way to level up my skills as a frontend engineer.

But work is stressful and in high speed. Fortunately, I managed to get some optimization time for a project and successfully replaced all the MUI components with self made components in that project, which recuded almost 20% of overall JavaScript bundle size (of course which also leads to better performance). I decided to make more advantages of these components and make them more reusable, so I started this repo.

**The ultimate goal of the library is to be highly customizable, include common compoents&interactions and be general (can be used like Apis)**

## Conflicts and thoughts

Next: I love Next, the server side rendering is a great way to improve performance, its optimiztion for images is great, turboPack... But of course, due to Next's SSR feature, I also met many conflicts.

One of the conflicts I met is UnoCSS which is an alternative to TailWind. UnoCSS can not only provide better performance and flexsibility, but also released more potention of Atom CSS : https://antfu.me/posts/reimagine-atomic-css . However, UnoCSS doesn't support SSR :( . Current UnoCSS CLI is used. 

