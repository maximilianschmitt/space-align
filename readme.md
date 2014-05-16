space-align is a node.js module for aligning data with spaces.

## Usage

### 1. Install space-align

```
npm install space-align
```

### 2. Pass in your data

``` javascript
var spaceAlign = require('space-align');

var data = [
    ['mmzVOvVYCcGaCW', 2, 'ICzVrD', 'uaUGZwvHghbtqaXCqAqS'],
    ['yOwPyBVGNfBlRezMzIF', 'pbpuZTSKYrnWBIy', 'ghOhMvnnjpydAjWtY', 'VEV'],
    ['usi', 'alZz', 'URVaQMaNsDTyKJo', 15123],
    ['aTmhFgdJCsjkVXAtEDyX', 35, 'AUSG', 'lHMLn']
];

var alignedData = spaceAlign(data);

alignedData.forEach(function(alignedRow) {
    console.log(alignedRow);
});
```

### 3. See the result

```
mmzVOvVYCcGaCW          2                  ICzVrD               uaUGZwvHghbtqaXCqAqS
yOwPyBVGNfBlRezMzIF     pbpuZTSKYrnWBIy    ghOhMvnnjpydAjWtY    VEV
usi                     alZz               URVaQMaNsDTyKJo      15123
aTmhFgdJCsjkVXAtEDyX    35                 AUSG                 lHMLn
```

### 4. Options

Pass in options as the second parameter like this:

``` javascript
spaceAlign(data, {
    spacing: 4 // default
});
```