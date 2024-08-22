import { renderHook, act } from "@testing-library/react";
import usePasswordGenerator from "@/app/hooks/usePasswordGenerator";

describe("usePasswordGenerator", () => {
  it("should generate a password with the specified length", () => {
    const { result } = renderHook(() => usePasswordGenerator());

    act(() => {
      result.current.setRangeInputValue(10);
      result.current.generatePassword();
    });

    expect(result.current.password.length).toBe(10);
  });

  it("should include uppercase letters in the generated password when enabled", () => {
    const { result } = renderHook(() => usePasswordGenerator());

    act(() => {
      result.current.setEnableUppercaseLetters(true);
      result.current.generatePassword();
    });

    expect(result.current.checkUppercase(result.current.password)).toBe(true);
  });

  it("should include numbers in the generated password when enabled", () => {
    const { result } = renderHook(() => usePasswordGenerator());

    act(() => {
      result.current.setEnableNumbers(true);
      result.current.generatePassword();
    });

    expect(result.current.checkNumbers(result.current.password)).toBe(true);
  });

  it("should include special characters in the generated password when enabled", () => {
    const { result } = renderHook(() => usePasswordGenerator());

    act(() => {
      result.current.setEnableSpecialCharacters(true);
      result.current.generatePassword();
    });

    expect(result.current.checkSpecialCharacters(result.current.password)).toBe(true);
  });

  it("should validate the generated password correctly", () => {
    const { result } = renderHook(() => usePasswordGenerator());

    act(() => {
      result.current.setEnableUppercaseLetters(true);
      result.current.setEnableNumbers(true);
      result.current.setEnableSpecialCharacters(true);
      result.current.generatePassword();
    });

    expect(result.current.validPassword).toBe(true);
  });

  it("should return false if the password is not valid", () => {
    const { result } = renderHook(() => usePasswordGenerator());
    
    act(() => {
      result.current.setEnableUppercaseLetters(false);
      result.current.setEnableNumbers(false);
      result.current.setEnableSpecialCharacters(false);
      result.current.generatePassword();
    });

    expect(result.current.validPassword).toBe(false);
  })
});