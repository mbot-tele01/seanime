(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{24034:function(e,r,t){var n=t(65491).w_;e.exports.G=function(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(e)}},753:function(e,r,t){var n=t(65491).w_;e.exports.F=function(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(e)}},98008:function(e,r,t){Promise.resolve().then(t.bind(t,14067))},46656:function(e,r,t){"use strict";t.d(r,{U:function(){return AnimeSliderSkeletonItem}});var n=t(57437),a=t(37684);t(2265);let AnimeSliderSkeletonItem=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.O,{className:"min-w-[250px] max-w-[250px] h-[350px] bg-gray-700 rounded-md mt-8"})})},85713:function(e,r,t){"use strict";t.d(r,{aB:function(){return useDiscoverTrendingAnime},bG:function(){return useDiscoverUpcomingAnime},oG:function(){return useDiscoverTrendingMovies},t4:function(){return useDiscoverPopularAnime}});var n=t(33923),a=t(94152),s=t(6025);function useDiscoverTrendingAnime(){return(0,n.N)({queryKey:["discover-trending-anime"],initialPageParam:1,queryFn:async e=>{let{pageParam:r}=e;return(0,s.z)({page:r,perPage:20,sort:["TRENDING_DESC"]})},getNextPageParam:(e,r)=>{var t,n,a,s;let i=null==e?void 0:null===(n=e.Page)||void 0===n?void 0:null===(t=n.pageInfo)||void 0===t?void 0:t.currentPage,o=null==e?void 0:null===(s=e.Page)||void 0===s?void 0:null===(a=s.pageInfo)||void 0===a?void 0:a.hasNextPage;return i&&o&&i<4?r.length+1:void 0}})}function useDiscoverUpcomingAnime(){return(0,a.a)({queryKey:["discover-upcoming-anime"],queryFn:()=>(0,s.z)({page:1,perPage:20,sort:["TRENDING_DESC"],status:["NOT_YET_RELEASED"]})})}function useDiscoverPopularAnime(){return(0,a.a)({queryKey:["discover-popular-anime"],queryFn:()=>(0,s.z)({page:1,perPage:20,sort:["POPULARITY_DESC"]})})}function useDiscoverTrendingMovies(){return(0,a.a)({queryKey:["discover-trending-movies"],queryFn:()=>(0,s.z)({page:1,perPage:20,format:"MOVIE",sort:["TRENDING_DESC"]})})}},73199:function(e,r,t){"use strict";t.d(r,{K:function(){return DiscoverTrending},W:function(){return d}});var n=t(57437),a=t(2265),s=t(7214),i=t(7951),o=t(85713),l=t(77665),c=t(46656),u=t(23890);let d=(0,l.cn)(void 0);function DiscoverTrending(){var e;let{data:r,isLoading:t,fetchNextPage:l}=(0,o.aB)(),g=(0,u.b9)(d),f=(0,a.useMemo)(()=>Math.floor(6*Math.random()),[]);return(0,a.useEffect)(()=>{var e;g(null==r?void 0:null===(e=r.pages)||void 0===e?void 0:e.filter(Boolean).flatMap(e=>{var r;return null===(r=e.Page)||void 0===r?void 0:r.media}).filter(Boolean)[f])},[r]),(0,n.jsx)(i.i,{onSlideEnd:()=>l(),children:t?[...Array(10).keys()].map((e,r)=>(0,n.jsx)(c.U,{},r)):null==r?void 0:null===(e=r.pages)||void 0===e?void 0:e.filter(Boolean).flatMap(e=>{var r;return null===(r=e.Page)||void 0===r?void 0:r.media}).filter(Boolean).map(e=>(0,n.jsx)(s.k,{media:e,showLibraryBadge:!0,containerClassName:"min-w-[250px] max-w-[250px] mt-8"},e.id))})}},14067:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Page}});var n=t(57437);t(2265);var a=t(73199),s=t(7214),i=t(7951),o=t(85713),l=t(46656);function DiscoverUpcoming(){var e,r;let{data:t,isLoading:a}=(0,o.bG)();return(0,n.jsx)(i.i,{children:a?[...Array(10).keys()].map((e,r)=>(0,n.jsx)(l.U,{},r)):null==t?void 0:null===(r=t.Page)||void 0===r?void 0:null===(e=r.media)||void 0===e?void 0:e.filter(Boolean).map(e=>(0,n.jsx)(s.k,{media:e,showLibraryBadge:!0,containerClassName:"min-w-[250px] max-w-[250px] mt-8"},e.id))})}function DiscoverPopular(){var e,r;let{data:t,isLoading:a}=(0,o.t4)();return(0,n.jsx)(i.i,{children:a?[...Array(10).keys()].map((e,r)=>(0,n.jsx)(l.U,{},r)):null==t?void 0:null===(r=t.Page)||void 0===r?void 0:null===(e=r.media)||void 0===e?void 0:e.filter(Boolean).map(e=>(0,n.jsx)(s.k,{media:e,showLibraryBadge:!0,containerClassName:"min-w-[250px] max-w-[250px] mt-8"},e.id))})}function DiscoverTrendingMovies(){var e,r;let{data:t,isLoading:a}=(0,o.oG)();return(0,n.jsx)(i.i,{children:a?[...Array(10).keys()].map((e,r)=>(0,n.jsx)(l.U,{},r)):null==t?void 0:null===(r=t.Page)||void 0===r?void 0:null===(e=r.media)||void 0===e?void 0:e.filter(Boolean).map(e=>(0,n.jsx)(s.k,{media:e,showLibraryBadge:!0,containerClassName:"min-w-[250px] max-w-[250px] mt-8"},e.id))})}var c=t(16691),u=t.n(c),d=t(37684),g=t(90466),f=t(88356),v=t(23890),m=t(24033);function DiscoverPageHeader(){let e=(0,m.useRouter)(),r=(0,v.Dv)(a.W);return(0,n.jsx)("div",{className:"__header h-[20rem]",children:(0,n.jsxs)("div",{className:"h-[30rem] w-full md:w-[calc(100%-5rem)] flex-none object-cover object-center absolute top-0 overflow-hidden",children:[(0,n.jsx)("div",{className:"w-full absolute z-[2] top-0 h-[15rem] bg-gradient-to-b from-[--background-color] to-transparent via"}),(null==r?void 0:r.bannerImage)&&(0,n.jsx)(u(),{src:r.bannerImage,alt:"banner image",fill:!0,quality:100,priority:!0,sizes:"100vw",className:"object-cover object-center z-[1]"}),!(null==r?void 0:r.bannerImage)&&(0,n.jsx)(d.O,{className:"z-0 h-full absolute w-full"}),(0,n.jsx)("div",{className:"w-full z-[2] absolute bottom-0 h-[20rem] bg-gradient-to-t from-[--background-color] via-[--background-color] via-opacity-50 via-10% to-transparent"}),(0,n.jsx)("div",{className:"absolute bottom-16 right-8 z-[2] cursor-pointer opacity-80 transition-opacity hover:opacity-100",onClick:()=>e.push("/search"),children:(0,n.jsx)(g.o,{leftIcon:(0,n.jsx)(f.j,{}),value:"Search by genres, seasons…",isReadOnly:!0,size:"lg",className:"pointer-events-none w-96",onChange:()=>{}})})]})})}function Page(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(DiscoverPageHeader,{}),(0,n.jsxs)("div",{className:"px-4 pt-8 space-y-10 pb-10",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h2",{children:"Popular this season"}),(0,n.jsx)(a.K,{})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h2",{children:"Popular shows"}),(0,n.jsx)(DiscoverPopular,{})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h2",{children:"Upcoming"}),(0,n.jsx)(DiscoverUpcoming,{})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h2",{children:"Trending movies"}),(0,n.jsx)(DiscoverTrendingMovies,{})]})]})]})}},7951:function(e,r,t){"use strict";t.d(r,{i:function(){return Slider}});var n=t(57437),a=t(2265),s=t(64723);function useDraggableScroll(e){let r,t,n,i,o,l,c,{decayRate:u=.95,safeDisplacement:d=10,applyRubberBandEffect:g=!1,activeMouseButton:f="Left",isMounted:v=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},m=(0,a.useRef)({isMouseDown:!1,isDraggingX:!1,isDraggingY:!1,initialMouseX:0,initialMouseY:0,lastMouseX:0,lastMouseY:0,scrollSpeedX:0,scrollSpeedY:0,lastScrollX:0,lastScrollY:0}),h=!1,p=!1,x=0,P=0,y=1/60*1e3;(0,s.Z)(()=>{v&&(h="scroll"===window.getComputedStyle(e.current).overflowX,p="scroll"===window.getComputedStyle(e.current).overflowY,x=e.current.scrollWidth-e.current.clientWidth,P=e.current.scrollHeight-e.current.clientHeight,r=window.getComputedStyle(e.current).cursor,t=[],n=[],i=[],e.current.childNodes.forEach(e=>{t.push(window.getComputedStyle(e).cursor),n.push("none"===window.getComputedStyle(e).transform?"":window.getComputedStyle(e).transform),i.push("none"===window.getComputedStyle(e).transition?"":window.getComputedStyle(e).transition)}))},[v]);let runScroll=()=>{let r=m.current.scrollSpeedX*y,t=m.current.scrollSpeedY*y,n=e.current.scrollLeft+r,a=e.current.scrollTop+t;e.current.scrollLeft=n,e.current.scrollTop=a,m.current.lastScrollX=n,m.current.lastScrollY=a},rubberBandCallback=r=>{let t=r.clientX-m.current.initialMouseX,n=r.clientY-m.current.initialMouseY,{clientWidth:a,clientHeight:s}=e.current,i=0,o=0;h&&p?(i=.3*a*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/a),o=.3*s*Math.sign(n)*Math.log10(1+.5*Math.abs(n)/s)):h?i=.3*a*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/a):p&&(o=.3*s*Math.sign(n)*Math.log10(1+.5*Math.abs(n)/s)),e.current.childNodes.forEach(e=>{e.style.transform="translate3d(".concat(i,"px, ").concat(o,"px, 0px)"),e.style.transition="transform 0ms"})},recoverChildStyle=()=>{e.current.childNodes.forEach((e,r)=>{e.style.transform=n[r],e.style.transition=i[r]})},callbackMomentum=()=>{l=setInterval(()=>{let r=m.current.scrollSpeedX,t=r*u;m.current.scrollSpeedX=t;let n=e.current.scrollLeft<=0,a=e.current.scrollLeft>=x;runScroll(),(.05>Math.abs(t)||m.current.isMouseDown||n||a)&&(m.current.scrollSpeedX=0,clearInterval(l))},y),c=setInterval(()=>{let r=m.current.scrollSpeedY,t=r*u;m.current.scrollSpeedY=t;let n=e.current.scrollTop<=0,a=e.current.scrollTop>=P;runScroll(),(.05>Math.abs(t)||m.current.isMouseDown||n||a)&&(m.current.scrollSpeedY=0,clearInterval(c))},y),m.current.isDraggingX=!1,m.current.isDraggingY=!1,g&&(e.current.childNodes.forEach(e=>{e.style.transform="translate3d(0px, 0px, 0px)",e.style.transition="transform ".concat(250,"ms")}),o=setTimeout(recoverChildStyle,250))},preventClick=e=>{e.preventDefault(),e.stopImmediatePropagation()},getIsMousePressActive=e=>"Left"===f&&1===e||"Middle"===f&&4===e||"Right"===f&&2===e,onMouseUp=n=>{let a=m.current.isDraggingX||m.current.isDraggingY,s=m.current.initialMouseX-n.clientX,i=m.current.initialMouseY-n.clientY,o=a&&(Math.abs(s)>d||Math.abs(i)>d);o?e.current.childNodes.forEach(e=>{e.addEventListener("click",preventClick)}):e.current.childNodes.forEach(e=>{e.removeEventListener("click",preventClick)}),m.current.isMouseDown=!1,m.current.lastMouseX=0,m.current.lastMouseY=0,e.current.style.cursor=r,e.current.childNodes.forEach((e,r)=>{e.style.cursor=t[r]}),o&&callbackMomentum()},onMouseMove=r=>{if(!m.current.isMouseDown)return;r.preventDefault();let t=m.current.lastMouseX-r.clientX;m.current.lastMouseX=r.clientX,m.current.scrollSpeedX=t/y,m.current.isDraggingX=!0;let n=m.current.lastMouseY-r.clientY;m.current.lastMouseY=r.clientY,m.current.scrollSpeedY=n/y,m.current.isDraggingY=!0,e.current.style.cursor="grabbing",e.current.childNodes.forEach(e=>{e.style.cursor="grabbing"});let a=e.current.scrollLeft<=0&&h,s=e.current.scrollLeft>=x&&h,i=e.current.scrollTop<=0&&p,o=e.current.scrollTop>=P&&p;(a||s||i||o)&&g&&rubberBandCallback(r),runScroll()},handleResize=()=>{x=e.current.scrollWidth-e.current.clientWidth,P=e.current.scrollHeight-e.current.clientHeight};return(0,a.useEffect)(()=>(v&&(window.addEventListener("mouseup",onMouseUp),window.addEventListener("mousemove",onMouseMove),window.addEventListener("resize",handleResize)),()=>{window.removeEventListener("mouseup",onMouseUp),window.removeEventListener("mousemove",onMouseMove),window.removeEventListener("resize",handleResize),clearInterval(l),clearInterval(c),clearTimeout(o)}),[v]),{events:{onMouseDown:e=>{let r=getIsMousePressActive(e.buttons);r&&(m.current.isMouseDown=!0,m.current.lastMouseX=e.clientX,m.current.lastMouseY=e.clientY,m.current.initialMouseX=e.clientX,m.current.initialMouseY=e.clientY)}}}}var i=t(24034),o=t(753),l=t(54487),c=t(28979);let Slider=e=>{let{children:r,onSlideEnd:t,...u}=e,d=(0,a.useRef)(),{events:g}=useDraggableScroll(d,{decayRate:.96,safeDisplacement:20}),[f,v]=(0,a.useState)(!0),[m,h]=(0,a.useState)(!1),[p,x]=(0,a.useState)(!1);function slideLeft(){let e=d.current;e&&e.scrollTo({left:e.scrollLeft-500,behavior:"smooth"})}function slideRight(){let e=d.current;e&&e.scrollTo({left:e.scrollLeft+500,behavior:"smooth"})}return(0,c.Z)(()=>{if(!f&&m){t&&t();let e=setTimeout(()=>{let e=d.current;e&&e.scrollTo({left:e.scrollLeft+500,behavior:"smooth"})},1e3);return()=>clearTimeout(e)}},[f,m]),(0,s.Z)(()=>{d.current.clientWidth<d.current.scrollWidth?x(!0):x(!1)},[d.current]),(0,n.jsxs)("div",{className:(0,l.cn)("relative flex items-center lg:gap-2",e.containerClassName),children:[(0,n.jsx)("div",{onClick:slideLeft,className:"flex items-center cursor-pointer hover:text-action absolute left-0 bg-gradient-to-r from-[--background-color] z-40 h-full w-16 hover:opacity-100 ".concat(f?"invisible":"lg:visible"),children:(0,n.jsx)(i.G,{className:"w-7 h-7 stroke-2 mx-auto"})}),(0,n.jsx)("div",{onScroll:()=>{let e=d.current;if(e){let r=0===e.scrollLeft,t=e.scrollLeft+e.clientWidth===e.scrollWidth;v(r),h(t)}},className:"flex max-w-full w-full space-x-3 overflow-x-scroll scrollbar-hide scroll",...g,ref:d,children:r}),(0,n.jsx)("div",{onClick:slideRight,className:(0,l.cn)("flex items-center invisible cursor-pointer hover:text-action absolute right-0 bg-gradient-to-l from-[--background-color] z-40 h-full w-16 hover:opacity-100",{"lg:visible":!m&&p}),children:(0,n.jsx)(o.F,{className:"w-7 h-7 stroke-2 mx-auto"})})]})}},37684:function(e,r,t){"use strict";t.d(r,{O:function(){return l}});var n=t(57437),a=t(54487),s=t(96061),i=t(2265);let o=(0,a.xH)({skeleton:(0,s.j)("UI-Skeleton__skeleton",{variants:{type:{box:"h-14 bg-gray-100 dark:bg-gray-800 w-full rounded-[--radius] animate-pulse",text:"h-2 bg-gray-100 dark:bg-gray-800 rounded-[--radius] animate-purple"}},defaultVariants:{}})}),l=i.forwardRef((e,r)=>{let{children:t,className:s,type:i="box",skeletonClassName:l,...c}=e;return"text"===i?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,n.jsx)("div",{className:(0,a.cn)("w-full",o.skeleton({type:i}),l,s),...c,ref:r}),(0,n.jsx)("div",{className:(0,a.cn)("w-full",o.skeleton({type:i}),l,s),...c,ref:r}),(0,n.jsx)("div",{className:(0,a.cn)("w-full",o.skeleton({type:i}),l,s),...c,ref:r}),(0,n.jsx)("div",{className:(0,a.cn)("w-[98%]",o.skeleton({type:i}),l,s),...c,ref:r}),(0,n.jsx)("div",{className:(0,a.cn)("w-[95%]",o.skeleton({type:i}),l,s),...c,ref:r}),(0,n.jsx)("div",{className:(0,a.cn)("w-[90%]",o.skeleton({type:i}),l,s),...c,ref:r})]})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:(0,a.cn)(o.skeleton({type:i}),l,s),...c,ref:r})})});l.displayName="Skeleton"},6025:function(e,r,t){"use strict";t.d(r,{z:function(){return searchAnilistMediaList}});var n=t(29222);async function searchAnilistMediaList(e){let{page:r,search:t,perPage:a,sort:s,status:i,genres:o,averageScoreGreater:l,season:c,seasonYear:u,format:d}=e;try{var g;let e=await n.Z.post("https://graphql.anilist.co",{query:"\n    query ListMedia(\n      $page: Int\n      $search: String\n      $perPage: Int\n      $sort: [MediaSort]\n      $status: [MediaStatus]\n      $genres: [String]\n      $averageScore_greater: Int\n      $season: MediaSeason\n      $seasonYear: Int\n      $format: MediaFormat\n    ) {\n      Page(page: $page, perPage: $perPage) {\n        pageInfo {\n          hasNextPage\n          total\n          perPage\n          currentPage\n          lastPage\n        }\n        media(\n          type: ANIME\n          search: $search\n          sort: $sort\n          status_in: $status\n          isAdult: false\n          format: $format\n          genre_in: $genres\n          averageScore_greater: $averageScore_greater\n          season: $season\n          seasonYear: $seasonYear\n          format_not: MUSIC\n        ) {\n          ...basicMedia\n        }\n      }\n    }\n    fragment basicMedia on Media {\n      id\n      idMal\n      siteUrl\n      status(version: 2)\n      season\n      type\n      format\n      bannerImage\n      episodes\n      synonyms\n      isAdult\n      countryOfOrigin\n      title {\n        userPreferred\n        romaji\n        english\n        native\n      }\n      coverImage {\n        extraLarge\n        large\n        medium\n        color\n      }\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      nextAiringEpisode {\n        airingAt\n        timeUntilAiring\n        episode\n      }\n    }\n  ",variables:{page:r,search:t,perPage:a,sort:s,status:i,genres:o,averageScore_greater:l,season:c,seasonYear:u,format:d}});return null===(g=e.data)||void 0===g?void 0:g.data}catch(e){console.error(e);return}}},66169:function(e,r,t){"use strict";function on(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];e&&e.addEventListener&&e.addEventListener.apply(e,r)}function off(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];e&&e.removeEventListener&&e.removeEventListener.apply(e,r)}t.d(r,{S1:function(){return off},jU:function(){return n},on:function(){return on}});var n="undefined"!=typeof window},64723:function(e,r,t){"use strict";var n=t(2265),a=t(66169).jU?n.useLayoutEffect:n.useEffect;r.Z=a},18354:function(e,r,t){"use strict";t.d(r,{Gm:function(){return infiniteQueryBehavior},Qy:function(){return hasNextPage},ZF:function(){return hasPreviousPage}});var n=t(40300);function infiniteQueryBehavior(e){return{onFetch:(r,t)=>{let fetchFn=async()=>{let t;let a=r.options,s=r.fetchOptions?.meta?.fetchMore?.direction,i=r.state.data?.pages||[],o=r.state.data?.pageParams||[],l=!1,addSignalProperty=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(r.signal.aborted?l=!0:r.signal.addEventListener("abort",()=>{l=!0}),r.signal)})},c=r.options.queryFn||(()=>Promise.reject(Error(`Missing queryFn: '${r.options.queryHash}'`))),fetchPage=async(e,t,a)=>{if(l)return Promise.reject();if(null==t&&e.pages.length)return Promise.resolve(e);let s={queryKey:r.queryKey,pageParam:t,direction:a?"backward":"forward",meta:r.options.meta};addSignalProperty(s);let i=await c(s),{maxPages:o}=r.options,u=a?n.Ht:n.VX;return{pages:u(e.pages,i,o),pageParams:u(e.pageParams,t,o)}};if(s&&i.length){let e="backward"===s,r=e?getPreviousPageParam:getNextPageParam,n={pages:i,pageParams:o},l=r(a,n);t=await fetchPage(n,l,e)}else{t=await fetchPage({pages:[],pageParams:[]},o[0]??a.initialPageParam);let r=e??i.length;for(let e=1;e<r;e++){let e=getNextPageParam(a,t);t=await fetchPage(t,e)}}return t};r.options.persister?r.fetchFn=()=>r.options.persister?.(fetchFn,{queryKey:r.queryKey,meta:r.options.meta,signal:r.signal},t):r.fetchFn=fetchFn}}}function getNextPageParam(e,{pages:r,pageParams:t}){let n=r.length-1;return e.getNextPageParam(r[n],r,t[n],t)}function getPreviousPageParam(e,{pages:r,pageParams:t}){return e.getPreviousPageParam?.(r[0],r,t[0],t)}function hasNextPage(e,r){return!!r&&null!=getNextPageParam(e,r)}function hasPreviousPage(e,r){return!!r&&!!e.getPreviousPageParam&&null!=getPreviousPageParam(e,r)}},33923:function(e,r,t){"use strict";t.d(r,{N:function(){return useInfiniteQuery}});var n=t(57501),a=t(18354),s=class extends n.z{constructor(e,r){super(e,r)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,r){super.setOptions({...e,behavior:(0,a.Gm)()},r)}getOptimisticResult(e){return e.behavior=(0,a.Gm)(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,r){let{state:t}=e,n=super.createResult(e,r),{isFetching:s,isRefetching:i}=n,o=s&&t.fetchMeta?.fetchMore?.direction==="forward",l=s&&t.fetchMeta?.fetchMore?.direction==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,a.Qy)(r,t.data),hasPreviousPage:(0,a.ZF)(r,t.data),isFetchingNextPage:o,isFetchingPreviousPage:l,isRefetching:i&&!o&&!l}}},i=t(30793);function useInfiniteQuery(e,r){return(0,i.r)(e,s,r)}}},function(e){e.O(0,[492,890,999,685,702,17,898,265,726,669,697,912,430,345,832,214,971,472,744],function(){return e(e.s=98008)}),_N_E=e.O()}]);