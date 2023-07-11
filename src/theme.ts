/*! JointJS+ v3.7.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2023 client IO

 2023-07-03 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/

import {Layer} from "grommet-icons";
import convertToSVG from "./utils/convertToSVG";
export const MAX_PORT_COUNT = 1;
export const FONT_FAMILY = 'realist, Helvetica, Arial, sans-serif';
export const OUT_PORT_HEIGHT = 16;
export const OUT_PORT_WIDTH = 16;
export const OUT_PORT_LABEL = 'connection';
export const PORT_BORDER_RADIUS = 16;
export const GRID_SIZE = 8;
export const PADDING_S = GRID_SIZE;
export const PADDING_L = GRID_SIZE * 2;
export const ADD_PORT_SIZE = 20;
export const REMOVE_PORT_SIZE = 16;
export const BACKGROUND_COLOR = '#F9F9F9';
export const SECONDARY_BACKGROUND_COLOR = '#FCFCFC';
export const LIGHT_COLOR = '#FFFFFF';
export const DARK_COLOR = '#212121';
export const MAIN_COLOR = '#FFFFFF';
export const LINE_WIDTH = 2;
export const STENCIL_WIDTH = 100;
export const ZOOM_MAX = 3;
export const ZOOM_MIN = 0.4;
export const ZOOM_STEP = 0.2;

// icons
export const MESSAGE_ICON = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" aria-label="Resources" viewBox="0 0 24 24" class="StyledIcon-sc-ofa7kd-0 kCyiIT"%3E%3Cpath fill="none" stroke="%23000" stroke-width="2" d="m12 3 9 4.5-9 4.5-9-4.5L12 3zm4.5 7.25L21 12.5 12 17l-9-4.5 4.5-2.25m9 5L21 17.5 12 22l-9-4.5 4.5-2.25"%3E%3C/path%3E%3C/svg%3E';
export const CONFIRMATION_ICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNOSAxNi4yTDQuOCAxMmwtMS40IDEuNEw5IDE5IDIxIDdsLTEuNC0xLjRMOSAxNi4yeiIvPjwvc3ZnPg==';
// export const ENTITY_ICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9ImJsYWNrIiB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4Ij48Zz48cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiLz48L2c+PGc+PGcvPjxnPjxwYXRoIGQ9Ik04LDhINnY3YzAsMS4xLDAuOSwyLDIsMmg5di0ySDhWOHoiLz48cGF0aCBkPSJNMjAsM2gtOGMtMS4xLDAtMiwwLjktMiwydjZjMCwxLjEsMC45LDIsMiwyaDhjMS4xLDAsMi0wLjksMi0yVjVDMjIsMy45LDIxLjEsMywyMCwzeiBNMjAsMTFoLThWN2g4VjExeiIvPjxwYXRoIGQ9Ik00LDEySDJ2N2MwLDEuMSwwLjksMiwyLDJoOXYtMkg0VjEyeiIvPjwvZz48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIi8+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBkPSJNOCw4SDZ2N2MwLDEuMSwwLjksMiwyLDJoOXYtMkg4Vjh6Ii8+PHBhdGggZD0iTTIwLDNoLThjLTEuMSwwLTIsMC45LTIsMnY2YzAsMS4xLDAuOSwyLDIsMmg4YzEuMSwwLDItMC45LDItMlY1QzIyLDMuOSwyMS4xLDMsMjAsM3ogTTIwLDExaC04VjdoOFYxMXoiLz48cGF0aCBkPSJNNCwxMkgydjdjMCwxLjEsMC45LDIsMiwyaDl2LTJINFYxMnoiLz48L2c+PC9nPjwvc3ZnPg==';
export const USER_INPUT_ICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjEgMy4wMUgzYy0xLjEgMC0yIC45LTIgMlY5aDJWNC45OWgxOHYxNC4wM0gzVjE1SDF2NC4wMWMwIDEuMS45IDEuOTggMiAxLjk4aDE4YzEuMSAwIDItLjg4IDItMS45OHYtMTRjMC0xLjExLS45LTItMi0yek0xMSAxNmw0LTQtNC00djNIMXYyaDEwdjN6Ii8+PC9zdmc+';
export const ENTITY_ICON = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" aria-label="Action" viewBox="0 0 24 24" class="StyledIcon-sc-ofa7kd-0 gfrdwT"%3E%3Cpath fill="none" stroke="%23000" stroke-width="2" d="m1 23 3-3-3 3zM20 4l3-3-3 3zM9 11l3-3-3 3zm4 4 3-3-3 3zM10 5l9 9 1-1c2-2 4.053-5 0-9s-7-2-9 0l-1 1zm-6 6 1-1 9 9-1 1c-2 2-5 4.087-9 0s-2-7 0-9z"%3E%3C/path%3E%3C/svg%3E';
export const TARGET_ICON = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" aria-label="Target" viewBox="0 0 24 24" class="StyledIcon-sc-ofa7kd-0 kCyiIT"%3E%3Cpath fill="none" stroke="%23000" stroke-width="2" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-5 0c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6 6-2.691 6-6zm-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"%3E%3C/path%3E%3C/svg%3E'