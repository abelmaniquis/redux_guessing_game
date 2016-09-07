import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'redux'
import {createStore} from 'redux'

console.log(React);
console.log(render);
console.log(Provider);
console.log(createStore);

render(
<div>
<h1>You can see this</h1>
</div>,
document.getElementById('app')
)

