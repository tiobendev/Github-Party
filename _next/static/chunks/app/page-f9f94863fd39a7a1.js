(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5489:function(e,r,s){Promise.resolve().then(s.bind(s,4745))},4745:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return v}});var t=s(7437),l=s(2265),i=s(6648),n=s(2974),a=s(2218),o=s(4839),c=s(6164);function d(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return(0,c.m6)((0,o.W)(r))}let u=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),f=l.forwardRef((e,r)=>{let{className:s,variant:l,size:i,asChild:a=!1,...o}=e,c=a?n.g7:"button";return(0,t.jsx)(c,{className:d(u({variant:l,size:i,className:s})),ref:r,...o})});f.displayName="Button";let m=l.forwardRef((e,r)=>{let{className:s,type:l,...i}=e;return(0,t.jsx)("input",{type:l,className:d("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:r,...i})});m.displayName="Input";var x=s(7138),h=function(e){let{userData:r}=e;return(0,t.jsxs)(x.default,{href:r.html_url,passHref:!0,id:"FirstUserCard",className:"w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 rounded-md min-h-52 bg-zinc-900 hover:bg-neutral-900 hover:scale-105 transition-all ease-linear",children:[(0,t.jsxs)("div",{id:"cardheader",className:"flex gap-4",children:[(0,t.jsx)(i.default,{src:r.avatar_url,width:60,height:60,alt:"Avatar de ".concat(r.login),className:"w-16 h-16 rounded-full"}),(0,t.jsxs)("div",{id:"userContent",className:"flex flex-col gap-1",children:[(0,t.jsx)("h1",{id:"userID",className:"font-semibold text-lg mt-2 mb-[-6px]",children:r.login}),(0,t.jsx)("p",{id:"userDescription",className:"text-sm text-zinc-300",children:r.bio})]})]}),(0,t.jsxs)("div",{id:"userCounters",className:"flex flex-wrap mt-6 text-xs gap-2",children:[(0,t.jsxs)("div",{id:"userFollowers",className:"flex flex-1 flex-col max-w-1/4 h-12 justify-center items-center bg-zinc-800 p-2 rounded-md",children:[(0,t.jsx)("p",{id:"userFollowersNumber",className:"font-bold",children:r.followers}),(0,t.jsx)("p",{children:"Seguidores"})]}),(0,t.jsxs)("div",{id:"userFollowing",className:"flex flex-1 flex-col max-w-1/4 h-12 justify-center items-center bg-zinc-800 p-2 rounded-md",children:[(0,t.jsx)("p",{id:"userFollowingNumber",className:"font-bold",children:r.following}),(0,t.jsx)("p",{children:"Seguindo"})]}),(0,t.jsxs)("div",{id:"userRepository",className:"flex flex-1 flex-col max-w-1/4 h-12 justify-center items-center bg-zinc-800 p-2 rounded-md",children:[(0,t.jsx)("p",{id:"userRepositoryNumber",className:"font-bold",children:r.public_repos}),(0,t.jsx)("p",{children:"Reposit\xf3rios"})]}),(0,t.jsx)(x.default,{href:r.html_url,passHref:!0,className:"flex-1 flex items-center text-[14px] justify-center h-12 bg-zinc-800 hover:bg-zinc-700 p-2 rounded-md transition-all ease-linear",children:"Visualizar"})]})]})},g=s(8472);async function b(e){let r="".concat("https://api.github.com","/users/").concat(e);try{return(await g.Z.get(r)).data}catch(e){throw console.error("Error fetching user data:",e),e}}var p={src:"/_next/static/media/githubParty-icon.8583cdf1.png",height:87,width:87,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA40lEQVR42mMAgQK7HUwMUBDpfD0NREc7XXb0cn3My5BjtwssmWu3W7PQbnt0uPMVPSC7Ns3hWG2p7VZJhhrrFcwgBdXWK4rKbNY1tFrOyk6136/caDVXr9xmTRQDCLRZTOWZYta+d7lhsmaXxZTYmSa1PhPMu83nmlTagBWsNMyKWWKUHz3XuCJ1s16I5nLD/KZVhllZPea9ImAFu3WD2vfr+Ew+rmUXDWTv3a0bULxVL1IVLHla01bwsrrhzPMa5u0ntBxjzmto8zBAwWrDLGYw466qiiADEtiuF8G8ST8W7DsAnVVKip/1cH0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};function v(){let[e,r]=(0,l.useState)(""),[s,n]=(0,l.useState)(null),[a,o]=(0,l.useState)(null),c=async()=>{try{let r=await b(e);n(r),o(null)}catch(e){o("Usu\xe1rio n\xe3o encontrado"),n(null)}};return(0,t.jsxs)("main",{className:"flex min-h-screen justify-center flex-col items-center px-8 py-28",children:[(0,t.jsxs)("div",{className:"w-full flex flex-col text-center gap-4",children:[(0,t.jsx)(i.default,{src:p,className:"mx-auto",alt:""}),(0,t.jsx)("h1",{className:"text-2xl md:text-6xl font-black",children:"Github Party"}),(0,t.jsxs)("p",{className:"text-sm",children:["Pesquise pessoas, reposit\xf3rios e tecnologias que est\xe3o dentro do github, aqui no ",(0,t.jsx)("b",{children:"GithubParty"}),"."]})]}),(0,t.jsxs)("div",{id:"UserSearch",className:"flex flex-col sm:flex-row w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4 items-center gap-4 my-8",children:[(0,t.jsx)(m,{className:"w-full sm:flex-1 bg-zinc-900 border-none focus-visible:ring-offset-0 focus-visible:ring-0",placeholder:"Digite seu usu\xe1rio do github",value:e,onChange:e=>{r(e.target.value),0===e.target.value.trim().length&&n(null)},onKeyPress:e=>{"Enter"===e.key&&c()}}),(0,t.jsx)(f,{onClick:c,className:"w-full sm:w-auto bg-green-500 hover:bg-green-600",children:"Confirmar"})]}),a&&(0,t.jsx)("p",{className:"text-red-500",children:a}),s&&(0,t.jsxs)("div",{className:"flex flex-col w-full items-center gap-4",children:[(0,t.jsx)("p",{children:"\uD83D\uDC47 Esse \xe9 o seu usu\xe1rio?"}),(0,t.jsx)(h,{userData:s})]})]})}}},function(e){e.O(0,[155,971,23,744],function(){return e(e.s=5489)}),_N_E=e.O()}]);