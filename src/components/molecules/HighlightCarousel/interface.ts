import { ViewProps } from "react-native";


interface IItem {
  nomeObjcanal?: string,
  description?: string,
  codObjObjcanal?: string,
  numIdObjcanal?: number,
  codAlvoObjcanal?: string,
  codTipoObjcanal?: string,
  txtLocUrl?: string,
  numOrdem?: number | null,
  codTipoRestricaoObjcanal?: string,
  codWebcenterContent?: string
}

export interface IHighlightCarousel extends ViewProps {
  items : IItem[],
}