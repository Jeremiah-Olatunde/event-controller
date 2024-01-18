# Event Controller

## Overview
In ancient JavaScript `addEventLister` and related methods did not exist. The only means of adding an event handler to a DOM node was through its `on<event>` property. However this imposed a one handler per event limitation.

This a purely pedagogical attempt to develop a hypothetical library that provides mechanisms to simulate modern event registration and management methods such as `addEventLister` and `removeEventListener`.

## Todo
- [ ] add `options` argument feature to mimic that of `addEventListener`
- [ ] add event capturing feature
