/*! JointJS+ v3.7.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2023 client IO

 2023-07-03 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


import { dia, elementTools } from '@clientio/rappid';

export const RemoveTool = elementTools.Remove.extend({
    options: {
        useModelGeometry: true,
        action: (evt: dia.Event, cellView: dia.CellView): void => {
            cellView.notify('cell:tool:remove', evt);
        },
        markup: [{
            tagName: 'circle',
            selector: 'button',
            attributes: {
                'r': 30,
                'fill': 'transparent',
                'cursor': 'pointer',
                'data-tooltip': 'Remove <i>(Del)</i>',
                'data-tooltip-position': 'bottom'
            }
        }, {
            tagName: 'path',
            selector: 'icon',
            attributes: {
                'd': 'M -9 -9 9 9 M -9 9 9 -9',
                'fill': 'none',
                'stroke': 'black',
                'stroke-width': 2,
                'pointer-events': 'none',
                // transform: 'translate(-55, 45)'
            }
        }]
    }
});
