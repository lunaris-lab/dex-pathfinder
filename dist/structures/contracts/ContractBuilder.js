"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractBuilder = void 0;
function mix(Base1, Base2) {
    class Mixed extends Base1 {
        constructor(...args) {
            super(...args);
        }
    }
    Object.getOwnPropertyNames(Base2.prototype).forEach(name => {
        if (name !== 'constructor') {
            Object.defineProperty(Mixed.prototype, name, Object.getOwnPropertyDescriptor(Base2.prototype, name) || Object.create(null));
        }
    });
    return Mixed;
}
class ContractBuilder {
    constructor(instance) {
        this.instance = instance;
    }
    ;
    setExtension(extension) {
        this.instance = mix(this.instance, extension);
        return this;
    }
    ;
    build(config) {
        return new (this.instance)(config);
    }
    ;
}
exports.ContractBuilder = ContractBuilder;
;
