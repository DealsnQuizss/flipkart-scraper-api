!function(t){var e={};function r(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);function s(t){return t[t.length-1]}function i(t){return t.length>1}function l(t){for(var e=[],r=1;r<t.length;r++)try{var s=t[r].split("</div>")[0].split("background-image:url(")[1].split(")")[0];e.push(s)}catch(t){}return e}var a=async(t,e)=>{if("compact"==e)var r=!0,a=!1;else if("minimum"==e)r=!1,a=!0;else r=!1,a=!1;try{const e=encodeURI(t);console.log("Product details initiated");try{var p=await(await fetch("https://www.flipkart.com/"+e)).text();if(i((p=p.replace(/&amp;/g,"&")).split("for has been moved or deleted")))throw"Link provided doesn't corresponds to any product"}catch(t){return JSON.stringify({error_message:t,possible_solution:"Validate your link and try removing https://www.flipkart.com from your product link",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}var c,n=null,o=null,h=null,d=null,u=[];if(i(p.split("<h1")))d=p.split("<h1")[1].split("</span>")[0].split('">')[2].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");else d=p.split('class="B_NuCI')[1].split("</span>")[0].split(">")[1].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");try{o=p.split("<h1")[1].split(">₹")[1].split("</div>")[0]}catch(t){o=null}try{var g=p.split("<h1")[1].split(">₹")[2].split("</div>")[0].split("\x3c!-- --\x3e"),m=i(g)}catch(t){m=!1}var f=p.split("height:64px"),v=[];if((i(f)||i(f=p.split("_20Gt85 _1Y"))||i(f=p.split("_2r_T1I")))&&(v=l(f)),0==v.length)try{var y=d.split("(")[0].trim(),w=p.split('alt="'+y);w=w[1].split('src="')[1].split('"')[0],v.push(w)}catch(t){}try{var _=p.split("<h1")[1].split("Product Description")[0].split("fk-cp-zion/img/fa_62673a.png"),k=i(_)}catch(t){k=i(p.split("Product Description")[0].split("fk-cp-zion/img/fa_62673a.png"))}try{o=parseInt(o.replace(/,/g,"")),c=m?parseInt(g[1].replace(/,/g,"")):o}catch(t){c=null}try{var b=p.split('product.share.pp"');if(i(b)&&(h=b=s(b[b.length-2].split('"'))+"product.share.pp"),"/"==h[0]&&(h="https://www.flipkart.com"+h),i(String(h).toLowerCase().split("login"))){if(""==e.split("/")[0])var P=1;else P=0;if("s"==e.split("/")[P]||"dl"==e.split("/")[P])h="https://dl.flipkart.com/"+e;else h="https://www.flipkart.com/"+e}}catch(t){if("s"==e.split("/")[0]||"dl"==e.split("/")[0])h="https://dl.flipkart.com/"+e;else h="https://www.flipkart.com/"+e}var I=new URL(h);I.searchParams.delete("_appId"),I.searchParams.delete("_refId"),I.searchParams.delete("cmpid"),h=I.toString();var M=i(p.split("Coming Soon</div>")),S=i(p.split("This item is currently out of stock</div>"))||M;try{var N=p.split("Highlights")[1].split("</ul>")[0].replace(/<\/li>/g,"").split("<li");if(i(N))for(var C=1;C<N.length;C++)try{u.push(N[C].split(">")[1])}catch(t){}}catch(t){u=[]}var j=_[0].split("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==");if(M)n=null;else if(i(j))n=s(j[0].split('">')).split("<")[0];else try{n=p.split("_3LWZlK")[1].split("<")[0].split(">")[1].trim()}catch(t){}(null==o||null==o||NaN==o||o<1)&&(o=parseInt(p.split("_30jeq3 _16Jk6d")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,""))),(null==c||null==c||NaN==c||c<1)&&(c=parseInt(p.split("_3I9_wc _2p6lqe")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,"")));var L=parseInt(100*(1-o/c));try{d=d.replace(/&#x27;/g,"'").trim(),h=h.replace("http://","https://"),S=!S}catch(t){}if(!a){var x=[];try{var T=p.split("Specifications</div>")[1].split(">Safe and Secure Payments.")[0].replace(/&amp;/g,"&").split("</div><table")}catch(t){T=[]}for(C=1;C<T.length;C++)try{var R,A="",D=[],O=s(T[C-1].split(">")),Z=T[C].split("</td>");for(R=1;R<Z.length;R+=2)try{var H=s(Z[R-1].split(">")),z=s(Z[R].split("</li>")[0].split(">"));null!=H&&""!=H&&1==z.split("<").length&&""!=z&&(r?A+=H+" : "+z+"; ":D.push({property:H,value:z}))}catch(t){}D!=[]&&(r?x.push({title:O,details:A}):x.push({title:O,details:D}))}catch(t){}}var E={name:d,current_price:o,original_price:c,discounted:m,discount_percent:L,rating:n,in_stock:S,f_assured:k,share_url:h,thumbnails:v,highlights:u};return a||(Object.assign(E,{specs:x}),E.specs=x),r||a?JSON.stringify(E):JSON.stringify(E,null,1)}catch(t){return JSON.stringify({error:"Couldn't fetch information : "+t.message,possible_solution:"Don't lose hope, contact the support",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"},null,2)}};const p=t=>{var e=new URL(t.replace(/amp;/g,""));return e.searchParams.delete("_appId"),e.searchParams.delete("_refId"),e.searchParams.delete("cmpid"),e.searchParams.delete("marketplace"),e.searchParams.delete("ppt"),e.searchParams.delete("lid"),e.searchParams.delete("store"),e.searchParams.delete("spotlightTagId"),e.searchParams.delete("q"),e.searchParams.delete("srno"),e.searchParams.delete("otracker"),e.searchParams.delete("fm"),e.searchParams.delete("iid"),e.searchParams.delete("ppn"),e.searchParams.delete("ssid"),e.searchParams.delete("qH"),e.toString()};var c=async t=>{const e="https://www.flipkart.com/search?marketplace=FLIPKART&q="+t;console.log("Search initiated : "+e);for(var r=await(await fetch(e)).text(),s=(r=r.replace(/style="color:#000000;font-size:14px;font-style:normal;font-weight:700">₹/g,">Rs. ")).split(">₹"),i=[],l=null,a=!1,c=1;c<s.length;c++)try{var n,o=null,h=null,d=null,u=!1,g=null,m=null,f=null,v=s[c].split("</div>")[0].replace(/,/g,"");if(n=parseInt(v),1==v.split("</option>").length){try{(f=(m=s[c-1].split("</a>"))[m.length-2].split('target="_blank"')).length>1&&(h="https://www.flipkart.com"+f[1].split('href="')[1].split('"')[0],d=f[1].split('href="')[1].split('"')[1].split(">")[1],l="A")}catch(t){console.log("Failed to obtain product name and link from Method A")}if(o=parseInt(n),""==d||null==d){m=null,f=null;try{"C"!=l&&"D"!=l||(c++,a=!0),m=s[c-2].split("<a"),l="B",1==m.length?(m=s[c-1].split("<a"),l="C"):console.log("Failed to obtain product name and link from Method B"),(f=m[m.length-1].split('target="_blank"')).length>1&&(h="https://www.flipkart.com"+f[1].split('href="')[1].split('"')[0],d=f[1].split('href="')[1].split('"col col-7-12">')[1].split("</div>")[0].split(">")[1]),a&&(c--,a=!1,l="D",console.log("Failed to obtain product name and link from Method C"))}catch(t){console.log(t.message)}if(""==d||null==d)console.log("Failed to obtain product name and link from known methods");else{console.log("Sucessfully obtained product name and link from known methods");try{g=r.split(`alt="${d}"`)[1].split('src="')[1].split('"')[0]}catch(t){g=null}if(c+1!=s.length)(u=(y=s[c+1].split("</div>")[0].replace(/,/g,"").split("\x3c!-- --\x3e")).length>1)&&(c++,o=parseInt(y[1]));i.push({name:d.replace(/&#x27;/g,"'"),link:p(h),current_price:n,original_price:o,discounted:u,thumbnail:g})}}else{try{g=r.split(`alt="${d}"`)[1].split('src="')[1].split('"')[0]}catch(t){g=[]}var y;if(c+1!=s.length)(u=(y=s[c+1].split("</div>")[0].replace(/,/g,"").split("\x3c!-- --\x3e")).length>1)&&(c++,o=parseInt(y[1]));i.push({name:d.replace(/&#x27;/g,"'").trim(),link:p(h).replace("http://","https://"),current_price:n,original_price:o,discounted:u,thumbnail:g})}}else r=r.replace("₹","Rs."),console.log("Ignoring amount "+n+" : Suspected to be dropdown menu item")}catch(t){console.log(t.message)}return JSON.stringify({result:i},null,2)};var n=t=>({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"GET","Access-Control-Max-Age":"86400","Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate","Your-IP":t.get("cf-connecting-ip"),"Your-Country":t.get("CF-IPCountry"),Host:t.get("host"),"Made-By":atob("VmlzaGFsIERhcyBodHRwczovL2dpdGh1Yi5jb20vZHZpc2hhbDQ4NQ==")});function o(t){return t[t.length-1]}function h(t){return t.length>1}function d(t,e,r){var s=!1;e=e.toLowerCase(),t=t.toLowerCase();for(var i=0;i<r.length;i++)if(r[i]=r[i].toLowerCase(),h(t.split(r[i]))||h(e.split(r[i])))return s=!0;return s}function u(t){for(var e=[],r=1;r<t.length;r++)try{var s=t[r].split("</div>")[0].split("background-image:url(")[1].split(")")[0];e.push(s)}catch(t){}return e}var g=async t=>{try{var e=t.split("/")[0];t=t.split(e+"/")[1];var r=e.split("&");const D=encodeURI(t);console.log("Product details initiated");try{var s=await(await fetch("https://www.flipkart.com/"+D)).text();if(h((s=s.replace(/&amp;/g,"&")).split("for has been moved or deleted")))throw"Link provided doesn't corresponds to any product"}catch(t){return JSON.stringify({error_message:t,possible_solution:"Validate your link and try removing https://www.flipkart.com from your product link",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}var i,l=null,a=null,p=null,c=null,n=[];if(h(s.split("<h1")))c=s.split("<h1")[1].split("</span>")[0].split('">')[2].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");else c=s.split('class="B_NuCI')[1].split("</span>")[0].split(">")[1].replace(/<!-- -->/g,"").replace(/&nbsp;/g,"");try{a=s.split("<h1")[1].split(">₹")[1].split("</div>")[0]}catch(t){a=null}try{var g=s.split("<h1")[1].split(">₹")[2].split("</div>")[0].split("\x3c!-- --\x3e"),m=h(g)}catch(t){m=!1}var f=s.split("height:64px"),v=[];if((h(f)||h(f=s.split("_20Gt85 _1Y"))||h(f=s.split("_2r_T1I")))&&(v=u(f)),0==v.length)try{var y=c.split("(")[0].trim(),w=s.split('alt="'+y);w=w[1].split('src="')[1].split('"')[0],v.push(w)}catch(t){}try{var _=s.split("<h1")[1].split("Product Description")[0].split("fk-cp-zion/img/fa_62673a.png"),k=h(_)}catch(t){k=h(s.split("Product Description")[0].split("fk-cp-zion/img/fa_62673a.png"))}try{a=parseInt(a.replace(/,/g,"")),i=m?parseInt(g[1].replace(/,/g,"")):a}catch(t){i=null}try{if("/"==(p=o(o((o(s.split("product.share.pp")[0].split('"url":"'))+"product.share.pp").split(" ")).split('"')))[0]&&(p="https://www.flipkart.com"+p),h(String(p).toLowerCase().split("login"))){if(""==D.split("/")[0])var b=1;else b=0;if("s"==D.split("/")[b]||"dl"==D.split("/")[b])p="https://dl.flipkart.com/"+D;else p="https://www.flipkart.com/"+D}}catch(t){if("s"==D.split("/")[0]||"dl"==D.split("/")[0])p="https://dl.flipkart.com/"+D;else p="https://www.flipkart.com/"+D}var P=new URL(p);P.searchParams.delete("_appId"),P.searchParams.delete("_refId"),P.searchParams.delete("cmpid"),p=P.toString();var I=h(s.split("This item is currently out of stock</div>"))||h(s.split("Coming Soon</div>"));try{var M=s.split("Highlights")[1].split("</ul>")[0].replace(/<\/li>/g,"").split("<li");if(h(M))for(var S=1;S<M.length;S++)try{n.push(M[S].split(">")[1])}catch(t){}}catch(t){n=[]}var N=_[0].split("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==");if(h(N))l=o(N[0].split('">')).split("<")[0];else try{l=s.split("_3LWZlK")[1].split("<")[0].split(">")[1].trim()}catch(t){}(null==a||null==a||NaN==a||a<1)&&(a=parseInt(s.split("_30jeq3 _16Jk6d")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,""))),(null==i||null==i||NaN==i||i<1)&&(i=parseInt(s.split("_3I9_wc _2p6lqe")[1].split("</div>")[0].split(">")[1].replace(/₹/g,"").replace(/,/g,"")));var C=[],j=[];try{var L=s.split("Specifications</div>")[1].split(">Safe and Secure Payments.")[0].replace(/&amp;/g,"&").split("</div><table")}catch{L=[]}for(S=1;S<L.length;S++)try{var x,T=L[S].split("</td>");for(x=1;x<T.length;x+=2)try{var R=o(T[x-1].split(">")),A=o(T[x].split("</li>")[0].split(">"));null==R&&""==R||d(A,R,r)&&j.push({property:R,value:A})}catch(t){}0!=j.length&&(C=j)}catch(t){}return JSON.stringify({name:c.replace(/&#x27;/g,"'").trim(),current_price:a,original_price:i,discounted:m,discount_percent:parseInt(100*(1-a/i)),rating:l,in_stock:!I,f_assured:k,share_url:p.replace("http://","https://"),thumbnails:v,highlights:n,desired_specs:C})}catch(t){return JSON.stringify({error:"Couldn't fetch information : "+t.message,possible_solution:"Don't lose hope, contact the support",bug_report:"https://github.com/dvishal485/flipkart-scraper-api/issues"})}};addEventListener("fetch",t=>{t.respondWith(async function(t){const e=n(t.headers),r=new URL(t.url).pathname;return"GET"==t.method?r.startsWith("/search/")?new Response(await c(r.replace("/search/","")),{status:200,headers:e}):r.startsWith("/product/min/")?new Response(await a(r.replace("/product/min/",""),"minimum"),{status:200,headers:e}):r.startsWith("/product/compact/")?new Response(await a(r.replace("/product/compact/",""),"compact"),{status:200,headers:e}):r.startsWith("/product/")?new Response(await a(r.replace("/product/",""),"general"),{status:200,headers:e}):r.startsWith("/property/")?new Response(await g(r.replace("/property/",""),"general"),{status:200,headers:e}):new Response(JSON.stringify({name:"flipkart-scraper",description:"API to scrapes search result and product details from Flipkart",version:"2.1.0",author:"Vishal Das",email:"dvishal485@gmail.com",documentation:"https://dvishal485.github.io/flipkart-scraper-api/",usage:{search_api:"https://flipkart.dvishal485.workers.dev/search/<product_name>",product_api:"https://flipkart.dvishal485.workers.dev/product/<product_link_argument>",product_min_api:"https://flipkart.dvishal485.workers.dev/product/min/<product_link_argument>",product_compact_api:"https://flipkart.dvishal485.workers.dev/product/compact/<product_link_argument>",product_search_specs:"https://flipkart.dvishal485.workers.dev/property/<specs_to_search>/<product_link_argument>"},examples:{search_api:"https://flipkart.dvishal485.workers.dev/search/smartwatch",product_api:"https://flipkart.dvishal485.workers.dev/product/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_min_api:"https://flipkart.dvishal485.workers.dev/product/min/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_compact_api:"https://flipkart.dvishal485.workers.dev/product/compact/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ",product_search_specs:"https://flipkart.dvishal485.workers.dev/property/battery&display/dl/huami-amazfit-bip-u-smartwatch/p/itmc6ae7a0e9f440?pid=SMWFY7PPGQTEH2BZ"}},null,2),{status:200,headers:e}):Response.redirect("https://github.com/dvishal485/flipkart-scraper-api",301)}(t.request))})}]);