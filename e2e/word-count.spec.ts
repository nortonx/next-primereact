import { test, expect } from "@playwright/test"

test("Word count", async ({ page }) => {
  await page.goto("http:localhost:3080/word-count")

  await expect(page).toHaveTitle(/Create Next App/);
})

test("Input words", async ({ page }) => {
  await page.goto("http:localhost:3080/word-count")
  await page.getByTestId("word-count-textarea").fill("Hello World")

  await expect(page.getByTestId("words")).toHaveText("2")
})
