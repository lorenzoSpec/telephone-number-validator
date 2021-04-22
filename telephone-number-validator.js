function telephoneCheck(str) {
  if (/^[\d]{3}-[\d]{3}-[\d]{4}/.test(str)){
    return true;
  } else if (/^1\s[\d]{3}-[\d]{3}-[\d]{4}$/.test(str)){
    return true;
  } else if (/^1\s\W[\d]{3}\W\s[\d]{3}-[\d]{4}$/.test(str)){
    return true;
  } else if (/^[\d]{10}$/.test(str)){
    return true;
  } else if (/^1[(][\d]{3}[)][\d]{3}-[\d]{4}$/.test(str)){
    return true;
  } else if (/^1\s[\d]{3}\s[\d]{3}\s[\d]{4}$/.test(str)){
    return true;
  } else if (/^[(][\d]{3}[)][\d]{3}-[\d]{4}$/.test(str)){
    return true;
  }
  return false;
}

console.log(telephoneCheck("1(555)555-5555"));
