class LiveTimer extends HTMLElement {
	render() {
		this.innerHTML = `
		<time-formatted id="elem"	hour="numeric" minute="numeric" second="numeric"
		></time-formatted>
		`;

		this.timerElem = this.firstElementChild;
		console.log(this.timerElem);
	}

	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
		this.timer = setInterval(() => this.update(), 1000);
	}

	update() {
		this.date = new Date();
		this.timerElem.setAttribute('datetime', this.date);
		this.dispatchEvent(new CustomEvent('tick', { detail: this.date }));
	}

	disconnectedCallback() {
		// clear data
		clearInterval(this.timer);
	}

	// static get observedAttributes() {
	// 	return [
	// 		'datetime',
	// 		'year',
	// 		'month',
	// 		'day',
	// 		'hour',
	// 		'minutes',
	// 		'second',
	// 		'time-zone-name',
	// 	];
	// }

	// attributeChangedCallback(name, oldValue, newValue) {
	// 	this.render();
	// }

	// adoptedCallback() {
	// 	//
	// }
}

customElements.define('live-timer', LiveTimer);
