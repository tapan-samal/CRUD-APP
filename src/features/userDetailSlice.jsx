import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create Action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://6596cf026bb4ec36ca036150.mockapi.io/commerce-coder",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Read Action
export const displayUser = createAsyncThunk(
  "displayUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://6596cf026bb4ec36ca036150.mockapi.io/commerce-coder"
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Update Action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://6596cf026bb4ec36ca036150.mockapi.io/commerce-coder/${data.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

//Delete Action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://6596cf026bb4ec36ca036150.mockapi.io/commerce-coder/${id}`,
        { method: "DELETE" }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: "",
  },

  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(displayUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(displayUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(displayUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.users = state.users.filter((user) => user.id !== id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetail.reducer;
export const { searchUser } = userDetail.actions;
