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

export const createModal = () => {
	return setContext(key, new ModalState());
};

export const getModal = () => {
	return getContext<ModalState>(key);
};
