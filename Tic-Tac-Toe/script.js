let tile = document.querySelectorAll('.tile');
let choose = 0;
let winners = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
]

for (let t of tile) {
    t.onclick = function () {
        if (t.textContent == '') {
            if (choose === 0) {
                t.textContent = 'x';
                t.classList.add('x');
                choose = 1;

                if (tile[winners[0][0]].classList.contains("x") && tile[winners[0][1]].classList.contains("x") && tile[winners[0][2]].classList.contains("x")) {
                    // alert("Winner is X!");
                    document.querySelector('.score_x').textContent = parseInt(document.querySelector('.score_x').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('horisontal1').style.display = 'block';
                } else if (tile[winners[1][0]].classList.contains("x") && tile[winners[1][1]].classList.contains("x") && tile[winners[1][2]].classList.contains("x")) {
                    // alert("Winner is X!");
                    document.querySelector('.score_x').textContent = parseInt(document.querySelector('.score_x').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('horisontal2').style.display = 'block';
                } else if (tile[winners[2][0]].classList.contains("x") && tile[winners[2][1]].classList.contains("x") && tile[winners[2][2]].classList.contains("x")) {
                    // alert("Winner is X!");
                    document.querySelector('.score_x').textContent = parseInt(document.querySelector('.score_x').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('horisontal3').style.display = 'block';
                } else if (tile[winners[3][0]].classList.contains("x") && tile[winners[3][1]].classList.contains("x") && tile[winners[3][2]].classList.contains("x")) {
                    // alert("Winner is X!");
                    document.querySelector('.score_x').textContent = parseInt(document.querySelector('.score_x').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('vertical1').style.display = 'block';
                } else if (tile[winners[4][0]].classList.contains("x") && tile[winners[4][1]].classList.contains("x") && tile[winners[4][2]].classList.contains("x")) {
                    // alert("Winner is X!");
                    document.querySelector('.score_x').textContent = parseInt(document.querySelector('.score_x').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('vertical2').style.display = 'block';
                } else if (tile[winners[5][0]].classList.contains("x") && tile[winners[5][1]].classList.contains("x") && tile[winners[5][2]].classList.contains("x")) {
                    // alert("Winner is X!");
                    document.querySelector('.score_x').textContent = parseInt(document.querySelector('.score_x').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('vertical3').style.display = 'block';
                } else if (tile[winners[6][0]].classList.contains("x") && tile[winners[6][1]].classList.contains("x") && tile[winners[6][2]].classList.contains("x")) {
                    // alert("Winner is X!");
                    document.querySelector('.score_x').textContent = parseInt(document.querySelector('.score_x').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('diagonal1').style.display = 'block';
                } else if (tile[winners[7][0]].classList.contains("x") && tile[winners[7][1]].classList.contains("x") && tile[winners[7][2]].classList.contains("x")) {
                    // alert("Winner is X!");
                    document.querySelector('.score_x').textContent = parseInt(document.querySelector('.score_x').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('diagonal2').style.display = 'block';
                }
            } else if (choose === 1) {
                t.textContent = 'o';
                t.classList.add('o');
                choose = 0;

                if (tile[winners[0][0]].classList.contains("o") && tile[winners[0][1]].classList.contains("o") && tile[winners[0][2]].classList.contains("o")) {
                    // alert("Winner is O!");
                    document.querySelector('.score_o').textContent = parseInt(document.querySelector('.score_o').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('horisontal1').style.display = 'block';
                } else if (tile[winners[1][0]].classList.contains("o") && tile[winners[1][1]].classList.contains("o") && tile[winners[1][2]].classList.contains("o")) {
                    // alert("Winner is O!");
                    document.querySelector('.score_o').textContent = parseInt(document.querySelector('.score_o').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('horisontal2').style.display = 'block';
                } else if (tile[winners[2][0]].classList.contains("o") && tile[winners[2][1]].classList.contains("o") && tile[winners[2][2]].classList.contains("o")) {
                    // alert("Winner is O!");
                    document.querySelector('.score_o').textContent = parseInt(document.querySelector('.score_o').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('horisontal3').style.display = 'block';
                } else if (tile[winners[3][0]].classList.contains("o") && tile[winners[3][1]].classList.contains("o") && tile[winners[3][2]].classList.contains("o")) {
                    // alert("Winner is O!");
                    document.querySelector('.score_o').textContent = parseInt(document.querySelector('.score_o').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('vertical1').style.display = 'block';
                } else if (tile[winners[4][0]].classList.contains("o") && tile[winners[4][1]].classList.contains("o") && tile[winners[4][2]].classList.contains("o")) {
                    // alert("Winner is O!");
                    document.querySelector('.score_o').textContent = parseInt(document.querySelector('.score_o').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('vertical2').style.display = 'block';
                } else if (tile[winners[5][0]].classList.contains("o") && tile[winners[5][1]].classList.contains("o") && tile[winners[5][2]].classList.contains("o")) {
                    // alert("Winner is O!");
                    document.querySelector('.score_o').textContent = parseInt(document.querySelector('.score_o').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('vertical3').style.display = 'block';
                } else if (tile[winners[6][0]].classList.contains("o") && tile[winners[6][1]].classList.contains("o") && tile[winners[6][2]].classList.contains("o")) {
                    // alert("Winner is O!");
                    document.querySelector('.score_o').textContent = parseInt(document.querySelector('.score_o').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('diagonal1').style.display = 'block';
                } else if (tile[winners[7][0]].classList.contains("o") && tile[winners[7][1]].classList.contains("o") && tile[winners[7][2]].classList.contains("o")) {
                    // alert("Winner is O!");
                    document.querySelector('.score_o').textContent = parseInt(document.querySelector('.score_o').textContent) + 1;
                    choose = 2;
                    for (let i = 0; i < tile.length; i++) {
                        tile[i].classList.remove('hover');
                    }
                    document.getElementById('diagonal2').style.display = 'block';
                }
            }
        }
    }
}

let btn = document.getElementById('btn');
btn.onclick = function () {
    choose = 0;

    tile[0].textContent = '';
    tile[0].classList.remove('x');
    tile[0].classList.remove('o');

    tile[1].textContent = '';
    tile[1].classList.remove('x');
    tile[1].classList.remove('o');

    tile[2].textContent = '';
    tile[2].classList.remove('x');
    tile[2].classList.remove('o');

    tile[3].textContent = '';
    tile[3].classList.remove('x');
    tile[3].classList.remove('o');

    tile[4].textContent = '';
    tile[4].classList.remove('x');
    tile[4].classList.remove('o');

    tile[5].textContent = '';
    tile[5].classList.remove('x');
    tile[5].classList.remove('o');

    tile[6].textContent = '';
    tile[6].classList.remove('x');
    tile[6].classList.remove('o');

    tile[7].textContent = '';
    tile[7].classList.remove('x');
    tile[7].classList.remove('o');

    tile[8].textContent = '';
    tile[8].classList.remove('x');
    tile[8].classList.remove('o');

    for (let i = 0; i < tile.length; i++) {
        tile[i].classList.add('hover');
    }

    document.getElementById('horisontal1').style.display = 'none';
    document.getElementById('horisontal2').style.display = 'none';
    document.getElementById('horisontal3').style.display = 'none';

    document.getElementById('vertical1').style.display = 'none';
    document.getElementById('vertical2').style.display = 'none';
    document.getElementById('vertical3').style.display = 'none';

    document.getElementById('diagonal1').style.display = 'none';
    document.getElementById('diagonal2').style.display = 'none';
}