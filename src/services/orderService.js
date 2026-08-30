import { apiRequest } from "./api";

export function createOrder(order) {
  return apiRequest("/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
}
