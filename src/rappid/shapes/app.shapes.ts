/*! JointJS+ v3.7.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2023 client IO

 2023-07-03 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/

import BreadCrumb from 'src/components/breadCrumb/BreadCrumb';
import { util, dia, g, shapes } from '@clientio/rappid';
import { Icon , Layer} from 'grommet-icons';
import {
    MAX_PORT_COUNT,
    FONT_FAMILY,
    OUT_PORT_HEIGHT,
    OUT_PORT_WIDTH,
    OUT_PORT_LABEL,
    PORT_BORDER_RADIUS,
    PADDING_L,
    PADDING_S,
    ADD_PORT_SIZE,
    REMOVE_PORT_SIZE,
    BACKGROUND_COLOR,
    LIGHT_COLOR,
    DARK_COLOR,
    MAIN_COLOR,
    LINE_WIDTH,
    ENTITY_ICON,
    MESSAGE_ICON
} from 'src/theme';

export enum ShapeTypesEnum {
    BASE = 'app.Base',
    MESSAGE = 'app.Message',
    FLOWCHART_START = 'app.FlowchartStart',
    FLOWCHART_END = 'app.FlowchartEnd',
    LINK = 'app.Link'
}

const outputPortPosition = (portsArgs: dia.Element.Port[], elBBox: dia.BBox): g.Point[] => {
    const step = OUT_PORT_WIDTH + PADDING_S;
    return portsArgs.map((port: dia.Element.Port, index: number) => new g.Point({
        x: 271 + index * step,
        y: elBBox.height-50
    }));
};

const Base = dia.Element.define(ShapeTypesEnum.BASE, {
    // no default attributes
}, {
    getBoundaryPadding: function() {
        return util.normalizeSides(this.boundaryPadding);
    },

    toJSON: function() {
        // Simplify the element resulting JSON
        const json = dia.Element.prototype.toJSON.call(this);
        // Remove port groups and angle for better readability
        delete json.ports.groups;
        delete json.angle;
        return json;
    }
}, {

    fromStencilShape: function(element: dia.Element) {
        const attrs = {
            label: {
                text: element.attr(['label', 'text'])
            },
            body: {
                stroke: element.attr(['body', 'stroke']),
                fill: element.attr(['body', 'fill'])
            },
            icon: {
                xlinkHref: element.attr(['icon', 'xlinkHref'])
            }
        };
        return new this({ attrs });
    }

});


const Message = Base.define(ShapeTypesEnum.MESSAGE, {
    size: { width: 271, height: 100 },
    ports: {
        groups: {
            // in: {
            //     position: {
            //         name: 'manual',
            //         args: {
            //             x: PADDING_L,
            //             y: 0
            //         }
            //     },
            //     size: {
            //         width: 16,
            //         height: 16
            //     },
            //     attrs: {
            //         portBody: {
            //             magnet: 'passive',
            //             width: 'calc(w)',
            //             height: 'calc(h)',
            //             y: 'calc(-0.5 * h)',
            //             rx: PORT_BORDER_RADIUS,
            //             ry: PORT_BORDER_RADIUS,
            //             fill: LIGHT_COLOR,
            //             stroke: DARK_COLOR,
            //             strokeWidth: LINE_WIDTH
            //         }
            //     },
            //     markup: [{
            //         tagName: 'rect',
            //         selector: 'portBody'
            //     }]
            // },
            out: {
                position: outputPortPosition,
                size: {
                    width: OUT_PORT_WIDTH,
                    height: OUT_PORT_HEIGHT
                },
                attrs: {
                    portBody: {
                        magnet: 'active',
                        width: 'calc(w)',
                        height: 'calc(h)',
                        x: 'calc(-0.5 * w)',
                        y: 'calc(-0.5 * h)',
                        fill: DARK_COLOR,
                        ry: PORT_BORDER_RADIUS,
                        rx: PORT_BORDER_RADIUS
                    },
                    portLabel: {
                        pointerEvents: 'none',
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400,
                        fontSize: 13,
                        fill: LIGHT_COLOR,
                        textAnchor: 'start',
                        textVerticalAnchor: 'middle',
                        textWrap: {
                            width: - REMOVE_PORT_SIZE - PADDING_L - PADDING_S,
                            maxLineCount: 1,
                            ellipsis: true
                        },
                        x: PADDING_L - OUT_PORT_WIDTH / 2
                    },
                    // portRemoveButton: {
                    //     cursor: 'pointer',
                    //     event: 'element:port:remove',
                    //     transform: `translate(calc(0.5 * w - ${PADDING_L}), 0)`,
                    //     dataTooltip: 'Remove Output Port',
                    //     dataTooltipPosition: 'top'
                    // },
                    // portRemoveButtonBody: {
                    //     width: REMOVE_PORT_SIZE,
                    //     height: REMOVE_PORT_SIZE,
                    //     x: -REMOVE_PORT_SIZE / 2,
                    //     y: -REMOVE_PORT_SIZE / 2,
                    //     fill: LIGHT_COLOR,
                    //     rx: PORT_BORDER_RADIUS,
                    //     ry: PORT_BORDER_RADIUS
                    // },
                    // portRemoveButtonIcon: {
                    //     d: 'M -4 -4 4 4 M -4 4 4 -4',
                    //     stroke: DARK_COLOR,
                    //     strokeWidth: LINE_WIDTH
                    // }
                },
                markup: [{
                    tagName: 'rect',
                    selector: 'portBody'
                }, {
                    tagName: 'text',
                    selector: 'portLabel',
                }, {
                    tagName: 'g',
                    selector: 'portRemoveButton',
                    children: [{
                        tagName: 'rect',
                        selector: 'portRemoveButtonBody'
                    }, {
                        tagName: 'path',
                        selector: 'portRemoveButtonIcon'
                    }]
                }]
            }
        },
        items: [ {
            group: 'out',
            attrs: { portLabel: { text: OUT_PORT_LABEL }}
        }]
    },
    attrs: {
        horizontalLine:{
            x1: 25,         // Starting x-coordinate of the line
            y1: 50,        // Starting y-coordinate of the line
            x2: 271-25,       // Ending x-coordinate of the line
            y2: 50,        // Ending y-coordinate of the line
            stroke: 'gray',     // Stroke color of the line
            strokeWidth: 1, // Stroke width of the line
        },
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            fill: LIGHT_COLOR,
            strokeWidth: LINE_WIDTH / 2,
            stroke: '#D4D4D4',
            rx: 12,
            ry: 12,
        },
        label: {
            x: 65,
            y: PADDING_L+5,
            fontFamily: FONT_FAMILY,
            fontWeight: 600,
            fontSize: 16,
            fill: '#00567A',
            text: 'Label',
            textWrap: {
                width: - 54 - PADDING_L,
                maxLineCount: 1,
                ellipsis: true
            },
            textVerticalAnchor: 'top',
        },
        description: {
            x: 25,
            y: 65,
            fontFamily: FONT_FAMILY,
            fontWeight: 400,
            fontSize: 13,
            lineHeight: 13,
            fill: 'gray',
            textVerticalAnchor: 'top',
            text: 'Description',
            textWrap: {
                width: - 54 - PADDING_L,
                maxLineCount: 2,
                ellipsis: true
            }
        },
        icon: {
            width: 20,
            height: 20,
            x: 25,
            y: 20,
            xlinkHref: MESSAGE_ICON
        },
        // portAddButton: {
        //     cursor: 'pointer',
        //     fill: "0057FF",
        //     event: 'element:port:add',
        //     transform: 'translate(calc(w - 28), calc(h))',
        //     dataTooltip: 'Add Output Port',
        //     dataTooltipPosition: 'top'
        // },
        // portAddButtonBody: {
        //     width: ADD_PORT_SIZE,
        //     height: ADD_PORT_SIZE,
        //     rx: PORT_BORDER_RADIUS,
        //     ry: PORT_BORDER_RADIUS,
        //     x: -ADD_PORT_SIZE / 2,
        //     y: -ADD_PORT_SIZE / 2,
        // },
        // portAddButtonIcon: {
        //     d: 'M -4 0 4 0 M 0 -4 0 4',
        //     stroke: '#FFFFFF',
        //     strokeWidth: LINE_WIDTH
        // }
    }
}, {

    markup: [{
        tagName: 'rect',
        selector: 'body',
    }, {
        tagName: 'line',
        selector: 'horizontalLine',
    },{
        tagName: 'text',
        selector: 'label',
    }, {
        tagName: 'text',
        selector: 'description',
    }, {
        tagName: 'image',
        selector: 'icon',
    }, {
        tagName: 'g',
        selector: 'portAddButton',
        children: [{
            tagName: 'rect',
            selector: 'portAddButtonBody'
        }, {
            tagName: 'path',
            selector: 'portAddButtonIcon'
        }]
    }],

    boundaryPadding: {
        horizontal: PADDING_L,
        top: PADDING_L,
        bottom: OUT_PORT_HEIGHT / 2 + PADDING_L
    },

    addDefaultPort: function() {
        if (!this.canAddPort('out')) return;
        this.addPort({
            group: 'out',
            attrs: { portLabel: { text: OUT_PORT_LABEL }}
        });
    },

    canAddPort: function(group: string): boolean {
        return Object.keys(this.getGroupPorts(group)).length < MAX_PORT_COUNT;
    },

    toggleAddPortButton: function(group: string): void {
        const buttonAttributes = this.canAddPort(group)
            ? { fill: "0057FF", cursor: 'pointer' }
            : { fill: '#BEBEBE', cursor: 'not-allowed' };
        this.attr(['portAddButton'], buttonAttributes, {
            dry: true /* to be ignored by the Command Manager */
        });
    }
});

