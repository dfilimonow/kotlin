type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace foo {
    const prop: number;
    class C {
        constructor(x: number);
        readonly x: number;
        doubleX(): number;
    }
    function box(): string;
}
export as namespace JS_TESTS;