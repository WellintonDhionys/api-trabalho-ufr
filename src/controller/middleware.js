let i = 0;
module.exports = (req, res, next) => {
  i++;
  console.log("requisição: " + i);
  next();
};
