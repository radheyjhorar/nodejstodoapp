

const getAbout = (req, res) => {
  try {
    res.render('pages/about');
  } catch (error) {
    console.log("Get About Error: ", error);
  }
}

module.exports = {
  getAbout
};