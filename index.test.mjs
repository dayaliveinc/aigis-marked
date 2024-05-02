import { expect } from "chai";
import AigisRenderer from "./index.js";
import { marked } from "marked";

describe("AigisRenderer", () => {
  it("should be able to render markdown", () => {
    const renderer = new AigisRenderer({});
    const markdown = "Hello, World!";
    const html = marked(markdown, { renderer });
    expect(html).to.equal("<p>Hello, World!</p>\n");
  });
});
