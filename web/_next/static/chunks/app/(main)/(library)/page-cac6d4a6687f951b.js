(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[758],{4030:function(e,n,i){Promise.resolve().then(i.bind(i,55990))},55990:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return Library}});var t=i(57437),a=i(77665),r=i(23890),l=i(16691),s=i.n(l),o=i(2265),d=i(9805),c=i(54487),u=i(45547);let m=(0,a.cn)(null);function LibraryHeader(){let e=(0,r.Dv)(m),[n,i]=(0,o.useState)(null),[a,l]=(0,o.useState)(null),[v,g]=(0,o.useState)(!1);(0,o.useEffect)(()=>{null===n?i(e):i(null);let t=setTimeout(()=>{i(e)},500);return()=>{clearTimeout(t)}},[e]),(0,o.useEffect)(()=>{n&&l(n)},[n]);let{y:p}=(0,u.Z)();return((0,o.useEffect)(()=>{p>100?g(!0):g(!1)},[p>100]),e)?(0,t.jsx)("div",{className:"__header h-[18rem] z-[-1] top-0 w-full md:w-[calc(100%-5rem)] fixed group/library-header",children:(0,t.jsxs)("div",{className:"h-[25rem] z-[0] w-full flex-none object-cover object-center absolute top-0 overflow-hidden",children:[(0,t.jsx)("div",{className:"w-full absolute z-[2] top-0 h-[15rem] bg-gradient-to-b from-[--background-color] to-transparent via"}),(0,t.jsx)(d.u,{show:!!n,enter:"transition-opacity duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(n||a)&&(0,t.jsx)(s(),{src:n||a,alt:"banner image",fill:!0,quality:100,priority:!0,sizes:"100vw",className:(0,c.cn)("object-cover object-center z-[1] opacity-100 transition-all duration-700",{"opacity-20":v})})}),a&&(0,t.jsx)(s(),{src:a,alt:"banner image",fill:!0,quality:100,priority:!0,sizes:"100vw",className:(0,c.cn)("object-cover object-center z-[1] opacity-50 transition-all",{"opacity-10":v})}),(0,t.jsx)("div",{className:"w-full z-[2] absolute bottom-0 h-[40rem] bg-gradient-to-t from-[--background-color] via-opacity-50 via-10% to-transparent"}),(0,t.jsx)("div",{className:"w-[4rem] z-[2] absolute top-0 right-0 h-[40rem] bg-gradient-to-l from-[--background-color] via-opacity-50 via-10% to-transparent"})]})}):null}var v=i(7214),g=i(11305),p=i(45652),x=i.n(p);function getLibraryCollectionTitle(e){return"current"===e?"Currently watching":x()(e)}var h=i(73199),f=i(88356),y=i(97622),b=i(33538),j=i(65871),N=i(77097),C=i(37376);function BetaBadge(e){return(0,t.jsx)(C.C,{intent:"warning",className:"align-middle ml-1.5",...e,children:"Experimental"})}var w=i(34813),M=i(37122),S=i(10137);let k=(0,a.cn)(!1),P=(0,a.cn)(!1);function ScannerModal(){let[e,n]=(0,r.KO)(k),[,i]=(0,r.KO)(P),a=(0,M.k)(!1),l=(0,M.k)(!0),s=(0,M.k)(!0),{scanLibrary:d,isScanning:c}=(0,S.Jx)();function handleScan(){d({enhanced:a.active,skipLockedFiles:l.active,skipIgnoredFiles:s.active})}return(0,o.useEffect)(()=>{i(c)},[c]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(b.u_,{isOpen:e,onClose:()=>n(!1),isClosable:!c,title:(0,t.jsx)("h3",{children:"Scan library"}),titleClassName:"text-center",bodyClassName:"space-y-4",size:"xl",children:[(0,t.jsxs)("div",{className:"space-y-4 mt-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(j.XZ,{label:(0,t.jsxs)("span",{className:"flex items-center",children:["Enable enhanced scanning ",(0,t.jsx)(BetaBadge,{}),(0,t.jsx)(N.M,{className:"ml-2 text-amber-500"})]}),checked:a.active,onChange:a.toggle,controlClassName:"data-[state=checked]:bg-amber-700 dark:data-[state=checked]:bg-amber-700",size:"lg"}),a.active&&(0,t.jsxs)("ul",{className:"list-disc pl-14",children:[(0,t.jsxs)("li",{children:["Your Anilist anime list data is ",(0,t.jsx)("strong",{children:"not needed"})]}),(0,t.jsx)("li",{children:"Scanning will slow down by ~25s"})]})]}),(0,t.jsx)(w.iz,{}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(j.XZ,{label:"Skip locked files",checked:l.active,onChange:l.toggle}),(0,t.jsx)(j.XZ,{label:"Skip ignored files",checked:s.active,onChange:s.toggle})]})]}),(0,t.jsx)(y.zx,{onClick:handleScan,intent:"primary",leftIcon:(0,t.jsx)(f.j,{}),isLoading:c,className:"w-full",children:"Scan"})]})})}function LibraryCollectionLists(e){let{collectionList:n,isLoading:i}=e,a=(0,r.b9)(k),l=(0,o.useMemo)(()=>n.some(e=>e.entries.length>0),[n]);return i?(0,t.jsx)(g.TK,{}):l||i?(0,t.jsx)("div",{className:"p-4 space-y-8 relative",children:n.map(e=>0===e.entries.length?null:(0,t.jsx)(E,{list:e},e.type))}):(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"text-center space-y-4",children:[(0,t.jsx)("h2",{children:"Empty library"}),(0,t.jsx)(y.zx,{intent:"warning-subtle",leftIcon:(0,t.jsx)(f.j,{}),size:"xl",rounded:!0,onClick:()=>a(!0),children:"Scan your library"})]}),(0,t.jsx)("h3",{children:"Popular this season"}),(0,t.jsx)(h.K,{})]})}let E=(0,o.memo)(e=>{var n;let{list:i}=e;return(0,t.jsxs)(o.Fragment,{children:[(0,t.jsx)("h2",{children:getLibraryCollectionTitle(i.type)}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 min-[2000px]:grid-cols-8 gap-4",children:null===(n=i.entries)||void 0===n?void 0:n.map(e=>(0,t.jsx)(I,{entry:e},e.mediaId))})]},i.type)}),I=(0,o.memo)(e=>{let{entry:n}=e;return(0,t.jsx)(v.k,{media:n.media,listData:n.listData,libraryData:n.libraryData})});var D=i(47900),L=i(24033),_=i(7951),z=i(5790),A=i(20302),T=i(83891);function ContinueWatching(e){let{list:n,isLoading:i}=e;if(n.length>0)return(0,t.jsxs)("div",{className:"space-y-8 p-4",children:[(0,t.jsx)("h2",{children:"Continue watching"}),(0,t.jsx)(_.i,{children:n.map((e,n)=>{var i;return(0,t.jsx)(O,{...e},(null===(i=e.basicMedia)||void 0===i?void 0:i.id)||n)})})]})}let O=(0,o.memo)(e=>{var n,i,a,l,s;let d=(0,L.useRouter)(),c=(null===(n=e.episodeMetadata)||void 0===n?void 0:n.airDate)?new Date(e.episodeMetadata.airDate):void 0,u=(0,r.b9)(m),v=(0,o.useMemo)(()=>c?(0,A.Z)(c,(0,T.Z)(new Date,2)):void 0,[]);return(0,o.useEffect)(()=>{u(n=>{if(null===n){var i,t;return(null===(i=e.basicMedia)||void 0===i?void 0:i.bannerImage)||(null===(t=e.episodeMetadata)||void 0===t?void 0:t.image)||null}return n})},[]),(0,t.jsx)(D.S,{image:null===(i=e.episodeMetadata)||void 0===i?void 0:i.image,title:(0,t.jsxs)("span",{children:[e.displayTitle," ",!!(null===(a=e.basicMedia)||void 0===a?void 0:a.episodes)&&(0,t.jsxs)("span",{className:"opacity-40",children:["/"," ",e.basicMedia.episodes]})]}),topTitle:null===(s=e.basicMedia)||void 0===s?void 0:null===(l=s.title)||void 0===l?void 0:l.userPreferred,actionIcon:void 0,meta:c?v?new Intl.DateTimeFormat("en-US",{day:"2-digit",month:"2-digit",year:"2-digit"}).format(c):"".concat((0,z.Z)(c,{addSuffix:!0})):void 0,onClick:()=>{var n;d.push("/entry?id=".concat(null===(n=e.basicMedia)||void 0===n?void 0:n.id,"&playNext=true"))},onMouseEnter:()=>{(0,o.startTransition)(()=>{var n,i;u((null===(n=e.basicMedia)||void 0===n?void 0:n.bannerImage)||(null===(i=e.episodeMetadata)||void 0===i?void 0:i.image)||null)})},larger:!0})});var $=i(6555),F=i(53677),B=i(12325),U=i(78637),q=i(86321),R=i(77550),K=i(69291),Y=i(93054),V=i(66834),Z=i(98602),G=i(31466),X=i(68260),W=i(69802);let H=(0,a.cn)(!1);function UnmatchedFileManager(e){let{unmatchedGroups:n}=e,[i,a]=(0,r.KO)(H),[l,d]=(0,o.useState)(0),u=n.length-1,[m,v]=(0,o.useState)(null==n?void 0:n[0]),[p,x]=(0,o.useState)(0),{openInExplorer:h}=(0,Z.cg)(),{suggestions:j,fetchSuggestions:N,isPending:C,resetSuggestions:M}=(0,X.bo)(),{manuallyMatchEntry:S,isPending:k}=(0,X.Pe)(),[P,E]=(0,o.useState)(0),I=(0,o.useCallback)(()=>{N(m.dir)},[null==m?void 0:m.dir,N]),D=(0,o.useCallback)(e=>{e&&!isNaN(Number(e))&&(x(Number(e)),E(e=>e+1))},[]);(0,o.useEffect)(()=>{v(n[l]),x(0),M()},[l,n]);let L=(0,o.useCallback)(()=>(0,t.jsx)(G.Y,{discrete:!0,value:p,onChange:e=>x(e)}),[null==m?void 0:m.dir,P]);function handleManuallyMatchEntry(){m&&p>0&&S({dir:null==m?void 0:m.dir,mediaId:p},()=>{0===l&&1===n.length&&a(!1),x(0),M(),d(0),v(n[0])})}return((0,o.useEffect)(()=>{m||a(!1)},[m]),m)?(0,t.jsx)(b.dy,{isOpen:i,onClose:()=>a(!1),size:"xl",title:"Resolve unmatched",isClosable:!0,children:(0,t.jsxs)(Y.ce,{children:[(0,t.jsxs)("div",{className:(0,c.cn)("flex w-full justify-between",{hidden:n.length<=1}),children:[(0,t.jsx)(y.zx,{intent:"gray-subtle",leftIcon:(0,t.jsx)(R.W,{}),isDisabled:0===l,onClick:()=>{d(e=>e-1)},className:(0,c.cn)("transition-opacity",{"opacity-0":0===l}),children:"Previous"}),(0,t.jsx)(y.zx,{intent:"gray-subtle",rightIcon:(0,t.jsx)(K.U,{}),isDisabled:l>=u,onClick:()=>{d(e=>e+1)},className:(0,c.cn)("transition-opacity",{"opacity-0":l>=u}),children:"Next"})]}),(0,t.jsxs)("div",{className:"bg-gray-800 p-2 px-4 rounded-md line-clamp-1 flex gap-2 items-center cursor-pointer transition hover:bg-opacity-80",onClick:()=>h(m.dir),children:[(0,t.jsx)(V.T,{className:"text-2xl"}),m.dir]}),(0,t.jsx)("div",{className:"bg-gray-800 p-2 px-4 rounded-md space-y-1 max-h-60 overflow-y-auto",children:m.localFiles.sort((e,n)=>{var i,t,a,r;return Number(null!==(a=null===(i=e.parsedInfo)||void 0===i?void 0:i.episode)&&void 0!==a?a:0)-Number(null!==(r=null===(t=n.parsedInfo)||void 0===t?void 0:t.episode)&&void 0!==r?r:0)}).map(e=>(0,t.jsx)("p",{className:"",children:e.path},e.path))}),(0,t.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,t.jsx)("p",{className:"flex-none text-lg mr-2 font-semibold",children:"Anilist ID"}),(0,t.jsx)(L,{}),(0,t.jsx)(y.zx,{intent:"primary-outline",onClick:handleManuallyMatchEntry,isLoading:k,children:"Match"})]}),(0,t.jsx)(w.iz,{}),(0,t.jsx)(y.zx,{leftIcon:(0,t.jsx)(f.j,{}),intent:"success-subtle",onClick:I,children:"Fetch suggestions"}),C&&(0,t.jsx)(g.TK,{}),!C&&j.length>0&&(0,t.jsx)(W.E,{defaultValue:"1",fieldClassName:"w-full",fieldLabelClassName:"text-md",label:"Select Anime",value:String(p),onChange:D,options:j.map(e=>{var n,i,a,r,l,o,d;return{label:(null===(n=e.title)||void 0===n?void 0:n.userPreferred)||(null===(i=e.title)||void 0===i?void 0:i.english)||(null===(a=e.title)||void 0===a?void 0:a.romaji)||"",value:String(e.id)||"",help:(0,t.jsxs)("div",{className:"mt-2 flex w-full gap-4",children:[(null===(r=e.coverImage)||void 0===r?void 0:r.medium)&&(0,t.jsx)("div",{className:"h-28 w-28 flex-none rounded-md object-cover object-center relative overflow-hidden",children:(0,t.jsx)(s(),{src:e.coverImage.medium,alt:"",fill:!0,quality:100,priority:!0,sizes:"10rem",className:"object-cover object-center"})}),(0,t.jsxs)("div",{className:"text-[--muted]",children:[(0,t.jsxs)("p",{children:["Type: ",(0,t.jsx)("span",{className:"text-gray-200 font-semibold",children:e.format})]}),(0,t.jsxs)("p",{children:["Aired: ",(null===(l=e.startDate)||void 0===l?void 0:l.year)?new Intl.DateTimeFormat("en-US",{year:"numeric"}).format(new Date((null===(o=e.startDate)||void 0===o?void 0:o.year)||0,(null===(d=e.startDate)||void 0===d?void 0:d.month)||0)):"-"]}),(0,t.jsxs)("p",{children:["Status: ",e.status]}),(0,t.jsx)(y.zx,{intent:"primary-link",size:"sm",className:"px-0",onClick:()=>window.open("https://anilist.co/anime/".concat(e.id),"_target"),children:"Open on AniList"})]})]})}}),radioContainerClassName:"block w-full p-4 cursor-pointer dark:bg-gray-900 transition border border-[--border] rounded-[--radius] data-[checked=true]:ring-2 ring-[--ring]",radioControlClassName:"absolute right-2 top-2 h-5 w-5 text-xs",radioHelpClassName:"text-sm",radioLabelClassName:"font-semibold flex-none w-[90%] line-clamp-1",stackClassName:"grid grid-cols-2 gap-2 space-y-0"})]})}):null}var J=i(751),Q=i(92315),ee=i(24285);let en=(0,a.cn)(!1);function BulkActionModal(){let[e,n]=(0,r.KO)(en),{lockFiles:i,unlockFiles:a,isPending:l}=(0,S.ss)();return(0,t.jsx)(b.u_,{isOpen:e,onClose:()=>n(!1),isClosable:!0,title:"Bulk actions",bodyClassName:"space-y-4",children:(0,t.jsxs)(Y.ce,{spacing:"sm",children:[(0,t.jsx)(y.zx,{leftIcon:(0,t.jsx)(Q.U,{}),intent:"white-subtle",className:"w-full",isLoading:l,onClick:i,children:"Lock all files"}),(0,t.jsx)(y.zx,{leftIcon:(0,t.jsx)(ee.k,{}),intent:"white-subtle",className:"w-full",isLoading:l,onClick:a,children:"Unlock all files"})]})})}function LibraryToolbar(e){var n,i,a,l,s,o;let{collectionList:d,ignoredLocalFiles:u,unmatchedLocalFiles:m}=e,v=(0,r.b9)(en),g=(0,r.Dv)(J.X),p=(0,r.b9)(k),x=(0,r.b9)(H),h=d.some(e=>e.entries.length>0),{openInExplorer:b}=(0,Z.cg)();return(0,t.jsxs)("div",{className:"flex w-full justify-between p-4",children:[(0,t.jsxs)("div",{className:"flex gap-2",children:[!!(null==g?void 0:null===(i=g.settings)||void 0===i?void 0:null===(n=i.library)||void 0===n?void 0:n.libraryPath)&&h&&(0,t.jsx)(y.zx,{intent:h?"primary-subtle":"primary",leftIcon:(0,t.jsx)(f.j,{}),onClick:()=>p(!0),children:h?"Refresh entries":"Scan your library"}),m.length>0&&(0,t.jsxs)(y.zx,{intent:"alert-outline",leftIcon:(0,t.jsx)($.b,{}),className:"animate-pulse",onClick:()=>x(!0),children:["Resolve unmatched (",m.length,")"]})]}),(0,t.jsx)("div",{className:"flex gap-2",children:(0,t.jsxs)(F.h_,{trigger:(0,t.jsx)(y.hU,{icon:(0,t.jsx)(B.T,{}),intent:"gray-basic"}),children:[(0,t.jsxs)(F.h_.Item,{disabled:!(null==g?void 0:null===(l=g.settings)||void 0===l?void 0:null===(a=l.library)||void 0===a?void 0:a.libraryPath),className:(0,c.cn)({"!text-[--muted]":!(null==g?void 0:null===(o=g.settings)||void 0===o?void 0:null===(s=o.library)||void 0===s?void 0:s.libraryPath)}),onClick:()=>{var e,n,i;b(null!==(i=null==g?void 0:null===(n=g.settings)||void 0===n?void 0:null===(e=n.library)||void 0===e?void 0:e.libraryPath)&&void 0!==i?i:"")},children:[(0,t.jsx)(U.J,{}),(0,t.jsx)("span",{children:"Open folder"})]}),(0,t.jsxs)(F.h_.Item,{onClick:()=>v(!0),disabled:!h,className:(0,c.cn)({"!text-[--muted]":!h}),children:[(0,t.jsx)(q.m,{}),(0,t.jsx)("span",{children:"Bulk actions"})]})]})})]})}var ei=i(67998),et=i(57638);function ScanProgressBar(){let[e]=(0,r.KO)(P),[n,i]=(0,o.useState)(0);return((0,ei.SN)({type:et.f.SCAN_PROGRESS,onMessage:e=>{i(e),100===e&&setTimeout(()=>{i(0)},2e3)}}),e)?(0,t.jsx)("div",{className:"w-full bg-gray-800 fixed top-0 left-0 z-[100]",children:(0,t.jsxs)("div",{className:"bg-brand text-xs font-medium text-blue-100 text-center p-0.5 leading-none transition-all",style:{width:n+"%"},children:[" ",n,"%"]})}):null}function Library(){let{libraryCollectionList:e,isLoading:n,continueWatchingList:i,unmatchedLocalFiles:a,ignoredLocalFiles:r,unmatchedGroups:l}=(0,S.d3)();return(0,t.jsxs)("div",{children:[(0,t.jsx)(ScanProgressBar,{}),(0,t.jsx)(LibraryHeader,{}),(0,t.jsx)(LibraryToolbar,{collectionList:e,unmatchedLocalFiles:a,ignoredLocalFiles:r,isLoading:n}),(0,t.jsx)(ContinueWatching,{list:i,isLoading:n}),(0,t.jsx)(LibraryCollectionLists,{collectionList:e,isLoading:n}),(0,t.jsx)(ScannerModal,{}),(0,t.jsx)(UnmatchedFileManager,{unmatchedGroups:l}),(0,t.jsx)(BulkActionModal,{})]})}},46656:function(e,n,i){"use strict";i.d(n,{U:function(){return AnimeSliderSkeletonItem}});var t=i(57437),a=i(37684);i(2265);let AnimeSliderSkeletonItem=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.O,{className:"min-w-[250px] max-w-[250px] h-[350px] bg-gray-700 rounded-md mt-8"})})},85713:function(e,n,i){"use strict";i.d(n,{aB:function(){return useDiscoverTrendingAnime},bG:function(){return useDiscoverUpcomingAnime},oG:function(){return useDiscoverTrendingMovies},t4:function(){return useDiscoverPopularAnime}});var t=i(33923),a=i(94152),r=i(6025);function useDiscoverTrendingAnime(){return(0,t.N)({queryKey:["discover-trending-anime"],initialPageParam:1,queryFn:async e=>{let{pageParam:n}=e;return(0,r.z)({page:n,perPage:20,sort:["TRENDING_DESC"]})},getNextPageParam:(e,n)=>{var i,t,a,r;let l=null==e?void 0:null===(t=e.Page)||void 0===t?void 0:null===(i=t.pageInfo)||void 0===i?void 0:i.currentPage,s=null==e?void 0:null===(r=e.Page)||void 0===r?void 0:null===(a=r.pageInfo)||void 0===a?void 0:a.hasNextPage;return l&&s&&l<4?n.length+1:void 0}})}function useDiscoverUpcomingAnime(){return(0,a.a)({queryKey:["discover-upcoming-anime"],queryFn:()=>(0,r.z)({page:1,perPage:20,sort:["TRENDING_DESC"],status:["NOT_YET_RELEASED"]})})}function useDiscoverPopularAnime(){return(0,a.a)({queryKey:["discover-popular-anime"],queryFn:()=>(0,r.z)({page:1,perPage:20,sort:["POPULARITY_DESC"]})})}function useDiscoverTrendingMovies(){return(0,a.a)({queryKey:["discover-trending-movies"],queryFn:()=>(0,r.z)({page:1,perPage:20,format:"MOVIE",sort:["TRENDING_DESC"]})})}},73199:function(e,n,i){"use strict";i.d(n,{K:function(){return DiscoverTrending},W:function(){return u}});var t=i(57437),a=i(2265),r=i(7214),l=i(7951),s=i(85713),o=i(77665),d=i(46656),c=i(23890);let u=(0,o.cn)(void 0);function DiscoverTrending(){var e;let{data:n,isLoading:i,fetchNextPage:o}=(0,s.aB)(),m=(0,c.b9)(u),v=(0,a.useMemo)(()=>Math.floor(6*Math.random()),[]);return(0,a.useEffect)(()=>{var e;m(null==n?void 0:null===(e=n.pages)||void 0===e?void 0:e.filter(Boolean).flatMap(e=>{var n;return null===(n=e.Page)||void 0===n?void 0:n.media}).filter(Boolean)[v])},[n]),(0,t.jsx)(l.i,{onSlideEnd:()=>o(),children:i?[...Array(10).keys()].map((e,n)=>(0,t.jsx)(d.U,{},n)):null==n?void 0:null===(e=n.pages)||void 0===e?void 0:e.filter(Boolean).flatMap(e=>{var n;return null===(n=e.Page)||void 0===n?void 0:n.media}).filter(Boolean).map(e=>(0,t.jsx)(r.k,{media:e,showLibraryBadge:!0,containerClassName:"min-w-[250px] max-w-[250px] mt-8"},e.id))})}},6025:function(e,n,i){"use strict";i.d(n,{z:function(){return searchAnilistMediaList}});var t=i(29222);async function searchAnilistMediaList(e){let{page:n,search:i,perPage:a,sort:r,status:l,genres:s,averageScoreGreater:o,season:d,seasonYear:c,format:u}=e;try{var m;let e=await t.Z.post("https://graphql.anilist.co",{query:"\n    query ListMedia(\n      $page: Int\n      $search: String\n      $perPage: Int\n      $sort: [MediaSort]\n      $status: [MediaStatus]\n      $genres: [String]\n      $averageScore_greater: Int\n      $season: MediaSeason\n      $seasonYear: Int\n      $format: MediaFormat\n    ) {\n      Page(page: $page, perPage: $perPage) {\n        pageInfo {\n          hasNextPage\n          total\n          perPage\n          currentPage\n          lastPage\n        }\n        media(\n          type: ANIME\n          search: $search\n          sort: $sort\n          status_in: $status\n          isAdult: false\n          format: $format\n          genre_in: $genres\n          averageScore_greater: $averageScore_greater\n          season: $season\n          seasonYear: $seasonYear\n          format_not: MUSIC\n        ) {\n          ...basicMedia\n        }\n      }\n    }\n    fragment basicMedia on Media {\n      id\n      idMal\n      siteUrl\n      status(version: 2)\n      season\n      type\n      format\n      bannerImage\n      episodes\n      synonyms\n      isAdult\n      countryOfOrigin\n      title {\n        userPreferred\n        romaji\n        english\n        native\n      }\n      coverImage {\n        extraLarge\n        large\n        medium\n        color\n      }\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      nextAiringEpisode {\n        airingAt\n        timeUntilAiring\n        episode\n      }\n    }\n  ",variables:{page:n,search:i,perPage:a,sort:r,status:l,genres:s,averageScore_greater:o,season:d,seasonYear:c,format:u}});return null===(m=e.data)||void 0===m?void 0:m.data}catch(e){console.error(e);return}}},98602:function(e,n,i){"use strict";i.d(n,{$g:function(){return useDefaultSettingsPaths},VP:function(){return useOpenDefaultMediaPlayer},cg:function(){return useOpenInExplorer},tB:function(){return useOpenMediaEntryInExplorer}});var t=i(51472),a=i(57638);function useDefaultSettingsPaths(){return{getDefaultVlcPath:e=>{switch(e){case"windows":default:return"C:\\Program Files\\VideoLAN\\VLC\\vlc.exe";case"linux":return"/usr/bin/vlc";case"darwin":return"/Applications/VLC.app/Contents/MacOS/VLC"}},getDefaultQBittorrentPath:e=>{switch(e){case"windows":default:return"C:/Program Files/qBittorrent/qbittorrent.exe";case"linux":return"/usr/bin/qbittorrent";case"darwin":return"/Applications/Client.app/Contents/MacOS/qBittorrent"}}}}function useOpenDefaultMediaPlayer(){let{mutate:e}=(0,t.$U)({endpoint:a.E.START_MEDIA_PLAYER,mutationKey:["open-default-media-player"]});return{startDefaultMediaPlayer:()=>e()}}function useOpenMediaEntryInExplorer(){let{mutate:e}=(0,t.$U)({endpoint:a.E.OPEN_MEDIA_ENTRY_IN_EXPLORER,mutationKey:["open-media-entry-in-explorer"]});return{openEntryInExplorer:n=>e({mediaId:n})}}function useOpenInExplorer(){let{mutate:e}=(0,t.$U)({endpoint:a.E.OPEN_IN_EXPLORER,mutationKey:["open-in-explorer"]});return{openInExplorer:n=>e({path:n})}}}},function(e){e.O(0,[492,890,999,685,702,17,898,265,726,669,697,244,912,430,345,832,214,700,971,472,744],function(){return e(e.s=4030)}),_N_E=e.O()}]);