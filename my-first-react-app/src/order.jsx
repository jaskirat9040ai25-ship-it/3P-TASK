function OrderStatus({status}){
    let message;
    if(status=== "pending") message = <p>we have recieved your order</p>;
    else if(status === "shipped")message = <p>on its way</p>;
    else if (status === "delivered")message = <p>delivered . enjoy</p>;
    else message = <p> unknown status</p>;
    return <div className="status">{message}</div>;
}
export default OrderStatus;