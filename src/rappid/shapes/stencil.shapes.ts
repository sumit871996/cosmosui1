/*! JointJS+ v3.7.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2023 client IO

 2023-07-03 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


import { dia, shapes } from '@clientio/rappid';
import { ObjectHash } from 'backbone';

import {
    FONT_FAMILY,
    PADDING_L,
    LIGHT_COLOR,
    MAIN_COLOR,
    MESSAGE_ICON,
    ENTITY_ICON,
} from 'src/theme';

export enum ShapeTypesEnum {
    MESSAGE = 'stencil.Message',
    FLOWCHART_START = 'stencil.FlowchartStart',
    FLOWCHART_END = 'stencil.FlowchartEnd',
}

const SHAPE_SIZE = 48;

const FlowchartStart = dia.Element.define(ShapeTypesEnum.FLOWCHART_START, {
    name: 'FlowchartStart',
    size: { width: SHAPE_SIZE, height: SHAPE_SIZE },
    attrs: {
        body: {
            fill: MAIN_COLOR,
            stroke: 'none',
            cx: 'calc(0.5 * w)',
            cy: 'calc(0.5 * h)',
            r: 'calc(0.5 * w)',
        },
        icon: {
            width: 20,
            height: 20,
            x: 'calc(0.5 * w - 10)',
            y: 'calc(0.5 * h - 10)',
            xlinkHref: MESSAGE_ICON
        },
        label: {
            text: 'Start',
            x: `calc(w + ${PADDING_L})`,
            y: 'calc(0.5 * h)',
            textAnchor: 'start',
            textVerticalAnchor: 'middle',
            fill: '#242424',
            fontFamily: FONT_FAMILY,
            fontSize: 13
        }
    }
} as ObjectHash, {
    markup: [{
        tagName: 'circle',
        selector: 'body'
    }, {
        tagName: 'image',
        selector: 'icon'
    }, {
        tagName: 'text',
        selector: 'label'
    }],
});

const FlowchartEnd = dia.Element.define(ShapeTypesEnum.FLOWCHART_END, {
    name: 'FlowchartEnd',
    size: { width: SHAPE_SIZE, height: SHAPE_SIZE },
    attrs: {
        body: {
            fill: MAIN_COLOR,
            stroke: 'none',
            cx: 'calc(0.5 * w)',
            cy: 'calc(0.5 * h)',
            r: 'calc(0.5 * w)'
        },
        icon: {
            width: 20,
            height: 20,
            x: 'calc(0.5 * w - 10)',
            y: 'calc(0.5 * h - 10)',
            xlinkHref: MESSAGE_ICON
        },
        label: {
            text: 'End',
            x: `calc(w + ${PADDING_L})`,
            y: 'calc(0.5 * h)',
            textAnchor: 'start',
            textVerticalAnchor: 'middle',
            fill: '#242424',
            fontFamily: FONT_FAMILY,
            fontSize: 13
        },
    }
} as ObjectHash, {
    markup: [{
        tagName: 'circle',
        selector: 'body'
    }, {
        tagName: 'image',
        selector: 'icon'
    }, {
        tagName: 'text',
        selector: 'label'
    }],
});

const Message = dia.Element.define(ShapeTypesEnum.MESSAGE, {
    name: 'Message',
    size: { width: SHAPE_SIZE, height: SHAPE_SIZE },
    attrs: {
        body: {
            fill: LIGHT_COLOR,
            stroke: '#E8E8E8',
            cx: 'calc(0.5 * w)',
            cy: 'calc(0.5 * h)',
            r: 'calc(0.5 * w)',
        },
        icon: {
            width: 20,
            height: 20,
            x: 'calc(0.5 * w - 10)',
            y: 'calc(0.5 * h - 10)',
            xlinkHref: MESSAGE_ICON
        },
        label: {
            text: 'Component',
            x: `calc(w + ${PADDING_L})`,
            y: 'calc(0.5 * h)',
            textAnchor: 'start',
            textVerticalAnchor: 'middle',
            fill: '#242424',
            fontFamily: FONT_FAMILY,
            fontSize: 13
        }
    }
} as ObjectHash, {
    markup: [{
        tagName: 'circle',
        selector: 'body'
    }, {
        tagName: 'image',
        selector: 'icon'
    }, {
        tagName: 'text',
        selector: 'label'
    }]
});

Object.assign(shapes, {
    stencil: {
        Message,
        FlowchartStart,
        FlowchartEnd,
    }
});