const FlowchartStart = Base.define(ShapeTypesEnum.FLOWCHART_START, {
    size: { width: 48, height: 48 },
    ports: {
        groups: {
            out: {
                position: { name: 'bottom' },
                attrs: {
                    portBody: {
                        fill: DARK_COLOR,
                        stroke: BACKGROUND_COLOR,
                        strokeWidth: 6,
                        paintOrder: 'stroke',
                        magnet: 'active',
                        r: 'calc(0.5 * d)',
                    }
                },
                size: { width: 10, height: 10 },
                markup: [{
                    tagName: 'circle',
                    selector: 'portBody'
                }]
            }
        },
        items: [{ group: 'out' }]
    },
    attrs: {
        body: {
            fill: MAIN_COLOR,
            stroke: 'none',
            cx: 'calc(0.5 * w)',
            cy: 'calc(0.5 * h)',
            r: 24
        },
        
        icon: {
            d: 'M 2 8 L 4.29 5.71 L 1.41 2.83 L 2.83 1.41 L 5.71 4.29 L 8 2 L 8 8 Z M -2 8 L -8 8 L -8 2 L -5.71 4.29 L -1 -0.41 L -1 -8 L 1 -8 L 1 0.41 L -4.29 5.71 Z',
            fill: LIGHT_COLOR,
            transform: 'translate(calc(0.5 * w), calc(0.5 * h))'
        },
        
        label: {
            text: 'Flowchart start',
            textWrap: {
                width: 200,
                height: 100,
                ellipsis: true
            },
            x: 'calc(0.5 * w)',
            y: -PADDING_L,
            textAnchor: 'middle',
            textVerticalAnchor: 'bottom',
            fill: '#55627B',
            fontFamily: FONT_FAMILY,
            fontSize: 13
        }
    }
}, {
    markup: [{
        tagName: 'circle',
        selector: 'body'
    }, {
        tagName: 'path',
        selector: 'icon'
    }, {
        tagName: 'text',
        selector: 'label'
    }],
    boundaryPadding: {
        horizontal: PADDING_L,
        top: PADDING_S,
        bottom: PADDING_L
    }
});


