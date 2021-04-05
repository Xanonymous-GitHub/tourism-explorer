var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,l=(e,l)=>{for(var c in l||(l={}))t.call(l,c)&&r(e,c,l[c]);if(a)for(var c of a(l))n.call(l,c)&&r(e,c,l[c]);return e};import{r as c,u as s,y as o,L as i,f as m,h as u,a as d,s as p,n as f,i as h,b as g,w,E as y,D as v,c as E}from"./vendor.d6352fd0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const c=new URL(e,n);if(self[t].moduleMap[c])return a(self[t].moduleMap[c]);const s=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){l(new Error(`Failed to import: ${e}`)),r(o)},onload(){a(self[t].moduleMap[c]),r(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("/assets/");const b=()=>c.createElement(c.Fragment,null,c.createElement("div",null,"Home")),x={rootMargin:"300px",threshold:[0]},N=c.forwardRef((({fetchData:e},t)=>{const a=c.useRef(!1),n=new IntersectionObserver((async([t])=>{a.current&&t.isIntersecting&&t.intersectionRatio>0&&await e()}),x),r=c.useRef({}),l=()=>{n.observe(r.current),a.current=!0},s=()=>{a.current=!1,n.unobserve(r.current),n.disconnect()};return c.useImperativeHandle(t,(()=>({startObserver:l,stopObserver:s}))),c.createElement("div",{className:"bg-transparent h-px relative",ref:r})}));const k=[{id:"",name:"所有城市"},{id:"Taipei",name:"臺北市"},{id:"NewTaipei",name:"新北市"},{id:"Taoyuan",name:"桃園市"},{id:"Taichung",name:"臺中市"},{id:"Tainan",name:"臺南市"},{id:"Kaohsiung",name:"高雄市"},{id:"Keelung",name:"基隆市"},{id:"Hsinchu",name:"新竹市"},{id:"HsinchuCounty",name:"新竹縣"},{id:"MiaoliCounty",name:"苗栗縣"},{id:"ChanghuaCounty",name:"彰化縣"},{id:"NantouCounty",name:"南投縣"},{id:"YunlinCounty",name:"雲林縣"},{id:"ChiayiCounty",name:"嘉義縣"},{id:"Chiayi",name:"嘉義市"},{id:"PingtungCounty",name:"屏東縣"},{id:"YilanCounty",name:"宜蘭縣"},{id:"HualienCounty",name:"花蓮縣"},{id:"TaitungCounty",name:"臺東縣"},{id:"KinmenCounty",name:"金門縣"},{id:"PenghuCounty",name:"澎湖縣"},{id:"LienchiangCounty",name:"連江縣"}],C=()=>{const e=c.useMemo((()=>k),[]),{city:t}=s(),[a,n]=c.useState(e[0].name);return c.useEffect((()=>{n(t?k.find((e=>e.id===t)).name:k[0].name)}),[t]),c.createElement("div",{className:"px-10"},c.createElement("div",{className:"dropdown inline-block relative"},c.createElement("button",{className:"bg-gray-300 text-gray-700 py-2 px-4 rounded inline-flex items-center"},c.createElement("span",{className:"mr-1 whitespace-nowrap"},a),c.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},c.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),c.createElement("ul",{className:"dropdown-menu absolute hidden text-gray-700 pt-1 max-h-96 overflow-scroll whitespace-nowrap"},e.map((e=>e.name!==a?c.createElement(o,{to:"/ScenicSpot/"+e.id,key:e.id,rel:"noreferrer noopener"},c.createElement("li",{className:"bg-gray-200 hover:bg-gray-400 active:bg-gray-500 py-2 px-4 block whitespace-no-wrap select-none cursor-pointer whitespace-nowrap"},e.name)):c.createElement("li",{key:e.id,className:"bg-gray-200 hover:bg-gray-400 active:bg-gray-500 py-2 px-4 block whitespace-no-wrap select-none cursor-pointer whitespace-nowrap"},e.name))))))},O=()=>c.createElement("nav",{className:"bg-gray-800 fixed w-screen top-0 z-50 shadow-lg"},c.createElement("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},c.createElement("div",{className:"relative flex items-center justify-between h-16"},c.createElement("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-full relative"},c.createElement("div",{className:"flex-shrink-0 flex items-center h-full relative"},c.createElement("img",{className:"block md:hidden h-5/6 w-auto",src:"https://i.imgur.com/v2mpZLd.webp",alt:"Workflow"}),c.createElement("img",{className:"hidden md:block h-5/6 relative w-auto",src:"https://i.imgur.com/alnkukQ.webp",alt:"Workflow"})),c.createElement("div",{className:"block sm:ml-6 my-auto"},c.createElement("div",{className:"flex space-x-4"},c.createElement(C,null))))))),L=({tourismInfo:e})=>{const{Name:t,Picture:a,Description:n,City:r}=e;return c.createElement("div",{className:"overflow-hidden shadow-lg rounded-lg h-120 w-full md:w-80"},c.createElement(i,{height:160,offset:100,once:!0,classNamePrefix:"background-image:url(https://i.imgur.com/ZaEuYbZ.webp)",placeholder:c.createElement("img",{src:"https://i.imgur.com/ZaEuYbZ.webp",alt:""})},c.createElement("img",{className:"max-h-40 h-40 w-full object-cover",alt:"tourism image",src:(null==a?void 0:a.PictureUrl1)||(null==a?void 0:a.PictureUrl2)||(null==a?void 0:a.PictureUrl3)||"https://i.imgur.com/gMtz026.webp"})),c.createElement("div",{className:"bg-white dark:bg-gray-800 w-full p-4 overflow-scroll h-80 rounded-b-lg"},c.createElement("p",{className:"text-indigo-500 text-md font-medium"},r),c.createElement("p",{className:"text-gray-800 dark:text-white text-xl font-medium mb-2"},t),c.createElement("p",{className:"text-gray-500 dark:text-gray-300 font-light text-md"},n)))},S=async()=>{const e=(new Date).toUTCString();return{Authorization:'hmac username="647eb1e2c74e43ff91828932f1f5915d", algorithm="'+("hmac-"+"SHA-512".replace("-","").toLowerCase())+'", headers="x-date", signature="'+await(async(e,t,a)=>{const n=new TextEncoder,r=n.encode(e),l=n.encode(t),c=await u.compute(r,l,a);return m(c)})("3tPcLuxf21OZmP2eXGQMowPgyX8","x-date: "+e,"SHA-512")+'"',"X-Date":e}};d.defaults.baseURL="https://ptx.transportdata.tw/MOTC/v2/Tourism",d.defaults.headers.common["Content-Type"]="application/json;charset=utf-8";const R=async(e,t)=>{let a;return a=e?await(async(e,t,a)=>{try{const{data:n}=await d.get(`/ScenicSpot/${e}`,{headers:await S(),params:l(l({},t&&{$top:t}),a&&{$skip:a})});return p(n)}catch(n){return console.warn(n),f}})(e,30,t):await(async(e,t)=>{try{const{data:a}=await d.get("/ScenicSpot",{headers:await S(),params:l(l({},e&&{$top:e}),t&&{$skip:t})});return p(a)}catch(a){return console.warn(a),f}})(30,t),a},j=c.forwardRef((({city:e,startUpdate:t,stopUpdate:a},n)=>{const[r,l]=c.useState([]),s=()=>{l([])},o=async t=>{t&&s();const n=null==r?void 0:r.length,c=await R(e,t?0:n);if(h(c))throw new Error("fail to fetch TourismInfo!");g(c.value)?a():l([...r,...c.value])};return c.useImperativeHandle(n,(()=>({updateTourismInfo:o,cleanTourismInfo:s}))),c.useEffect((()=>{r.length&&t()}),[r.length]),c.createElement("div",{className:"card-container"},null==r?void 0:r.map(((e,t)=>c.createElement(L,{key:e.ID+t,tourismInfo:e}))))})),P=()=>{const{city:e}=s(),t=c.useRef({}),a=c.useRef({});let n=c.useRef(0),r=c.useRef(0);const l=c.useCallback((async e=>{await t.current.updateTourismInfo(e)}),[e]);return c.useLayoutEffect((()=>{a.current.stopObserver()}),[e]),c.useEffect((()=>{n.current++,r.current++,l(!0).then()}),[e]),c.createElement(c.Fragment,null,c.createElement(O,null),c.createElement("div",{className:"bg-white dark:bg-gray-700 min-h-screen relative mt-16"},c.createElement(j,{ref:t,city:e,startUpdate:()=>a.current.startObserver(),stopUpdate:()=>a.current.stopObserver(),key:"card-area"+n.current}),c.createElement(N,{fetchData:l,ref:a,key:"fetch-detector"+r.current})))},T=()=>c.createElement(c.Fragment,null,c.createElement("div",{className:"bg-indigo-900 relative overflow-hidden h-screen"},c.createElement("img",{src:"/image/404.svg",className:"absolute h-full w-full object-cover"}),c.createElement("div",{className:"inset-0 bg-black opacity-25 absolute"}),c.createElement("div",{className:"container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40"},c.createElement("div",{className:"w-full font-mono flex flex-col items-center relative z-10"},c.createElement("h1",{className:"font-extrabold text-5xl text-center text-white leading-tight mt-4"},"Page not found"),c.createElement("p",{className:"font-extrabold text-8xl my-44 text-white animate-bounce"},"404"))))),U=()=>c.createElement(w,null,c.createElement(y,null,c.createElement(v,{path:"/",element:c.createElement(b,null)}),c.createElement(v,{path:"/ScenicSpot",element:c.createElement(P,null)}),c.createElement(v,{path:"/ScenicSpot/:city",element:c.createElement(P,null)}),c.createElement(v,{path:"*",element:c.createElement(T,null)})));document.addEventListener("DOMContentLoaded",(()=>{E.render(c.createElement(c.StrictMode,null,c.createElement(U,null)),document.getElementById("root"))}));
