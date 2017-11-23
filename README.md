# QJ-Button

react component button

## Install

```shell
npm install qj-button
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import qjButton from 'qj-button'

const element = document.getElementById('root');

ReactDOM.render(<Button>button</Button>, element);
```

## API

Button

| Name            | Type        | Default           | Description                 |
| --------------- | ----------- | ----------------- | --------------------------- |
| prefixCls       | string      | 'qj-button'       | prefixCls of this component |
| children        | string/node |                   |                             |
| type            | string      | 'default'         | type of style               |
| disabled        | bool        | false             |                             |
| group           | bool        | false             |                             |
| inline          | bool        | false             |                             |
| loading         | bool        | false             |                             |
| activeClassName | string      | 'qj-button-active |                             |
| iconClass       | string      | null              |                             |
| className       | string      |                   |                             |
| onClick         | func        |                   |                             |
|                 |             |                   |                             |

