import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchLocation = createAsyncThunk(
  "user/fetchLocation",
  async function () {
    // 1) Get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Use a reverse geocoding API to get a description of the user's address, so it can be displayed in the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);

    const address = `${addressObj?.country}, ${addressObj?.city}, ${addressObj?.staddress} ${addressObj?.stnumber}`;

    return { position, address };
  },
);

const initialState = {
  username: "",
  state: "idle",
  position: "",
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
