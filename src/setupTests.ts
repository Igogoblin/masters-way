import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Очищаем DOM после каждого теста
afterEach(() => {
  cleanup();
});
