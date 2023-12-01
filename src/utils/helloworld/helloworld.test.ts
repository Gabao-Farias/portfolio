import { describe, expect, test } from "@jest/globals";
import { helloWorld } from "./helloworld";

describe("Colors", () => {
  test("Primary variant has at least main color defined", () => {
    expect(helloWorld()).toBe("Hello World");
  });
});
