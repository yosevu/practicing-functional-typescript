type Colors = string[]

class ResistorColorDuo {
  private colors: Colors

  COLORS = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]

  constructor(colors: Colors) {
    this.colors = this.validate(colors)
  }

  validate = (colors: Colors): Colors => {
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present')
    }

    return colors
  }

  colorCode = (color: string): number => this.COLORS.indexOf(color)

  decodedValue = (): number => {
    const [ tens, ones ] = this.colors
    return 10 * this.colorCode(tens) + this.colorCode(ones)
  }
}

export function decodedValue(colors: Colors) {
  const resistorColorDuo = new ResistorColorDuo(colors)
  return resistorColorDuo.decodedValue()
}
