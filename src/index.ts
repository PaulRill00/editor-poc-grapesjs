import grapesjs from 'grapesjs';
import { Bounds } from './Bounds';
import { Editor } from './Editor';
import { ElementBuilder } from './ElementBuilder';

const grapesEditor = grapesjs.init({ 
    container : '#gjs',
    showDevices: false,
    devicePreviewMode: false,
    showToolbar: false,
    dragMode: 'absolute',
    clearStyles: true,
    keepUnusedStyles: false,
    canvasCss: `
        .gjs-dashed *[data-gjs-highlightable] { outline: 1px dashed red; }
    `,
 });

const bounds = new Bounds(grapesEditor);
const editor = new Editor(grapesEditor, bounds);
const elementBuilder = new ElementBuilder(editor);