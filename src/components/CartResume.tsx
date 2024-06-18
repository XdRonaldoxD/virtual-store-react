interface Props {
    title:string;
    calcularTotal: number;
  }
export default function CartResume({title,calcularTotal}:Props) {

    return (
        <main>
            <div className="bg-gray-200 rounded-md p-8 m-2 flex flex-col">
                <div className="flex flex-col justify-between flex-grow">
                    <h2 className="flex justify-between">
                        <span>Resumen</span>
                        <span>del</span>
                        <span>pedido</span>
                    </h2>
                    <div className="flex justify-between">
                        <h3>Total</h3>
                        <strong>${calcularTotal.toLocaleString()}</strong>
                    </div>
                    <small className="pb-4">{title}</small>
                </div>
                <button className="w-full bg-red-500 text-white font-bold border-none h-10 rounded-lg hover:bg-red-600" id="buy" type="button">
                    COMPRAR
                </button>
            </div>
        </main>
   )
}