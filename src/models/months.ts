import { types, IMSTArray } from "mobx-state-tree"

const Month = types
  .model({
    date: types.string,
    profit: types.optional(types.string, ""),
    loss: types.optional(types.string, "")
  })

const RootStore = types
  .model({
  authorized: types.boolean,
  months: types.array(Month),
  })
  .actions(self => ({
    setMonths(newMonths: IMSTArray<typeof Month>) {
      self.months = newMonths
    },
    authorize() {
      self.authorized = true;
    }
  }))
  .views((self) => ({
    get Months() {
        return self.months
    }
}))

  export default RootStore;


