import { NavLink } from "react-router-dom";

export const Leftnavigatelist = (list) => {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        arr.push(
            <NavLink to={list[i].link}
                className={({ isActive }) => (isActive ? `tagselected ${list[i].class3}` : "")}
                end >
                <div className={list[i].class1}>
                    
                    <div className={`${list[i].class2} ${list[i].class}`}><i /></div>
                    <div>{list[i].name}</div>
                </div>
            </NavLink>
        )
    }
    return arr
}