const FlowchartEnd = Base.define(ShapeTypesEnum.MESSAGE, {
    size: { width: 271, height: 100 },
    ports: {
        groups: {
            in: {
                position: {
                    name: 'manual',
                    args: {
                        x: -16/2,
                        y: 100/2
                    }
                },
                size: {
                    width: 16,
                    height: 16
                },
                attrs: {
                    portBody: {
                        magnet: 'passive',
                        width: 'calc(w)',
                        height: 'calc(h)',
                        y: 'calc(-0.5 * h)',
                        rx: PORT_BORDER_RADIUS,
                        ry: PORT_BORDER_RADIUS,
                        fill: LIGHT_COLOR,
                        stroke: DARK_COLOR,
                        strokeWidth: LINE_WIDTH
                    }
                },
                markup: [{
                    tagName: 'rect',
                    selector: 'portBody'
                }]
            },
            out: {
                position: outputPortPosition,
                size: {
                    width: OUT_PORT_WIDTH,
                    height: OUT_PORT_HEIGHT
                },
                attrs: {
                    // portBody: {
                    //     magnet: 'active',
                    //     width: 'calc(w)',
                    //     height: 'calc(h)',
                    //     x: 'calc(-0.5 * w)',
                    //     y: 'calc(-0.5 * h)',
                    //     fill: DARK_COLOR,
                    //     ry: PORT_BORDER_RADIUS,
                    //     rx: PORT_BORDER_RADIUS
                    // },
                    // portLabel: {
                    //     pointerEvents: 'none',
                    //     fontFamily: FONT_FAMILY,
                    //     fontWeight: 400,
                    //     fontSize: 13,
                    //     fill: LIGHT_COLOR,
                    //     textAnchor: 'start',
                    //     textVerticalAnchor: 'middle',
                    //     textWrap: {
                    //         width: - REMOVE_PORT_SIZE - PADDING_L - PADDING_S,
                    //         maxLineCount: 1,
                    //         ellipsis: true
                    //     },
                    //     x: PADDING_L - OUT_PORT_WIDTH / 2
                    // },
                    // portRemoveButton: {
                    //     cursor: 'pointer',
                    //     event: 'element:port:remove',
                    //     transform: `translate(calc(0.5 * w - ${PADDING_L}), 0)`,
                    //     dataTooltip: 'Remove Output Port',
                    //     dataTooltipPosition: 'top'
                    // },
                    // portRemoveButtonBody: {
                    //     width: REMOVE_PORT_SIZE,
                    //     height: REMOVE_PORT_SIZE,
                    //     x: -REMOVE_PORT_SIZE / 2,
                    //     y: -REMOVE_PORT_SIZE / 2,
                    //     fill: LIGHT_COLOR,
                    //     rx: PORT_BORDER_RADIUS,
                    //     ry: PORT_BORDER_RADIUS
                    // },
                    // portRemoveButtonIcon: {
                    //     d: 'M -4 -4 4 4 M -4 4 4 -4',
                    //     stroke: DARK_COLOR,
                    //     strokeWidth: LINE_WIDTH
                    // }
                },
                markup: [{
                    tagName: 'rect',
                    selector: 'portBody'
                }, {
                    tagName: 'text',
                    selector: 'portLabel',
                }, {
                    tagName: 'g',
                    selector: 'portRemoveButton',
                    children: [{
                        tagName: 'rect',
                        selector: 'portRemoveButtonBody'
                    }, {
                        tagName: 'path',
                        selector: 'portRemoveButtonIcon'
                    }]
                }]
            }
        },
        items: [{
            group: 'in'
        }]
    },
    attrs: {
        horizontalLine:{
            x1: 25,         // Starting x-coordinate of the line
            y1: 50,        // Starting y-coordinate of the line
            x2: 271-25,       // Ending x-coordinate of the line
            y2: 50,        // Ending y-coordinate of the line
            stroke: 'gray',     // Stroke color of the line
            strokeWidth: 1, // Stroke width of the line
        },
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            fill: LIGHT_COLOR,
            strokeWidth: LINE_WIDTH / 2,
            stroke: '#D4D4D4',
            rx: 12,
            ry: 12,
        },
        label: {
            x: 65,
            y: PADDING_L+5,
            fontFamily: FONT_FAMILY,
            fontWeight: 600,
            fontSize: 16,
            fill: '#00567A',
            text: 'Label',
            textWrap: {
                width: - 54 - PADDING_L,
                maxLineCount: 1,
                ellipsis: true
            },
            textVerticalAnchor: 'top',
        },
        description: {
            x: 25,
            y: 65,
            fontFamily: FONT_FAMILY,
            fontWeight: 400,
            fontSize: 13,
            lineHeight: 13,
            fill: 'gray',
            textVerticalAnchor: 'top',
            text: 'Description',
            textWrap: {
                width: - 54 - PADDING_L,
                maxLineCount: 2,
                ellipsis: true
            }
        },
        icon: {
            width: 20,
            height: 20,
            x: 25,
            y: 20,
            xlinkHref: MESSAGE_ICON
            // markup: <svg aria-label="Layer" viewBox="0 0 24 24" class="StyledIcon-sc-ofa7kd-0 kCyiIT"><path fill="none" stroke="#000" stroke-width="2" d="M1 1h16v16H1V1zm19 6h3v16H7v-3"></path></svg>
            // component: <BreadCrumb/>,
        },
        // icon: {
        //     d: 'M1 1h16v16H1V1zm19 6h3v16H7v-3',
        //     fill: LIGHT_COLOR,
        //     transform: 'translate(calc(0.5 * w), calc(0.5 * h))'
        // },
        // portAddButton: {
        //     cursor: 'pointer',
        //     fill: MAIN_COLOR,
        //     event: 'element:port:add',
        //     transform: 'translate(calc(w - 28), calc(h))',
        //     dataTooltip: 'Add Output Port',
        //     dataTooltipPosition: 'top'
        // },
        // portAddButtonBody: {
        //     width: ADD_PORT_SIZE,
        //     height: ADD_PORT_SIZE,
        //     rx: PORT_BORDER_RADIUS,
        //     ry: PORT_BORDER_RADIUS,
        //     x: -ADD_PORT_SIZE / 2,
        //     y: -ADD_PORT_SIZE / 2,
        // },
        // portAddButtonIcon: {
        //     d: 'M -4 0 4 0 M 0 -4 0 4',
        //     stroke: '#FFFFFF',
        //     strokeWidth: LINE_WIDTH
        // }
    }
}, {

    markup: [{
        tagName: 'rect',
        selector: 'body',
    },{
        tagName: 'line',
        selector: 'horizontalLine',
    }, {
        tagName: 'text',
        selector: 'label',
    }, {
        tagName: 'text',
        selector: 'description',
    }, {
        tagName: 'image',
        selector: 'icon',
    }, {
        tagName: 'g',
        selector: 'portAddButton',
        children: [{
            tagName: 'rect',
            selector: 'portAddButtonBody'
        }, {
            tagName: 'path',
            selector: 'portAddButtonIcon'
        }]
    }],

    boundaryPadding: {
        horizontal: PADDING_L,
        top: PADDING_L,
        bottom: OUT_PORT_HEIGHT / 2 + PADDING_L
    },

    addDefaultPort: function() {
        if (!this.canAddPort('out')) return;
        this.addPort({
            group: 'out',
            attrs: { portLabel: { text: OUT_PORT_LABEL }}
        });
    },

    canAddPort: function(group: string): boolean {
        return Object.keys(this.getGroupPorts(group)).length < MAX_PORT_COUNT;
    },

    toggleAddPortButton: function(group: string): void {
        const buttonAttributes = this.canAddPort(group)
            ? { fill: MAIN_COLOR, cursor: 'pointer' }
            : { fill: '#BEBEBE', cursor: 'not-allowed' };
        this.attr(['portAddButton'], buttonAttributes, {
            dry: true /* to be ignored by the Command Manager */
        });
    }
});

