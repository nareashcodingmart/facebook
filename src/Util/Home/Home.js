export const Logout=(setLogin)=>{
    localStorage.removeItem("token");
    setLogin(0);
}
export const Dropdown=(state,setState,n)=>{
    let arr = state.map(i => i);
    // let arr = state;
    // console.log("hi",state)
    for(let j=0;j<4;j++){
    if(n===j){
        arr[j]=arr[j]?0:1
        continue;
    }
    arr[j]=0;
}
console.log(arr)
setState(arr);
} 