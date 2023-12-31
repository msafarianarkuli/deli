function IconCart({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 28" fill="currentColor">
      <g clipPath="url(#cart)">
        <path
          fillRule="evenodd"
          d="M19.8 7.687c-.282-2.81-2.567-5.001-5.344-5.001a5.267 5.267 0 0 0-3.81 1.627 5.678 5.678 0 0 0-1.551 3.374c-1.947 0-3.581 1.485-4.04 4.063l-.831 6.7c-.708 4.906 1.5 7.062 5.82 7.062h8.844c3.996 0 6.384-2.43 5.893-6.793l-.857-6.924c-.55-2.61-2.143-4.108-4.047-4.108H19.8Zm-1.602 0c-.272-1.895-1.844-3.35-3.745-3.35a3.71 3.71 0 0 0-2.685 1.147 3.992 3.992 0 0 0-1.071 2.203h7.5ZM9.094 9.339h10.783c1.117 0 2.098.923 2.483 2.74l.812 6.582c.483 3.502-1.126 5.199-4.284 5.199h-8.844c-3.42 0-4.8-1.348-4.247-5.182l.827-6.672C6.94 10.24 7.93 9.34 9.094 9.34Zm8.504 3.067c.44 0 .795.37.795.826a.816.816 0 0 1-.687.818l-.108.008h-.048c-.439 0-.795-.37-.795-.826 0-.418.3-.764.687-.819l.108-.007h.048Zm-5.382.826c0-.457-.356-.826-.795-.826h-.048l-.108.007a.816.816 0 0 0-.687.819c0 .456.356.826.795.826h.048l.108-.008a.816.816 0 0 0 .687-.818Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="cart">
          <path fill="#fff" d="M.67.403H28.06v27.392H.67z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconCart;
