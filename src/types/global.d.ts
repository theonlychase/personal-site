export {};

declare global {
  type Nullable<T> = T | null;
  type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> &
    Pick<T, TRequired>;
}
