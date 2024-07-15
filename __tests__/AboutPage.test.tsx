import { render, screen } from "@testing-library/react"
import AboutPage from "@/app/about/page"
import { describe, it, expect } from "@jest/globals"
describe("About Page", () => {
  it("should render and match snapshot", async () => {
    const { container } = render(<AboutPage/>)
    const page = await screen.findByTestId("about-page")
    expect(page).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})