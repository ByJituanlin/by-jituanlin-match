# @by-jituanlin/match

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
// The match function call is a expression,
// you can use it directly in jsx
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
// Support for parameters of function types.
// Its return value will be used as the return value of the match function.
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
// If the branch does not match (or returns null),
// subsequent branches will continue to be performed
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
