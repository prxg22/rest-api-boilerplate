# rest-api-boilerplate
Node + Express API with JWT auth module

## Quickstart
  - Clone this repository
  ```
    $ git clone https://github.com/prxg22/rest-api-boilerplate.git
  ```

  - Install dependencies
  ```
    $ npm i
  ```

  - Start project
  ```
    $ npm start
  ```

## API Reference
  ## Constants

<dl>
<dt><a href="#jwtSecret">jwtSecret</a> : <code>string</code></dt>
<dd><p>JWT secret word to generate tokens</p>
</dd>
<dt><a href="#expiration">expiration</a> : <code>number</code></dt>
<dd><p>Expiration time to tokens</p>
</dd>
<dt><a href="#saltRounds">saltRounds</a> : <code>number</code></dt>
<dd><p>bcrypt salt rounds for password and tokens generation</p>
</dd>
<dt><a href="#passwordLength">passwordLength</a> : <code>number</code></dt>
<dd><p>min password length</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#hashPassword">hashPassword(password)</a> ⇒ <code>string</code></dt>
<dd><p>Hash password</p>
</dd>
<dt><a href="#comparePassword">comparePassword(password, hashed)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true/false if password is equal the hashed.</p>
</dd>
<dt><a href="#authenticate">authenticate(obj)</a> ⇒ <code>string</code></dt>
<dd><p>Generates JWT token from obj</p>
</dd>
<dt><a href="#authorize">authorize(password, hashed)</a> ⇒ <code>boolean</code> | <code>Object</code></dt>
<dd><p>Checks if token is valid and returns stored object</p>
</dd>
<dt><a href="#authorizeMiddleware">authorizeMiddleware(req, res, next)</a> ⇒ <code>void</code></dt>
<dd><p>Checks if token is valid and returns stored object</p>
</dd>
<dt><a href="#register">register(data)</a> ⇒ <code>UserModel</code></dt>
<dd><p>Creates user and return it</p>
</dd>
<dt><a href="#authenticate">authenticate(data)</a> ⇒ <code>UserModel</code></dt>
<dd><p>Authenticates user and returns JWT token which should be
transported in future requests</p>
</dd>
<dt><a href="#register">register(req, res, next)</a> ⇒ <code>void</code></dt>
<dd><p>User registration route</p>
</dd>
<dt><a href="#login">login(req, res, next)</a> ⇒ <code>void</code></dt>
<dd><p>User logins route</p>
</dd>
</dl>

<a name="jwtSecret"></a>

## jwtSecret : <code>string</code>
JWT secret word to generate tokens

**Kind**: global constant  
<a name="expiration"></a>

## expiration : <code>number</code>
Expiration time to tokens

**Kind**: global constant  
<a name="saltRounds"></a>

## saltRounds : <code>number</code>
bcrypt salt rounds for password and tokens generation

**Kind**: global constant  
<a name="passwordLength"></a>

## passwordLength : <code>number</code>
min password length

**Kind**: global constant  
<a name="hashPassword"></a>

## hashPassword(password) ⇒ <code>string</code>
Hash password

**Kind**: global function  
**Returns**: <code>string</code> - hashed password  
**Throws**:

- <code>APIError</code> If no passowrd is given

**Expose**:   

| Param | Type | Description |
| --- | --- | --- |
| password | <code>string</code> | Password to be hashed |

<a name="comparePassword"></a>

## comparePassword(password, hashed) ⇒ <code>boolean</code>
Returns true/false if password is equal the hashed.

**Kind**: global function  
**Expose**:   

| Param | Type | Description |
| --- | --- | --- |
| password | <code>string</code> | Password to be checked |
| hashed | <code>string</code> | Hasehd password |

<a name="authenticate"></a>

## authenticate(obj) ⇒ <code>string</code>
Generates JWT token from obj

**Kind**: global function  
**Returns**: <code>string</code> - JWT token  
**Expose**:   

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>string</code> | Object to be transported |

<a name="authorize"></a>

## authorize(password, hashed) ⇒ <code>boolean</code> \| <code>Object</code>
Checks if token is valid and returns stored object

**Kind**: global function  
**Expose**:   

| Param | Type | Description |
| --- | --- | --- |
| password | <code>string</code> | Password to be checked |
| hashed | <code>string</code> | Hasehd password |

<a name="authorizeMiddleware"></a>

## authorizeMiddleware(req, res, next) ⇒ <code>void</code>
Checks if token is valid and returns stored object

**Kind**: global function  
**Expose**:   

| Param | Type | Description |
| --- | --- | --- |
| req | <code>express.Request</code> | Express http request |
| res | <code>express.Response</code> | Express http response |
| next | <code>express.Next</code> | Express next function |

<a name="register"></a>

## register(data) ⇒ <code>UserModel</code>
Creates user and return it

**Kind**: global function  
**Throws**:

- <code>APIError</code> if username has already been used

**Expose**:   

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 

<a name="authenticate"></a>

## authenticate(data) ⇒ <code>UserModel</code>
Authenticates user and returns JWT token which should be
transported in future requests

**Kind**: global function  
**Throws**:

- <code>APIError</code> if username has already been used

**Expose**:   

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 

<a name="register"></a>

## register(req, res, next) ⇒ <code>void</code>
User registration route

**Kind**: global function  
**Expose**:   

| Param | Type | Description |
| --- | --- | --- |
| req | <code>express.Request</code> | Express http request |
| res | <code>express.Response</code> | Express http response |
| next | <code>express.Next</code> | Express next function |

<a name="login"></a>

## login(req, res, next) ⇒ <code>void</code>
User logins route

**Kind**: global function  
**Expose**:   

| Param | Type | Description |
| --- | --- | --- |
| req | <code>express.Request</code> | Express http request |
| res | <code>express.Response</code> | Express http response |
| next | <code>express.Next</code> | Express next function |

