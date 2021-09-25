import{r as e,o as l,c as a,b as n,w as t,v as i,t as u,F as o,d,e as r,a as p}from"./app.ea8865c3.js";const v=n("h3",null,"Print 命令选择辅助器",-1),s=n("span",null,"单行溢出：",-1),m=n("label",{for:"overflow1"},"溢出后自动换行",-1),c=n("label",{for:"overflow2"},"溢出后不换行",-1),f=n("span",null,"参数类型：",-1),h=n("label",{for:"type1"},"直出",-1),b=["disabled"],y=n("label",{for:"type2"},"变量的值",-1),S=["disabled"],V=n("label",{for:"type3"},"字符串表达式",-1),_=n("label",{for:"type4"},"格式化字符串",-1),T=["disabled"],k=n("label",{for:"type5"},"格式化字符串表达式",-1),R=n("span",null,"空格填充：",-1),g=n("label",{for:"space1"},"无填充",-1),P=n("label",{for:"space2"},"有，文字左对齐",-1),U=n("label",{for:"space3"},"有，文字右对齐",-1),C=n("span",null,"优先配色：",-1),w=n("label",{for:"color1"},"适用 SetColor",-1),F=n("label",{for:"color2"},"适用 ForceKana",-1),I=n("label",{for:"color3"},"忽略 SetColor",-1),W=n("span",null,"换行等待：",-1),D=n("label",{for:"lineWait1"},"无换行无等待",-1),N=["disabled"],O=n("label",{for:"lineWait2"},"只换行",-1),A=["disabled"],K=n("label",{for:"lineWait3"},"换行后等待",-1),L={class:"language-"},M=d(),x={setup(d){const r=e(""),p=e(""),x=e(""),j=e(""),E=e("");function q(){let e="Print";return e+=r.value,e+=p.value,e+=x.value,e+=j.value,e+=E.value,e}return(e,d)=>(l(),a(o,null,[v,n("div",null,[s,t(n("input",{id:"overflow1",type:"radio",name:"overflow",value:"","onUpdate:modelValue":d[0]||(d[0]=e=>r.value=e)},null,512),[[i,r.value]]),m,t(n("input",{id:"overflow2",type:"radio",name:"overflow",value:"Single","onUpdate:modelValue":d[1]||(d[1]=e=>r.value=e),onClick:d[2]||(d[2]=e=>E.value="")},null,512),[[i,r.value]]),c]),n("div",null,[f,t(n("input",{id:"type1",type:"radio",name:"type",value:"","onUpdate:modelValue":d[3]||(d[3]=e=>p.value=e)},null,512),[[i,p.value]]),h,t(n("input",{id:"type2",type:"radio",name:"type",value:"V","onUpdate:modelValue":d[4]||(d[4]=e=>p.value=e),disabled:""!==x.value},null,8,b),[[i,p.value]]),y,t(n("input",{id:"type3",type:"radio",name:"type",value:"S","onUpdate:modelValue":d[5]||(d[5]=e=>p.value=e),disabled:""!==x.value},null,8,S),[[i,p.value]]),V,t(n("input",{id:"type4",type:"radio",name:"type",value:"Form","onUpdate:modelValue":d[6]||(d[6]=e=>p.value=e)},null,512),[[i,p.value]]),_,t(n("input",{id:"type5",type:"radio",name:"type",value:"FormS","onUpdate:modelValue":d[7]||(d[7]=e=>p.value=e),disabled:""!==x.value},null,8,T),[[i,p.value]]),k]),n("div",null,[R,t(n("input",{id:"space1",type:"radio",name:"space",value:"","onUpdate:modelValue":d[8]||(d[8]=e=>x.value=e)},null,512),[[i,x.value]]),g,t(n("input",{id:"space2",type:"radio",name:"space",value:"LC","onUpdate:modelValue":d[9]||(d[9]=e=>x.value=e),onClick:d[10]||(d[10]=e=>{r.value="",p.value="",E.value=""})},null,512),[[i,x.value]]),P,t(n("input",{id:"space3",type:"radio",name:"space",value:"C","onUpdate:modelValue":d[11]||(d[11]=e=>x.value=e),onClick:d[12]||(d[12]=e=>{r.value="",p.value="",E.value=""})},null,512),[[i,x.value]]),U]),n("div",null,[C,t(n("input",{id:"color1",type:"radio",name:"color",value:"","onUpdate:modelValue":d[13]||(d[13]=e=>j.value=e)},null,512),[[i,j.value]]),w,t(n("input",{id:"color2",type:"radio",name:"color",value:"K","onUpdate:modelValue":d[14]||(d[14]=e=>j.value=e)},null,512),[[i,j.value]]),F,t(n("input",{id:"color3",type:"radio",name:"color",value:"D","onUpdate:modelValue":d[15]||(d[15]=e=>j.value=e)},null,512),[[i,j.value]]),I]),n("div",null,[W,t(n("input",{id:"lineWait1",type:"radio",name:"lineWait",value:"","onUpdate:modelValue":d[16]||(d[16]=e=>E.value=e)},null,512),[[i,E.value]]),D,t(n("input",{id:"lineWait2",type:"radio",name:"lineWait",value:"L","onUpdate:modelValue":d[17]||(d[17]=e=>E.value=e),disabled:"Single"===r.value||"Single"!==x.value},null,8,N),[[i,E.value]]),O,t(n("input",{id:"lineWait3",type:"radio",name:"lineWait",value:"W","onUpdate:modelValue":d[18]||(d[18]=e=>E.value=e),disabled:"Single"===r.value||"Single"!==x.value},null,8,A),[[i,E.value]]),K]),n("div",L,[n("pre",null,[M,n("code",null,u(q()),1)])])],64))}},j=p('',3),E=p('',4),q='{"title":"命令","description":"","frontmatter":{},"headers":[{"level":2,"title":"Print系","slug":"print系"},{"level":3,"title":"PRINT(|V|S|FORM|FORMS)(|K|D)(|L|W)","slug":"print-v-s-form-forms-k-d-l-w"},{"level":3,"title":"PRINTSINGLE(|V|S|FORM|FORMS)(|K|D)","slug":"printsingle-v-s-form-forms-k-d"},{"level":3,"title":"PRINT(|FORM)(C|LC)(|K|D)","slug":"print-form-c-lc-k-d"},{"level":3,"title":"PRINTDATA(|K|D)(|L|W)","slug":"printdata-k-d-l-w"}],"relativePath":"translation/Command.md","lastUpdated":1632586734143}',G={};const z=Object.assign(G,{setup:function(e){return(e,n)=>(l(),a("div",null,[j,r(x),E]))}});export{q as __pageData,z as default};
