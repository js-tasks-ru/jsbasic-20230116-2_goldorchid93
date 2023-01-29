function truncate(str, maxlength) {
  const trunc = str.slice(0, maxlength - 1)
  const result = str.length > maxlength ? trunc + '…' : trunc
  return result
}