const commands = {
    R: (row, index) => {
            if (maze[row].length > index && maze[row][index+1] === 0) return {row, index: index+1}
            return null
        },
    L: (row, index) => {
            if (index >= 0 && maze[row][index-1] === 0) return {row, index: index-1}
            return null
        },
    D: (row, index) => {
            if(row > maze.length) return null
            if(!maze[row+1]) return null
            if(maze[row][index] !== 0) return null

            return {
                row: row+1,
                index
            }
        },
    U: (row, index) => {
            if(row < 0) return null
            if(!maze[row-1]) return null
            if(maze[row][index] !== 0) return null

            return {
                row: row-1,
                index
            }
        }
}

const maze = [
    [1, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1],
]

const input = "DDRRDDLLLD"

const _input = input.split("")

let cordinates = {
    row: 0,
    index: maze[0].indexOf(0)
}

for(let i=0; i < _input.length; i++) {
   cordinates = commands[_input[i]](cordinates.row, cordinates.index);
    if(!cordinates) {
        console.log("You got stuck in the maze");
        break
    }
    if(i === _input.length-1) {
        if (cordinates.index === 0 || maze[cordinates.row].length-1 === cordinates.index) {
            console.log("You got out of the maze")
        } else if (maze.length-1 === cordinates.row) {
            console.log("You got out of the maze")
        } else {
            console.log("You got stuck in the maze");
        }
    }
}
