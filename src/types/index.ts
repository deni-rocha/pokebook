import { Dispatch, SetStateAction } from "react";

interface IMenuControl {
  view: number
  title?: string
}

interface ISetMenuControl {
  setMenuControl: Dispatch<SetStateAction<IMenuControl>>
}

interface IAbout extends ISetMenuControl {
  content?: string
  copyright?: boolean
}

export type {IMenuControl, ISetMenuControl ,IAbout}