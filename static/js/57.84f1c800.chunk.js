"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[57,449,660],{7660:(e,a,s)=>{s.r(a),s.d(a,{default:()=>t});s(5043),s(4050);var r=s(579);const t=function(e){const{title:a}=e;return(0,r.jsx)("div",{className:"header",children:a})}},8057:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var r=s(5043),t=s(3519),l=s(1072),o=s(4282),n=s(4574),d=s(8885),c=s.n(d),i=s(7660),f=s(5724),m=s(4449),x=s(4331),u=s(579);const y={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}},b=e=>{var a;const s=(0,r.useContext)(n.Dx),{header:d}=e,[b,p]=(0,r.useState)(null),[h,N]=(0,r.useState)(!1);(0,r.useEffect)((()=>{fetch(f.A.projects,{method:"GET"}).then((e=>e.json())).then((e=>p(e))).catch((e=>e))}),[]);const g=h&&b?b.length:6;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.default,{title:d}),b?(0,u.jsx)("div",{className:"section-content-container",children:(0,u.jsxs)(t.A,{style:y.containerStyle,children:[(0,u.jsx)(l.A,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(a=b.projects)||void 0===a?void 0:a.slice(0,g).map((e=>(0,u.jsx)(c(),{children:(0,u.jsx)(m.default,{project:e})},e.title)))}),!h&&(0,u.jsx)(o.A,{style:y.showMoreStyle,variant:s.bsSecondaryVariant,onClick:()=>N(!0),children:"show more"})]})}):(0,u.jsx)(x.default,{})]})}},4449:(e,a,s)=>{s.r(a),s.d(a,{default:()=>H});var r=s(5043),t=s(6221),l=s(8139),o=s.n(l),n=s(7852),d=s(579);const c=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...l}=e;return r=(0,n.oU)(r,"card-body"),(0,d.jsx)(t,{ref:a,className:o()(s,r),...l})}));c.displayName="CardBody";const i=c,f=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...l}=e;return r=(0,n.oU)(r,"card-footer"),(0,d.jsx)(t,{ref:a,className:o()(s,r),...l})}));f.displayName="CardFooter";const m=f;var x=s(1778);const u=r.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:l="div",...c}=e;const i=(0,n.oU)(s,"card-header"),f=(0,r.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,d.jsx)(x.A.Provider,{value:f,children:(0,d.jsx)(l,{ref:a,...c,className:o()(t,i)})})}));u.displayName="CardHeader";const y=u,b=r.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,variant:t,as:l="img",...c}=e;const i=(0,n.oU)(s,"card-img");return(0,d.jsx)(l,{ref:a,className:o()(t?`${i}-${t}`:i,r),...c})}));b.displayName="CardImg";const p=b,h=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...l}=e;return r=(0,n.oU)(r,"card-img-overlay"),(0,d.jsx)(t,{ref:a,className:o()(s,r),...l})}));h.displayName="CardImgOverlay";const N=h,g=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="a",...l}=e;return r=(0,n.oU)(r,"card-link"),(0,d.jsx)(t,{ref:a,className:o()(s,r),...l})}));g.displayName="CardLink";const j=g;var v=s(4488);const $=(0,v.A)("h6"),S=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t=$,...l}=e;return r=(0,n.oU)(r,"card-subtitle"),(0,d.jsx)(t,{ref:a,className:o()(s,r),...l})}));S.displayName="CardSubtitle";const w=S,C=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="p",...l}=e;return r=(0,n.oU)(r,"card-text"),(0,d.jsx)(t,{ref:a,className:o()(s,r),...l})}));C.displayName="CardText";const P=C,R=(0,v.A)("h5"),k=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t=R,...l}=e;return r=(0,n.oU)(r,"card-title"),(0,d.jsx)(t,{ref:a,className:o()(s,r),...l})}));k.displayName="CardTitle";const A=k,U=r.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,bg:t,text:l,border:c,body:f=!1,children:m,as:x="div",...u}=e;const y=(0,n.oU)(s,"card");return(0,d.jsx)(x,{ref:a,...u,className:o()(r,y,t&&`bg-${t}`,l&&`text-${l}`,c&&`border-${c}`),children:f?(0,d.jsx)(i,{children:m}):m})}));U.displayName="Card";const T=Object.assign(U,{Img:p,Title:A,Subtitle:w,Body:i,Link:j,Text:P,Header:y,Footer:m,ImgOverlay:N});var B=s(4282);const F=r.forwardRef(((e,a)=>{let{bsPrefix:s,bg:r="primary",pill:t=!1,text:l,className:c,as:i="span",...f}=e;const m=(0,n.oU)(s,"badge");return(0,d.jsx)(i,{ref:a,...f,className:o()(c,m,t&&"rounded-pill",l&&`text-${l}`,r&&`bg-${r}`)})}));F.displayName="Badge";const I=F;var V=s(4574),E=s(2193);const D={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},H=e=>{var a;const s=(0,r.useContext)(V.Dx),{project:l}=e;return(0,d.jsx)(t.A,{children:(0,d.jsxs)(T,{style:{...D.cardStyle,backgroundColor:s.cardBackground,borderColor:s.cardBorderColor},text:s.bsSecondaryVariant,children:[(0,d.jsx)(T.Img,{variant:"top",src:null===l||void 0===l?void 0:l.image}),(0,d.jsxs)(T.Body,{children:[(0,d.jsx)(T.Title,{style:D.cardTitleStyle,children:l.title}),(0,d.jsx)(T.Text,{style:D.cardTextStyle,children:(o=l.bodyText,(0,d.jsx)(E.$,{children:o}))})]}),(0,d.jsx)(T.Body,{children:null===l||void 0===l||null===(a=l.links)||void 0===a?void 0:a.map((e=>(0,d.jsx)(B.A,{style:D.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),l.tags&&(0,d.jsx)(T.Footer,{style:{backgroundColor:s.cardFooterBackground},children:l.tags.map((e=>(0,d.jsx)(I,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:D.badgeStyle,children:e},e)))})]})});var o}},4282:(e,a,s)=>{s.d(a,{A:()=>i});var r=s(8139),t=s.n(r),l=s(5043),o=s(4140),n=s(7852),d=s(579);const c=l.forwardRef(((e,a)=>{let{as:s,bsPrefix:r,variant:l="primary",size:c,active:i=!1,disabled:f=!1,className:m,...x}=e;const u=(0,n.oU)(r,"btn"),[y,{tagName:b}]=(0,o.Am)({tagName:s,disabled:f,...x}),p=b;return(0,d.jsx)(p,{...y,...x,ref:a,disabled:f,className:t()(m,u,i&&"active",l&&`${u}-${l}`,c&&`${u}-${c}`,x.href&&f&&"disabled")})}));c.displayName="Button";const i=c},6221:(e,a,s)=>{s.d(a,{A:()=>c});var r=s(8139),t=s.n(r),l=s(5043),o=s(7852),n=s(579);const d=l.forwardRef(((e,a)=>{const[{className:s,...r},{as:l="div",bsPrefix:d,spans:c}]=function(e){let{as:a,bsPrefix:s,className:r,...l}=e;s=(0,o.oU)(s,"col");const n=(0,o.gy)(),d=(0,o.Jm)(),c=[],i=[];return n.forEach((e=>{const a=l[e];let r,t,o;delete l[e],"object"===typeof a&&null!=a?({span:r,offset:t,order:o}=a):r=a;const n=e!==d?`-${e}`:"";r&&c.push(!0===r?`${s}${n}`:`${s}${n}-${r}`),null!=o&&i.push(`order${n}-${o}`),null!=t&&i.push(`offset${n}-${t}`)})),[{...l,className:t()(r,...c,...i)},{as:a,bsPrefix:s,spans:c}]}(e);return(0,n.jsx)(l,{...r,ref:a,className:t()(s,!c.length&&d)})}));d.displayName="Col";const c=d},1072:(e,a,s)=>{s.d(a,{A:()=>c});var r=s(8139),t=s.n(r),l=s(5043),o=s(7852),n=s(579);const d=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:l="div",...d}=e;const c=(0,o.oU)(s,"row"),i=(0,o.gy)(),f=(0,o.Jm)(),m=`${c}-cols`,x=[];return i.forEach((e=>{const a=d[e];let s;delete d[e],null!=a&&"object"===typeof a?({cols:s}=a):s=a;const r=e!==f?`-${e}`:"";null!=s&&x.push(`${m}${r}-${s}`)})),(0,n.jsx)(l,{ref:a,...d,className:t()(r,c,...x)})}));d.displayName="Row";const c=d}}]);
//# sourceMappingURL=57.84f1c800.chunk.js.map