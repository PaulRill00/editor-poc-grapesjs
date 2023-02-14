import grapesjs from "grapesjs";
import { Bounds } from "./Bounds";

export class Editor {
    constructor(private readonly editor: grapesjs.Editor, private readonly bounds: Bounds) {}   
}