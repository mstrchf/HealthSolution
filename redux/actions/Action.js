//ACTION TYPES
export const NEW_POST = "NEW_POST";

//ACTION CREATION
export const fetch = (newpost) => ({
  type: NEW_POST,
  payload: newpost,
});
