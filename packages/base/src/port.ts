export type Port<T> = {
  create: (data: T) => string
  delete: (data: T) => void
  getAll: () => T[]
  getById: (id: string) => T | undefined
  update: (data: T) => void
}
