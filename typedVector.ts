type Vector<S extends number, T = any,  A extends T[] = []> = A['length'] extends S ? A : Vector<S, T, [...A, T]>

type T1 = Vector<10>
type T2 = Vector<10, number>
type T3 = Vector<10, string, ['a', 'b']>
