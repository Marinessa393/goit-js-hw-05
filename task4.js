// Write code under this line
class StringBuilder {
  constructor(string) {
    this.value = string;
  }

  get _value() {
    this.value;
  }

  append(str) {
    this.value = this.value + str;
  }

  prepend(str) {
    this.value = str + this.value;
  }

  pad(str) {
    this.prepend(str) + this.append(str);
  }
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
