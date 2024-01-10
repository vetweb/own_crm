import{r as U,u as V,o as K,c as N,a as s,b as a,d as o,e as j,F as b,g as h,h as c,w as l,i as g,t as f,f as n,k as y,n as E}from"./index-8ea796bf.js";import{u as R}from"./objects.module-31ff6bcf.js";import"./auth-header-ad4d04ca.js";const A={class:"flex gap-24"},G={class:"w-[30%]"},H=j("div",null,"Slider",-1),J={__name:"brief",props:{id:String},setup(O){const p=O;U("1");const m=V(),i=U(!1),u=R();m.params.id,K(()=>{r()});const k=N(()=>u.objectBrief),r=async()=>{i.value=!0;try{await u.getObjectBrief("country",p.id).then(_=>{_.data.result==="error"&&message.error(_.data.text),i.value=!1})}catch(_){console.error("Error fetching data in component:",_)}};return(_,d)=>{const F=s("a-divider"),B=s("a-card");return a(),o("div",A,[j("div",G,[(a(!0),o(b,null,h(k.value,q=>(a(),c(B,{class:"mb-16",key:q.title},{default:l(()=>[g(f(q.title)+" ",1),n(F),j("div",null,[(a(!0),o(b,null,h(q.fields,x=>(a(),o("div",{key:x.id},f(x.name)+" ...... "+f(x.value),1))),128))])]),_:2},1024))),128))]),H])}}};const P={class:"font-bold"},Q={class:"grid gap-[1.6rem] grid-cols-gridObjectInfo"},W={__name:"edit",props:{id:String},setup(O){const p=O;V();const m=U(!1),i=R(),u=U({id:p.id,section:"country",fields:{}});K(()=>{r()});const k=N(()=>i.objectFields),r=async()=>{m.value=!0;try{await i.getObjectFields("country",p.id).then(d=>{d.data.result==="error"&&message.error(d.data.text),m.value=!1})}catch(d){console.error("Error fetching data in component:",d)}},_=async()=>{m.value=!0;try{await i.updateObject(u.value).then(d=>{console.log(d)})}catch(d){console.error("Error fetching data in component:",d)}};return(d,F)=>{const B=s("a-button"),q=s("a-divider"),x=s("a-input"),v=s("a-form-item"),D=s("a-textarea"),I=s("a-date-picker"),L=s("a-checkbox"),$=s("a-select-option"),C=s("a-select"),M=s("a-radio-button"),T=s("a-radio-group"),z=s("a-card");return a(),o("div",null,[n(B,{onClick:_},{default:l(()=>[g("Save")]),_:1}),(a(!0),o(b,null,h(k.value,S=>(a(),c(z,{class:"",key:S.title},{default:l(()=>[j("div",P,f(S.title),1),n(q),j("div",Q,[(a(!0),o(b,null,h(S.fields,e=>(a(),o("div",{key:e.id},[e.type==="text"||e.type==="number"?(a(),c(v,{key:0,label:e.name,name:e.name,rules:[{required:e.required}],class:"flex flex-col items-start"},{default:l(()=>[n(x,{value:u.value.fields[e.code],"onUpdate:value":t=>u.value.fields[e.code]=t,ref_for:!0,ref:e.code,type:e.html,class:"w-full"},null,8,["value","onUpdate:value","type"])]),_:2},1032,["label","name","rules"])):y("",!0),e.type==="textarea"?(a(),c(v,{key:1,label:e.name,name:e.name,rules:[{required:e.required}]},{default:l(()=>[n(D,{value:u.value.fields[e.code],"onUpdate:value":t=>u.value.fields[e.code]=t,ref_for:!0,ref:e.code,type:e.html,class:"w-full"},null,8,["value","onUpdate:value","type"])]),_:2},1032,["label","name","rules"])):y("",!0),e.type==="date"?(a(),c(v,{key:2,label:e.name,name:e.name,rules:[{required:e.required}]},{default:l(()=>[n(I,{value:u.value.fields[e.code],"onUpdate:value":t=>u.value.fields[e.code]=t,ref_for:!0,ref:e.code,type:e.html,class:"w-full",style:{width:"100%"}},null,8,["value","onUpdate:value","type"])]),_:2},1032,["label","name","rules"])):y("",!0),e.type==="checkbox"?(a(),c(v,{key:3,label:e.name,name:e.name,rules:[{required:e.required}]},{default:l(()=>[n(L,{value:u.value.fields[e.code],"onUpdate:value":t=>u.value.fields[e.code]=t,ref_for:!0,ref:e.code,type:e.html,class:"w-full",style:{width:"100%"}},{default:l(()=>[g(f(e.name)+" - "+f(e.code),1)]),_:2},1032,["value","onUpdate:value","type"])]),_:2},1032,["label","name","rules"])):y("",!0),e.type=="select"&&e.mode=="static"?(a(),c(v,{key:4,label:e.name,name:e.name,rules:[{required:e.required,message:"Required"}]},{default:l(()=>[n(C,{value:u.value.fields[e.code],"onUpdate:value":t=>u.value.fields[e.code]=t,class:"w-full",defaultValue:e.options&&e.options.length>0&&e.options.find(t=>t.checked===!0)?e.options.find(t=>t.checked===!0).value:"Не выбрано"},{default:l(()=>[(a(!0),o(b,null,h(e.options,t=>(a(),c($,{key:t.id,value:t.id},{default:l(()=>[g(f(t.value),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value","defaultValue"])]),_:2},1032,["label","name","rules"])):y("",!0),e.type=="select"&&e.mode=="ajax"?(a(),c(v,{key:5,label:e.name,name:e.name,rules:[{required:e.required,message:"Required"}]},{default:l(()=>[n(C,{value:e.code,"onUpdate:value":t=>e.code=t,"show-search":"","filter-option":d.filterOption,class:"w-full"},{default:l(()=>[(a(!0),o(b,null,h(d.optionsData,t=>(a(),c($,{key:t.id,value:t.value},{default:l(()=>[g(f(t.value),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value","filter-option"])]),_:2},1032,["label","name","rules"])):y("",!0),e.type=="radio"?(a(),c(v,{key:6,label:e.name,name:e.name,rules:[{required:e.required,message:"Required"}]},{default:l(()=>[n(T,{value:u.value.fields[e.code],"onUpdate:value":t=>u.value.fields[e.code]=t,disabled:d.disabled,"button-style":"solid",defaultValue:e.options&&e.options.length>0&&e.options.find(t=>t.checked===!0)?e.options.find(t=>t.checked===!0).value:"Не выбрано"},{default:l(()=>[(a(!0),o(b,null,h(e.options,t=>(a(),c(M,{key:t.id,value:t.value},{default:l(()=>[g(f(t.value),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value","disabled","defaultValue"])]),_:2},1032,["label","name","rules"])):y("",!0)]))),128))])]),_:2},1024))),128))])}}},X={class:"p-[4rem] w-full"},ee={__name:"_id",setup(O){const p=U("1"),i=V().params.id;return(u,k)=>{const r=s("a-tab-pane"),_=s("a-tabs");return a(),o("div",X,[n(_,{activeKey:p.value,"onUpdate:activeKey":k[0]||(k[0]=d=>p.value=d),type:"card"},{default:l(()=>[n(r,{key:"1",tab:"Информация"},{default:l(()=>[n(J,{id:E(i)},null,8,["id"])]),_:1}),n(r,{key:"2",tab:"Редактирование"},{default:l(()=>[n(W,{id:E(i)},null,8,["id"])]),_:1}),n(r,{key:"3",tab:"Фотографии"}),n(r,{key:"4",tab:"Комментарии"}),n(r,{key:"5",tab:"Лиды"}),n(r,{key:"6",tab:"Собственник"})]),_:1},8,["activeKey"])])}}};export{ee as default};
