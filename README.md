# by-jituanlin-match

## What is

A convenient function as an alternative to the switch statement.

## Why and How

<table>
<tr>
<th>
Before
</th>
<th>
After
</th>
</tr>

<tr>
<td>
<pre>
let answer;
switch (value) {
  case 1:
    answer = 'one';
    break;
  default:
    answer = 'forty-two';
}
...
<<span>div</span>>
  {answer}
<<span>div</span>/>

</pre>
</td>

<td>
<pre>
<a href="#expression">see detail<sup>1</sup><a/>
<<span>div</span>>
  {match(value)(
       [1, 'one'],
       [stubTrue, 'forty-two']
     )}
<<span>div</span>/>
</pre>
</td>
</tr>
<tr>
<td>
<pre>
switch (value) {
  case _.isArray(value):
    doSomething(value);
    break;
  case _.isNumber(value):
    doAnotherThing(value);
    break
}
</pre>
</td>

<td>
<pre>
<a href="#parameter-type">see detail<sup>2</sup><a/>
match(value)(
  [_.isArray,doSomething],
  [_.isNumber,doAnotherThing]
)
</pre>
</td>
</tr>
<tr>
<td>
<pre>
switch (value) {
  case 1:
    switch (anotherValue) {
      case 2:
        return 'one then two';
      default:
        return 'default';
    }
  default:
    return 'default';
}
</pre>
</td>

<td>
<pre>
<a href="#nested">see detail<sup>3</sup><a/>
match(value)(
  [1,match(anotherValue)(
      [2, 'one then two'])
  ],
  [stubTrue, 'default']
);
</pre>
</td>
</tr>
</table>

## Detail
1. <a name="expression">The match function call is a expression,you can use it directly in jsx </a>

2. <a name="parameter-type">Match function support for parameters of function types.
                     Its return value will be used as the return value of the match function. </a>

3. <a name="nested">If the branch does not match (or returns null),subsequent branches will continue to be performed</a>


## Install and Import
install: `npm install by-jituanlin-match` or
 `yarn add by-jituanlin-match`

then `import {stubTrue,match} from 'by-jituanlin-match'` or

 `const {stubTrue,match} = require('by-jituanlin-match')` 
