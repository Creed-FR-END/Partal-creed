import { useState } from "react";
import { data } from "../constants/data";

const ModalPage = ({ open, setOpen }) => {
    const [id, setId] = useState(1);
    const handlyClose = () => {
        setOpen(false);
    };

    return (
        <div
            className='absolute w-full h-screen bg-[#0009] top-0 left-0'
            onClick={handlyClose}>
            <div
                className='bg-white rounded-xl w-[920px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                onClick={(e) => e.stopPropagation()}>
                <div className='flex  justify-end w-full '>
                    <button
                        className='m-[24px] text-end inline-block font-bold text-[20px]  px-2 '
                        onClick={() => setOpen(false)}>
                        x
                    </button>
                </div>
                <div className='flex'>
                    <div className='w-72 h-96 ml-16 mr-7 mb-7 rounded-md hover:scale-[1.2] duration-300'>
                        <img
                            src={data.type[id].img}
                            alt=''
                            className='w-full h-full object-contain  rounded-md'
                        />
                    </div>

                    <div>
                        <div className='mt-2 font-medium'>
                            {data.type[id].title}
                        </div>
                        <hr className='my-5' />
                        <p className='font-medium'>
                            Rang : {data.type[id].color}
                        </p>
                        <div>
                            {data.type.map((item) => (
                                <button
                                    className='my-4 border-2 m-[5px] w-[50px] h-[60px] border-[#888] rounded-md hover:scale-[1.1] duration-150'
                                    onClick={() => setId(item.id - 1)}>
                                    <img
                                        src={item.img}
                                        alt=''
                                        className='w-full h-full object-cover p-1 '
                                    />
                                </button>
                            ))}
                            <h1 className='font-medium'>
                                Skidka % {data.type[id].discount}
                            </h1>
                            <div className='flex gap-2 my-2'>
                                <p className='font-medium '>Narxi : </p>
                                <del className='text-[#ff0000] text-[13px]'>
                                    {data.type[id].price}
                                </del>
                                <h1 className='font-medium'>
                                    {(data.type[id].price *
                                        data.type[id].discount) /
                                        100}
                                </h1>
                                <h1 className='font-medium'>: SUM</h1>
                            </div>
                            <h1 className='font-medium'>
                                Sotuvda {data.type[id].count} ta bor
                            </h1>
                            <div className='px-3'>
                                <button
                                    onClick={() =>
                                        console.log(alert("Savatga qo'shildi"))
                                    }
                                    className='w-full font-bold py-3 text-[#216318] bg-white mt-5 rounded-md border-4 border-[#216318] hover:bg-[#216318] hover:text-white'>
                                    Savadga Qo'shish 🛒
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ModalPage;
