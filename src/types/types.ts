import { StatusInterface } from "@/context/StatusContext"
import { sun } from "solid-heroicons/solid"
import { type Accessor, type Setter } from "solid-js"
import { SetStoreFunction } from "solid-js/store"

export interface AccSet<T> {
  acc: Accessor<T>,
  set: Setter<T>
}

export interface AccSetStore<T> {
  acc: T,
  set: SetStoreFunction<T>
}

export type IconInfo = typeof sun;

export type GetSetStore<T> = [get: T, set: SetStoreFunction<T>]

export interface Knowledge {
  title: string,
  description: string,
  detailedDescription?: string,
  dependencies: Dependancy[], // Check for each dependencies' validity first before using the value.
  value: Accessor<any>,
  icon?: IconInfo,
  set: () => void,
  code: string
}

export type Dependancy = keyof StatusInterface;
