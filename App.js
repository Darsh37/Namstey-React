import React from 'react';
import ReactDOM from "react-dom/client" 


// const heading =
// React.createElement("div",{ id:"parents"},
// [React.createElement("div",{ id:"child"},
// [React.createElement("h1",{ id:"parents"},"This is my H1 tag"),
// React.createElement("h2",{ id:"parents"},"This is my H2 tag")]),

// React.createElement("div",{ id:"child"},
// [React.createElement("h1",{ id:"parents"},"This is my H1 tag"),
// React.createElement("h2",{ id:"parents"},"This is my H2 tag")])
// ]);

const Heading =()=>(<h1 className='head'tabIndex={5}>Namste React using JSX</h1>);

const HeadingComponent =()=>(
<div>
<h1 className='head'>Namstey React Functional Component fdjkgkfdmglk</h1>
</div>
)  ;

const number=1000;
const elem =<span>React element</span>     



const HeadingComponent2 = ()=>(
    <div className='container'>
        {elem }
        <Heading/>
        <HeadingComponent/>
        {HeadingComponent()}
       <h1 className='heading'>Nastey React using function Component</h1> 
    </div>

)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>,<HeadingComponent/>); 