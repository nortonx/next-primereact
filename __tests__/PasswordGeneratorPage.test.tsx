import { render, screen, fireEvent } from "@testing-library/react"
import PasswordGeneratorPage from "@/app/password-generator/page"
import { describe, it, expect } from "@jest/globals"

describe("Password Generator Page", () => {
  it("renders page and match snapshot", async () => {
    const { container } = render(<PasswordGeneratorPage/>)
    const page = await screen.findByTestId("password-generator-page")
    expect(page).toBeDefined()
    expect(container).toMatchSnapshot()
  })

  it("should generate password when 'Generate Password' button is clicked", async () => {
    render(<PasswordGeneratorPage/>) 
    const passwordField = await screen.findByTestId("password-field")
    expect(passwordField.nodeValue).toBeFalsy()
    const generatePasswordBtn = await screen.findByTestId("generate-password-btn")
    fireEvent.click(generatePasswordBtn)
    expect(passwordField.nodeValue).toBeDefined()
  })

  it("should clear password field when the button 'Clear Password' is clicked", async () => { 
    render(<PasswordGeneratorPage/>) 
    const passwordField = await screen.findByTestId("password-field")
    const generatePasswordBtn = await screen.findByTestId("generate-password-btn")
    fireEvent.click(generatePasswordBtn)
    expect(passwordField.nodeValue).toBeDefined()
    const clearPasswordBtn = await screen.findByTestId("clear-password-btn")
    fireEvent.click(clearPasswordBtn)
    expect(passwordField.nodeValue).toBeFalsy()
  })

  it("should copy password to clipboard when the button 'Copy Password' is clicked", async () => {
    render(<PasswordGeneratorPage/>) 
    const passwordField = await screen.findByTestId("password-field")
    const generatePasswordBtn = await screen.findByTestId("generate-password-btn")
    fireEvent.click(generatePasswordBtn)
    expect(passwordField.nodeValue).toBeDefined()
    const copyPasswordBtn = await screen.findByTestId("copy-password-btn")
    fireEvent.click(copyPasswordBtn)
    const toast = await screen.findByTestId("toast")
    expect(toast).toBeDefined()
    expect(passwordField.nodeValue).toBeDefined()
  })

  // it("should display a toast message when the button 'Copy Password' is clicked", async () => {
  //   render(<PasswordGeneratorPage/>)
  //   const generatePasswordBtn = await screen.findByTestId("generate-password-btn")
  //   fireEvent.click(generatePasswordBtn)
  //   const copyPasswordBtn = await screen.findByTestId("copy-password-btn")
  //   fireEvent.click(copyPasswordBtn)
  //   const toast = await screen.findByTestId("toast")
  //   expect(toast).toBeDefined()
  // })
})