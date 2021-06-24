var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,l=(e,l)=>{for(var s in l||(l={}))a.call(l,s)&&n(e,s,l[s]);if(t)for(var s of t(l))r.call(l,s)&&n(e,s,l[s]);return e};import{R as s,r as o,u as m,y as c,_ as i,h as u,f as d,a as p,s as f,n as g,i as h,b as x,w,E as b,D as y,c as v}from"./vendor.7d2a0318.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return a(self[t].moduleMap[s]);const o=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){l(new Error(`Failed to import: ${e}`)),n(m)},onload(){a(self[t].moduleMap[s]),n(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const E=()=>s.createElement("div",{className:"relative bg-white overflow-hidden h-screen"},s.createElement("div",{className:"max-w-7xl mx-auto"},s.createElement("div",{className:"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:h-screen"},s.createElement("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-screen w-48 text-white transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},s.createElement("polygon",{points:"50,0 100,0 50,100 0,100"})),s.createElement("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8"}),s.createElement("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},s.createElement("div",{className:"sm:text-center lg:text-left"},s.createElement("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"},s.createElement("span",{className:"block xl:inline select-none"},"Find a place to "),s.createElement("span",{className:"block text-indigo-600 xl:inline select-none"},"travel")),s.createElement("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 select-none"},"Whether it is a hot summer or a cold winter, it is inevitable that you will want to travel in your spare time, but often face the dilemma of not knowing where to go. Toursim Explorer provides you with a variety of attractions in Taiwan, so you have no troubles during your vacation!"),s.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},s.createElement("div",{className:"rounded-md shadow"},s.createElement("a",{href:"/ScenicSpot",rel:"noreferrer noopener",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"},"Get started")),s.createElement("div",{className:"mt-3 sm:mt-0 sm:ml-3"},s.createElement("a",{href:"https://github.com/Xanonymous-GitHub/tourism-explorer",rel:"noreferrer noopener",target:"_blank",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"},"View Source"))))))),s.createElement("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},s.createElement("img",{className:"h-screen w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:"https://picsum.photos/800/1200.webp",alt:""}))),N={rootMargin:"300px",threshold:[0]},k=o.exports.forwardRef((({fetchData:e},t)=>{const a=o.exports.useRef(!1),r=new IntersectionObserver((async([t])=>{a.current&&t.isIntersecting&&t.intersectionRatio>0&&await e()}),N),n=o.exports.useRef({}),l=()=>{r.observe(n.current),a.current=!0},m=()=>{a.current=!1,r.unobserve(n.current),r.disconnect()};return o.exports.useImperativeHandle(t,(()=>({startObserver:l,stopObserver:m}))),s.createElement("div",{className:"bg-transparent h-px relative",ref:n})}));const C=[{id:"",name:"所有城市"},{id:"Taipei",name:"臺北市"},{id:"NewTaipei",name:"新北市"},{id:"Taoyuan",name:"桃園市"},{id:"Taichung",name:"臺中市"},{id:"Tainan",name:"臺南市"},{id:"Kaohsiung",name:"高雄市"},{id:"Keelung",name:"基隆市"},{id:"Hsinchu",name:"新竹市"},{id:"HsinchuCounty",name:"新竹縣"},{id:"MiaoliCounty",name:"苗栗縣"},{id:"ChanghuaCounty",name:"彰化縣"},{id:"NantouCounty",name:"南投縣"},{id:"YunlinCounty",name:"雲林縣"},{id:"ChiayiCounty",name:"嘉義縣"},{id:"Chiayi",name:"嘉義市"},{id:"PingtungCounty",name:"屏東縣"},{id:"YilanCounty",name:"宜蘭縣"},{id:"HualienCounty",name:"花蓮縣"},{id:"TaitungCounty",name:"臺東縣"},{id:"KinmenCounty",name:"金門縣"},{id:"PenghuCounty",name:"澎湖縣"},{id:"LienchiangCounty",name:"連江縣"}],j=()=>{const e=o.exports.useMemo((()=>C),[]),{city:t}=m(),[a,r]=o.exports.useState(e[0].name);return o.exports.useEffect((()=>{r(t?C.find((e=>e.id===t)).name:C[0].name)}),[t]),s.createElement("div",{className:"px-10"},s.createElement("div",{className:"dropdown inline-block relative"},s.createElement("button",{className:"bg-gray-300 text-gray-700 py-2 px-4 rounded inline-flex items-center"},s.createElement("span",{className:"mr-1 whitespace-nowrap"},a),s.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),s.createElement("ul",{className:"dropdown-menu absolute hidden text-gray-700 pt-1 max-h-96 overflow-auto whitespace-nowrap"},e.map((e=>e.name!==a?s.createElement(c,{to:"/ScenicSpot/"+e.id,key:e.id,rel:"noreferrer noopener"},s.createElement("li",{className:"bg-gray-200 hover:bg-gray-400 active:bg-gray-500 py-2 px-4 block whitespace-no-wrap select-none cursor-pointer whitespace-nowrap"},e.name)):s.createElement("li",{key:e.id,className:"bg-gray-200 hover:bg-gray-400 active:bg-gray-500 py-2 px-4 block whitespace-no-wrap select-none cursor-pointer whitespace-nowrap"},e.name))))))},S=()=>s.createElement("nav",{className:"bg-gray-800 fixed w-screen top-0 z-50 shadow-lg"},s.createElement("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},s.createElement("div",{className:"relative flex items-center justify-between h-16"},s.createElement("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-full relative"},s.createElement(c,{to:"/",rel:"noreferrer noopener",className:"flex-shrink-0 flex items-center h-full relative"},s.createElement("img",{className:"block md:hidden h-2/3 w-auto",src:"https://i.imgur.com/v2mpZLd.webp",alt:"Workflow"}),s.createElement("img",{className:"hidden md:block h-5/6 relative w-auto",src:"https://i.imgur.com/alnkukQ.webp",alt:"Workflow"})),s.createElement("div",{className:"block sm:ml-6 my-auto"},s.createElement("div",{className:"flex space-x-4"},s.createElement(j,null)))),s.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:"https://github.com/Xanonymous-GitHub/tourism-explorer",className:"rounded-full h-full py-5 sm:py-4 my-auto"},s.createElement("svg",{className:"rounded-full h-full my-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#1B1817"}),s.createElement("path",{fill:"#fff",d:"M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"})))))),O=({tourismInfo:e})=>{const{Name:t,Picture:a,Description:r,City:n}=e;return s.createElement("div",{className:"overflow-hidden shadow-lg rounded-lg h-120 w-full md:w-80"},s.createElement(i,{height:160,offset:100,once:!0,classNamePrefix:"background-image:url(https://i.imgur.com/ZaEuYbZ.webp)",placeholder:s.createElement("img",{src:"https://i.imgur.com/ZaEuYbZ.webp",alt:""})},s.createElement("img",{className:"max-h-40 h-40 w-full object-cover",alt:"tourism image",src:(null==a?void 0:a.PictureUrl1)||(null==a?void 0:a.PictureUrl2)||(null==a?void 0:a.PictureUrl3)||"https://i.imgur.com/gMtz026.webp"})),s.createElement("div",{className:"bg-white dark:bg-gray-800 w-full p-4 overflow-auto h-80 rounded-b-lg"},s.createElement("p",{className:"text-indigo-500 text-md font-medium"},n),s.createElement("p",{className:"text-gray-800 dark:text-white text-xl font-medium mb-2"},t),s.createElement("p",{className:"text-gray-500 dark:text-gray-300 font-light text-md"},r)))},R=async()=>{const e=(new Date).toUTCString();return{Authorization:'hmac username="647eb1e2c74e43ff91828932f1f5915d", algorithm="'+("hmac-"+"SHA-512".replace("-","").toLowerCase())+'", headers="x-date", signature="'+await(async(e,t,a)=>{const r=new TextEncoder,n=r.encode(e),l=r.encode(t),s=await u.compute(n,l,a);return d(s)})("3tPcLuxf21OZmP2eXGQMowPgyX8","x-date: "+e,"SHA-512")+'"',"X-Date":e}};p.defaults.baseURL="https://ptx.transportdata.tw/MOTC/v2/Tourism",p.defaults.headers.common["Content-Type"]="application/json;charset=utf-8";const T=async(e,t)=>{let a;return a=e?await(async(e,t,a)=>{try{const{data:r}=await p.get(`/ScenicSpot/${e}`,{headers:await R(),params:l(l({},t&&{$top:t}),a&&{$skip:a})});return f(r)}catch(r){return console.warn(r),g}})(e,30,t):await(async(e,t)=>{try{const{data:a}=await p.get("/ScenicSpot",{headers:await R(),params:l(l({},e&&{$top:e}),t&&{$skip:t})});return f(a)}catch(a){return console.warn(a),g}})(30,t),a},L=o.exports.forwardRef((({city:e,startUpdate:t,stopUpdate:a},r)=>{const[n,l]=o.exports.useState([]),m=()=>{l([])},c=async t=>{t&&m();const r=null==n?void 0:n.length,s=await T(e,t?0:r);if(h(s))throw new Error("fail to fetch TourismInfo!");x(s.value)?a():l([...n,...s.value])};return o.exports.useImperativeHandle(r,(()=>({updateTourismInfo:c,cleanTourismInfo:m}))),o.exports.useEffect((()=>{n.length&&t()}),[n.length]),s.createElement("div",{className:"card-container"},null==n?void 0:n.map(((e,t)=>s.createElement(O,{key:e.ID+t,tourismInfo:e}))))})),M=()=>{const{city:e}=m(),t=o.exports.useRef({}),a=o.exports.useRef({});let r=o.exports.useRef(0),n=o.exports.useRef(0);const l=o.exports.useCallback((async e=>{await t.current.updateTourismInfo(e)}),[e]);return o.exports.useLayoutEffect((()=>{a.current.stopObserver()}),[e]),o.exports.useEffect((()=>{r.current++,n.current++,l(!0).then()}),[e]),s.createElement(s.Fragment,null,s.createElement(S,null),s.createElement("div",{className:"bg-white dark:bg-gray-700 min-h-screen relative mt-16"},s.createElement(L,{ref:t,city:e,startUpdate:()=>a.current.startObserver(),stopUpdate:()=>a.current.stopObserver(),key:"card-area"+r.current}),s.createElement(k,{fetchData:l,ref:a,key:"fetch-detector"+n.current})))},P=()=>s.createElement(s.Fragment,null,s.createElement("div",{className:"bg-indigo-900 relative overflow-hidden h-screen"},s.createElement("img",{src:"/image/404.svg",className:"absolute h-full w-full object-cover"}),s.createElement("div",{className:"inset-0 bg-black opacity-25 absolute"}),s.createElement("div",{className:"container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40"},s.createElement("div",{className:"w-full font-mono flex flex-col items-center relative z-10"},s.createElement("h1",{className:"font-extrabold text-5xl text-center text-white leading-tight mt-4"},"Page not found"),s.createElement("p",{className:"font-extrabold text-8xl my-44 text-white animate-bounce"},"404"))))),U=()=>s.createElement(w,null,s.createElement(b,null,s.createElement(y,{path:"/",element:s.createElement(E,null)}),s.createElement(y,{path:"/ScenicSpot",element:s.createElement(M,null)}),s.createElement(y,{path:"/ScenicSpot/:city",element:s.createElement(M,null)}),s.createElement(y,{path:"*",element:s.createElement(P,null)})));document.addEventListener("DOMContentLoaded",(()=>{v.render(s.createElement(s.StrictMode,null,s.createElement(U,null)),document.getElementById("root"))}));
