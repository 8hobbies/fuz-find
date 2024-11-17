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

import { Box, Button, Stack, TextField } from "@mui/material";
import { findButtonLabel, findInputLabel } from "./ui_constants";
import React from "react";

export default function App(): React.JSX.Element {
  const [findText, setFindText] = React.useState<string>("");

  // TODO: Remove v8 ignore once form submission is implemented
  /* v8 ignore start */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }
  /* v8 ignore end */

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            label={findInputLabel}
            name={findInputLabel}
            value={findText}
            onChange={(e) => {
              setFindText(e.target.value);
            }}
          />
          <Button
            type="submit"
            disabled={findText.length === 0}
            variant="contained"
          >
            {findButtonLabel}
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
