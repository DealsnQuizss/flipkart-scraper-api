!function(t){var e={};function l(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=e,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(i,r,function(e){return t[e]}.bind(null,r));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l(l.s=0)}([function(t,e,l){"use strict";l.r(e);var i=async t=>{const e=encodeURI(t);console.log("Product details initiated");var l,i=await(await fetch("https://www.flipkart.com/"+e)).text(),r=null,s=null,n=i.split("<h1")[1].split("</span>")[0].split('">')[2].replace(/<!-- -->/g,"").replace(/&nbsp;/g,""),a=(s=i.split("<h1")[1].split(">₹")[1].split("</div>")[0],i.split("<h1")[1].split(">₹")[2].split("</div>")[0].split("\x3c!-- --\x3e")),o=a.length>1,p=i.split("<h1")[1].split(">₹"+s)[0].split("fk-cp-zion/img/fa_62673a.png"),c=p.length>1;s=parseInt(s.replace(/,/g,"")),l=o?parseInt(a[1].replace(/,/g,"")):s;var u=i.split("product.share.pp")[0].split('"url":"'),h=u[u.length-1]+"product.share.pp",d=i.split("This item is currently out of stock</div>").length>1,g=i.split("Highlights")[1].split("</ul>")[0].replace(/<\/li>/g,"").split("<li"),f=[];if(g.length>1)for(y=1;y<g.length;y++)f.push(g[y].split(">")[1]);var m=p[0].split("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==");if(m.length>1){var v=m[0].split('">');r=v[v.length-1].split("<")[0]}var y,w=[],b=i.split("Specifications</div>")[1].split(">Safe and Secure Payments.")[0].replace(/&amp;/g,"&").split("</div><table"),M=[];for(y=1;y<b.length;y++){var I,_=b[y-1].split(">"),k=_[_.length-1],x=b[y].split("</td>");for(I=1;I<x.length;I+=2){var j=x[I-1].split(">"),C=j[j.length-1],A=x[I].split("</li>")[0].split(">"),S=A[A.length-1];console.log((I+1)/2+" => "+C+" : "+S),M.push({property:C,value:S})}w.push({title:k,details:M})}return JSON.stringify({name:n,current_price:s,original_price:l,discounted:o,discount_percent:parseInt(100*(1-s/l)),rating:r,in_stock:!d,"f-assured":c,share_url:h,highlights:f,specs:w},null,2)};var r=async t=>{const e="https://www.flipkart.com/search?marketplace=FLIPKART&q="+t;console.log("Search initiated : "+e);var l,i=await(await fetch(e)).text(),r=(i=i.replace(/style="color:#000000;font-size:14px;font-style:normal;font-weight:700">₹/g,">Rs. ")).split(">₹"),s=[],n=null,a=!1;for(l=1;l<r.length;l++)try{var o,p=null,c=null,u=null,h=!1,d=null,g=null,f=r[l].split("</div>")[0].replace(/,/g,"");if(o=parseInt(f),1==f.split("</option>").length){try{(g=(d=r[l-1].split("</a>"))[d.length-2].split('target="_blank"')).length>1&&(c="https://www.flipkart.com"+g[1].split('href="')[1].split('"')[0],u=g[1].split('href="')[1].split('"')[1].split(">")[1],n="A")}catch(t){console.log("Failed to obtain product name and link from Method A : "+t.message)}if(p=parseInt(o),""==u||null==u){console.log("Executing method B");d=null,g=null;try{"C"!=n&&"D"!=n||(l++,a=!0),d=r[l-2].split("<a"),n="B",1==d.length&&(console.log("Executing method C"),d=r[l-1].split("<a"),n="C"),(g=d[d.length-1].split('target="_blank"')).length>1&&(c="https://www.flipkart.com"+g[1].split('href="')[1].split('"')[0],u=g[1].split('href="')[1].split('"col col-7-12">')[1].split("</div>")[0].split(">")[1]),a&&(l--,a=!1,n="D")}catch(t){console.log("Failed to obtain product name and link from Method A : "+t.message)}if(""==u||null==u)console.log("Unimplemented");else{if(l+1!=r.length)(h=(m=r[l+1].split("</div>")[0].replace(/,/g,"").split("\x3c!-- --\x3e")).length>1)&&(l++,p=parseInt(m[1]));s.push({name:u,link:c,current_price:o,original_price:p,discounted:h,fetch_method:n})}}else{var m;if(l+1!=r.length)(h=(m=r[l+1].split("</div>")[0].replace(/,/g,"").split("\x3c!-- --\x3e")).length>1)&&(l++,p=parseInt(m[1]));s.push({name:u,link:c,current_price:o,original_price:p,discounted:h,fetch_method:n})}}else i=i.replace("₹","Rs."),console.log("Ignoring amount "+o+" : Suspected to be dropdown menu item")}catch(t){console.log(t.message)}return JSON.stringify({result:s},null,2)};var s=t=>({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"GET","Access-Control-Max-Age":"86400","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate","Your-IP":t.get("cf-connecting-ip"),"Your-Country":t.get("CF-IPCountry"),Host:t.get("host"),"Made-By":atob("VmlzaGFsIERhcyBodHRwczovL2dpdGh1Yi5jb20vZHZpc2hhbDQ4NQ==")});addEventListener("fetch",t=>{t.respondWith(async function(t){const e=s(t.headers),l=new URL(t.url).pathname;return"GET"==t.method?l.startsWith("/search/")?new Response(await r(l.replace("/search/","")),{status:200,headers:e}):l.startsWith("/product/")?new Response(await i(l.replace("/product/","")),{status:200,headers:e}):new Response(JSON.stringify([{name:"flipkart-scraper",description:"API to scrapes search result and product details from flipkart",author:"Vishal Das",email:"dvishal485@gmail.com",telegram:"@dvishal485",documentation:"https://dvishal485.github.io/flipkart-scraper-api/",examples:{search_api:"https://flipkart.dvishal485.workers.dev/search/<product_name>",product_api:"https://flipkart.dvishal485.workers.dev/product/<product_link_argument>"}}],null,2),{status:200,headers:e}):Response.redirect("https://github.com/dvishal485/flipkart-scraper/",301)}(t.request))})}]);