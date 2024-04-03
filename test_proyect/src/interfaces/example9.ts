interface ReadonlyStringArray {
    readonly [index: number]: string;
  }

  const j7 : ReadonlyStringArray = ['Juan','Pedro']

  console.log(j7[1])