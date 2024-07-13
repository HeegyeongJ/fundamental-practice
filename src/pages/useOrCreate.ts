const cache: Record<string, any> ={}

export const useOrCreate =<T>(key:string, callback: () =>T) => {
    // <T> means generic type
    // 제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다. 한번의 선언으로 다양한 타입에 재사용이 가능하다는 장점이 있다.
    if(!cache[key]) cache[key] = callback()
    return cache[key] as T
}