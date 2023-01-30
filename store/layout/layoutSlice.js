import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  status: "unloaded",
  entities: {},
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  // const response = await client.get("/fakeApi/todos");
  // some long running op
  await sleep(1000)
  return [];
});

async function sleep(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    todoAdded(state, action) {
      const todo = action.payload;
      state.entities[todo.id] = todo;
    },
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    todosLoading(state, action) {
      state.status = "loading";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        console.log("HYDRATE", state, action.payload);
        return {
          ...state,
          ...action.payload.subject,
        };
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const newEntities = {};
        action.payload.forEach((todo) => {
          newEntities[todo.id] = todo;
        });
        state.entities = newEntities;
        state.status = "idle";
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "rejection";
      })
      .addDefaultCase((state) => state);
  },
});

export const { todoAdded, todoToggled, todosLoading } = layoutSlice.actions;

export default layoutSlice;
