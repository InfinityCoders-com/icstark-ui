import { TChildren, TStyle } from "./components"

export interface IFlex extends TChildren, TStyle {
    display: 'flex' | 'inline-flex'
    flexDirection: 'column' | 'row' | 'row-reverse' | 'column-reverse'
    flexWrap: 'wrap' | 'no-wrap' | 'wrap-reverse'
    flexFlow: 'row wrap' | 'row nowrap' | 'column wrap' | 'column nowrap'
    justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between'
    alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
    alignContent: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'space-around' | 'space-between'
}