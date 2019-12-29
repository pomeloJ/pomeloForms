# pomeloForms
 It's really simple for getting datas from form [Javascript(ES6)][depends on jQuery]

*for demo something quickly*

*for simple demand*

*for dont't want to think too much*

*for any simple reason*

## CDN JS
for simplicity,just copy and coding

we don't say anymore
```javascript
<script src="https://cdn.ank.uno/github/pomeloJ/pomeloForms/pforms.js"></script>
```

## Basic sample

# IMPORT
```diff
- it depends on jQuery
- it will craw "name" tag data
- if more than one same "name" tag,it will replace by last
```

```javascript
//init it's global function just call it
pforms;
```
### Get
What data type set,get what data type you set.  
```javascirpt
//get data from form
pforms.getDatas($('.formArea'));
```
it will get
```JSON
{
  "userid":"memberUserid",
  "psw":"memberPassword",
  "gender":"1",
  "age":"19~30",
  "note":"memberNote"
}
```
What's HTML code
```HTML
<div class="formArea">
  <input type="text" name="userid" value="memberUserid>
  <input type="password" name="psw" value="memberPassword">
  <select name="gender">
    <option value="0"></option>
    <option value="1" selected></option>
  </select>
  <input type="radio" name="age" value="0~18">
  <input type="radio" name="age" value="19~30" checked>
  <input type="radio" name="age" value="31~45">
  <input type="radio" name="age" value="46~60">
  <input type="radio" name="age" value="60+">
  <textarea name="note">memberNote</textarea>
</div>
```

# Future
* we have no idea now.....

* we expect to make anything intuitive and simple,maybe just for 71% common situation.

# Star
if this JS helps you, please let us know by giving **star** , thank you.
