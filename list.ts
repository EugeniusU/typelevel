
type Length<Array extends any[]> = Array['length'];

type ArrayToList<A extends any[], N = null> = Length<A> extends 0 ? N :
    A extends [infer H, ...infer R] ? ArrayToList<R, {value: H, prev: N}> : never;

type ListToArray<List2 extends {"prev": any, "value": any}, A extends any[] = [], Prev = {}> = Prev extends null ? A :
    ListToArray<List2['prev'], [List2['value'], ...A], List2['prev']>

type ReverseList<List2 extends {"prev": any, "value": any}, ListNew = null> = List2 extends null ? ListNew :
    ReverseList<List2['prev'], {value: List2['value'], prev: ListNew}>

type t1 = ArrayToList<[1, 2, 3]>;
type t2 = ListToArray<t1>;
type t3 = ReverseList<t1>;
type t4 = ListToArray<t3>;