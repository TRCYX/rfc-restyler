// ==UserScript==
// @name         RFC Restyler
// @namespace    https://www.github.com/TRCYX
// @version      0.1
// @description  Make RFC documents look better.
// @author       TRCYX
// @match        https://datatracker.ietf.org/doc/html/rfc*
// @icon         https://www.ietf.org/lib/dt/7.37.0/ietf/images/ietf-icon-blue3.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
:root {
    --c: #EAF1ED;
    --d: #FFFFFF;
    --e: #F2E3BC;
    --n: 10pt;
    --g: #3E92CC;
    --h: #2A628F;
    --o: bold;
}

::selection {
	background: var( --e );
}

html {
	font-size: var( --n );
	width: 100%;
}

body {
	background: var( --c );
    font-size: var( --n );
	margin: 2rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

body *,
body {
	font-family: monospace,monospace;
}

hr {
	display: none;
}

span.noprint:last-child {
	white-space: pre-line;
}

a {
	font-weight: var( --o );
	text-decoration: none;
}

a[href]:visited:hover,
a[href]:active:hover,
a[href]:link {
	color: var( --g );
}

a[href]:visited,
a[href]:active,
a[href]:hover {
	color: var( --h );
}

.cplate,
#toc a,
button {
	display: block;
}

div.content {
	border-radius: var( --m );
	box-shadow: var( --b );
	padding: 0;
	width: auto;
}

div.content a[href]:not(.invisible) {
	border-bottom: var( --k );
}

div.content span.grey a[href] {
	border: 0;
}

div.content button {
	border-radius: var( --l );
	padding-bottom: .25rem;
	margin-bottom: 1rem;
	font: inherit;
	height: 2rem;
	width: 100%;
	border: 0;
}

a.invisible,
#legend {
	position: absolute;
}

#legend {
	padding: 1rem 1.5rem 1rem 1rem;
	border-radius: var( --i );
	overflow: hidden;
	text-align: left;
	height: 1rem;
	opacity: 0;
	left: 0;
	top: 0;
}

.content button:focus #legend {
	height: auto;
	opacity: 1;
}

.cplate{
	border: 1px solid #888;
	width: 2rem;
}

#legend,
#toc {
	box-shadow: 0 0 1rem 0.1rem rgba( 0, 0, 0, .5 );
}

.bgmagenta { background: #f4f }
.bgorange { background: #fa0 }
.bgyellow { background: #ee0 }
.bgwhite { background: #fff }
.bgbrown { background: #840 }
.bggreen { background: #4f4 }
.bggrey { background: #666 }
.bgblue { background: #66f }
.bgcyan { background: #43C5D8 }
.bgred { background: #f44 }

.bgmagenta .bgmagenta:after,
.bgorange .bgorange:after,
.bgyellow .bgyellow:after,
.bgwhite .bgwhite:after,
.bgbrown .bgbrown:after,
.bggreen .bggreen:after,
.bggrey .bggrey:after,
.bgblue .bgblue:after,
.bgcyan .bgcyan:after,
.bgred .bgred:after {
	margin-left: .3rem;
	content: "\\2713";
}

div.content,
#legend,
#toc {
	background: var( --d );
}

#toc {
	max-width: calc( ( 100vw - 72ch - 2rem ) / 2 );
	min-width: calc( 27ch + 2rem );
	border-radius: var( --j );
	padding: .2rem 0 0 1rem;
	white-space: nowrap;
	overflow: hidden;
	font-weight: 700;
	font-size: 1rem;
	position: fixed;
	height: 1.5rem;
	color: inherit;
	border: 0;
	right: 0;
	top: 0;
}

#toc a + a {
	margin: .15rem 0 0 1ch;
	white-space: normal;
	font-weight: normal;
	text-indent: -1ch;
	text-align: left;
}

#toc.open {
	padding-bottom: .8rem;
	height: auto;
}

nav {
	max-height: calc( 100vh - 3.5rem );
	overscroll-behavior: contain;
	padding-right: .2rem;
	margin-top: .5rem;
	cursor: default;
	overflow: auto;
}

button,
a {
	cursor: pointer;
}

.h1 { font-size: 1.75rem }
.h2 { font-size: 1.5rem }
.h3 { font-size: 1.25rem }

.pre,
pre {
	white-space: pre;
    line-height: 1.4;
    border: 1px solid;
    padding: 5rem;
}

.newpage {
	page-break-before: always;
}

a.selflink,
#legend,
body {
	color: var( --f );
}

.h1, .h2, .h3, .h4, .h5, .h6,
pre.pre.meta-info {
	max-width: 72ch;
	white-space: pre-wrap;
	display :block;
}

div.meta-info {
    position: unset !important;
    width: 100% !important;
}

span:not([class]) + .h1,
span:not([class]) + .h2,
span:not([class]) + .h3,
span:not([class]) + .h4,
span:not([class]) + .h5,
span:not([class]) + .h6,
nav {
	margin-top: 1.5rem;
}
`;

    const style = document.createElement("style");
    style.type = "text/css";
    const text = document.createTextNode(css);
    style.appendChild(text);
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
})();