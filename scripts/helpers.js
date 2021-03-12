// Convert HEX to RGB
// Invert the R, G and B components
// Convert each component back to HEX
// Pad each component with zeros and output.
export const invertColor = (hex) => {
	// convert 3-digit hex to 6-digits.
	if (hex.length === 3) {
	  hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	if (hex.length !== 6) {
	  // throw new Error('Invalid HEX color.');
	  return hex;
	}
	// invert color components
	var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
	  g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
	  b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
	// pad each with zeros and return
	return padZero(r) + padZero(g) + padZero(b);
  }
  
  function padZero(str, len) {
	len = len || 2;
	var zeros = new Array(len).join('0');
	return (zeros + str).slice(-len);
  }
// function that accepts a string as an argument and returns that string in all upper case
  export const makesUpperCase = (nameString) => {
	return nameString.toUpperCase();
  }