module.exports = function toReadable (number) {
    const obj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
      } 
      if (number < 20) {
      return obj[number]
      }
      if( number < 100) {
        if (number % 10 === 0) {
          return obj[number]
        } else {
            return obj[Math.floor(number / 10) * 10] + ' ' + obj[number % 10];
        }
        }
        if (number < 1000) {
          if (number % 100 === 0) {
            return `${obj[number / 100]} hundred`
          } else {
            const a = Math.floor(number / 100)
            const b = number % 100;
            if(b % 10 === 0) {
              return `${obj[a]} hundred ${obj[b]}`
            } else {
                if(b < 20) {
                  return `${obj[a]} hundred ${obj[b]}`
                }
              if (b < 100) {
                if (b % 10 === 0) {
                  return `${obj[a]} hundred ${obj[b]}`
                } else {
                  return `${obj[a]} hundred ${obj[Math.floor(b / 10)*10]} ${obj[b % 10]}`
                }
              }
            }
          }
        }
}
