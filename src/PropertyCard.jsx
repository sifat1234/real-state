
import LogoPic from './LogoPic';
import Svg from './Svg';
import { pathsdata } from './PathsData';
let data=pathsdata;


export default function PropertyCard({villa}) {
    return(
        <>
          <div className="p-4 bg-white rounded-lg border border-gray-600/10">

         < LogoPic  src="https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="property"/>
            
              <div className="p-6">
                <h4 className="text-2xl font-bold cursor-pointer">{villa.type}</h4>
                <div className="mt-2">
                  <span className="text-xl font-extrabold text-blue-600">{villa.price}</span> /M
                </div>
              </div>
              <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                <div className="flex items-center">

                <Svg  
                   
                   viewBox="0 0 24 24"
                  className="w-6 h-6 mr-3 text-gray-600 fill-current"
                     paths={data[11]} />

            
                  <p><span className="font-bold text-gray-900"></span> {villa.features.bedrooms}</p>
                </div>
                <div className="flex items-center">
                <Svg  
                   
                   viewBox="0 0 24 24"
                  className="w-6 h-6 mr-3 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                     paths={data[12]} />

                  <p><span className="font-bold text-gray-900"></span> {villa.features.bathrooms}</p>
                </div>
              </div>
            </div>
        </>
    )
  
}