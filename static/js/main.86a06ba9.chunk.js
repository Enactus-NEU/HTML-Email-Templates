(this["webpackJsonpenactus-neu"]=this["webpackJsonpenactus-neu"]||[]).push([[0],{25:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(11),l=a.n(r),s=(a(17),a(2)),o=a(3),c=a(6),d=a(5),p=a(4),h=a(12),u=a(0),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"ImportText",children:Object(u.jsx)(h.a,{autoFocus:!0,onChange:this.props.onChangeValue,minRows:this.props.row,maxRows:25,value:this.props.value,id:"TextareaAutosize"})})}}]),a}(i.a.Component),j=function(e){return e=(e=(e=(e=e.replace(/&/g,"&amp;")).replace(/"/g,"&quot;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")},x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:"",type:"Text"},n.handleImport=n.handleImport.bind(Object(c.a)(n)),n.handleSelectChange=n.handleSelectChange.bind(Object(c.a)(n)),n.handleChangeValue=n.handleChangeValue.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleChangeValue",value:function(e){this.setState({value:e.target.value})}},{key:"handleSelectChange",value:function(e){this.setState({type:e.target.value})}},{key:"handleImport",value:function(){if(this.state.value){var e=j(this.state.value);this.props.importValue({data:e,type:this.state.type}),this.setState({value:""})}}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"ImportSection",children:[Object(u.jsxs)("div",{className:"ButtonGroup",children:[Object(u.jsxs)("select",{name:"type",id:"type",onChange:this.handleSelectChange,children:[Object(u.jsx)("option",{value:"Text",children:"Text"}),Object(u.jsx)("option",{value:"Title",children:"Title"}),Object(u.jsx)("option",{value:"List",children:"List"}),Object(u.jsx)("option",{value:"Image",children:"Image"}),Object(u.jsx)("option",{value:"Video",children:"Video"})]}),Object(u.jsx)("div",{className:"ImportButton",onClick:this.handleImport,children:"Import"})]}),("Text"===this.state.type||"List"===this.state.type)&&Object(u.jsx)(g,{row:20,value:this.state.value,onChangeValue:this.handleChangeValue}),"Title"===this.state.type&&Object(u.jsx)(g,{row:5,value:this.state.value,onChangeValue:this.handleChangeValue}),"Image"===this.state.type&&Object(u.jsx)(g,{row:1,value:this.state.value,onChangeValue:this.handleChangeValue})]})}}]),a}(n.Component),b=(a(7),a(9)),m=a(8),O=a.n(m),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"handleChangeFormatList",value:function(e,t,a){var n=this.props.items,i=this.props.items[a];this.props.handleChangeFormat([].concat(Object(b.a)(n.slice(0,a)),[{data:e,type:i.type}],Object(b.a)(n.slice(a+1))))}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"List",children:Object(u.jsx)("ul",{style:{listStyleType:"disc"},children:Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{options:{toolbar:{buttons:["bold","italic","underline","anchor"]}},text:this.props.value,onChange:function(t,a){e.handleChangeFormatList(t,a,e.props.index)}})})})})}}]),a}(i.a.Component),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Image",style:{backgroundImage:"url(".concat(this.props.value,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"200px",width:"570px",borderRadius:"20px"}})}}]),a}(i.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onDragStart=function(e,t){n.draggedItem=n.props.value[t],e.dataTransfer.effectAllowed="move"},n.onDragOver=function(e){var t=n.props.value[e];if(n.draggedItem!==t){var a=n.props.value.filter((function(e){return e!==n.draggedItem}));a.splice(e,0,n.draggedItem),n.props.dragAndDropChild(a)}},n.onDragEnd=function(){n.draggedItem=null},n.handleDelete=n.handleDelete.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleDelete",value:function(e){var t=this.props.value;t.splice(e,1),this.props.dragAndDropChild(t)}},{key:"handleChangeFormatText",value:function(e,t,a){var n=this.props.value,i=this.props.value[a];this.props.dragAndDropChild([].concat(Object(b.a)(n.slice(0,a)),[{data:e,type:i.type}],Object(b.a)(n.slice(a+1))))}},{key:"render",value:function(){var e=this,t=this.props.color?this.props.color:"#555";return Object(u.jsx)("div",{className:"Para",children:Object(u.jsx)("ul",{style:{padding:"0px",listStyle:"none"},children:this.props.value.map((function(a,n){return Object(u.jsx)("li",{style:{padding:0,margin:0},onDragOver:function(){return e.onDragOver(n)},children:Object(u.jsxs)("div",{className:"TextValue",style:{padding:"16px 40px 13px 40px",fontSize:"1.07rem",fontFamily:"sans-serif",color:t,lineHeight:"1.4rem",textAlign:"justify",whiteSpace:"pre-line"},draggable:!0,onDragStart:function(t){return e.onDragStart(t,n)},onDragEnd:e.onDragEnd,children:["Text"===a.type&&Object(u.jsx)(O.a,{options:{toolbar:{buttons:["bold","italic","underline","anchor"]}},text:a.data,onChange:function(t,a){e.handleChangeFormatText(t,a,n)}}),"List"===a.type&&Object(u.jsx)(v,{items:e.props.value,handleChangeFormat:e.props.dragAndDropChild,index:n,value:a.data}),"Image"===a.type&&Object(u.jsx)(y,{value:a.data}),Object(u.jsx)("div",{onClick:function(){e.handleDelete(n)},className:"DeleteButton",children:"\ud83d\uddd1"})]})},n)}))})})}}]),a}(i.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"handleChange",value:function(e,t){this.props.getNewTitle(e)}},{key:"render",value:function(){var e=this,t=this.props.color?this.props.color:"#555",a=this.props.fontSize?this.props.fontSize:"1.2rem",n=this.props.margin?this.props.margin:"45px 0 25px 0";return console.log(t,a),Object(u.jsx)("div",{className:"Title",style:{padding:"0 15px",textAlign:"center",margin:n,fontFamily:"sans-serif",fontWeight:"bold",fontSize:a,lineHeight:"2rem",color:t,whiteSpace:"pre-line"},children:Object(u.jsx)(O.a,{text:this.props.value,options:{toolbar:{buttons:["bold","italic","underline"]}},onChange:function(t,a){return e.handleChange(t,a)}})})}}]),a}(i.a.Component),S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"TrainingEmail",children:Object(u.jsx)("table",{border:0,cellSpacing:0,cellPadding:0,style:{width:"100%",height:"100vh",backgroundColor:"#eaeaea"},children:Object(u.jsx)("tbody",{children:Object(u.jsx)("tr",{children:Object(u.jsxs)("td",{style:{padding:"0px 10px 50px 10px",minWidth:"700px"},children:[Object(u.jsx)("div",{style:{height:"40px"}}),Object(u.jsxs)("div",{style:{margin:"auto",width:"650px",backgroundColor:"#ffc222",borderRadius:"30px 30px 30px 30px"},children:[Object(u.jsx)("div",{style:{height:"5px"}}),Object(u.jsxs)("div",{style:{backgroundColor:"white",borderRadius:"20px",paddingBottom:"50px"},children:[Object(u.jsx)("div",{style:{height:"5px"}}),Object(u.jsx)("div",{style:{margin:"auto",width:"640px",height:"200px",borderRadius:"20px",backgroundImage:'url("https://ci6.googleusercontent.com/proxy/6hM3W5qjyr7DbnKhA6ug8h5ziDWsz78fUOc-yU2P-u9fCRnVCSnT0MAc-3uHFfO1LQE=s0-d-e1-ft#https://i.imgur.com/O5WCblR.jpg")',backgroundSize:"70%",backgroundRepeat:"repeat",backgroundPosition:"center",border:"2px solid rgba(100,100,100,.08)"}}),this.props.children]})]}),Object(u.jsxs)("div",{style:{textAlign:"center",margin:"30px",fontSize:"1.07rem",fontFamily:"sans-serif",color:"#555",lineHeight:"2rem"},children:["Th\xf4ng tin chi ti\u1ebft vui l\xf2ng li\xean h\u1ec7",Object(u.jsx)("br",{}),"Email: hr.enactusneu2018",Object(u.jsx)("br",{}),"Hotline: (+84) 839 085 688 (Ms. Mai)"]}),Object(u.jsx)("font",{color:"#888888"})]})})})})})}}]),a}(i.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Tbd2021",children:Object(u.jsx)("table",{border:0,cellSpacing:0,cellPadding:0,style:{width:"100%",maxHeight:"760px",backgroundColor:"#FFF6D8"},children:Object(u.jsx)("tbody",{children:Object(u.jsx)("tr",{children:Object(u.jsxs)("td",{style:{padding:"10px 20px 50px 20px",minWidth:"700px",backgroundImage:'url("https://i.imgur.com/Svixcjg.png")',backgroundRepeat:"no-repeat"},children:[Object(u.jsx)("div",{style:{height:"10px"}}),Object(u.jsxs)("div",{style:{width:"800px",margin:"auto",backgroundImage:'url("https://i.imgur.com/N0Kcwza.png?4")',backgroundSize:"20%",backgroundRepeat:"no-repeat",boxSizing:"border-box",backgroundPosition:"0 0"},children:[Object(u.jsx)("div",{style:{height:"40px"}}),Object(u.jsxs)("div",{style:{backgroundColor:"#579AD8",borderRadius:"20px",width:"659px",margin:"auto"},children:[Object(u.jsx)("div",{style:{height:"5px"}}),Object(u.jsxs)("div",{style:{width:"649px",margin:"auto",padding:"4px 0px 4px 0px",borderRadius:"20px 20px 10px 10px",backgroundColor:"white"},children:[Object(u.jsx)("div",{style:{margin:"auto",width:"640px",height:"178px",borderRadius:"20px 20px 10px 10px",backgroundImage:'url("https://media.giphy.com/media/ecfYMQ8Lq2P8byLj8C/giphy.gif")',backgroundSize:"cover",backgroundRepeat:"repeat",backgroundPosition:"center",border:"2px solid rgba(100, 100, 100, 0.08)"}}),Object(u.jsx)("div",{style:{height:"10px"}}),Object(u.jsx)("div",{className:"Title",style:{padding:"0px",textAlign:"center",margin:"15px 0 10px 0",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"1.2rem",lineHeight:"2rem",color:"#4F7484",whiteSpace:"pre-line"},children:this.props.children[0]})]}),Object(u.jsx)("div",{style:{height:"5px"}}),Object(u.jsx)("div",{style:{width:"649px",margin:"auto",padding:"20px 0px 50px 0px",borderRadius:"10px",backgroundColor:"white"},children:Object(u.jsx)("div",{className:"Main",style:{padding:"16px 0px 13px 0px",fontSize:"1.07rem",fontFamily:"sans-serif",color:"#4D577A",lineHeight:"1.4rem",textAlign:"justify",whiteSpace:"pre-line"},children:this.props.children[1]})}),Object(u.jsx)("div",{style:{height:"5px"}}),Object(u.jsx)("div",{style:{width:"649px",margin:"auto",padding:"20px 0px 20px 0px",borderRadius:"10px 10px 20px 20px",backgroundColor:"white"},children:Object(u.jsxs)("div",{style:{textAlign:"center",fontSize:"1.07rem",fontFamily:"sans-serif",color:"#69749A",lineHeight:"2rem"},children:[Object(u.jsx)("b",{children:"Th\xf4ng tin chi ti\u1ebft vui l\xf2ng li\xean h\u1ec7"}),Object(u.jsx)("br",{}),"Email: hr.enactusneu2018",Object(u.jsx)("br",{}),"Hotline: (+84) 839 085 688 (Ms. Mai)"]})}),Object(u.jsx)("div",{style:{height:"5px"}})]})]}),Object(u.jsx)("font",{color:"#888888"})]})})})})})}}]),a}(i.a.Component),T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={template:"training",export:null},e.handleSelectChange=e.handleSelectChange.bind(Object(c.a)(e)),e.handleExport=e.handleExport.bind(Object(c.a)(e)),e}return Object(o.a)(a,[{key:"handleSelectChange",value:function(e){this.setState({template:e.target.value})}},{key:"handleExport",value:function(){var e,t,a=document.querySelector("table");if(document.createRange&&window.getSelection){e=document.createRange(),(t=window.getSelection()).removeAllRanges();try{e.selectNodeContents(a),t.addRange(e)}catch(n){e.selectNode(a),t.addRange(e)}document.execCommand("copy"),t.removeAllRanges(),alert("Copied!")}}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"EditedEmail",children:[Object(u.jsxs)("select",{name:"templates",id:"templates",onChange:this.handleSelectChange,children:[Object(u.jsx)("option",{value:"training",children:"Ch\u01b0\u01a1ng tr\xecnh \u0110\xe0o t\u1ea1o"}),Object(u.jsx)("option",{value:"tbd2021",children:"Teambuilding 2021"})]}),Object(u.jsx)("div",{className:"ExportButton",onClick:this.handleExport,children:"Copy"}),Object(u.jsxs)("div",{className:"wrapEditedEmail",children:["training"===this.state.template&&Object(u.jsxs)(S,{children:["Title"===this.props.title.type&&this.props.title.data&&Object(u.jsx)(C,{getNewTitle:this.props.formatTitle,value:this.props.title.data}),"TextValue"===this.props.text.type&&Object(u.jsx)(f,{value:this.props.text.data,dragAndDropChild:this.props.dragAndDrop})]}),"tbd2021"===this.state.template&&Object(u.jsxs)(k,{children:["Title"===this.props.title.type&&this.props.title.data&&Object(u.jsx)(C,{margin:"0",fontSize:"1.05rem",color:"#4F7484",type:this.props.title.type,getNewTitle:this.props.formatTitle,value:this.props.title.data}),"TextValue"===this.props.text.type&&Object(u.jsx)(f,{color:"#4D577A",type:this.props.title.type,value:this.props.text.data,dragAndDropChild:this.props.dragAndDrop})]})]})]})}}]),a}(i.a.Component);a(23),a(24);var w=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={title:"",textValue:[]},e.getTextValue=e.getTextValue.bind(Object(c.a)(e)),e.dragAndDrop=e.dragAndDrop.bind(Object(c.a)(e)),e.formatTitle=e.formatTitle.bind(Object(c.a)(e)),e}return Object(o.a)(a,[{key:"componentWillMount",value:function(){if(!localStorage.getItem("title")){localStorage.setItem("title","");var e=localStorage.getItem("title");this.setState({title:e})}if(this.setState({title:localStorage.getItem("title")}),!localStorage.getItem("textValue")){localStorage.setItem("textValue",JSON.stringify([]));var t=localStorage.getItem("textValue");this.setState({textValue:JSON.parse(t)})}this.setState({textValue:JSON.parse(localStorage.getItem("textValue"))})}},{key:"getTextValue",value:function(e){var t=this.state.textValue;"List"!==e.type&&"Image"!==e.type&&"Text"!==e.type||(t.push(e),this.setState({textValue:t}),localStorage.setItem("textValue",JSON.stringify(t))),"Title"===e.type&&(this.setState({title:e.data}),localStorage.setItem("title",e.data))}},{key:"dragAndDrop",value:function(e){this.setState({textValue:e}),localStorage.setItem("textValue",JSON.stringify(e))}},{key:"formatTitle",value:function(e){localStorage.setItem("title",e)}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{importValue:this.getTextValue}),Object(u.jsx)(T,{text:{data:this.state.textValue,type:"TextValue"},title:{data:this.state.title,type:"Title"},dragAndDrop:function(t){return e.dragAndDrop(t)},formatTitle:function(t){return e.formatTitle(t)}})]})}}]),a}(i.a.Component),I=document.getElementById("root");l.a.render(Object(u.jsx)(n.StrictMode,{children:Object(u.jsx)(w,{})}),I)},7:function(e,t,a){}},[[25,1,2]]]);
//# sourceMappingURL=main.86a06ba9.chunk.js.map