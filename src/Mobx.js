import { observable } from "mobx";

const mobxstore={
Login:1,
Profile:0,
Contactlist:""
}
export const store=observable(mobxstore)