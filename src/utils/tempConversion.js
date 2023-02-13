export const fahrenheitToCelsius = (value) => {
    let kelvinVal = value-273.15;
    if(!Number.isInteger(kelvinVal)) {
      kelvinVal = parseFloat(kelvinVal.toFixed(1));
    }
      return kelvinVal;
};