export const Link = dia.Link.define(ShapeTypesEnum.LINK, {
    attrs: {
        root: {
            cursor: 'pointer'
        },
        line: {
            fill: 'none',
            connection: true,
            stroke: '#17EBA0',
            strokeWidth: LINE_WIDTH
        },
        wrapper: {
            fill: 'none',
            connection: true,
            stroke: 'transparent',
            strokeWidth: 10
        },
        arrowhead: {
            d: 'M -15 -7.5 0 0 -15 7.5',
            stroke: '#17EBA0',
            fill: 'none',
            atConnectionRatio: 1,
            strokeWidth: LINE_WIDTH
        }
    },
    labels: [{
        attrs: {
            // labelText: {
            //     text: 'Label',
            // }
        },
        position: {
            distance: 0.25
        }
    }]
}, {
    markup: [{
        tagName: 'path',
        selector: 'line'
    }, {
        tagName: 'path',
        selector: 'wrapper'
    }, {
        tagName: 'path',
        selector: 'arrowhead'
    }],
    defaultLabel: {
        markup: [{
            tagName: 'rect',
            selector: 'labelBody'
        }, {
            tagName: 'text',
            selector: 'labelText'
        }],
        attrs: {
            labelText: {
                fontFamily: FONT_FAMILY,
                fontSize: 13,
                textWrap: {
                    width: 200,
                    height: 100,
                    ellipsis: true
                },
                cursor: 'pointer',
                fill: '#17EBA0',
                textAnchor: 'middle',
                textVerticalAnchor: 'middle',
                pointerEvents: 'none'
            },
            labelBody: {
                ref: 'labelText',
                fill: BACKGROUND_COLOR,
                stroke: BACKGROUND_COLOR,
                strokeWidth: 2,
                width: 'calc(w)',
                height: 'calc(h)',
                x: 'calc(x)',
                y: 'calc(y)'
            }
        }
    }
});

Object.assign(shapes, {
    app: {
        Base,
        Message,
        FlowchartStart,
        FlowchartEnd,
        Link
    }
});
