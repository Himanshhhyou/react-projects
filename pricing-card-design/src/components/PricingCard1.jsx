const PricingCard1 = (props) => {
  return (
    <div className={`flex justify-center items-center w-[200px] flex-col rounded-[20px] hover:shadow-lg bg-white shadow-sm transition-shadow duration-300`}>
      <div className={` p-5 w-full rounded-[18px] ${props.headerClass}`}>
        <div className="flex items-center gap-4 mb-3 relative">

          <h3 className=' font-medium'>{props.title}</h3>

          {/* Conditional label */}
          {props.label && (
            <span className=" text-[10px] border-2 absolute border-white -right-2 px-4 py-1 rounded-full">
              {props.label}
            </span>
          )}
        </div>
        <div className='flex items-center gap-2'>
          <h1 className='text-2xl font-bold'>${props.price}</h1>

          <span className="text-xs font-normal">/month</span>
        </div>

      </div>

      <div className="feature">
        <ul className='m-5 flex flex-col gap-3 text-gray-500 text-[10px]'>
          {props.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </div>

      <button type="button" className={`mb-5  px-12 py-3 tracking-wide font-medium text-xs rounded-[20px] ${props.btnClass}`}>
        {props.btnText}
      </button>
    </div>
  )
}

export default PricingCard1;
