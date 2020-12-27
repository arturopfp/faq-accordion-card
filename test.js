const getLetter = string => {
    let a = ['a', 'e', 'i', 'o', 'u'];
    let b = ['b', 'c', 'd', 'f', 'g'];
    let c = ['h', 'j', 'k', 'l', 'm'];
    let d = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    const s = string.toLowerCase();
    const letter = s[0];

    switch (letter) {
        case (a.includes(letter)):
            return 'A';
        case (b.includes(letter)):
            return 'B';
        case (c.includes(letter)):
            return 'C';
        case (d.includes(letter)):
            return 'D';        
    }
}

console.log(getLetter('PHJU'));