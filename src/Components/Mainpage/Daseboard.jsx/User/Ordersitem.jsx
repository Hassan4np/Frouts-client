import useAuth from "../../Hooks.jsx/useAuth";
import useOrders from "../../Hooks.jsx/useOrders";


const Ordersitem = () => {
    const {user} = useAuth();
    const [orders] = useOrders(user?.email);
    console.log(orders)
    return (
        <div>
           
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="border">
                            <tr className="uppercase">
                                <th >OrderID</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#666]">
                            {
                                orders?.map(it => <tr key={it?._id} className="border mb-1">
                                    <td >
                                      {it?._id}
                                    </td>
                                    <td>
                                        {it?.email}

                                    </td>
                                    <td>
                                        ${it?.totalPrice}

                                    </td>

                                    <th>
                                       {it?.status}
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Ordersitem;