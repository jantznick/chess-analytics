const openings = [
	{
		name: 'Ruy Lopez',
		moves: 'e4 e5 Nf3 Nf6 Bb5',
		continuations: [
			{
				name: 'Closed Defense',
				moves: 'a6 Ba4 Nf6 0-0 Be7'
			},
			{
				name: 'Exchange Variation',
				moves: 'a6 Bxc6'
			}
		],
		variations: [
			{
				name: 'Cozio Defence'
			}
		]
	},
	{
		name: 'Italian Game',
		moves: 'e4 e5 Nf3 Nc6 Bc4',
		continuations: [
			{
				name: 'Giuoco Piano',
				moves: 'Bc5'
			},
			{
				name: 'Two Knights Defense',
				moves: 'Nf6'
			}
		],
		variations: []
	}
]

export default openings