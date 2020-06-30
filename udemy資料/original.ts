// 型がちがうだけのクラスを複数作るのは面倒
class NumberStore {
    data: number;
}
class StringStore {
    data: string;
}

// anyだと型チェックが行われない
class AnyStore {
    data: any;
}

// そこでジェネリックを使用
class Store<T> {
    data: T;
    getStore(): T {
        return this.data;
    }
}

let stringData = new Store<string>();
stringData.data = 'X';
console.log(stringData.getStore());

let numberStore = new Store<number>();
numberStore.data = 10000;
console.log(numberStore.getStore());

// 関数
function hello<T>(keyword: T) {
    console.log(`Log: ${keyword}`);
}
hello<string>('Hello, Yohei!');
hello<number>(10000);

// 2つも
class Component<T, U> {
    name: T;
    created: U;
}
let component = new Component<string, number>();
component.name = 'app';
component.created = Date.now();

component.created = '2017/11/5'; // コンパイルエラー