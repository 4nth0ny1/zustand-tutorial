import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "DONE" }],
});

export const useStore = create(store);
