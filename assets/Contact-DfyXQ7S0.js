import{r as m,j as e}from"./index-DDmcYIqn.js";function c(){const[s,l]=m.useState({name:"",email:"",message:""}),t=a=>{l({...s,[a.target.name]:a.target.value})},r=a=>{a.preventDefault(),alert("Message sent successfully!"),l({name:"",email:"",message:""})};return e.jsxs("div",{className:"container mt-5",children:[e.jsx("h1",{className:"text-primary text-center",children:"Contact Us"}),e.jsxs("div",{className:"row mt-4 align-items-center",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("form",{onSubmit:r,className:"p-4 border rounded shadow-sm",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:s.name,onChange:t,className:"form-control",required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:t,className:"form-control",required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Message"}),e.jsx("textarea",{name:"message",value:s.message,onChange:t,className:"form-control",rows:"4",required:!0})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Send Message"})]})}),e.jsxs("div",{className:"col-md-6 text-center",children:[e.jsx("img",{src:"https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg",alt:"Contact",className:"img-fluid mb-4",style:{maxWidth:"80%"}}),e.jsxs("p",{className:"text-muted",children:[e.jsx("strong",{children:"Email:"})," support@jobportal.com"]}),e.jsxs("p",{className:"text-muted",children:[e.jsx("strong",{children:"Phone:"})," +91-8917579373"]}),e.jsxs("p",{className:"text-muted",children:[e.jsx("strong",{children:"Location:"})," Bhubaneswar, India"]})]})]})]})}export{c as default};
