export const Logout=(store)=>{
    localStorage.removeItem("token");
    
    store.Login=0;
}
export const Dropdown=(state,setState,n)=>{
    let arr = state.map(i => i);
    for(let j=0;j<4;j++){
    if(n===j){
        arr[j]=arr[j]?0:1
        continue;
    }
    arr[j]=0;
}
setState(arr);
} 
export const Reactionarr=(list,setState)=>{
    let arr=[];
    for(let i=0;i<list.length;i++){
        arr.push(<img src={list[i].img}alt="" key={list[i].id} onClick={()=>{Reactionstate(setState,list[i].name,list[i].color ,list[i].icon)}}/>)
    }
    return arr
}
export const Reactionstate=(setState,name,color,icon)=>{

    setState(
        {   value:name,
            name:name,
            color:color,
            img:icon
        }
    )
}
export const Likefun=(state,setState)=>{
if(state.value===0){
    setState({
        value:"Like",
        name:"Like",
        color:"blue",
        img:""
    })
}
else{
    setState({
        value:0,
        name:"Like",
        color:"gray",
        img:""
    })
}
}
export const Postarr=(state,setState)=>{
    let obj={...state}
    if(obj.arr.length>=20){
        obj.hasMore=false;
        setState(obj);
        return
    }
    let k=obj.arr.length;
    setTimeout(()=>{
    for(let i=0;i<5;i++){
        obj.arr.push(k+i)
    }
    setState(obj) 
},1000)
    
}