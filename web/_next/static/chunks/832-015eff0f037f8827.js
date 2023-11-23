"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{95518:function(e,t,n){n.d(t,{Iw:function(){return useAtomicLibraryCollectionLoader},uN:function(){return u},yh:function(){return c}});var i=n(77665),s=n(97726),l=n(23890),o=n(2265),r=n(51472),a=n(57638);let c=(0,s.O4)("sea-library-collection",void 0,void 0,{unstable_getOnInit:!0}),u=(0,i.cn)(e=>e(c),(e,t,n)=>{var i;let s=null===(i=e(c))||void 0===i?void 0:i.lists;if(s)return s.flatMap(e=>e.entries).find(e=>e.mediaId===n)});function useAtomicLibraryCollectionLoader(){let e=(0,l.b9)(c),{data:t,status:n}=(0,r.tZ)({endpoint:a.E.LIBRARY_COLLECTION,queryKey:["get-library-collection"]});return(0,o.useEffect)(()=>{"success"===n&&e(t)},[t,n]),null}},70226:function(e,t,n){n.d(t,{Oh:function(){return useListenToMissingEpisodes},VK:function(){return useMissingEpisodeCount},wS:function(){return c}});var i=n(57638),s=n(77665),l=n(23890),o=n(51472),r=n(2265),a=n(24033);let c=(0,s.cn)([]),u=(0,s.cn)(e=>e(c).length);function useMissingEpisodeCount(){return(0,l.Dv)(u)}function useListenToMissingEpisodes(){let e=(0,a.usePathname)(),t=(0,l.b9)(c),{data:n}=(0,o.tZ)({endpoint:i.E.MISSING_EPISODES,queryKey:["get-missing-episodes"],enabled:"/schedule"!==e});return(0,r.useEffect)(()=>{t(null!=n?n:[])},[n]),null}},48761:function(e,t,n){n.d(t,{L:function(){return o},x:function(){return useCurrentUser}});var i=n(23890),s=n(751),l=n(77665);let o=(0,l.cn)(e=>{var t;let n=e(s.X);return null==n?void 0:null===(t=n.user)||void 0===t?void 0:t.viewer});function useCurrentUser(){let[e,t]=(0,i.KO)(o);return{user:e,setUser:t}}},42475:function(e,t,n){n.d(t,{X:function(){return AnilistMediaEntryModal}});var i=n(57437),s=n(2265),l=n(46246),o=n(26345),r=n(48761),a=n(23890),c=n(97622),u=n(56407),d=n(85208),m=n(33538),f=n(16691),g=n.n(f),p=n(54487),h=n(80024),y=n(67701),v=n(18743),b=n(87870),E=n(38038),x=n(51472),L=n(57638),N=n(5925);let S=(0,o.SC)(e=>{let{z:t,presets:n}=e;return t.object({status:t.custom().nullish(),score:t.number().min(0).max(1e3).nullish(),progress:t.number().min(0).nullish(),startedAt:n.datePicker.nullish().transform(e=>e?{day:e.getUTCDate(),month:e.getUTCMonth()+1,year:e.getUTCFullYear()}:void 0),completedAt:n.datePicker.nullish().transform(e=>e?{day:e.getUTCDate(),month:e.getUTCMonth()+1,year:e.getUTCFullYear()}:void 0)})}),AnilistMediaEntryModal=e=>{var t,n;let{children:f,media:w,listData:A,...j}=e,C=(0,a.Dv)(r.L),I=(0,E.NL)(),{mutate:_,isPending:T}=(0,x.$U)({endpoint:L.E.ANILIST_LIST_ENTRY,mutationKey:["update-anilist-list-entry"],onSuccess:async()=>{N.ZP.success("Entry updated"),await I.refetchQueries({queryKey:["get-media-entry",null==w?void 0:w.id]}),await I.refetchQueries({queryKey:["get-library-collection"]}),await I.refetchQueries({queryKey:["get-anilist-collection"]})}}),[D,k]=(0,l.Z)(!1);return C&&A?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.hU,{intent:"gray-subtle",icon:A?(0,i.jsx)(u.Q,{}):(0,i.jsx)(d.p,{}),rounded:!0,size:"sm",onClick:k}),!A&&(0,i.jsx)(c.hU,{intent:"primary-subtle",icon:(0,i.jsx)(d.p,{}),rounded:!0,size:"sm",onClick:()=>_({mediaId:(null==w?void 0:w.id)||0,status:"PLANNING"})}),(0,i.jsxs)(m.u_,{isOpen:D,onClose:k,title:null!==(n=null==w?void 0:null===(t=w.title)||void 0===t?void 0:t.userPreferred)&&void 0!==n?n:void 0,isClosable:!0,size:"xl",titleClassName:"text-xl",children:[(null==w?void 0:w.bannerImage)&&(0,i.jsxs)("div",{className:"h-24 w-full flex-none object-cover object-center overflow-hidden absolute left-0 top-0 z-[-1]",children:[(0,i.jsx)(g(),{src:null==w?void 0:w.bannerImage,alt:"banner",fill:!0,quality:80,priority:!0,sizes:"20rem",className:"object-cover object-center opacity-30"}),(0,i.jsx)("div",{className:"z-[5] absolute bottom-0 w-full h-[80%] bg-gradient-to-t from-gray-900 to-transparent"})]}),!!A&&(0,i.jsxs)(o.Fu,{schema:S,onSubmit:e=>{console.log(e.startedAt),_({mediaId:(null==w?void 0:w.id)||0,status:e.status,score:e.score?10*e.score:0,progress:e.progress,startedAt:e.startedAt,completedAt:e.completedAt})},className:(0,p.cn)({"mt-16":!!(null==w?void 0:w.bannerImage)}),onError:console.log,defaultValues:{status:null==A?void 0:A.status,score:null==A?void 0:A.score,progress:null==A?void 0:A.progress,startedAt:(null==A?void 0:A.startedAt)?new Date(null==A?void 0:A.startedAt):void 0,completedAt:(null==A?void 0:A.completedAt)?new Date(null==A?void 0:A.completedAt):void 0},children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,i.jsx)(o.gN.Select,{label:"Status",name:"status",options:[(null==w?void 0:w.status)!=="NOT_YET_RELEASED"?{value:"CURRENT",label:"Watching"}:void 0,{value:"PLANNING",label:"Planning"},(null==w?void 0:w.status)!=="NOT_YET_RELEASED"?{value:"PAUSED",label:"Paused"}:void 0,(null==w?void 0:w.status)!=="NOT_YET_RELEASED"?{value:"COMPLETED",label:"Completed"}:void 0,(null==w?void 0:w.status)!=="NOT_YET_RELEASED"?{value:"DROPPED",label:"Dropped"}:void 0].filter(Boolean)}),(null==w?void 0:w.status)!=="NOT_YET_RELEASED"&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.gN.Number,{label:"Score",name:"score",discrete:!0,min:0,max:10,maxFractionDigits:0,minFractionDigits:0,precision:1,rightIcon:(0,i.jsx)(y.s,{})}),(0,i.jsx)(o.gN.Number,{label:"Progress",name:"progress",discrete:!0,min:0,maxFractionDigits:0,minFractionDigits:0,precision:1,rightIcon:(0,i.jsx)(h.g,{})})]})]}),(null==w?void 0:w.status)!=="NOT_YET_RELEASED"&&(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,i.jsx)(o.gN.DatePicker,{label:"Start date",name:"startedAt"}),(0,i.jsx)(o.gN.DatePicker,{label:"Completion date",name:"completedAt"})]}),(0,i.jsxs)("div",{className:"flex w-full items-center justify-between mt-4",children:[(0,i.jsx)("div",{className:"flex items-center gap-1",children:(0,i.jsxs)(v.p,{children:[(0,i.jsx)(v.p.Button,{as:s.Fragment,children:(0,i.jsx)(c.hU,{intent:"alert-subtle",icon:(0,i.jsx)(b.S,{}),rounded:!0,size:"md"})}),(0,i.jsx)(v.p.Panel,{children:(0,i.jsx)(c.zx,{intent:"alert-basic",rounded:!0,size:"md",children:"Confirm"})})]})}),(0,i.jsx)(o.gN.Submit,{role:"save",disableIfInvalid:!0,isLoading:T})]})]})]})]}):null}},59346:function(e,t,n){n.d(t,{t:function(){return imageShimmer}});let imageShimmerEffect=(e,t)=>'\n<svg width="'.concat(e,'" height="').concat(t,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(e,'" height="').concat(t,'" fill="#333" />\n  <rect id="r" width="').concat(e,'" height="').concat(t,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(e,'" to="').concat(e,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),toBase64=e=>window.btoa(e),imageShimmer=(e,t)=>"data:image/svg+xml;base64,".concat(toBase64(imageShimmerEffect(e,t)))},6469:function(e,t,n){n.d(t,{u:function(){return c}});var i=n(57437),s=n(2265),l=n(54487),o=n(96061),r=n(98265);let a=(0,l.xH)({tooltip:(0,o.j)(["UI-Tooltip__tooltip","z-50 overflow-hidden rounded-[--radius] px-3 py-1.5 text-sm shadow-md animate-in fade-in-50","bg-gray-800 text-white","data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1"])}),c=s.forwardRef((e,t)=>{let{children:n,tooltipClassName:s,className:o,trigger:c,...u}=e;return(0,i.jsx)(r.zt,{delayDuration:50,children:(0,i.jsxs)(r.fC,{children:[(0,i.jsx)(r.xz,{asChild:!0,children:c}),(0,i.jsx)(r.VY,{className:(0,l.cn)(a.tooltip(),s,o),...u,ref:t,children:n})]})})});c.displayName="Tooltip",r.zt},10137:function(e,t,n){n.d(t,{Jx:function(){return useScanLibrary},Kg:function(){return useMediaEntryBulkAction},_U:function(){return useUpdateLocalFile},d3:function(){return useLibraryCollection},qn:function(){return useMissingEpisodes},ss:function(){return useLocalFileBulkAction}});var i=n(38038),s=n(51472),l=n(57638),o=n(2265),r=n(5925),a=n(23890),c=n(95518),u=n(70226);function useScanLibrary(){let e=(0,i.NL)(),{mutate:t,isPending:n}=(0,s.$U)({endpoint:l.E.SCAN_LIBRARY,mutationKey:["scan-library"],onSuccess:async()=>{await e.refetchQueries({queryKey:["get-library-collection"]}),await e.refetchQueries({queryKey:["get-missing-episodes"]})}});return{scanLibrary:t,isScanning:n}}function useLibraryCollection(){var e,t,n,i;let[r,u]=(0,a.KO)(c.yh),{data:d,isLoading:m,refetch:f}=(0,s.tZ)({endpoint:l.E.LIBRARY_COLLECTION,queryKey:["get-library-collection"],placeholderData:r});(0,o.useEffect)(()=>{d&&u(d)},[d]);let g=(0,o.useMemo)(()=>d?[d.lists.find(e=>"current"===e.type),d.lists.find(e=>"paused"===e.type),d.lists.find(e=>"planned"===e.type),d.lists.find(e=>"completed"===e.type),d.lists.find(e=>"dropped"===e.type)].filter(Boolean):[],[d]);return{libraryCollectionList:g,continueWatchingList:null!==(e=null==d?void 0:d.continueWatchingList)&&void 0!==e?e:[],isLoading:m,unmatchedLocalFiles:null!==(t=null==d?void 0:d.unmatchedLocalFiles)&&void 0!==t?t:[],ignoredLocalFiles:null!==(n=null==d?void 0:d.ignoredLocalFiles)&&void 0!==n?n:[],unmatchedGroups:null!==(i=null==d?void 0:d.unmatchedGroups)&&void 0!==i?i:[]}}function useMissingEpisodes(){let e=(0,a.b9)(u.wS),{data:t,isLoading:n,status:i}=(0,s.tZ)({endpoint:l.E.MISSING_EPISODES,queryKey:["get-missing-episodes"]});return(0,o.useEffect)(()=>{"success"===i&&e(null!=t?t:[])},[t]),{missingEpisodes:null!=t?t:[],isLoading:n}}function useMediaEntryBulkAction(e){let t=(0,i.NL)(),{mutate:n,isPending:o}=(0,s.$U)({endpoint:l.E.MEDIA_ENTRY_BULK_ACTION,mutationKey:["media-entry-bulk-action"],method:"patch",onSuccess:async()=>{await t.refetchQueries({queryKey:["get-library-collection"]}),e&&await t.refetchQueries({queryKey:["get-media-entry",e]})}});return{toggleLock:e=>n({mediaId:e,action:"toggle-lock"}),unmatchAll:e=>n({mediaId:e,action:"unmatch"},{onSuccess:()=>{r.ZP.success("Files unmatched")}}),isPending:o}}function useLocalFileBulkAction(){let e=(0,i.NL)(),{mutate:t,isPending:n}=(0,s.$U)({endpoint:l.E.LOCAL_FILES,mutationKey:["local-file-bulk-action"],method:"post",onSuccess:async()=>{await e.refetchQueries({queryKey:["get-library-collection"]})}});return{lockFiles:()=>t({action:"lock"},{onSuccess:()=>{r.ZP.success("Files locked")}}),unlockFiles:()=>t({action:"unlock"},{onSuccess:()=>{r.ZP.success("Files unlocked")}}),isPending:n}}function getDefaultLocalFileVariables(e){return{path:e.path,metadata:e.metadata,locked:e.locked,ignored:e.ignored,mediaId:e.mediaId}}function useUpdateLocalFile(e){let t=(0,i.NL)(),{mutate:n,isPending:o}=(0,s.$U)({endpoint:l.E.LOCAL_FILE,mutationKey:["patch-local-file"],method:"patch",onSuccess:async()=>{await t.refetchQueries({queryKey:["get-library-collection"]}),e&&await t.refetchQueries({queryKey:["get-media-entry",e]})}});return{updateLocalFile:(e,t,i)=>{n({...getDefaultLocalFileVariables(e),...t},{onSuccess:()=>{i&&i()}})},isPending:o}}}}]);