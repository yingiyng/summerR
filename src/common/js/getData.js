
import fetch from '../js/fetch'

// 获取订单详情
export const getOrderDetail = (user_id, orderid) => fetch('/bos/v1/users/' + user_id + '/orders/' + orderid + '/snapshot');