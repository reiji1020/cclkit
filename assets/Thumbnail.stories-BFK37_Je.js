import{w as k,e as g}from"./index-1awVzHz7.js";import{S as E,i as L,s as R,e as B,c as z,m as u,f as s,g as l,h as A,n as b,d as Y}from"./index-2qTqE6EA.js";/* empty css                  */import{C as o}from"./config-BTb8-V-F.js";import"./lifecycle-BSK-R06m.js";function I(a){let e,r;return{c(){e=B("img"),this.h()},l(t){e=z(t,"IMG",{src:!0,alt:!0,class:!0,style:!0}),this.h()},h(){u(e.src,r=a[2])||s(e,"src",r),s(e,"alt",a[3]),s(e,"class","image-style svelte-1qogozt"),l(e,"--image-size",a[0]),l(e,"--borderColor","var("+a[1]+")")},m(t,i){A(t,e,i)},p(t,[i]){i&4&&!u(e.src,r=t[2])&&s(e,"src",r),i&8&&s(e,"alt",t[3]),i&1&&l(e,"--image-size",t[0]),i&2&&l(e,"--borderColor","var("+t[1]+")")},i:b,o:b,d(t){t&&Y(e)}}}function N(a,e,r){let{imageSize:t}=e,{borderColor:i}=e,{src:p}=e,{altText:y}=e;return a.$$set=n=>{"imageSize"in n&&r(0,t=n.imageSize),"borderColor"in n&&r(1,i=n.borderColor),"src"in n&&r(2,p=n.src),"altText"in n&&r(3,y=n.altText)},[t,i,p,y]}class T extends E{constructor(e){super(),L(this,e,N,I,R,{imageSize:0,borderColor:1,src:2,altText:3})}}T.__docgen={version:3,name:"Thumbnail.svelte",data:[{keywords:[{name:"type",description:"number"}],visibility:"public",description:"サムネイル画像の大きさ",name:"imageSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"枠線の色",name:"borderColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"画像ソース",name:"src",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"alt属性に指定する値",name:"altText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const D={title:"Thumbnail",component:T,tags:["autodocs"],argTypes:{borderColor:{control:{type:"select"},options:[o.STRAWBERRY_PINK,o.PINEAPPLE_YELLOW,o.SODA_BLUE]},altText:{control:{type:"text"}},src:{control:{type:"text"}},imageSize:{control:{type:"text"}}}},c={args:{altText:"Strawberry Pink",src:"thumbnail.png",imageSize:"120px",borderColor:o.STRAWBERRY_PINK},play:async({args:a,canvasElement:e})=>{const r=k(e);await g(r.getByRole("img")).toHaveAttribute("alt","Strawberry Pink"),await g(a.borderColor).toBe(o.STRAWBERRY_PINK)}},m={args:{altText:"Pineapple Yellow",src:"thumbnail.png",imageSize:"120px",borderColor:o.PINEAPPLE_YELLOW}},d={args:{altText:"Soda Blue",src:"thumbnail.png",imageSize:"120px",borderColor:o.SODA_BLUE}};var C,S,f;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    altText: 'Strawberry Pink',
    src: 'thumbnail.png',
    imageSize: '120px',
    borderColor: CCLVividColor.STRAWBERRY_PINK
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Strawberry Pink');
    await expect(args.borderColor).toBe(CCLVividColor.STRAWBERRY_PINK);
  }
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,_,P;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    altText: 'Pineapple Yellow',
    src: 'thumbnail.png',
    imageSize: '120px',
    borderColor: CCLVividColor.PINEAPPLE_YELLOW
  }
}`,...(P=(_=m.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var h,v,w;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    altText: 'Soda Blue',
    src: 'thumbnail.png',
    imageSize: '120px',
    borderColor: CCLVividColor.SODA_BLUE
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const U=["Pink","Yellow","Blue"];export{d as Blue,c as Pink,m as Yellow,U as __namedExportsOrder,D as default};
