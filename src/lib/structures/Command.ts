import { Piece, type PieceContext, type PieceOptions } from '@sapphire/pieces'
import { Lexer } from 'lexure'

export abstract class Command extends Piece {
	public readonly lexer: Lexer
	public constructor( context: PieceContext, options: PieceOptions ) {
		super( context, options )

		this.lexer = new Lexer()
		this.lexer.setQuotes( [
			[
				'"', '"'
			],
			[
				'\'', '\''
			]
		] )
	}
}

export type CommandOptions = PieceOptions
