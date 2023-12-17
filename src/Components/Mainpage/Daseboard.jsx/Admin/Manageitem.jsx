import Swal from "sweetalert2";
import useAllProducts from "../../Hooks.jsx/useAllProducts";
import useAxousSecret from "../../Hooks.jsx/useAxousSecret";
import { Link } from "react-router-dom";

const Manageitem = () => {
    const [alldata,refetch] = useAllProducts();
    const axoussecrt = useAxousSecret()
    console.log(alldata)
    const handledelete = (id) => {
        console.log(id)
        axoussecrt.delete(`/cards/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `Your item successfully deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
 <div className="">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="border">
                                <tr className="uppercase">
                                    <th >Priduct</th>
                                    <th>Price</th>
                                    <th>Update</th>

                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alldata?.map(it => <tr key={it?._id} className="border mb-1">
                                        <td className="">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={it?.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{it?.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            ${it.price}

                                        </td>

                                      <Link to={`/daseboard/update/${it?._id}`}>  <th>
                                            <button  className="btn text-green-500 btn-sm">update</button>
                                        </th></Link>
                                        <th>
                                            <button onClick={() => handledelete(it?._id)} className="btn text-red-500 btn-sm">x</button>
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

export default Manageitem;