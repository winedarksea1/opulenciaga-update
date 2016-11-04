'use strict';

import { SWITCH_LOCATION } from '../constants';

export default function (state = 'products', action) {
  switch (action.type) {
    case SWITCH_LOCATION: return action.location;
    default: return state;
  }
}