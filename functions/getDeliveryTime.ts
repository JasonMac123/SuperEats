import moment from "moment";

export const getDeliveryTime = (deliveryTime: Array<number>) => {
  const minTime = moment().add(deliveryTime[0], "minutes").format("LT");
  const maxTime = moment().add(deliveryTime[1], "minutes").format("LT");

  return [minTime, maxTime];
};
