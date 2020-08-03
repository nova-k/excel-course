import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
	constructor($root, option = {}) {
		super($root, option.listeners)
		this.name = option.name
	}
	// Gets the component template
	toHTML() {
		return ''
	}

	init() {
		this.initDOMListeners()
	}

	destroy() {
		this.removeDOMListeners()
	}
}