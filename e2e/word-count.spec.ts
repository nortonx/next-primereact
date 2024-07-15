import { test, expect } from "@playwright/test"

test("Word Count Page", async ({ page }) => {
  await page.goto("http:localhost:3080/word-count")

  await expect(page).toHaveTitle(/Create Next App/);
})

test("Input Words", async ({ page }) => {
  await page.goto("http:localhost:3080/word-count")
  await page.getByTestId("word-count-textarea").focus()
  await page.keyboard.type("Hello World")

  await expect(page.getByTestId("words-value")).toHaveText("2")
  await expect(page.getByTestId("characters-value")).toHaveText("11")
})
