import contact from "../utils/contact-book.png";
import bar from "../utils/bar-chart.png";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="flex border-r-2">
      <div className="flex pt-16 flex-col h-screen p-3 bg-white shadow w-52 max-mobile:w-full max-mobile:p-2 max-mobile:pt-16">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl mt-4 font-bold max-mobile:hidden">Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md focus:bg-sky-900 focus:text-white"
                >
                  <img src={contact} alt="" className="max-mobile:w-12" />
                  <span className="max-mobile:hidden" >Contacts</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 space-x-3 rounded-md focus:bg-sky-900 focus:text-white"
                >
                  <img src={bar} alt="" className="max-mobile:w-12" />
                  <span className="max-mobile:hidden" >Charts And Maps</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
