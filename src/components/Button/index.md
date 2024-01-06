---
nav:
  title: Button
  path: /components
---

## Button

```tsx
/**
 * title: variant & color
 * desc: Button has 4 variants：contained（default）| outlined | text | link;3 colors：primary（default）| green |white。
 * TODO: green and white don't support all variants now
 */
import React, { useState } from 'react';
import { Button } from 'custom-ui';

export default () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        onClick={() => setDisabled((pre) => !pre)}
      >
        {disabled ? 'enable' : 'disable'}
      </Button>

      <div style={{ display: 'flex', gap: '24px', marginTop: '20px' }}>
        <Button disabled={disabled}>Button</Button>
        <Button variant="outlined" disabled={disabled}>
          Button
        </Button>
        <Button variant="dash" disabled={disabled}>
          Button
        </Button>
        <Button variant="text" disabled={disabled}>
          Button
        </Button>
        <Button variant="link" disabled={disabled}>
          Button
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '24px', marginTop: '20px' }}>
        <Button color="secondary" disabled={disabled}>
          Button
        </Button>
        <Button variant="outlined" color="secondary" disabled={disabled}>
          Button
        </Button>
        <Button variant="dash" color="secondary" disabled={disabled}>
          Button
        </Button>
        <Button variant="text" color="secondary" disabled={disabled}>
          Button
        </Button>
        <Button variant="link" color="secondary" disabled={disabled}>
          Button
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '24px', marginTop: '20px' }}>
        <Button color="danger" disabled={disabled}>
          Button
        </Button>
        <Button variant="outlined" color="danger" disabled={disabled}>
          Button
        </Button>
        <Button variant="dash" color="danger" disabled={disabled}>
          Button
        </Button>
        <Button variant="text" color="danger" disabled={disabled}>
          Button
        </Button>
        <Button variant="link" color="danger" disabled={disabled}>
          Button
        </Button>
      </div>
    </>
  );
};
```

```tsx
/**
 * title: size & fullWidth
 * desc: Button has 4 sizes：mini | small | medium（default） | large. When fullWidth is true ，it occupies the full width of its parent element。
 */
import React from 'react';
import { Button } from 'custom-ui';

export default () => (
  <>
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Button size="mini">mini Button</Button>
      <Button size="small">small Button</Button>
      <Button>medium Button</Button>
      <Button size="large">large Button</Button>
    </div>

    <div style={{ display: 'flex', gap: '24px', marginTop: '20px' }}>
      <Button size="small" fullWidth>
        fullWidth Button
      </Button>
    </div>
  </>
);
```

```tsx
/**
 * title: shape
 * desc: Button has 3 shapes：rect（default） | circle | round。
 * TODO: planned feature not supported yet
 */
import React from 'react';
import { Button, DownOutlined } from 'custom-ui';

export default () => (
  <>
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Button>rect Button</Button>
      <Button shape="round">round Button</Button>
      <Button shape="circle">C</Button>
      <Button shape="circle" color="secondary">
        C
      </Button>
      <Button shape="circle" variant="dash" icon={DownOutlined}></Button>
      <Button shape="circle" disabled>
        C
      </Button>
    </div>
  </>
);
```

```tsx
/**
 * title: loading&disabled
 * desc: when Button loading is true，the button is in loading status, unable to be clicked, same with disabled. But loading would provide an extra loading style
 */
import React from 'react';
import { Button, DownOutlined } from 'custom-ui';

export default () => (
  <>
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Button loading>Button</Button>
      <Button color="danger" loading>
        Button
      </Button>
      <Button variant="outlined" loading>
        Button
      </Button>
      <Button shape="circle" loading>
        A
      </Button>
    </div>
  </>
);
```

```tsx
/**
 * title: href & <a>
 * desc: when Button's href property is string，will be rendered as link <a/> 。usually used when variant is link ，for users that're used to opening links with right lick。
 */
import React from 'react';
import { Button, DownOutlined } from 'custom-ui';

export default () => (
  <>
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Button href="https://www.baidu.com" target="_blank">
        Button
      </Button>
      <Button variant="link" href="https://www.google.com" target="_blank">
        Button
      </Button>
    </div>
  </>
);
```

```tsx
/**
 * title: icon
 * desc: displayed icon when no children is provided
 */
```

```tsx
/**
 * title: startIcon & endIcon
 * desc: Button has 2 icon slots：startIcon & endIcon，which can be used to display icons at the start or end of the button。
 */
```
