test('type error', () => {
  try {
    const aNumber: string = 5
    expect(aNumber).not.toEqual(5)
  } catch (e) {
    throw new Error(`TS2322: Type 'number' is not assignable to type 'string'.`)
  }
})
