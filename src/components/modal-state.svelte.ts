import { getContext, setContext } from 'svelte';

export enum ModalType {
	IMAGE = 'image'
}

class ModalState {
	#isOpen = $state(false);
	#type: ModalType | null = $state(null);
	#props: Record<string, unknown> = $state({});

	get isOpen() {
		return this.#isOpen;
	}

	get type() {
		return this.#type;
	}

	get props() {
		return this.#props;
	}

	open(type: ModalType, props: Record<string, unknown> = {}) {
		this.#type = type;
		this.#props = props;
		this.#isOpen = true;
	}

	close() {
		this.#isOpen = false;
		this.#type = null;
		this.#props = {};
	}
}

const key = Symbol('modal');

export function createModal() {
	try {
		return setContext(key, new ModalState());
	} catch {
		return new ModalState();
	}
}

export function getModal() {
	try {
		return getContext<ModalState>(key);
	} catch {
		return new ModalState();
	}
}
