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

interface ICardPokemon {
  imgUrl: string;
  pokeName: string;
  nameAbility: string;
  effect: string;
  shortEffect: string;
}

export type {IMenuControl, ISetMenuControl , IAbout, ICardPokemon}