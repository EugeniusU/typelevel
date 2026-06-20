
type Length<A extends any[]> = A['length'];

type isEmpty<A extends any[]> = Length<A> extends 0 ? true : false;

type T1 = Length<[1, 2, 3]>;
type T2 = isEmpty<[1, 2, 3]>;
type T3 = isEmpty<[]>;

