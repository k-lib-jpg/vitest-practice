// isLeapYear.test.js
import { expect, test } from "vitest";
import isLeapYear from "./isLeapYear";

test("西暦年号が4で割り切れる年はうるう年", () => {
  expect(isLeapYear(2024)).toBe(true);
  expect(isLeapYear(2028)).toBe(true);
  expect(isLeapYear(2032)).toBe(true);
});
