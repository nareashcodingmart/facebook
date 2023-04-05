import Apicall from "../../Request/Apicall";

export const HomeContactlist = (list) => {
    let arr = [];
    // let res= await Apicall("get","","friends/suggestions");
    for (let i = 0; i < list.length; i++) {
        arr.push(
            <div className="contactlist">
                <div >
                    <span className={list[i].story === 1 ? "contactstoryactive" : "contactstoryinactive"}>
                        <img src={list[i].img} alt="" />
                    </span>
                    <span className={list[i].active === 1 ? "contactactive" : "contactinactive"}></span>
                </div>
                <span>{list[i].name}</span>
            </div>)
    }
    return (
        arr
    )
}

