<h1 id="keyv-null-img-align-right-src-logo-svg-alt-keyv-logo-title-keyv-logo-width-100-">Keyv - Null <img align="right" src="./logo.svg" alt="Keyv logo" title="Keyv logo" width="100"></h1>
<p>This project is part of the <a href="https://www.npmjs.com/package/keyv">Keyv</a> suite.</p>
<!-- toc -->
<ul>
<li><a href="#installation">Installation</a><ul>
<li><a href="#install">Install</a></li>
</ul>
</li>
<li><a href="#features">Features</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#contributors">Contributors</a></li>
<li><a href="#license">License</a></li>
</ul>
<!-- tocstop -->
<p><a href="https://travis-ci.org/e0ipso/keyv-null/"><img src="https://img.shields.io/travis/e0ipso/keyv-null.svg?style=flat-square" alt="Travis"></a> <a href="https://coveralls.io/github/e0ipso/keyv-null/"><img src="https://img.shields.io/coveralls/github/e0ipso/keyv-null.svg?style=flat-square" alt="Coverage"></a></p>
<h2 id="installation">Installation</h2>
<p>In order to use Keyv NULL as your store in Keyv you will need to:</p>
<h3 id="install">Install</h3>
<p>Install this module in your project:</p>
<pre><code>
npm install keyv-null
</code></pre>
<h2 id="features">Features</h2>
<p>This module is useful when you want to skip caching. You can use `KeyvNull` in your local development and swap it out in production. This will allow you to keep the same objects without actually caching.</p>
<h2 id="usage">Usage</h2>
<p>Create your Keyv object by executing:</p>

```js
const keyv = process.env.NODE_ENV === 'production'
  ? new KeyvLru(options)
  : new KeyvNull(options);
```
<h2 id="contributors">Contributors</h2>
<details>
<summary><strong>Contributors</strong></summary><br>
<a title="Engineer and programmer focused on online applications." href="https://github.com/e0ipso">
  <img align="left" src="https://avatars0.githubusercontent.com/u/1140906?s=24">
</a>
<strong>Mateu Aguiló Bosch</strong>
<br><br>
</details>

<h2 id="license">License</h2>
<p>keyv-null is <a href="./LICENSE">MIT licensed</a>.</p>
