# services/toasts
[< Go Back](../../README.md)

Toast/messaging service

## Exports:
- `success(msg, options)`: display toast as success/positive message
- `error(msg, options)`: display toast as error/negative message
- `warning(msg, options)`: display toast as warning message or alert
- `info(msg, options)`: display toast as generic message
- `message[which](msg, options)`: places children in the center of the page, for full screen messaging

## Options:
- `autoClose` `<number=5000>`: number of milliseconds the message will remain open


## Example (Auto-Generation):
```js
import React from 'react'
import { axios } from '@arundo/react-auth'
import { success, error, warning, info, message } from '@arundo/react-shell'

axios
  .get('https://foo.com')
  .then(({ data }) => success(data))
  .error(error)

const equalToError = message.error

axios
  .get('https://foo.com')
  .error(equalToError)

export const MyPage = () => <div />
```

## External Documentation
https://www.npmjs.com/package/react-toastify
