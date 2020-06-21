import {chooseAnimal} from './Cat'

test('chooseAnimal', () => {
    expect(chooseAnimal('cat')).toBe('dog')
    expect(chooseAnimal('dog')).toBe('cat')
})