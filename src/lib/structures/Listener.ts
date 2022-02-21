import { container, Piece, type PieceContext, type PieceOptions } from '@sapphire/pieces'
import { type EventEmitter } from 'events'

export abstract class Listener extends Piece {
	public readonly emitter: EventEmitter
	public readonly event: string

	public constructor( context: PieceContext, options: ListenerOptions ) {
		super( context, options )
		this.emitter = options.emitter ?? container.client
		this.event = options.event

		this.emitter.on( this.event, () => this.run() ) // eslint-disable-line @typescript-eslint/no-misused-promises
	}

    public abstract run(): void | Promise<void>
}

export interface ListenerOptions extends PieceOptions {
    emitter?: EventEmitter
    event: string
}
