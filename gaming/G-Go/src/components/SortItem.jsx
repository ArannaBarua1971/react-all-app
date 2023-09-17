export default function SortItem() {
  return (
    <div className="w-[20%]">
      <div className="SortItem bg-black text-white p-9 w-[17%]  m-3 rounded-xl fixed">
        <ul className="Catagories">
          <h3 className="font-bold text-3xl my-4">Catagories</h3>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">Brain</span>
          </li>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">Adventure</span>
          </li>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">Action</span>
          </li>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">Racing</span>
          </li>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">Brain</span>
          </li>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">Adventure</span>
          </li>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">Action</span>
          </li>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">Racing</span>
          </li>
        </ul>

        <ul className="Platforms">
          <h3 className="font-bold text-3xl my-4">Platforms</h3>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">PC</span>
          </li>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">PlayStation 5</span>
          </li>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">Xbox</span>
          </li>
          <li className="m-2 font-semibold">
            <input type="checkbox" />
            <span className="ms-2 ">Nintendo Switch</span>
          </li>
        </ul>

        <ul className="Price">
          <h3 className="font-bold text-3xl my-4">Price</h3>
          <input type="range" className="w-full" />
        </ul>
      </div>
    </div>
  );
}
