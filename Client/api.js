export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI4NmM4MDdkMy04ZTQ2LTQ1ZTMtODMyYi03ZWRiYmRlNmI0MWUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMTE5Mzc4MywiZXhwIjoxNzExMjgwMTgzfQ.sVjegvwVyyxMW43eWLxUcHQ9gks6q64-dn2Fux92O_A"

export const createNewRoom = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
  });

  const { roomId } = await res.json();
  return roomId;
};