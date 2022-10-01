const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
move(character).to(100, 250)

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
  57  
move.js
@@ -5,8 +5,61 @@ function move(element) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    function moveWithArrowKeys(left, bottom, handleDirectionChange){
        let direction = null;
        let x = 100;
        let y = 250;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveCharacter(){
            if(direction === 'west'){
                x = x - 1
            }
            if(direction === 'north'){
                y = y + 1
            }
            if(direction ==='east'){
                 x = x + 1
                }
            if(direction === 'south'){
                    y = y - 1
                }
                element.style.left = x + 'px'
                element.style.bottom = y + 'px'

        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function(e){
            if(e.repeat) return;

            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            handleDirectionChange(direction)
        })
        document.addEventListener('keyup', function(e){
            direction = null
            handleDirectionChange(direction)
        })

    }

    return {
        to: moveToCoordinates
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys}
    }
}
