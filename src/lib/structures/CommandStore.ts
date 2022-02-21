import { Command } from './Command.js'
import { Store } from '@sapphire/pieces'

export class CommandStore extends Store<Command> {
	public constructor() {
		// @ts-expect-error - Either expect-error or cast to any: https://github.com/sapphiredev/framework/blob/db6febd56afeaeff1f23afce2a269beecb316804/src/lib/structures/CommandStore.ts#L10
		super( Command, {
			name: 'commands'
		} )
	}
}

declare module '@sapphire/pieces' {
	interface StoreRegistryEntries {
		'commands': CommandStore
	}
}
