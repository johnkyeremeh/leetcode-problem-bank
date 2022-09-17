

// Rover: Position and Location => (x, y, z) where z is in [N, E, S, W] 
// Plateau:  Grid of positions => (x, y, z), where (0, 0, N) means (x=0, y=0, z=N)
//               MaxCoordinates => max(x), max(y) => [5 5] 
// Message: "String" where (L, R, M) => [L = SpinLeft, R = SpinRight, M = MoveForward]
    // Input: 5 Lines
                    // 5 5
                    // 1 2 N
                    // LMLMLMLMM
                    // 3 3 E
                    // MMRMMRMRRM
    // 1. Plateau Size: [5 5]
    // 2. Array of RoverInstructions Objects, where RoverInstruction object contains:
        // a) RoverPosition (first line)
        // b) RoverCommand =>  (second line)

// Expected behavior 
// 1. Rover should spin left. 
// 2. Rover should spin right.
// 3. Rover should move forward.




class MarsRover{
    //iniatialization
    constructor(size = "5 5", position, instructions){
        this.size = size; //integer 
        this.position = position //[1 2 N] 2 Integer and Letter with spaces -> string
        this.instructions = instructions; //Series of instructions
        this.xCor = parseInt(position.split(" ")[0]); //What are X and Y coordinates using position
        this.yCor = parseInt(position.split(" ")[1]);
        this.direction = position.split(" ")[2];
    }

/*
    N
  W      E
    S */

    SpinLeft() {
        switch(this.direction){
            case "N":
                this.direction = "W"
                break;
            case "E":
                this.direction = "N"
                break;
            case "S":
                this.direction = "E"
                break;
            case "W":
                this.direction = "S"
                break;
            default:
                break;
        }
    }

    SpinRight() {
        switch(this.direction){
            case "N":
                this.direction = "E"
                break;
            case "E":
                this.direction = "S"
                break;
            case "S":
                this.direction = "W"
                break;
            case "W":
                this.direction = "N"
                break;
            default:
                break;
        }
    }

    StepForward() {
        switch(this.direction){
            case "N":
                this.yCor += 1
                break;
            case "E":
                this.xCor += 1
                break;
            case "S":
                this.yCor -= 1
                break;
            case "W":
                this.xCor -= 1
                break;
            default:
                break;
        }
    }

    Move(){

        //great an array out of command 

        let instructions= this.instructions.split("")
        console.log("instructionsArray: ", instructions)
        //loop through array. For each letter call appropraite function

        for (let i = 0; i < instructions.length; i++){
        
            switch(instructions[i]){
                case "L":
                    this.SpinLeft() ;
                    break;
                case "M":
                    this.StepForward() 
                    break;
                case "R":
                    this.SpinRight()
            
                    break;
                 default:
                     break;
            }
        }

        this.position = `${this.xCor} ${this.yCor} ${this.direction}`

    }
       
 


 
}

module.exports = MarsRover;


const firstRover = new MarsRover("5 5","1 2 N","LMLMLMLMM")
console.log("First Rover input", firstRover)
console.log(firstRover.Move())
console.log(" First Roveroutput", firstRover)


const secondRover = new MarsRover("5 5", "3 3 E", "MMRMMRMRRM")
console.log("Second Rover input", secondRover)
console.log(secondRover.Move())
console.log(" Second Roveroutput", secondRover)
