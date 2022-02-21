import { type Container, container } from '@sapphire/pieces'
import { CommandStore } from './structures/index.js'
import { EventEmitter } from 'events'

export class Client extends EventEmitter {
	public readonly container: Container

	public constructor() {
		super()
		this.container = container
		this.container.client = this
		container.stores.register( new CommandStore() )
	}
}

declare module '@sapphire/pieces' {
    interface Container {
        client: Client
    }
}
