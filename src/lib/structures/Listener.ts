import { container, Piece, type PieceContext, type PieceOptions } from '@sapphire/pieces'
import { type EventEmitter } from 'events'
import { Events } from '../types/index.js'

export abstract class Listener extends Piece {
	public static readonly Events = Events

	public readonly emitter: EventEmitter
	public readonly event: Events

	public constructor( context: PieceContext, options: ListenerOptions ) {
		super( context, options )
		this.emitter = options.emitter ?? container.client
		this.event = options.event

		this.emitter[ options.once ? 'once' : 'on' ]( this.event, () => this.run() ) // eslint-disable-line @typescript-eslint/no-misused-promises
	}

    public abstract run(): void | Promise<void>
}

export interface ListenerOptions extends PieceOptions {
    emitter?: EventEmitter
    event: Events
    once?: boolean
}
