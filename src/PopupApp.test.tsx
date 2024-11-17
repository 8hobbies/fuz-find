/** @license GPL-3.0-or-later
 *
 * Copyright (C) 2024 8 Hobbies, LLC
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { findButtonLabel, findInputLabel } from "./ui_constants";
import { render, screen } from "@testing-library/react";
import App from "./PopupApp";
import { userEvent } from "@testing-library/user-event";

function getFindInputElement(): HTMLInputElement {
  return screen.getByRole("textbox", { name: findInputLabel });
}

function getFindButtonElement(): HTMLButtonElement {
  return screen.getByRole("button", { name: findButtonLabel });
}

describe("Find page", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    resetBrowserStorage();
  });

  test("Initial screen", () => {
    const { unmount } = render(<App />);

    expect(getFindInputElement()).toBeEnabled();
    expect(getFindInputElement()).toHaveValue("");
    expect(getFindButtonElement()).toBeDisabled();

    // Explicitly unmount here, otherwise will be warned:
    //   Warning: An update to App inside a test was not wrapped in act(...).
    // See https://github.com/testing-library/react-testing-library/issues/999.
    unmount();
  });

  test("Non-empty text enables the find button", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Sanity checks
    expect(getFindButtonElement()).toBeDisabled();
    expect(getFindInputElement()).toHaveValue("");

    await user.type(getFindInputElement(), " "); // Single character
    expect(getFindButtonElement()).toBeEnabled();
  });
});
