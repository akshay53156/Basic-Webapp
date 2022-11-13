export async function user_registration({ payload }: any) {
  let resp: any = null;
  try {
    const res = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    resp = await res.json();
    if(resp.status === 200) {
      return resp;
    }else{
      throw resp;
    }
  } catch (error) {
    console.log(error, "API Failed");
  }
}
