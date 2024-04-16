import{f as L,w as S,u as R,b as O,e as Y}from"./index-1awVzHz7.js";import{S as x,i as N,s as U,e as I,t as W,c as K,a as T,b as V,d as c,f as B,g as C,h as H,j,k as q,n as d}from"./index-2qTqE6EA.js";/* empty css                  */import{C as o}from"./config-BTb8-V-F.js";import"./lifecycle-BSK-R06m.js";function z(a){let u,e;return{c(){u=I("button"),e=W(a[0]),this.h()},l(t){u=K(t,"BUTTON",{type:!0,class:!0,style:!0});var n=T(u);e=V(n,a[0]),n.forEach(c),this.h()},h(){B(u,"type","button"),B(u,"class","button-wrapper svelte-17agblc"),C(u,"--button-bg-color","var("+a[1]+")")},m(t,n){H(t,u,n),j(u,e)},p(t,[n]){n&1&&q(e,t[0]),n&2&&C(u,"--button-bg-color","var("+t[1]+")")},i:d,o:d,d(t){t&&c(u)}}}function G(a,u,e){let{label:t}=u,{buttonBgColor:n}=u;return a.$$set=l=>{"label"in l&&e(0,t=l.label),"buttonBgColor"in l&&e(1,n=l.buttonBgColor)},[t,n]}class P extends x{constructor(u){super(),N(this,u,G,z,U,{label:0,buttonBgColor:1})}}P.__docgen={version:3,name:"Button.svelte",data:[{keywords:[],visibility:"public",description:"ボタンのラベル",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[],visibility:"public",description:"ボタンの背景色",name:"buttonBgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const $={title:"Example/Button",component:P,tags:["autodocs"],args:{label:{control:"text"},buttonBgColor:{control:{type:"select"},options:[o.STRAWBERRY_PINK,o.PINEAPPLE_YELLOW,o.SODA_BLUE]}}},s={args:{label:"Strawberry Pink",buttonBgColor:o.STRAWBERRY_PINK,onClick:L()},play:async({args:a,canvasElement:u,step:e})=>{await e("ボタンが存在するかどうかをチェックする",async()=>{const t=S(u);await R.click(t.getByRole("button"))}),await e("ボタンがクリックされた時にボタンイベントが実行されるかどうかをチェックする",async()=>{await O(()=>Y(a.onClick).toHaveBeenCalled)})}},r={args:{label:"Pineapple Yellow",buttonBgColor:o.PINEAPPLE_YELLOW}},i={args:{label:"Soda Blue",buttonBgColor:o.SODA_BLUE}};var p,m,b,E,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Strawberry Pink',
    buttonBgColor: CCLVividColor.STRAWBERRY_PINK,
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    await step('ボタンが存在するかどうかをチェックする', async () => {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole('button'));
    });
    await step('ボタンがクリックされた時にボタンイベントが実行されるかどうかをチェックする', async () => {
      await waitFor(() => expect(args.onClick).toHaveBeenCalled);
    });
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source},description:{story:`サービス、サークルのメインカラー

意思決定の場で、「次へ」や「OK」など、肯定の同意を得るときに使用します。

Services, main colours of the circle.

Used in decision-making situations to obtain agreement of affirmation, e.g. 'Next' or 'OK'.`,...(g=(E=s.parameters)==null?void 0:E.docs)==null?void 0:g.description}}};var A,F,y,f,w;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Pineapple Yellow',
    buttonBgColor: CCLVividColor.PINEAPPLE_YELLOW
  }
}`,...(y=(F=r.parameters)==null?void 0:F.docs)==null?void 0:y.source},description:{story:`意思決定の場で、ヘルプやユーザーの補助を行う情報を提示するときに使用します。中立カラーです。

Used when presenting information to help or assist users in decision-making. Neutral colour.`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var v,D,_,h,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Soda Blue',
    buttonBgColor: CCLVividColor.SODA_BLUE
  }
}`,...(_=(D=i.parameters)==null?void 0:D.docs)==null?void 0:_.source},description:{story:`意思決定の場で、キャンセルや取りやめなどの否定的な意思決定を行うボタンで使用します。

Used in decision-making situations with buttons for negative decisions such as cancel or withdraw.`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.description}}};const uu=["Pink","Yellow","Blue"];export{i as Blue,s as Pink,r as Yellow,uu as __namedExportsOrder,$ as default};
