"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6133],{24205:function(e,r,t){t.d(r,{r:function(){return FileDebuggerModel}});var i=t(75766),n=t(68949);let FileDebuggerModel=class FileDebuggerModel{setBreakpoint(e){for(let r of(this.breakpoints.push({lineNumber:e}),this.debuggers))r.setBreakpoint(e)}removeBreakpoint(e){for(let r of(this.breakpoints=this.breakpoints.filter(r=>r.lineNumber!==e),this.debuggers))r.removeBreakpoint(e)}setActiveLine(e){this.activeLine=e}addDebugger(e){return this.debuggers.add(e),()=>this.debuggers.delete(e)}constructor(){(0,i._)(this,"activeLine",0),(0,i._)(this,"breakpoints",[]),(0,i._)(this,"debuggers",new Set),(0,n.ky)(this)}}},66133:function(e,r,t){t.d(r,{IK:function(){return v},d$:function(){return p},ir:function(){return g}});var i=t(38966),n=t.n(i),a=t(67090),s=t(34762),d=t(96841),o=t(54391),l=t(73303),u=t(6647),c=t(24872);function tarNumber(e){return""!==e?parseInt(e,8):0}var m=t(63753),f=t(24205);let h=a.V5.model({name:a.V5.string,size:a.V5.number,serverId:a.V5.maybe(a.V5.string)}).volatile(()=>({buffer:null,progress:0,modified:!1,uploading:!1,downloading:!1,uploadFailed:!1,abort:new AbortController})).views(e=>({get transferring(){return e.uploading||e.downloading}})).actions(e=>({updateProgress(r){e.progress=r},completeUpload(r){e.uploading=!1,r?e.serverId=r:(e.uploadFailed=!0,e.modified=!1)},setBuffer(r){e.buffer=null!=r?r:null,e.downloading=!1},setPristine(){e.modified=!1}})).actions(e=>({async upload(r,t){if(!e.serverId&&!e.uploading){(0,u.DT)(t).then(r=>e.setBuffer(r)),e.uploading=!0,e.modified=!0;try{let i=await (0,o.cT)(r,t,{abortSignal:e.abort.signal,onProgress:r=>e.updateProgress(r.loaded/r.total)});e.completeUpload(i.fileId)}catch(r){console.error(r),e.completeUpload()}}},async afterCreate(){if(e.serverId){e.downloading=!0;try{let r=await (0,o.Sv)(e.serverId,{abortSignal:e.abort.signal,onProgress:r=>e.updateProgress(r.loaded/e.size)});e.setBuffer(r)}catch(r){console.error(r),e.setBuffer()}}},beforeDestroy(){e.abort.abort()}})),g="sdcard/",p=a.V5.model({name:a.V5.string,content:a.V5.string}).volatile(e=>({originalName:e.name,originalContent:e.content,deleted:!1,editorState:null,errors:[],debugger:new f.r})).views(e=>({get type(){return(0,d.r5)(e.name)},get modified(){return e.content!==e.originalContent||e.originalName!==e.name}})).actions(e=>({update(r){e.content=r},rename(r){e.name=r},setPristine(){e.originalContent=e.content,e.originalName=e.name},setEditorState(r){e.editorState=r}})),v=a.V5.model({name:a.V5.optional(a.V5.string,""),id:a.V5.maybe(a.V5.string),parentId:a.V5.maybe(a.V5.string),files:a.V5.array(p),serverFiles:a.V5.array(h),owner:a.V5.maybe(a.V5.string),ownerUsername:a.V5.maybe(a.V5.string),locked:a.V5.maybe(a.V5.boolean),unlisted:a.V5.optional(a.V5.boolean,!1),updated:a.V5.maybe(a.V5.Date),hearts:a.V5.optional(a.V5.number,0),userLiked:a.V5.optional(a.V5.boolean,!1),language:a.V5.maybe(a.V5.enumeration(["arduino","python","rust","other"]))}).volatile(()=>({binaryFiles:[],filesDeleted:!1,chips:[],diagramInstance:m.S0.create(),lastDiagramContent:"",tempId:"temp-".concat(Math.random().toString(36).substring(2))})).views(e=>({get diagram(){let t=e.files.find(e=>"diagram"===e.type);if(!t)return null;if((null==t?void 0:t.content)!==e.lastDiagramContent)try{var r;(0,a.Xx)(e.diagramInstance,JSON.parse(null!==(r=null==t?void 0:t.content)&&void 0!==r?r:"null")),e.lastDiagramContent||e.diagramInstance.undoManager.reset()}catch(e){return console.warn("Failed to parse diagram",e),null}return e.diagramInstance},get readme(){return e.files.find(e=>"readme"===e.type)},get modified(){return e.files.some(e=>e.modified)||e.serverFiles.some(e=>e.modified)||e.filesDeleted},findFile:r=>e.files.find(e=>e.name===r),get isDBProject(){return e.id&&/^[0-9]+$/.test(e.id)},get url(){return e.id?(0,d.gd)(e.id):null},get sdCardFiles(){return e.serverFiles.filter(e=>e.name.startsWith(g))}})).views(e=>({chipExists(r){var t;return e.chips.some(e=>e.name===r)||e.files.some(e=>e.name==="".concat(r,".chip.json"))||(null===(t=e.diagram)||void 0===t?void 0:t.dependencies.get("chip-".concat(r,")")))!==void 0},get architecture(){var r,t,i;let n=null===(t=e.diagram)||void 0===t?void 0:null===(r=t.board)||void 0===r?void 0:r.mcuType;return n&&(null===(i=l.v[n])||void 0===i?void 0:i.arch)},get projectType(){var n,a,s,d;let r=null===(a=e.diagram)||void 0===a?void 0:null===(n=a.findMCU())||void 0===n?void 0:n.attrs.get("env"),t=null===(d=e.diagram)||void 0===d?void 0:null===(s=d.findMCU())||void 0===s?void 0:s.attrs.get("builder");if(null==r?void 0:r.startsWith("kaluma"))return"kaluma";if(null==r?void 0:r.startsWith("micropython"))return"micropython";if(null==r?void 0:r.startsWith("circuitpython"))return"circuitpython";if(null==t?void 0:t.includes("rust"))return"rust";if((null==t?void 0:t.includes("sdk"))||(null==r?void 0:r.includes("zephyr")))return"sdk";return"arduino"}})).actions(e=>({addFile(r){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.files.find(e=>e.name===r);if(n){if(i)return n.update(t),n;throw Error("File ".concat(r," already exists in project"))}let a=e.files.push({name:r,content:t,modified:!0});return e.files[a-1]},addBinaryFile(r,t){e.binaryFiles.push({name:r,content:t})},updateFile(r,t){let i=e.files.find(e=>e.name===r);null==i||i.update(t)},renameFile(r,t){var i;null===(i=e.findFile(r))||void 0===i||i.rename(t),r.endsWith(".ino")&&r===e.name&&(e.name=t)},removeFile(r){let t=e.findFile(r);t&&(t.deleted=!0,e.files.remove(t),e.filesDeleted=!0)},uploadFile(r,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=i+(0,u.pC)(t),s=e.serverFiles.find(e=>e.name===n);s&&(0,a.ob)(s);let d=h.create({name:n,size:t.size});d.upload(r,t),e.serverFiles.push(d)},removeServerFile(e){(0,a.ob)(e)},setName(r){e.name=r},changeId(r){e.id=r},changeOwner(r){e.owner!==r&&(e.ownerUsername=void 0,e.owner=r)},setPristine(){e.files.forEach(e=>e.setPristine()),e.serverFiles.forEach(e=>e.setPristine()),e.filesDeleted=!1},setLocked(r){e.locked=r},setUnlisted(r){e.unlisted=r},updateHearts(r){e.hearts=r},updateUserLike(r){e.userLiked=r},setChips(r){e.chips=r},setGCCErrors(r,t){for(let r of e.files)r.errors=[];let{errors:i,remainingOutput:n}=(0,s.qK)(r),a=e.files[0];for(let r of Object.keys(i)){let t=e.files.find(e=>e.name===r);t?t.errors=i[r]:a.errors.push(...i[r])}(r=(0,s.zf)(n)).length>0&&!t&&a.errors.push({type:"error",startLineNumber:1,endLineNumber:1,endColumn:1,startColumn:1,message:r})},syncDiagram(){let{diagram:r}=e;if(r){var t,i;e.lastDiagramContent=n()({...i=(0,a.vM)(r),parts:(i.parts||[]).map(e=>{let r={...e};return r.hide||delete r.hide,r.rotate||delete r.rotate,r})},null,2,100),null===(t=e.findFile("diagram.json"))||void 0===t||t.update(e.lastDiagramContent)}return e.diagram}})).actions(e=>({async updateFromServer(r){if(!e.id)return;let{userLiked:t}=await (0,o._L)(r,e.id);e.updateUserLike(t)},async loadEgg(r){let i=t.e(2655).then(t.bind(t,27885)),n=await fetch("https://wokwi.com/api/external/hatchery?egg=".concat(encodeURIComponent(r))),a=await n.arrayBuffer(),s=(await i).inflate(a);for(let r of function*(e){let r=new c.B(e);for(;r.remaining>512;){let e=r.readChars(100),t=tarNumber(r.readChars(8)),i=tarNumber(r.readChars(8)),n=tarNumber(r.readChars(8)),a=tarNumber(r.readChars(12)),s=tarNumber(r.readChars(12)),d=tarNumber(r.readChars(8)),o=r.readChars(1),l=r.readChars(100),u=r.readChars(6),c=r.readChars(2),m="ustar"===u&&"00"===c,f=r.readChars(32),h=r.readChars(32),g=r.readChars(8),p=r.readChars(8),v=r.readChars(155);if(r.skip(12),!e&&!a&&!v)continue;let b=r.readBytes(a);a%512!=0&&r.skip(512-a%512),yield{name:m&&v?"".concat(v,"/").concat(e):e,mode:t,owner:i,group:n,size:a,lastModified:s,checksum:d,type:o,linkName:l,ownerName:m?f:"",groupName:m?h:"",devMajor:m?g:"",devMinor:m?p:"",data:b}}}(s)){let t="app/"+r.name.split("/").slice(1).join("/");if(t.endsWith(".png")||t.endsWith(".mpy"))e.addBinaryFile(t,r.data);else{let i=new TextDecoder().decode(r.data);e.files.find(e=>e.name===t)?e.updateFile(t,i):e.addFile(t,i)}}}}))},34762:function(e,r,t){t.d(r,{qK:function(){return getGCCErrors},zf:function(){return normalizeGCCErrors},GS:function(){return replaceSketchName}});var i=t(20014);let n="/sketch/",a="sketch.ino";function replaceSketchName(e,r){return e.split(n+a).join(r)}function getGCCErrors(e){let r=[...(0,i.parseString)(e),...function(e){let r=/(\n|^)(\/sketch\/[^:/]+\.S):(\d+): (Warning|Error): (.+)(\s*\n|$)/g,t=[],i=r.exec(e);for(;i;)t.push({filename:i[2],line:parseInt(i[3],10),type:i[4].toLowerCase(),text:i[5],column:1,tokenLength:999,startIndex:i.index,endIndex:i.index+i[0].length}),r.lastIndex--,i=r.exec(e);return t}(e)].slice(0,500),t={},s=null;t[a]=[],r.sort((e,r)=>e.startIndex==r.startIndex?"note"==e.type?1:-1:e.startIndex-r.startIndex);let d="";for(let i of r){var o,l,u;let{filename:r,line:c,column:m,tokenLength:f,text:h,type:g,startIndex:p,endIndex:v}=i,b=e.substring(null!==(l=null==s?void 0:s.endIndex)&&void 0!==l?l:0,p),y=/\r?\n?.+: In function '.+':\s*$/.exec(b),C=null!==(u=null==y?void 0:null===(o=y[0])||void 0===o?void 0:o.replace(/^\s*/g,""))&&void 0!==u?u:"";if(y&&(b=b.substring(0,y.index)),s?s.message+=b:d=b,"note"===g&&s&&s.startLineNumber===c&&s.startColumn===m){s.message+="\n"+h,s.endIndex=v;continue}if(r.startsWith(n)){let e=r.substring(n.length);s={type:g,startLineNumber:c,endLineNumber:c,startColumn:m,endColumn:m+(f||1),message:C+h,startIndex:p,endIndex:v},t[e]||(t[e]=[]),t[e].push(s)}else{let e=r.replace(/\/arduino\/hardware\/avr\/[0-9.]+\/cores/g,"");t[a].push({type:g,startLineNumber:1,endLineNumber:1,startColumn:1,endColumn:1,message:"".concat(e,":").concat(c,": ").concat(C+h),startIndex:p,endIndex:v})}}return s&&(s.message+=e.substr(s.endIndex).replace(/Error during build: exit status 1/,"").replace(/\s+$/,"")),{errors:t,remainingOutput:d}}function normalizeGCCErrors(e){let r=e.replace(/.+\n.+\n[ \t]*#\s*pragma message "FastLED version 3\.\d+\.\d+".*\n.+/,"").trim();return"Error during build: exit status 1"===r?"":r}},73303:function(e,r,t){t.d(r,{v:function(){return i}});let i={atmega328p:{arch:"avr",family:"avr"},atmega2560:{arch:"avr",family:"avr"},attiny85:{arch:"avr",family:"avr"},esp32:{arch:"xtensa",family:"esp32"},"esp32-s2":{arch:"xtensa",family:"esp32"},"esp32-s3":{arch:"riscv",family:"esp32"},"esp32-c3":{arch:"riscv",family:"esp32"},"esp32-c6":{arch:"riscv",family:"esp32"},"esp32-h2":{arch:"riscv",family:"esp32"},rp2040:{arch:"arm",family:"rp2"},stm32c031c6:{arch:"arm",family:"stm32"},stm32f103c8:{arch:"arm",family:"stm32"},stm32l031k6:{arch:"arm",family:"stm32"},stm32l432kc:{arch:"arm",family:"stm32"}}},24872:function(e,r,t){t.d(r,{B:function(){return StructReader}});var i=t(75766);let StructReader=class StructReader{readUint8(){return this.buf[this.index++]}readUint16(){let{index:e}=this,r=this.buf[e],t=this.buf[e+1];return this.index+=2,t<<8|r}readUint32(){let{index:e}=this,r=this.buf[e],t=this.buf[e+1],i=this.buf[e+2],n=this.buf[e+3];return this.index+=4,(n<<24|i<<16|t<<8|r)>>>0}readInt32(){return 0|this.readUint32()}readBytes(e){let r=this.buf.subarray(this.index,this.index+e);return this.index+=e,r}readChars(e){let r=this.readBytes(e),t=r.indexOf(0);return t>=0&&(r=r.subarray(0,t)),this.decoder.decode(r)}readNullTerminated(){let e=this.buf.indexOf(0,this.index);e<0&&(e=this.buf.length);let r=this.decoder.decode(this.buf.subarray(this.index,e));return this.index=e+1,r}skip(e){this.index+=e}get currentOffset(){return this.index}get remaining(){let e=this.buf.length-this.index;return e>0?e:0}constructor(e){(0,i._)(this,"buf",void 0),(0,i._)(this,"index",void 0),(0,i._)(this,"decoder",void 0),this.buf=e,this.index=0,this.decoder=new TextDecoder}}}}]);