import { observable } from "mobx";

const mobxstore={
Login:1,
Profile:0,
Contactlist:"",
Findaccount:""
}
export const store=observable(mobxstore)