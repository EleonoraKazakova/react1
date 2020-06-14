import { reducer, compare } from "./List.js";

test("list compare", () => {
  expect(
    compare({ done: false, text: "cold" }, { done: true, text: "advice" })
  ).toBe(1);

  expect(
    compare({ done: true, text: "cold" }, { done: false, text: "advice" })
  ).toBe(-1);

  expect(
    compare({ done: true, text: "cold" }, { done: true, text: "advice" })
  ).toBe(0);
});

test("list reducer", () => {
  expect(
    reducer(
      [
        { done: false, text: "Blue" },
        { done: true, text: "Orange" },
      ],
      { type: "done", text: "book" }
    )
  ).toStrictEqual([
    { done: true, text: "Orange" },
    { done: false, text: "Blue" },
  ]);

  expect(
    reducer(
      [
        { done: false, text: "book" },
        { done: false, text: "Orange" },
      ],
      { type: "done", text: "book" }
    )
  ).toStrictEqual([
    { done: true, text: "book" },
    { done: false, text: "Orange" },
  ]);

  expect(
    reducer([{ done: true, text: "Orange" }], { type: "add", text: "book" })
  ).toStrictEqual([
    { done: true, text: "Orange" },
    { done: false, text: "book" },
  ]);
});

/*function reducer(oldState, action) {
    switch (action.type) {
        case 'add':
            return [{ done: false, text: action.text }, ...oldState].sort(compare)
        default:
        case 'done':
            return oldState.map(
                item => item.text === action.text
                    ? { ...item, done: !item.done }
                    : item
            ).sort(compare)

    }

}*/
