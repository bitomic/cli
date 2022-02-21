import { Listener } from './Listener.js'
import { Store } from '@sapphire/pieces'

export class ListenerStore extends Store<Listener> {
	public constructor() {
		// @ts-expect-error - Either expect-error or cast to any: https://github.com/sapphiredev/framework/blob/db6febd56afeaeff1f23afce2a269beecb316804/src/lib/structures/ListenerStore.ts#L10
		super( Listener, {
			name: 'listeners'
		} )
	}
}

declare module '@sapphire/pieces' {
	interface StoreRegistryEntries {
		'listeners': ListenerStore
	}
}
