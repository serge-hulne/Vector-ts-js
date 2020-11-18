"use strict";
/**
 * Vector : Convenience class Wrapper around Array()
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector() {
        this.a = new Array();
    }
    /**
     *
     * @param item : Item to be appended into current Vector
     */
    Vector.prototype.append = function (item) {
        this.a.push(item);
    };
    /**
     * @param item : Item to be deleted from current Vector
     */
    Vector.prototype.delete = function (item) {
        var pos = this.a.indexOf(item);
        if (pos > -1) {
            this.a.splice(pos, 1);
        }
        else {
            throw ("Item " + item + " not found");
        }
    };
    /**
     * @param index : Index of item to be deleted from current Vector
     */
    Vector.prototype.deleteAt = function (index) {
        if (index < this.a.length) {
            this.a.splice(index, 1);
        }
        else {
            throw ("Index " + index + " not in range");
        }
    };
    /**
     *
     * @param index : Index of item to be inserted into current Vector
     * @param item : Item to be inserted
     */
    Vector.prototype.insertAt = function (index, item) {
        if (index < this.a.length) {
            this.a.splice(index, 0, item);
        }
        else {
            throw ("Index " + index + " not in range");
        }
    };
    /**
     * Delete last item from current Vector
     */
    Vector.prototype.deleteAtEnd = function () {
        this.a.splice(this.a.length - 1, 1);
    };
    /**
     *
     * @param item : Item to be inserted at the end of current Vector
     */
    Vector.prototype.insertAtEnd = function (item) {
        this.a.splice(this.a.length, 0, item);
    };
    /**
     * Delete 1st Item of current Vector
     */
    Vector.prototype.deleteAtStart = function () {
        this.a.splice(0, 1);
    };
    /**
     *
     * @param item : Item to be inserted at start of current Vector
     */
    Vector.prototype.insertAtStart = function (item) {
        this.a.splice(0, 0, item);
    };
    /**
     *
     * @param index : Index of item to be substituted,
     * @param item : Substitute item.
     */
    Vector.prototype.substituteAt = function (index, item) {
        if (index < this.a.length) {
            this.a.splice(index, 1, item);
        }
        else {
            throw ("Index " + index + " not in range");
        }
    };
    /**
     *
     * @param item : Item to be prepended to Vector.
     */
    Vector.prototype.prepend = function (item) {
        this.a.splice(0, 0, item);
    };
    /**
     *
     * @param oldItem : item to be substituted.
     * @param newItem : Substitute
     */
    Vector.prototype.substitute = function (oldItem, newItem) {
        var pos = this.a.indexOf(oldItem);
        if (pos > -1) {
            this.a.splice(pos, 1, newItem);
        }
        else {
            throw ("Item " + oldItem + " not found");
        }
    };
    /**
     *
     * @param v : Vector to be concatenated to current Vector.
     */
    Vector.prototype.concat = function (v) {
        var w = new Vector();
        w.a = this.a.concat(v.a);
        return w;
    };
    /**
     * Delete all elements from current Vector.
     */
    Vector.prototype.clear = function () {
        this.a.splice(0, this.a.length);
    };
    /**
     * Return the underlying array from current Vector.
     */
    Vector.prototype.toArray = function () {
        return this.a;
    };
    /**
     *
     * @param v Build vector from Array v.
     */
    Vector.prototype.fromArray = function (v) {
        this.a = __spreadArrays(v);
    };
    /**
     *
     * @param item : item which is checked for inclusion.
     */
    Vector.prototype.includes = function (item) {
        return this.a.includes(item);
    };
    Vector.prototype.forEach = function (fn) {
        this.a.forEach(fn);
    };
    /**
     * @param fn: Sorting function
     */
    Vector.prototype.sort = function (fn) {
        if (fn === void 0) { fn = undefined; }
        this.a.sort(fn);
    };
    /**
     *
     * @param i fist position for swap.
     * @param j second position for swap.
     */
    Vector.prototype.swapAt = function (i, j) {
        var tmp = this.a[i];
        this.substituteAt(i, this.a[j]);
        this.substituteAt(j, tmp);
    };
    /**
     *
     * @param i Index of item whose value is returned
     */
    Vector.prototype.getValue = function (i) {
        return this.a[i];
    };
    /**
     *
     * @param i Index of value to be set
     * @param value value to be set
     */
    Vector.prototype.setValue = function (i, value) {
        if (i < this.a.length) {
            this.a[i] = value;
        }
        else {
            throw ("Index " + i + " not in range");
        }
    };
    /**
     * Returns vector length
     */
    Vector.prototype.length = function () {
        return this.a.length;
    };
    return Vector;
}());
exports.Vector = Vector;
