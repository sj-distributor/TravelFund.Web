export interface RoutesProps {
  path: string
  element: JSX.Element
  name: string
  children?: Children[]
}

export interface Children {
  path: string
  element: JSX.Element
  name: string
  leftSideChildren: string
}
