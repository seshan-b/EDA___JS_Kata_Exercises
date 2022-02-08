const ringsArr = [
    [
        [6],
        [5, 'b'],
        [7],
        [5, 'w'],
        [7],
        [5, 'r']
    ],
    [
        [1],
        [2, 'b'],
        [5],
        [2, 'b'],
        [3],
        [2, 'w'],
        [5],
        [2, 'w'],
        [3],
        [2, 'r'],
        [5],
        [2, 'r']
    ],
    [
        [1, 'b'],
        [9],
        [1, 'b'],
        [1],
        [1, 'w'],
        [9],
        [1, 'w'],
        [1],
        [1, 'r'],
        [9],
        [1, 'r']
    ],
    [
        [1, 'b'],
        [8],
        [1, 'y'],
        [1, 'b'],
        [3, 'y'],
        [7],
        [1, 'g'],
        [1, 'w'],
        [3, 'g'],
        [8],
        [1, 'r']
    ],
    [
        [1, 'b'],
        [6],
        [2, 'y'],
        [1],
        [1, 'b'],
        [1],
        [1, 'w'],
        [1],
        [2, 'y'],
        [3],
        [2, 'g'],
        [1],
        [1, 'w'],
        [1],
        [1, 'r'],
        [1],
        [2, 'g'],
        [6],
        [1, 'r']
    ],
    [
        [1],
        [2, 'b'],
        [3],
        [1, 'y'],
        [1],
        [2, 'b'],
        [3],
        [2, 'w'],
        [1],
        [1, 'y'],
        [1],
        [1, 'g'],
        [1],
        [2, 'w'],
        [3],
        [2, 'r'],
        [1],
        [1, 'g'],
        [3],
        [2, 'r']
    ],
    [
        [3],
        [3, 'b'],
        [1, 'y'],
        [1, 'b'],
        [7],
        [3, 'w'],
        [1, 'g'],
        [1, 'w'],
        [7],
        [5, 'r']
    ],
    [
        [6],
        [1, 'y'],
        [9],
        [1, 'y'],
        [1],
        [1, 'g'],
        [9],
        [1, 'g']
    ],
    [
        [7],
        [2, 'y'],
        [5],
        [2, 'y'],
        [3],
        [2, 'g'],
        [5],
        [2, 'g']
    ],
    [
        [9],
        [5, 'y'],
        [7],
        [5, 'g']
    ]
]

const ringsString = ringsArr.map(line => stringify(line)).join('\n   ') + '\x1b[0m'

function stringify(arr) {
    //[[ l, c ], [l]]
    let str = "" //"\x1b[5m"
    for (i in arr) {
        if (arr[i][1]) {
            switch (arr[i][1]) {
                case 'b':
                    str += '\x1b[34m';
                    break;
                case 'y':
                    str += '\x1b[33m';
                    break;
                case 'g':
                    str += '\x1b[32m';
                    break;
                case 'r':
                    str += '\x1b[31m';
                    break;
                default:
                    str += '\x1b[37m';
                    break;
            }
        }
        // else
        let char = arr[i][1] ? '#' : ' '
        str += char.repeat(arr[i][0])
    }
    return str
}