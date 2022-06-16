import "./Debugger.js";

let getItems = (dom)=>dom.querySelectorAll("*")

let disp = item=>{
  if(!(item instanceof HTMLElement)) return;
  const tag =(item.tagName);
  let items = getItems(item);
  
  if(items.length > 0){
    return items.map(disp);
  }else{
    console.log(`item: ${tag}`)
    return items;
  }
};

let html = document.querySelectorAll('html').map(disp); 

console.log(html)
console.log("done")