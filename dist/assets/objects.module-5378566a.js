import{s as c,v as u,m as i}from"./index-dc8ff5dc.js";import{a as o}from"./auth-header-ad4d04ca.js";const a="https://crm.web-hands.ru/api/v1";class l{getObjects(e){return c.get(a+"/objects/list/?section="+e,{headers:o()})}getObjectBrief(e,t){return c.get(a+"/objects/brief/?section="+e+"&id="+t,{headers:o()})}getObjectFields(e,t){return c.get(a+"/objects/fields/?section="+e+"&id="+t,{headers:o()})}updateObject(e){console.log("data",e);const t=new FormData;t.append("id",e.id),t.append("section",e.section);for(const[s,b]of Object.entries(e.fields))t.append(`fields[${s}]`,b);const d=`${a}/objects/save/`,j={...o()};return c.post(d,t,{headers:j}).then(s=>(console.log("Response:",s.data),s.data)).catch(s=>{throw console.error("Error:",s),s})}}const n=new l,h=u("objects",{state:()=>({countryObjects:[],objectBrief:[],objectFields:[]}),actions:{async getObjects(r){try{const e=await n.getObjects(r);if(r==="country")return this.countryObjects=e.data.data,e}catch(e){return Promise.reject(e)}},async getObjectBrief(r,e){try{const t=await n.getObjectBrief(r,e);if(r==="country")return this.objectBrief=t.data.data,t}catch(t){return Promise.reject(t)}},async getObjectFields(r,e){try{const t=await n.getObjectFields(r,e);if(r==="country")return this.objectFields=t.data.data,t}catch(t){return Promise.reject(t)}},async updateObject(r){try{const e=await n.updateObject(r);console.log("resssspo",e),e.data.code===200?i.success(e.data.data):(console.error("Error fetching data:",e.statusText),i.error(e.data.data))}catch(e){console.error("Error fetching data:",e)}}}});export{h as u};
