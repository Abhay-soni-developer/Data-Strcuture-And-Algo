/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    const board = createBoard(moves);
    return checkWin(board, moves)
};


function checkWin(board, moves) {
    const lines = [
        // rows
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],

        // columns
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],

        // diagonals
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ];

    for(let line of lines) {
        if(line[0]!==null && (line[0]===line[1] && line[1]===line[2])) return line[0]
    }


    return moves.length===9 ? "Draw" : "Pending"
}

function createBoard(moves) {
    let board = [...new Array(3)].map(() => new Array(3).fill(null))
    let flag = true;

    for (let move of moves) {
        if (flag) board[move[0]][move[1]] = "A";
        else board[move[0]][move[1]] = "B";
        flag = !flag;
    }

    console.log(board)

    return board;
}