export interface InitialFormState {
    stupidform: {
        form: any[],
        values: string[]
    },
    form: Array<any>,
    values: object
}

export interface FormValues {
    value: string
}


export type OptionTypes = Array<FormOptionItem> | Array<string>;


export interface FormElement {
    dataKey: number,
    key: number,
    type: string,
    label: string,
    required: boolean,
    maxLength: number,
    placeholder: string,
    options: Array<any>, // note - ideally we would use the OptionTypes here. However, there is an error with TypeScript where only Array<any> currently works for .map() expression, which we need to call.
    grid: FormItemGrid
}


interface FormItemGrid {
    xs: number,
    md: number,
    lg: number
}


export interface FormOptionItem {
    value: string,
    label: string
}

export const RadioOptions: Array<string> = [];
export const RadioOption: string = '';


export interface FormElementChildren {
    dataKey: number 
}