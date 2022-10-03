import request from "./request";

function addWorker(data: any) {
  return request({
    url: "/workers",
    method: "POST",
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}
  
export { addWorker };