//@ts-check
import { toggleAlbum } from './index'

test('toggleAlbum', () => {
    expect(toggleAlbum([56, 78], 868685685)).toStrictEqual([56, 78, 868685685]);
    expect(toggleAlbum([56, 78, 868685685], 868685685)).toStrictEqual([56, 78]);
})