import{r as e,u as t,w as n,E as l,D as r,a as c}from"./vendor.c682cae0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const l=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,c)=>{const o=new URL(e,l);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const a=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){c(new Error(`Failed to import: ${e}`)),r(m)},onload(){n(self[t].moduleMap[o]),r(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const o=()=>e.createElement("div",null,"Home"),a=()=>{const{city:n}=t();return e.createElement("div",null,n,"ScenicSpot")},m=()=>e.createElement("div",null,"404"),u=()=>e.createElement(n,null,e.createElement(l,null,e.createElement(r,{path:"/",element:e.createElement(o,null)}),e.createElement(r,{path:"/ScenicSpot",element:e.createElement(a,null)}),e.createElement(r,{path:"/ScenicSpot/:city",element:e.createElement(a,null)}),e.createElement(r,{path:"*",element:e.createElement(m,null)})));c.render(e.createElement(e.StrictMode,null,e.createElement(u,null)),document.getElementById("root"));
