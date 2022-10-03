import request from "./request";

function queryFarms() {
  return request({
    url: "/farms",
    method: "GET"
  });
}

function addFarm(data: any) {
  return request({
    url: "/farms",
    method: "POST",
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}
  
export { queryFarms, addFarm };