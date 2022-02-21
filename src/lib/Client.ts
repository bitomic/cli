import { CommandStore, ListenerStore } from './structures/index.js'
import { type Container, container } from '@sapphire/pieces'
import { EventEmitter } from 'events'
import { Events } from './types/index.js'
import { fileURLToPath } from 'url'
import path from 'path'

export class Client extends EventEmitter {
	public readonly container: Container

	public constructor() {
		super()
		this.container = container
		this.container.client = this

		const basepath = path.resolve( fileURLToPath(import.meta.url), '../..' )
		container.stores.register( new CommandStore().registerPath( path.resolve( basepath, 'commands' ) ) )
		container.stores.register( new ListenerStore().registerPath( path.resolve( basepath, 'listeners' ) ) )
	}

	public async start(): Promise<void> {
		for ( const store of this.container.stores.values() ) {
			await store.loadAll()
		}
		this.emit( Events.Ready )
	}
}

declare module '@sapphire/pieces' {
    interface Container {
        client: Client
    }
}
