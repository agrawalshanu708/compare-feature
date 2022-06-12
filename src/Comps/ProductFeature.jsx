import React from 'react'

const ProductFeature = ({featuresList,id,showFeature}) => {
    const getValue = (values) => {
        const filterval = values[id];
        return filterval;
      };
  return (
    <div>
         {featuresList.map(({ features, title }) => (
          <div>
            {showFeature && <p className="bold sub-title">{title}</p>}
            {features.map(({ featureName, properties, values }) => (
              <div className="grid-col2">
               { showFeature &&  <p>{featureName}</p>}
                <p>{getValue(values)}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  )
}

export {ProductFeature}