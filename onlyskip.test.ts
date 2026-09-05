import { expect, test } from 'vitest';

test.only('focus on this test', () => {
  // only this test runs in the file
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(9)).toBe(3)
})

test.skip('not ready yet', () => {
  // this test is skipped
  expect(Math.sqrt(16)).toBe(4)
  expect(Math.sqrt(25)).toBe(5)
})

test.todo('implement validation later')