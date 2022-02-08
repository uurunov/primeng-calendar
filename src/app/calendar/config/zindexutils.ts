import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ZIndexUtils {

  constructor() {
  }

  zIndexes = [];

  generateZIndex = (key, baseZIndex) => {
    let lastZIndex = this.zIndexes.length > 0 ? this.zIndexes[this.zIndexes.length - 1] : {key, value: baseZIndex};
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;

    this.zIndexes.push({key, value: newZIndex});

    return newZIndex;
  };

  revertZIndex = (zIndex) => {
    this.zIndexes = this.zIndexes.filter(obj => obj.value !== zIndex);
  };

  getCurrentZIndex = () => {
    return this.zIndexes.length > 0 ? this.zIndexes[this.zIndexes.length - 1].value : 0;
  };

  getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };

  get() {
    return this.getZIndex;
  }

  set(key, el, baseZIndex) {
    if (el) {
      el.style.zIndex = String(this.generateZIndex(key, baseZIndex));
    }
  }

  clear(el) {
    if (el) {
      this.revertZIndex(this.getZIndex(el));
      el.style.zIndex = '';
    }
  }
}
