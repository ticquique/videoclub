import { Findable } from './findable'
import { Creable } from './creable';
import { Countable } from './countable';

export * from '@app/api/methods/countable'
export * from '@app/api/methods/creable'
export * from '@app/api/methods/findable'

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}

export interface FindableCreable<T> extends Findable<T>, Creable<T> {}
export class FindableCreable<T> {}
applyMixins(FindableCreable, [Findable, Creable]);

export interface CreableCountable<T> extends Creable<T>, Countable<T> {}
export class CreableCountable<T> {}
applyMixins(CreableCountable, [Creable, Countable]);

export interface FindableCountable<T> extends Findable<T>, Countable<T> {}
export class FindableCountable<T> {}
applyMixins(FindableCountable, [Findable, Countable]);

export interface All<T> extends Findable<T>, Countable<T>, Creable<T> {}
export class All<T> {}
applyMixins(All, [Findable, Countable, Creable]);

