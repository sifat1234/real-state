// eslint-disable-next-line react/prop-types
export default function Svg({width, height, className, viewBox, fill, xmlns, paths=[]}) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
        xmlns={xmlns}
        className={className}

      >
       
       {paths.map((pathData, index) => (
        <path
          key={index}
          d={pathData.d} 
          fill={pathData.fill} 
        />

      ))}
      </svg>
    </>
  );
}





export function YearofexpericenceSvg({
  width,
  height,
  className,
  viewBox,
  fill,
  xmlns,
  elements = [],
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
      className={className}
    >
      {/* Render definitions (gradients) */}
      {elements.map((el, index) => {
        if (el.type === "defs") {
          return (
            <defs key={index}>
              {el.gradients.map((gradient, gIndex) => (
                <linearGradient
                  key={gIndex}
                  id={gradient.id}
                  x1={gradient.x1}
                  y1={gradient.y1}
                  x2={gradient.x2}
                  y2={gradient.y2}
                  gradientUnits="userSpaceOnUse"
                >
                  {gradient.stops.map((stop, sIndex) => (
                    <stop
                      key={sIndex}
                      offset={stop.offset}
                      stopColor={stop.color}
                      stopOpacity={stop.opacity}
                    />
                  ))}
                </linearGradient>
              ))}
            </defs>
          );
        }
        return null; 
      })}

      {elements.map((el, elIndex) => {
        if (el.type === "rect") {
          return (
            <rect
              key={elIndex}
              x={el.x}
              y={el.y}
              width={el.width}
              height={el.height}
              opacity={el.opacity}
              transform={el.transform}
              fill={el.fill}
            />
          );
        }
        return null; 
      })}
    </svg>
  );
}


export function CtaSectionSVG ({ width, height,xmlns, viewBox, fill, className, elements=[] }){
  return (
    <svg width={width}
    viewBox={viewBox}
          fill={fill}
     height={height} 
     className={className}
      xmlns={xmlns}>
      {elements.map((el, index) => {
        if (el.type === "circle") {
          return (
            <circle
              key={index}
              cx={el.cx}
              cy={el.cy}
              r={el.r}
              stroke={el.stroke}
              strokeOpacity={el.strokeOpacity}
              strokeWidth={el.strokeWidth}
            />
          );
        } else if (el.type === "path") {
          return (
            <path
              key={index}
              d={el.d}
              stroke={el.stroke}
              strokeOpacity={el.strokeOpacity}
              strokeWidth={el.strokeWidth}
            />
          );
        }
        return null; 
      })}
    </svg>
  );
}



export  function TeamMemberSectionSVG({ width, height, className, viewBox, fill, xmlns, paths = [] }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
      className={className}
    >
      {paths.map((pathData, index) => (
        <path
          key={index}
          d={pathData.d}
          fill={pathData.fill}
          fillRule={pathData.fillRule}  
          clipRule={pathData.clipRule}  
        />
      ))}
    </svg>
  );
}

