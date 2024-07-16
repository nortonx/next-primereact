import { test, expect } from "@playwright/test"

test("Password Generator Page", async ({ page }) => {
  await page.goto("http:localhost:3080/password-generator")

  await expect(page).toHaveTitle(/Create Next App/);
})

test("Generate Password", async ({ page }) => {
  await page.goto("http:localhost:3080/password-generator")
  
  await page.getByTestId("password-field").focus()
  await expect(page.getByTestId("password-field")).toHaveValue("")

  await page.getByTestId("uppercase-letters-checkbox-label").click()
  await page.getByTestId("numbers-checkbox-label").click()
  await page.getByTestId("special-characters-checkbox-label").click()
  await page.getByTestId("generate-password-btn").click()

  expect(page.getByTestId("password-field")).toBeTruthy()
})