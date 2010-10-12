$(document).ready(function() {

	var myCrossword;

	var data = 
	{
		'rows': [	'MOAN|ASPCA|COPY',
					'ORNO|LULLS|UCLA',
					'CENT|TRUES|REAR',
					'HOUSEORGAN|VAIN',
					'ASLOW|EST|MENDS',
					'|||HEWN||WED|||',
					'OHIO|ADDSIN|SAD',
					'COTTAGEINDUSTRY',
					'TEE|FORGOT|TYKE',
					'|||BAN||WHOA|||',
					'STAIR|WET|AGENT',
					'TUNA|CABINFEVER',
					'ELKS|ADORE|MARE',
					'MILE|RENEW|ODDS',
					'SPED|TRYST|MESS'
				],
		
		'clues' : {
			'across': 	[	{'num':1, 'clue':'Sound of distress'},
							{'num':5, 'clue':'Pet-protection org'},
							{'num':10, 'clue':'Make a duplicate of'},
							{'num':14, 'clue':'Yes-__ question'},
							{'num':15, 'clue':'Quiet periods'},
							{'num':16, 'clue':'West Coast sch.'},
							{'num':17, 'clue':'Penny'},
							{'num':18, 'clue':'Makes level'},
							{'num':19, 'clue':'Bring up, as children'},
							{'num':20, 'clue':'Company newslette'},
							{'num':22, 'clue':'Conceited'},
							{'num':23, 'clue':'Do __ burn (seethe)'},
							{'num':24, 'clue':'Superlative ending'},
							{'num':25, 'clue':'Repairs'},
							{'num':26, 'clue':'Clue 26'},
							{'num':28, 'clue':'Clue 28'},
							{'num':29, 'clue':'Clue 29'},
							{'num':32, 'clue':'Clue 32'},
							{'num':35, 'clue':'Clue 35'},
							{'num':38, 'clue':'Clue 38'},
							{'num':41, 'clue':'Clue 41'},
							{'num':42, 'clue':'Clue 42'},
							{'num':43, 'clue':'CLue 43'},
							{'num':44, 'clue':'CLue 44'},
							{'num':45, 'clue':'CLue 45'},
							{'num':47, 'clue':'CLue 47'},
							{'num':50, 'clue':'CLue 50'},
							{'num':52, 'clue':'CLue 52'},
							{'num':56, 'clue':'CLue 56'},
							{'num':57, 'clue':'CLue 57'},
							{'num':59, 'clue':'CLue 59'},
							{'num':60, 'clue':'CLue 60'},		
							{'num':61, 'clue':'CLue 61'},
							{'num':62, 'clue':'CLue 62'},
							{'num':63, 'clue':'CLue 63'},
							{'num':64, 'clue':'CLue 64'},
							{'num':65, 'clue':'CLue 65'},
							{'num':66, 'clue':'CLue 66'},
							{'num':67, 'clue':'CLue 67'},
						],
							
						
			'down':		[	{'num':1, 'clue':'Cocoa/coffee combo'},
							{'num':2, 'clue':'Black-and-white cookies'},
							{'num':3, 'clue':'Declare void'},
							{'num':4, 'clue':'4 Mediocre'},
							{'num':5, 'clue':'Choir voice'},
							{'num':6, 'clue':'Concede defeat'},
							{'num':7, 'clue':'Sink stoppers'},
							{'num':8, 'clue':'Soccer-shoe feature'},
							{'num':9, 'clue':'Sink stoppers'},
							{'num':10, 'clue':'Clue 10'},
							{'num':11, 'clue':'Clue 11'},
							{'num':12, 'clue':'Clue 12'},
							{'num':13, 'clue':'Clue 13'},
							{'num':21, 'clue':'Clue 14'},
							{'num':25, 'clue':'Clue 25'},		
							{'num':27, 'clue':'Clue 27'},
							{'num':28, 'clue':'Clue 28'},
							{'num':29, 'clue':'Clue 29'},
							{'num':30, 'clue':'Clue 30'},
							{'num':31, 'clue':'Clue 31'},
							{'num':33, 'clue':'Clue 33'},
							{'num':34, 'clue':'Clue 34'},
							{'num':35, 'clue':'Clue 35'},
							{'num':36, 'clue':'Clue 36'},
							{'num':37, 'clue':'Clue 37'},
							{'num':39, 'clue':'Clue 39'},
							{'num':40, 'clue':'Clue 40'},
							{'num':44, 'clue':'Clue 44'},
							{'num':46, 'clue':'Clue 46'},
							{'num':47, 'clue':'Clue 47'},
							{'num':48, 'clue':'Clue 48'},
							{'num':49, 'clue':'Clue 49'},
							{'num':50, 'clue':'Clue 50'},
							{'num':51, 'clue':'Clue 52'},
							{'num':53, 'clue':'Clue 53'},
							{'num':54, 'clue':'Clue 54'},
							{'num':55, 'clue':'Clue 55'},
							{'num':57, 'clue':'Clue 57'},
							{'num':58, 'clue':'Clue 58'},
							
						],
		
		},
	}; //END: data



	function init() {
		myCrossword = new crosswordGrid(data);
		myCrossword.draw('#crossword');
		
		// bind events to toolbar
		jQuery('#revealAll').click(function() {myCrossword.revealAll()});
		// TODO pause
		// TODO save
		// TODO share
		
		// debug
		console.log(myCrossword);
		
	} // END: init


	function crosswordGrid(data, size) {
		
		this.size		= data.rows[0].length;

		this.data 		= data;
		this.blocks		= new Array();
		this.clues		= data.clues;
		this.container 	= '#crossword';
		this.blocksContainer = 'crossword-blocks'; 
		this.cluesContainer = 'crossword-clues';
		
		this.draw = function(container) {
		
			this.container = container;

			// Create the blocks container
			$('<div></div>')
				.attr('id', this.blocksContainer)
				.appendTo($(container))
				;

			// Create the clue containers
			var clues = $('<div></div>')
									.attr('id',this.cluesContainer)
									.html('Clues')
									;
			// Create across section
			var acrossClues = this.drawClueSection('across');
			// Create down section
			var downClues = this.drawClueSection('down');
			
			clues.append(acrossClues)
				.append(downClues)
				.appendTo($(container))
				;
			
			console.log("----- Clues: -----");
			console.log(clues);
			this.drawBlocks('#'+this.blocksContainer, data.clues);
		} // END: this.draw
		
		this.drawBlocks = function(container, clues) {
		
			var currentAcross = 0;
			var currentDown	= 0;
			
			var downQueue = [];
			var acrossQueue = [];
			
			var currDown = null;
			var currAcross = null;
			
			var label;
			
			// Create the grid
			for(var i=0;i<this.size;i++) {
				var row = data.rows[i];
				this.blocks[i] = new Array();
			
				for(var j=0;j<this.size;j++) {
					
					label = false;
					
					var letter 	= row[j];
					
					if(letter=='|') {
						var block = new blankBlock(i, j);
						block.create(container);
						
					} else {
						// Need validation here (to check that we have a letter)
						
						// Need lots of if statements
						// If above block doesn't exist or == |
						if (i == 0 || data.rows[i-1][j] == '|') {
							//console.log('down++' + this.clues.down[currentDown]);
							currentDown++;
							
							this.drawClue(clues.down[0], 'down');
							
							//pop array items
							currDown = clues.down.shift();							
							downQueue.push(currDown);
							
							label = true;
							
						} else {
							
							currentDown = this.blocks[i-1][j].down-1;
							currDown = downQueue.shift();
							
							// if bottom not |, then move to downQueue
							if(data.rows[i+1] != undefined && data.rows[i+1][j] != '|') {
								downQueue.push(currDown);
							}
						}
						
						// If prev block doesn't exist or == |
						if (j == 0 || data.rows[i][j-1] == '|') {
							currentAcross++;
							
							this.drawClue(clues.across[0], 'across');
							
							currAcross = clues.across.shift();
							acrossQueue.push(currAcross);
							
							label = true;
							
						} else {
							
						}
						
						var block = new letterBlock(i,j);
						block.create(container, letter, {across: currAcross, down: currDown}, label );
					}
					this.blocks[i][j] = block;
					
					// TODO find a way to keep 
					
				}
				
				// @TODO: Fix this
				jQuery(container).append(jQuery('<div style="clear:both"></div>'));
			}
		}
		
		this.drawClueSection = function(name) {
			var clueSection = $('<div></div>')
										.attr('id',this.cluesContainer + name)
										.html(name)
										;
			return clueSection;
		} // END: this.drawClueSection
		
		this.drawClue = function(clue, section) {
			
			var sectionID = '#' + this.cluesContainer + section;
			
			var newClue = new crosswordClue();
			var clueTag = newClue.create(clue, section, sectionID);
				
			//console.log(sectionID);
			//console.log(clueTag);
			
		} // END: this.drawClue
		
		this.revealLetter = function() {
		
		} // END: this.revealLetter
		
		
		// START: this.save
		this.save = function() {} // END: this.save
		
		// START: this.load
		// Fill all input blocks
		this.load = function() {} // END: this.load
		
		// START: this.solve
		// If all blocks filled, check filled against actual
		this.solve = function() {} // END this.solve
		
		this.revealAll = function() {
			if(confirm('Are you sure you want to reveal all letters? Note: This will end your game.')) {
				
				$.each(this.blocks, function(num, block) {
					jQuery.each(this, function() {
						this.reveal();
					})
				})				
			}
		} // END: this.revealAll
		
	} // END: crosswordGrid()



	/** START: Main Object Classes **/
	function crosswordClue( ) {
		this.direction 		= '';
		this.number 		= 0;
		this.blocks			= [];
		this.clueText		= '';
		this.clue_id		= '';
		this.container_id	= '';
		
		this.create = function(clue, direction, container) {
			
			if(clue) {
				this.number = clue.num;
				this.direction = direction;
				this.clueText = clue.clue;
				this.clue_id = 'crossword-clue-' + this.number + '-' + this.direction;
				this.container_id = container;
				this.draw(clue, container);
				return this;
				//return clueTag;
			}
		} // END: this.create
		
		this.draw = function() {
			var clueTag = jQuery('<span></span>')
							.text(this.number +'. '+ this.clueText )
							.attr('id', this.clue_id)
							.addClass('crossword-clue')
							.bind('click', {clue: this}, this.select)
							.appendTo($(this.container_id))
							;
			
		}
		
		// START: this.select
		this.select = function( e ) {
			console.log(e.data.clue);
			console.log($('#' + e.data.clue.clue_id));
			// unhighlight old clue and blocks
			$('.crossword-clue').removeClass('active-clue');
			$('.block').removeClass('active-block');
			// highlight clue
			$('#' + e.data.clue.clue_id).addClass('active-clue');
			// highlight blocks
			var blocks = $('.clue-'+ e.data.clue.direction + '-' + e.data.clue.number );
			blocks.addClass('active-block');
			// @TODO: if(inFocus) inFocus.focus()
			if(e.data.inFocus) {
				
			} else {
				// else focus on first block
				//@TODO: Focus on the first empty input
				$(blocks[0]).find('input').focus()
			}
		
		} // END: this.select
		
	} // END: crosswordClue()


	function crosswordBlock (x, y) {
		this.x = x;
		this.y = y;
	
		this.create = function () {
		} // END: this.create
		
		this.createBlockID = function(x, y) {
			return 'block-'+ x +'-'+ y;
		}
		
		this.reveal = function() {
		} // END: this.reveal
	
	} // END: crosswordBlock()
	
	function blankBlock(x, y) {	
		
		this.x = x;
		this.y = y;
		
		this.create = function (container) {
			this.block_id = this.createBlockID(this.x, this.y);
			
			var block = jQuery('<div></div>')
									.attr('id', this.block_id)
									.addClass('block')
									.addClass('block-blank')
									.html('&nbsp;');
									;
			
			// @TODO add blank hidden input
			
			jQuery(container).append(block);
		} // END: this.create
		
	} // END: blankBlock()
	blankBlock.prototype = new crosswordBlock();

	
	function letterBlock(x, y) {
	
		this.x = x;
		this.y = y;
		this.letter = '';
		this.across = 0;
		this.down 	= 0;
		// If locked, letter cannot be edited. Locked is toggled on reveal.
		this.locked = false;
		this.block = null;
		this.block_id = '';
		this.input = null;
		
		this.create = function (container, letter, clues, label) {
			
			this.letter = letter;
			//this.across = (clues.across) ? clues.across.num : 0;
			this.across = (clues.across) ? clues.across : null;
			//this.down	= (clues.down) ? clues.down.num : 0;
			this.down	= (clues.down) ? clues.down : null;
			this.block_id = this.createBlockID(this.x, this.y);
			
			if(this.across.num < this.down.num) {			
				var clueNum = this.down.num;
			} else {
				var clueNum = this.across.num;
			}
			
			var block = jQuery('<div></div>')
											.addClass('block')
											.addClass('clue-across-' + this.across.num)
											.addClass('clue-down-' + this.down.num)
											.attr('id', this.block_id)
											.append(this.createInputBox())
											;
			if(label) block.append(this.createClueNumber(clueNum));
			
			jQuery(container).append(block);
			
			this.block = block;
			
		}
		
		/*** NEED TO MAKE THIS A PRIVATE FUCNTION ***/
		this.createInputBox = function ()  {
			
			var input = jQuery('<input/>')
							
							.attr({
								'type'		: 'text',
								'maxlength'	: 1,
								'size'		: 1,
								})
							// TODO on focus, highlight clues | if clue not already selected, select it
							// TODO on blur, unhighlight clues
							.bind('keydown', {block: this}, this.keyEvents)
							.bind('focus', {block: this}, this.selectClues)
							;
							
			var inputContainer = jQuery('<span></span>')
											.addClass('block-input')
											.append(input);

			this.input = input;
			
			return inputContainer;
		} // END: this.createInputBox
		
		this.createClueNumber = function ( num )  {
			// TODO make label unselectable
			var clue = jQuery('<span></span>')
							.addClass('clue-number')
							.text(num)
							;
			
			return clue;
		} // END: this.createClueNumber
		
		this.selectClues = function( e ) {
			//console.log('select clues');
			//across.data.clue = e.data.block.across;
			
			//e.data.block.across.select(across)
		}
		
		
		this.keyEvents = function(e) {
//			alert('keypress');
			

			switch (e.keyCode) {				
				case 40:
//		            alert('down');
					$('#block-'+ (e.data.block.x + 1) + '-' + (e.data.block.y)).find('input').focus();
					
					// @TODO: if go down and hit blank block switch to next letterblock
					// Select across clue and blocks if have one
					// Select down clue and clocks if have one
					
					
		            break;
		        case 38:
//		            alert('up');
					$('#block-'+ (e.data.block.x - 1) + '-' + (e.data.block.y)).find('input').focus();
		            break;
		        case 37:
//		            alert('left');
					$('#block-'+ (e.data.block.x) + '-' + (e.data.block.y - 1)).find('input').focus();
		            break;
		        case 39:
//		            alert('right');
					$('#block-'+ (e.data.block.x) + '-' + (e.data.block.y + 1)).find('input').focus();
		            break;
		        default:
					// TODO: block non-letters 
					
					// TODO: check if all other blocks filled
					// if yes, cross out clue

					break;
			}
		} // END: this.keyEvents
		
		this.reveal = function() {
			this.input.attr('value', this.letter);
			this.input.attr('disabled','disabled');
			this.locked = true;			
		} // END: this.reveal
	} // END: letterBlock();
	letterBlock.prototype = new crosswordBlock();


	// Main function call to start the crossword
	init();

});
