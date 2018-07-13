// @flow

/* eslint-disable no-unused-vars */

import type { MapInterface } from '../flow/types/MapInterface';

/**
 * An adaptor from tiny-lru to a Map API.
 */
class KeyvNull implements MapInterface {
  clear(): void {}

  delete(key: string): boolean {
    return true;
  }

  get(key: string): any {}

  set(key: string, value: any): 1 | 0 {
    return 1;
  }
}

module.exports = KeyvNull;
