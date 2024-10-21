type Length<A extends number[]> = A['length'];

type PlusOne<N extends number, A extends number[] = []> = Length<A> extends N ? Length<[0, ...A]> : PlusOne<N, [0, ...A]>;

type Ranges<F extends number, T extends number, A extends number[] = []> = F extends T ? [...A, T] : Ranges<PlusOne<F>, T, [...A, F]>;

type T1 = Ranges<0, 5>

type UnionFromArray<A extends any[], B = A[0]> = A extends [infer k, ...infer rest] ? UnionFromArray<[...rest], k | B> : B;

type T2 = UnionFromArray<[1, 2, 3]>
type T3 = UnionFromArray<Ranges<1, 5>>
