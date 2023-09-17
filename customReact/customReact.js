function customRender(domElement,mainContainer){
    const domEle=document.createElement(domElement.type)
    domEle.innerHTML=domElement.children

    for (const prop in domElement.props) {
        domEle.setAttribute(prop,domElement.props[prop])
    }

    mainContainer.appendChild(domEle)
}

const mainContainer =document.getElementById('root')

const domElement={
    type:"a",
    props:{
        href:"https://arannabarua-dev.netlify.app/",
        target:"_blank"
    },
    children:"please visit my portfolio"
}
customRender(domElement,mainContainer);