import React from "react"
export interface InputInterface{
    label:string,
    name:string,
    showLabel?:boolean,
}
export type FormInputInterface = React.FunctionComponent<InputInterface>

export interface SelectInputInterface extends InputInterface{
    options:Array<{
        label:string,
        value:string
    }>
}