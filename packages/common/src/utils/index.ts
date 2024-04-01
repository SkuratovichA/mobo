export const isSomeEmpty = (s: object) => !Object.keys(s).length
export const isAnyEmpty = (s: unknown) => !s || isSomeEmpty(s)

export const entries = <T extends object>(obj: Maybe<T>): AsArray<T> =>
  obj ? (Object.entries(obj) as AsArray<T>) : []

export type WithId<T extends object = object> = T & { id: string | number }
export const isWithId = (obj: object): obj is WithId =>
  obj && 'id' in obj && (typeof obj.id === 'string' || typeof obj.id === 'number')

export type IdMap<T extends WithId = WithId> = Record<T['id'], T>

export const arrayToIdMap = <T extends WithId>(data: T[]): IdMap<T> =>
  data.reduce((acc, item) => ({ ...acc, [item.id]: item }), {} as IdMap<T>)

export type Defined<T> = Required<{
  [P in keyof T]-?: Exclude<T[P], undefined>
}>
export type Undefined<T> = Partial<Record<keyof T, undefined>>

// either all are defined or all are undefined
export type Optional<T> = T extends object
  ?
      | Undefined<T>
      | {
          [P in keyof T]: T[P]
        }
  : Partial<T>

export type Maybe<T> = T | undefined | null

export type AsArray<T extends object> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]
