import { Box, TextField } from "@mui/material";
import { useListStore } from "../stores/listStore";

function Input() {
  const { setSearch, search } = useListStore();

  return (
    <div className="search">
      <h1 style={{ textAlign: "center" }}>Search Item</h1>

      <Box component="form" noValidate autoComplete="off">
        <TextField
        size="small"
          value={search}
          className="searchInput"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          autoFocus
        />
      </Box>
    </div>
  );
}

export default Input;
